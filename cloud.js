
import { firebaseConfig } from './firebase-config.js?v=20.7';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js';
import {
  getAuth,
  GoogleAuthProvider,
  signInAnonymously,
  signInWithPopup,
  linkWithPopup,
  onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js';
import {
  getFirestore, doc, getDoc, setDoc, updateDoc, deleteDoc,
  onSnapshot, serverTimestamp, arrayUnion, runTransaction, persistentLocalCache,
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
let lastRemoteSignature = '';
let pendingState = null;
let retryTimer = null;
let syncState = 'idle';
let lastSyncedAt = null;
const isAnonymousUser = () => !!(user && user.isAnonymous);


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
  if (!user) return `<button id="familyCloudBtn" class="family-cloud-button">⏳ 準備家庭共享</button>`;
  if (!familyId) return `<button id="familyCloudBtn" class="family-cloud-button">👨‍👩‍👧 分享碼共用</button>`;

  const labels={
    saving:'☁️ 同步中…',
    saved:'☁️ 已同步',
    offline:'⚠️ 等待連線',
    error:'⚠️ 同步失敗',
    idle:'☁️ 家庭已同步'
  };
  return `<button id="familyCloudBtn" class="family-cloud-button connected">${labels[syncState]||labels.idle}</button>`;
}

function setSyncState(next) {
  syncState = next;
  injectUI();
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
      <p>請先完成 Firebase 設定，再重新上傳網站檔案。</p>
    `);
    return;
  }

  if (!user) {
    modal(`
      <h2>正在準備家庭共享</h2>
      <p>系統正在建立匿名使用權限，請稍候幾秒後再試一次。</p>
    `);
    return;
  }

  if (!familyId) {
    modal(`
      <h2>家庭旅程分享</h2>
      <div class="family-user">
        ${isAnonymousUser() ? '目前使用匿名模式，不需要帳號' : `已使用 Google 帳號：${escapeHtml(user.displayName || user.email || '')}`}
      </div>

      <button id="createFamily" class="family-primary">建立新的家庭分享碼</button>

      <div class="family-divider">或</div>

      <label>輸入家人提供的 6 位分享碼</label>
      <input id="joinCode" class="family-input" maxlength="6" placeholder="例如：TK8P2M">
      <button id="joinFamily" class="family-secondary">使用分享碼加入</button>

      ${isAnonymousUser() ? `
        <div class="family-divider">選擇性功能</div>
        <button id="googleLink" class="family-google">使用 Google 帳號保留身分</button>
        <p class="family-hint">LINE 內可直接使用匿名模式；Google 登入較適合在 Safari、Chrome 或電腦瀏覽器操作。</p>
      ` : `
        <p class="family-hint">此裝置已綁定 Google 帳號。</p>
      `}
    `);

    document.getElementById('createFamily').onclick = createFamily;
    document.getElementById('joinFamily').onclick = joinFamily;
    if (document.getElementById('googleLink')) {
      document.getElementById('googleLink').onclick = connectGoogle;
    }
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

    <p class="family-hint">這組分享碼會固定沿用，更新版本後不需要重新建立。請家人在 LINE 點開同一網址後輸入此碼。</p>

    ${isAnonymousUser() ? `
      <button id="googleLink" class="family-google">綁定 Google 帳號（選用）</button>
      <p class="family-hint">綁定後，即使清除瀏覽器資料，日後仍可用同一 Google 帳號登入。</p>
    ` : `
      <div class="family-user">已綁定：${escapeHtml(user.displayName || user.email || 'Google 帳號')}</div>
    `}

    <div class="family-user">
      最後同步：${lastSyncedAt ? lastSyncedAt.toLocaleTimeString('zh-TW') : '等待第一次同步'}
    </div>
    <button id="forceFamilySync" class="family-primary">立即同步</button>
    <button id="leaveFamily" class="family-secondary">離開這個家庭空間</button>
  `);

  document.getElementById('copyFamilyCode').onclick = async () => {
    await navigator.clipboard.writeText(shareCode);
    document.getElementById('copyFamilyCode').textContent = '已複製';
  };
  if (document.getElementById('googleLink')) {
    document.getElementById('googleLink').onclick = connectGoogle;
  }
  document.getElementById('forceFamilySync').onclick = () => {
    pendingState = safeState();
    flushPendingSave();
    closePanel();
  };
  document.getElementById('leaveFamily').onclick = leaveFamily;
}



