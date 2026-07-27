
import { firebaseConfig } from './firebase-config.js?v=12';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js';
import {
  getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js';
import {
  getFirestore, doc, getDoc, setDoc, updateDoc, deleteDoc,
  onSnapshot, serverTimestamp, arrayUnion, persistentLocalCache,
  persistentMultipleTabManager, initializeFirestore
} from 'https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js';

const CONFIGURED = firebaseConfig.apiKey && !firebaseConfig.apiKey.includes('PASTE_');
const LOCAL_FAMILY_KEY = 'tokyoFamilyCloudId';
const LOCAL_CODE_KEY = 'tokyoFamilyShareCode';

let auth = null;
let db = null;
let user = null;
let familyId = localStorage.getItem(LOCAL_FAMILY_KEY) || '';
let shareCode = localStorage.getItem(LOCAL_CODE_KEY) || '';
let unsubscribeFamily = null;
let saveTimer = null;
let applyingRemote = false;
let started = false;

function safeState() {
  return window.exportAppState ? window.exportAppState() : null;
}

function randomCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  crypto.getRandomValues(new Uint32Array(6)).forEach(n => code += chars[n % chars.length]);
  return code;
}

function familyButtonHtml() {
  if (!CONFIGURED) return `<button id="familyCloudBtn" class="family-cloud-button setup">⚙️ 啟用家庭共享</button>`;
  if (!user) return `<button id="familyCloudBtn" class="family-cloud-button">👨‍👩‍👧 家庭登入</button>`;
  if (!familyId) return `<button id="familyCloudBtn" class="family-cloud-button">👨‍👩‍👧 建立／加入家庭</button>`;
  return `<button id="familyCloudBtn" class="family-cloud-button connected">☁️ 家庭已同步</button>`;
}

function injectUI() {
  document.getElementById('familyCloudBtn')?.remove();
  document.body.insertAdjacentHTML('beforeend', familyButtonHtml());
  document.getElementById('familyCloudBtn')?.addEventListener('click', openPanel);
}

function modal(content) {
  closePanel();
  document.body.insertAdjacentHTML('beforeend', `
    <div id="familyCloudOverlay" class="family-overlay">
      <div class="family-modal" role="dialog" aria-modal="true">
        <button id="familyClose" class="family-close" aria-label="關閉">✕</button>
        ${content}
      </div>
    </div>`);
  document.getElementById('familyClose').onclick = closePanel;
  document.getElementById('familyCloudOverlay').addEventListener('click', e => {
    if (e.target.id === 'familyCloudOverlay') closePanel();
  });
}

function closePanel() {
  document.getElementById('familyCloudOverlay')?.remove();
}

function openPanel() {
  if (!CONFIGURED) {
    modal(`
      <h2>家庭共享尚未啟用</h2>
      <p>請先完成 Firebase 設定，再把 <code>firebase-config.js</code> 上傳到 GitHub。</p>
      <p class="family-hint">壓縮檔內附有「FIREBASE設定說明.md」及 Firestore 安全規則。</p>
    `);
    return;
  }
  if (!user) {
    modal(`
      <h2>家庭旅程分享</h2>
      <p>使用 Google 帳號登入後，可建立家庭分享碼或加入家人的旅程。</p>
      <button id="googleLogin" class="family-primary">使用 Google 帳號登入</button>
    `);
    document.getElementById('googleLogin').onclick = login;
    return;
  }
  if (!familyId) {
    modal(`
      <h2>家庭旅程分享</h2>
      <div class="family-user">已登入：${escapeHtml(user.displayName || user.email)}</div>
      <button id="createFamily" class="family-primary">建立新的家庭空間</button>
      <div class="family-divider">或</div>
      <label>輸入家人提供的 6 位分享碼</label>
      <input id="joinCode" class="family-input" maxlength="6" placeholder="例如：TK8P2M">
      <button id="joinFamily" class="family-secondary">加入家庭空間</button>
      <button id="logoutFamily" class="family-text">登出 Google 帳號</button>
    `);
    document.getElementById('createFamily').onclick = createFamily;
    document.getElementById('joinFamily').onclick = joinFamily;
    document.getElementById('logoutFamily').onclick = logout;
    return;
  }

  modal(`
    <h2>家庭旅程已同步</h2>
    <div class="family-status">☁️ 所有成員共用同一份景點與旅程資料</div>
    <label>家庭分享碼</label>
    <div class="family-code-row">
      <strong>${escapeHtml(shareCode)}</strong>
      <button id="copyFamilyCode">複製</button>
    </div>
    <p class="family-hint">請家人在自己的手機開啟網站、登入 Google 帳號後輸入這組分享碼。</p>
    <button id="leaveFamily" class="family-secondary">離開這個家庭空間</button>
    <button id="logoutFamily" class="family-text">登出 Google 帳號</button>
  `);
  document.getElementById('copyFamilyCode').onclick = async () => {
    await navigator.clipboard.writeText(shareCode);
    document.getElementById('copyFamilyCode').textContent = '已複製';
  };
  document.getElementById('leaveFamily').onclick = leaveFamily;
  document.getElementById('logoutFamily').onclick = logout;
}

