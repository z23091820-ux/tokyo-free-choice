# 多城市家庭旅程管理 V20.3－想去清單一致同步版

## 本版修正
- 「想去」不再用整份 appState 覆蓋
- 每次只新增或移除被點擊的那一個景點
- 使用 Firestore Transaction，兩人同時點不同景點也會自動合併
- 不會再發生後送資料把前一人的收藏蓋掉
- 目的地想去清單與旅程想去清單都使用相同原子同步機制
- 本機先立即顯示，Firestore 完成後所有家庭成員同步更新
- 保留固定分享碼、家庭 ID、匿名模式及 Google 登入

## 測試方式
1. 兩台裝置進入相同的「東京想去」分類。
2. A 裝置點選淺草寺。
3. B 裝置點選晴空塔。
4. 約一秒內，兩台裝置都應同時看到淺草寺與晴空塔。

## GitHub 請覆蓋
- index.html
- app.js
- cloud.js
- service-worker.js
- manifest.json
- README.md

部署後：
https://z23091820-ux.github.io/tokyo-free-choice/?v=20.3