async function restoreExistingFamily() {
  if (!db || !user) return false;

  // 已有家庭 ID 時，先直接連線。
  if (familyId) {
    try {
      const familySnap = await getDoc(doc(db, 'families', familyId));
      if (familySnap.exists()) {
        const data = familySnap.data();

        // 身分變更後，自動把目前使用者重新加入原家庭。
        if (!Array.isArray(data.memberIds) || !data.memberIds.includes(user.uid)) {
          await updateDoc(doc(db, 'families', familyId), {
            memberIds: arrayUnion(user.uid),
            updatedAt: serverTimestamp()
          });
        }

        shareCode = data.shareCode || shareCode;
        if (shareCode) localStorage.setItem(LOCAL_CODE_KEY, shareCode);

        if (data.appState && typeof data.appState === 'object') {
          applyingRemote = true;
          window.replaceWithCloudState?.(data.appState);
          lastRemoteSignature = JSON.stringify(data.appState);
          setTimeout(() => applyingRemote = false, 80);
        }

        listenFamily();
        return true;
      }
    } catch (err) {
      console.warn('依家庭 ID 恢復失敗，改用分享碼重試', err);
    }
  }

  // 家庭 ID 遺失或失效時，使用原分享碼重新找到同一個家庭。
  if (shareCode) {
    try {
      const codeSnap = await getDoc(doc(db, 'familyCodes', shareCode));
      if (!codeSnap.exists() || codeSnap.data().active !== true) return false;

      const id = codeSnap.data().familyId;
      const familyRef = doc(db, 'families', id);
      const familySnap = await getDoc(familyRef);
      if (!familySnap.exists()) return false;

      await updateDoc(familyRef, {
        memberIds: arrayUnion(user.uid),
        updatedAt: serverTimestamp()
      });

      const data = familySnap.data();
      setCurrentFamily(id, shareCode);

      if (data.appState && typeof data.appState === 'object') {
        applyingRemote = true;
        window.replaceWithCloudState?.(data.appState);
        lastRemoteSignature = JSON.stringify(data.appState);
        setTimeout(() => applyingRemote = false, 80);
      }

      listenFamily();
      return true;
    } catch (err) {
      console.warn('依原分享碼恢復家庭失敗', err);
    }
  }

  return false;
}

async function connectGoogle() {
  try {
    const provider = new GoogleAuthProvider();

    if (user && user.isAnonymous) {
      await linkWithPopup(user, provider);
    } else {
      await signInWithPopup(auth, provider);
    }

    user = auth.currentUser;
    closePanel();
    injectUI();
    setTimeout(openPanel, 150);
  } catch (err) {
    if (err?.code === 'auth/credential-already-in-use') {
      alert('這個 Google 帳號已綁定其他 Firebase 使用者。請先在外部瀏覽器以該帳號登入。');
      return;
    }
    if (err?.code === 'auth/popup-blocked' || err?.code === 'auth/web-storage-unsupported') {
      alert('LINE 內建瀏覽器無法完成 Google 登入。匿名分享功能仍可正常使用；需要綁定時，請改用 Safari 或 Chrome。');
      return;
    }
    alert(`Google 登入失敗：${friendlyError(err)}`);
  }
}

async function createFamily() {
  if (familyId && shareCode) {
    alert(`目前已連結家庭分享碼：${shareCode}，不需要重新建立。`);
    return;
  }
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
    const familySnap = await getDoc(doc(db, 'families', id));
    if (!familySnap.exists()) return alert('家庭空間不存在');
    const familyData = familySnap.data();

    setCurrentFamily(id, code);

    if (familyData.appState && typeof familyData.appState === 'object') {
      applyingRemote = true;
      window.replaceWithCloudState?.(familyData.appState);
      lastRemoteSignature = JSON.stringify(familyData.appState);
      setTimeout(() => applyingRemote = false, 80);
    }

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
  if (!db || !user || !familyId) return;

  unsubscribeFamily?.();
  unsubscribeFamily = onSnapshot(
    doc(db, 'families', familyId),
    { includeMetadataChanges: true },
    snap => {
      if (!snap.exists()) {
        leaveFamily();
        return;
      }

      const data = snap.data();
      shareCode = data.shareCode || shareCode;
      localStorage.setItem(LOCAL_CODE_KEY, shareCode);

      // 本機尚未送到伺服器的寫入不回套，避免循環。
      if (!snap.metadata.hasPendingWrites &&
          data.appState &&
          typeof data.appState === 'object') {
        const signature = JSON.stringify(data.appState);
        if (signature !== lastRemoteSignature) {
          applyingRemote = true;
          lastRemoteSignature = signature;
          window.replaceWithCloudState?.(data.appState);
          lastSyncedAt = new Date();
          setSyncState('saved');
          setTimeout(() => applyingRemote = false, 80);
        }
      }

      injectUI();
    },
    err => console.error('家庭同步監聽失敗', err)
  );
}




