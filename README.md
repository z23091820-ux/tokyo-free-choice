# 多城市家庭旅程管理 V20.2－即時同步修正版

## 同步修正
- 資料修改後約 0.12 秒送至 Firestore
- Firebase 尚未初始化時，修改先存入待送佇列，登入完成後自動補送
- 網路中斷時保留待送內容，恢復連線後自動同步
- 切換頁面、切到背景、重新回到網站時都會補送
- 右下角顯示「同步中、已同步、等待連線、同步失敗」
- 家庭面板新增「立即同步」
- 搜尋文字、目前頁面、正在查看的旅程不再同步，避免家人的畫面互相跳動
- 景點、想去分類、旅程、每日安排、航班及備註仍為家庭共同資料

## 不會更動
- 固定分享碼
- 家庭 ID
- LocalStorage Key
- 既有景點、旅程、航班、備註與想去清單
- 匿名模式與 Google 登入

## GitHub 請覆蓋
- index.html
- app.js
- cloud.js
- service-worker.js
- manifest.json
- README.md

部署後：
https://z23091820-ux.github.io/tokyo-free-choice/?v=20.2