async function login() {
  try {
    await signInWithPopup(auth, new GoogleAuthProvider());
    closePanel();
  } catch (err) {
    alert(`登入失敗：${friendlyError(err)}`);
  }
}

async function logout() {
  await signOut(auth);
  closePanel();
}

async function createFamily() {
  const code = randomCode();
  const familyRef = doc(db, 'families', crypto.randomUUID());
  const codeRef = doc(db, 'familyCodes', code);
  const currentState = safeState();

  try {
    await setDoc(familyRef, {
      ownerId: user.uid,
      memberIds: [user.uid],
      shareCode: code,
      appState: currentState,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      updatedBy: user.uid
    });
    await setDoc(codeRef, {
      familyId: familyRef.id,
      ownerId: user.uid,
      active: true,
      createdAt: serverTimestamp()
    });
    setCurrentFamily(familyRef.id, code);
    listenFamily();
    closePanel();
    injectUI();
  } catch (err) {
    alert(`建立失敗：${friendlyError(err)}`);
  }
}

async function joinFamily() {
  const code = (document.getElementById('joinCode').value || '').trim().toUpperCase();
  if (code.length !== 6) return alert('請輸入 6 位分享碼');

  try {
    const codeSnap = await getDoc(doc(db, 'familyCodes', code));
    if (!codeSnap.exists() || codeSnap.data().active !== true) {
      return alert('找不到這組分享碼，請確認後再試一次');
    }
    const id = codeSnap.data().familyId;
    await updateDoc(doc(db, 'families', id), {
      memberIds: arrayUnion(user.uid),
      updatedAt: serverTimestamp(),
      updatedBy: user.uid
    });
    setCurrentFamily(id, code);
    listenFamily();
    closePanel();
    injectUI();
  } catch (err) {
    alert(`加入失敗：${friendlyError(err)}`);
  }
}

function setCurrentFamily(id, code) {
  familyId = id;
  shareCode = code;
  localStorage.setItem(LOCAL_FAMILY_KEY, id);
  localStorage.setItem(LOCAL_CODE_KEY, code);
}

function leaveFamily() {
  if (!confirm('確定要離開家庭共享嗎？本機資料仍會保留。')) return;
  unsubscribeFamily?.();
  unsubscribeFamily = null;
  familyId = '';
  shareCode = '';
  localStorage.removeItem(LOCAL_FAMILY_KEY);
  localStorage.removeItem(LOCAL_CODE_KEY);
  closePanel();
  injectUI();
}

function listenFamily() {
  unsubscribeFamily?.();
  if (!db || !user || !familyId) return;

  unsubscribeFamily = onSnapshot(doc(db, 'families', familyId), snap => {
    if (!snap.exists()) {
      leaveFamily();
      return;
    }
    const data = snap.data();
    shareCode = data.shareCode || shareCode;
    localStorage.setItem(LOCAL_CODE_KEY, shareCode);

    if (data.appState && data.updatedBy !== user.uid) {
      applyingRemote = true;
      window.applyCloudState?.(data.appState);
      setTimeout(() => applyingRemote = false, 200);
    }
    injectUI();
  }, err => console.error('家庭同步監聽失敗', err));
}

async function saveToCloud(state) {
  if (!db || !user || !familyId || applyingRemote) return;
  try {
    await updateDoc(doc(db, 'families', familyId), {
      appState: state,
      updatedAt: serverTimestamp(),
      updatedBy: user.uid
    });
  } catch (err) {
    console.error('家庭同步儲存失敗', err);
  }
}

function queueSave(state) {
  if (!started || applyingRemote || !user || !familyId) return;
  clearTimeout(saveTimer);
  const snapshot = JSON.parse(JSON.stringify(state));
  saveTimer = setTimeout(() => saveToCloud(snapshot), 700);
}

function escapeHtml(value='') {
  return String(value).replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[c]));
}

function friendlyError(err) {
  const code = err?.code || '';
  if (code.includes('popup-closed')) return '登入視窗已關閉';
  if (code.includes('unauthorized-domain')) return '請先把 GitHub Pages 網域加入 Firebase Authorized domains';
  if (code.includes('permission-denied')) return 'Firestore 權限規則尚未正確設定';
  return err?.message || '發生未知錯誤';
}

async function init() {
  injectUI();
  if (!CONFIGURED) return;

  try {
    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    try {
      db = initializeFirestore(app, {
        localCache: persistentLocalCache({tabManager: persistentMultipleTabManager()})
      });
    } catch {
      db = getFirestore(app);
    }

    onAuthStateChanged(auth, current => {
      user = current;
      started = true;
      injectUI();
      if (user && familyId) listenFamily();
      else unsubscribeFamily?.();
    });
  } catch (err) {
    console.error('Firebase 初始化失敗', err);
  }
}

window.familyCloud = { queueSave, openPanel };
init();