async function updateRegionList(destination, regions) {
  if (!db || !user || !familyId) {
    pendingState = safeState();
    setSyncState(navigator.onLine ? 'saving' : 'offline');
    return;
  }

  setSyncState('saving');

  try {
    const familyRef = doc(db, 'families', familyId);
    await runTransaction(db, async transaction => {
      const snap = await transaction.get(familyRef);
      if (!snap.exists()) throw new Error('家庭空間不存在');

      const data = snap.data();
      const appState = data.appState && typeof data.appState === 'object'
        ? JSON.parse(JSON.stringify(data.appState))
        : {};

      appState.regionsByDestination =
        appState.regionsByDestination &&
        typeof appState.regionsByDestination === 'object' &&
        !Array.isArray(appState.regionsByDestination)
          ? appState.regionsByDestination
          : {};

      appState.regionsByDestination[destination] =
        [...new Set((regions||[]).map(x=>String(x).trim()).filter(Boolean))];

      transaction.update(familyRef,{
        appState,
        updatedAt:serverTimestamp(),
        updatedBy:user.uid,
        clientUpdatedAt:Date.now()
      });
    });

    lastSyncedAt=new Date();
    setSyncState('saved');
  } catch(err) {
    console.error('區域清單同步失敗',err);
    pendingState=safeState();
    setSyncState(navigator.onLine?'error':'offline');
  }
}

async function updateSpotRegion(spotId, region) {
  if (!db || !user || !familyId) {
    pendingState = safeState();
    setSyncState(navigator.onLine ? 'saving' : 'offline');
    return;
  }

  setSyncState('saving');

  try {
    const familyRef = doc(db, 'families', familyId);

    await runTransaction(db, async transaction => {
      const snap = await transaction.get(familyRef);
      if (!snap.exists()) throw new Error('家庭空間不存在');

      const data = snap.data();
      const appState = data.appState && typeof data.appState === 'object'
        ? JSON.parse(JSON.stringify(data.appState))
        : {};

      appState.spots = Array.isArray(appState.spots) ? appState.spots : [];
      const index = appState.spots.findIndex(s => s && s.id === spotId);

      if (index >= 0) {
        appState.spots[index] = {
          ...appState.spots[index],
          area: region,
          regionUpdatedAt: Date.now(),
          regionUpdatedBy: user.uid
        };
      }

      transaction.update(familyRef, {
        appState,
        updatedAt: serverTimestamp(),
        updatedBy: user.uid,
        clientUpdatedAt: Date.now()
      });
    });

    lastSyncedAt = new Date();
    setSyncState('saved');
  } catch (err) {
    console.error('景點區域同步失敗', err);
    pendingState = safeState();
    setSyncState(navigator.onLine ? 'error' : 'offline');
  }
}

