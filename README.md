# 東京自由行｜家庭共享版 V11

新增：

- Google 帳號登入
- 建立家庭共享空間
- 自動產生 6 位分享碼
- 家人用分享碼加入
- 景點、想去清單、旅程、每日安排、航班、備註與歷史紀錄同步
- Firestore 即時監聽
- 保留本機 LocalStorage 作為備援
- 未設定 Firebase 時仍可維持單機使用

## 必做設定

請先閱讀 `FIREBASE設定說明.md`，並完成：

1. 建立 Firebase 專案
2. 開啟 Google Authentication
3. 建立 Firestore Database
4. 發布 `firestore.rules`
5. 將 Firebase 設定貼入 `firebase-config.js`
6. 上傳所有網站檔案至 GitHub

部署後網址：

https://z23091820-ux.github.io/tokyo-free-choice/?v=11
