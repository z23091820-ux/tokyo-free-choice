# Firebase 家庭共享設定說明

完成以下設定後，V11 才會啟用 Google 登入與家庭同步。設定前仍可使用單機功能。

## 一、建立 Firebase 專案

1. 進入 Firebase Console。
2. 點「建立專案」。
3. 專案名稱可填：`tokyo-family-trip`。
4. Google Analytics 可先關閉。
5. 建立完成後，點專案首頁的 Web 圖示 `</>`。
6. App 暱稱可填：`Tokyo Family Trip`。
7. 不必勾選 Firebase Hosting，因為網站仍放在 GitHub Pages。
8. 複製畫面中的 `firebaseConfig`。

## 二、填入 firebase-config.js

開啟壓縮檔中的 `firebase-config.js`，把 Firebase 提供的值貼入：

```javascript
export const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
```

不要改變欄位名稱。

## 三、啟用 Google 登入

1. Firebase Console 左側進入 Authentication。
2. 點「開始使用」。
3. Sign-in method 選 Google。
4. 設為啟用，選擇支援電子郵件後儲存。
5. Authentication → Settings → Authorized domains。
6. 新增：`z23091820-ux.github.io`

## 四、建立 Firestore

1. Firebase Console 左側進入 Firestore Database。
2. 點「建立資料庫」。
3. 選正式環境模式。
4. 資料庫位置建議選離台灣較近的區域。
5. 建立完成後，進入「規則」分頁。
6. 將 `firestore.rules` 的完整內容貼入。
7. 點「發布」。

不要使用允許所有人讀寫的測試規則。

## 五、上傳 GitHub

請將下列檔案全部上傳並覆蓋：

- index.html
- app.js
- styles.css
- service-worker.js
- manifest.json
- firebase-config.js
- cloud.js
- README.md

`firestore.rules` 與本說明檔不必放到網站，但建議保留在 GitHub 作為備份。

## 六、使用方式

建立者：

1. 打開網站。
2. 點右下角「家庭登入」。
3. 用 Google 帳號登入。
4. 點「建立新的家庭空間」。
5. 複製 6 位分享碼給家人。

家人：

1. 在自己的手機打開同一網站。
2. 點「家庭登入」。
3. 用自己的 Google 帳號登入。
4. 輸入 6 位分享碼。
5. 加入後即可看到同一份旅程資料。

## 重要提醒

- 首次建立家庭空間時，會把建立者目前瀏覽器中的資料上傳。
- 加入家庭空間後，雲端資料會載入並成為共同資料。
- 所有成員都能修改景點、行程、航班與備註。
- 多人同時修改同一內容時，最後完成儲存的版本會覆蓋前一版。