async function updateWishlist(key, spotId, shouldAdd) {
  if (!db || !user || !familyId) {
    // 尚未連線時，保留整份資料待補送。
    pendingState = safeState();
    setSyncState(navigator.onLine ? 'saving' : 'offline');
    return;
  }

  setSyncState('saving');

  try {
    const familyRef = doc(db, 'families', familyId);

    await runTransaction(db, async transaction => {
      const snap = await transaction.get(familyRef);
      if (!snap.exists()) throw new Error('家庭空間不存在');

      const data = snap.data();
      const appState = data.appState && typeof data.appState === 'object'
        ? JSON.parse(JSON.stringify(data.appState))
        : {};

      appState.wishlists = appState.wishlists &&
                           typeof appState.wishlists === 'object' &&
                           !Array.isArray(appState.wishlists)
        ? appState.wishlists
        : {};

      const current = Array.isArray(appState.wishlists[key])
        ? appState.wishlists[key]
        : [];

      const next = shouldAdd
        ? [...new Set([...current, spotId])]
        : current.filter(id => id !== spotId);

      appState.wishlists[key] = next;

      // selected 保留作為舊版本相容欄位，內容為所有分類聯集。
      appState.selected = [
        ...new Set(
          Object.values(appState.wishlists)
            .flat()
            .filter(id => Number.isFinite(id))
        )
      ];

      transaction.update(familyRef, {
        appState,
        updatedAt: serverTimestamp(),
        updatedBy: user.uid,
        clientUpdatedAt: Date.now()
      });
    });

    lastSyncedAt = new Date();
    setSyncState('saved');
  } catch (err) {
    console.error('想去清單同步失敗', err);
    pendingState = safeState();
    setSyncState(navigator.onLine ? 'error' : 'offline');
    clearTimeout(retryTimer);
    retryTimer = setTimeout(flushPendingSave, 2000);
  }
}

async function saveToCloud(state) {
  if (!state) return;
  pendingState = state;

  if (!db || !user || !familyId || applyingRemote) {
    setSyncState(navigator.onLine ? 'saving' : 'offline');
    return;
  }

  clearTimeout(retryTimer);
  setSyncState('saving');

  try {
    const snapshot = JSON.parse(JSON.stringify(pendingState));
    await updateDoc(doc(db, 'families', familyId), {
      appState: snapshot,
      updatedAt: serverTimestamp(),
      updatedBy: user.uid,
      clientUpdatedAt: Date.now()
    });

    lastRemoteSignature = JSON.stringify(snapshot);

    // 只有目前待送內容仍是剛才那份，才清除。
    if (JSON.stringify(pendingState) === JSON.stringify(snapshot)) {
      pendingState = null;
    }

    lastSyncedAt = new Date();
    setSyncState('saved');

    // 儲存期間又有新修改，立刻補送。
    if (pendingState) {
      setTimeout(flushPendingSave, 20);
    }
  } catch (err) {
    console.error('家庭同步儲存失敗', err);
    setSyncState(navigator.onLine ? 'error' : 'offline');
    clearTimeout(retryTimer);
    retryTimer = setTimeout(flushPendingSave, 2000);
  }
}

function flushPendingSave() {
  if (!pendingState) return;
  saveToCloud(pendingState);
}

function queueSave(state) {
  pendingState = JSON.parse(JSON.stringify(state));
  setSyncState(navigator.onLine ? 'saving' : 'offline');

  // 短延遲合併快速連續輸入，但不再等待 0.7 秒。
  clearTimeout(saveTimer);
  saveTimer = setTimeout(flushPendingSave, 120);
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
  if (code.includes('missing-initial-state')) return 'LINE 內建瀏覽器無法完成 Google 登入，請改用匿名分享，或以 Safari／Chrome 綁定 Google 帳號';
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

    onAuthStateChanged(auth, async current => {
      if (!current) {
        try {
          await signInAnonymously(auth);
        } catch (err) {
          console.error('匿名登入失敗', err);
          modal(`
            <h2>家庭共享尚未準備完成</h2>
            <p>請到 Firebase Authentication 啟用「匿名」登入方式。</p>
          `);
        }
        return;
      }

      user = current;
      started = true;
      injectUI();

      const restored = await restoreExistingFamily();
      if (!restored) unsubscribeFamily?.();
      if (pendingState) flushPendingSave();
    });
  } catch (err) {
    console.error('Firebase 初始化失敗', err);
  }
}

window.addEventListener('online', () => {
  setSyncState('saving');
  flushPendingSave();
});
window.addEventListener('offline', () => setSyncState('offline'));
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') flushPendingSave();
  else flushPendingSave();
});
window.addEventListener('pagehide', flushPendingSave);
window.addEventListener('beforeunload', flushPendingSave);

window.familyCloud = {
  queueSave,
  updateWishlist,
  updateSpotRegion,
  updateRegionList,
  openPanel,
  forceSync: flushPendingSave,
  getStatus: () => ({syncState,lastSyncedAt,pending:!!pendingState})
};
init();
