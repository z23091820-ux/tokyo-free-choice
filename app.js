
const APP_VERSION = 'friendly-v6';
const defaultSpots = [{"id": 1, "name": "淺草寺", "area": "淺草", "cat": "文化", "icon": "🏯", "minutes": 90, "walk": "輕鬆", "indoor": false, "note": "東京代表性寺院，周邊可一起逛仲見世商店街。"}, {"id": 2, "name": "仲見世商店街", "area": "淺草", "cat": "購物", "icon": "🏮", "minutes": 60, "walk": "輕鬆", "indoor": false, "note": "適合買伴手禮與品嚐傳統小吃。"}, {"id": 3, "name": "東京晴空塔", "area": "押上", "cat": "景觀", "icon": "🗼", "minutes": 120, "walk": "輕鬆", "indoor": true, "note": "有電梯與室內空間，適合看城市景色。"}, {"id": 4, "name": "墨田水族館", "area": "押上", "cat": "室內", "icon": "🐧", "minutes": 90, "walk": "輕鬆", "indoor": true, "note": "室內景點，適合下雨或想輕鬆走。"}, {"id": 5, "name": "上野公園", "area": "上野", "cat": "自然", "icon": "🌳", "minutes": 90, "walk": "普通", "indoor": false, "note": "公園範圍大，可依體力自由調整停留時間。"}, {"id": 6, "name": "東京國立博物館", "area": "上野", "cat": "文化", "icon": "🏛️", "minutes": 150, "walk": "輕鬆", "indoor": true, "note": "適合喜歡日本歷史與文化的人。"}, {"id": 7, "name": "阿美橫町", "area": "上野", "cat": "美食", "icon": "🍢", "minutes": 90, "walk": "普通", "indoor": false, "note": "市場街區，可吃東西與買藥妝。"}, {"id": 8, "name": "秋葉原電器街", "area": "秋葉原", "cat": "購物", "icon": "🎮", "minutes": 120, "walk": "普通", "indoor": true, "note": "電器、動漫與特色商店集中。"}, {"id": 9, "name": "東京車站丸之內", "area": "東京站", "cat": "地標", "icon": "🚉", "minutes": 60, "walk": "輕鬆", "indoor": true, "note": "交通方便，適合拍照與逛周邊商場。"}, {"id": 10, "name": "KITTE丸之內", "area": "東京站", "cat": "購物", "icon": "🏬", "minutes": 90, "walk": "輕鬆", "indoor": true, "note": "室內商場，有餐廳與休息空間。"}, {"id": 11, "name": "築地場外市場", "area": "築地", "cat": "美食", "icon": "🍣", "minutes": 120, "walk": "普通", "indoor": false, "note": "適合早上前往，海鮮與小吃選擇多。"}, {"id": 12, "name": "銀座", "area": "銀座", "cat": "購物", "icon": "💎", "minutes": 150, "walk": "普通", "indoor": true, "note": "百貨、餐廳與品牌店集中。"}, {"id": 13, "name": "東京鐵塔", "area": "芝公園", "cat": "景觀", "icon": "🗼", "minutes": 120, "walk": "輕鬆", "indoor": true, "note": "經典東京地標，可搭電梯上展望台。"}, {"id": 14, "name": "增上寺", "area": "芝公園", "cat": "文化", "icon": "🏯", "minutes": 60, "walk": "輕鬆", "indoor": false, "note": "可與東京鐵塔安排在同一區。"}, {"id": 15, "name": "teamLab Borderless", "area": "麻布台", "cat": "室內", "icon": "✨", "minutes": 150, "walk": "普通", "indoor": true, "note": "熱門數位藝術展，建議事先預約。"}, {"id": 16, "name": "澀谷十字路口", "area": "澀谷", "cat": "地標", "icon": "🚦", "minutes": 30, "walk": "輕鬆", "indoor": false, "note": "東京代表性街景，適合拍照。"}, {"id": 17, "name": "SHIBUYA SKY", "area": "澀谷", "cat": "景觀", "icon": "🌇", "minutes": 90, "walk": "輕鬆", "indoor": true, "note": "熱門展望景點，建議提前購票。"}, {"id": 18, "name": "明治神宮", "area": "原宿", "cat": "文化", "icon": "⛩️", "minutes": 120, "walk": "較多步行", "indoor": false, "note": "森林步道較長，適合體力較好時前往。"}, {"id": 19, "name": "表參道", "area": "表參道", "cat": "購物", "icon": "🛍️", "minutes": 120, "walk": "普通", "indoor": true, "note": "建築、咖啡與購物店家集中。"}, {"id": 20, "name": "新宿御苑", "area": "新宿", "cat": "自然", "icon": "🌿", "minutes": 120, "walk": "普通", "indoor": false, "note": "大型庭園，適合散步與休息。"}, {"id": 21, "name": "東京都廳展望室", "area": "新宿", "cat": "景觀", "icon": "🏙️", "minutes": 60, "walk": "輕鬆", "indoor": true, "note": "室內展望空間，交通方便。"}, {"id": 22, "name": "思出橫丁", "area": "新宿", "cat": "美食", "icon": "🍢", "minutes": 60, "walk": "輕鬆", "indoor": false, "note": "適合晚餐與體驗東京老街氛圍。"}, {"id": 23, "name": "池袋太陽城", "area": "池袋", "cat": "室內", "icon": "🏬", "minutes": 150, "walk": "輕鬆", "indoor": true, "note": "購物、餐飲與室內景點集中。"}, {"id": 24, "name": "teamLab Planets", "area": "豐洲", "cat": "室內", "icon": "💡", "minutes": 150, "walk": "普通", "indoor": true, "note": "沉浸式展覽，建議提前購票。"}, {"id": 25, "name": "台場海濱公園", "area": "台場", "cat": "自然", "icon": "🌊", "minutes": 90, "walk": "普通", "indoor": false, "note": "可看海景與彩虹大橋。"}, {"id": 26, "name": "DiverCity東京", "area": "台場", "cat": "購物", "icon": "🤖", "minutes": 150, "walk": "輕鬆", "indoor": true, "note": "鋼彈地標、商場與餐廳集中。"}, {"id": 27, "name": "豪德寺", "area": "世田谷", "cat": "文化", "icon": "🐈", "minutes": 90, "walk": "普通", "indoor": false, "note": "招財貓寺院，適合喜歡特色景點的人。"}, {"id": 28, "name": "井之頭恩賜公園", "area": "吉祥寺", "cat": "自然", "icon": "🦆", "minutes": 120, "walk": "普通", "indoor": false, "note": "公園與湖景，適合散步。"}, {"id": 29, "name": "三鷹之森吉卜力美術館", "area": "三鷹", "cat": "室內", "icon": "🎬", "minutes": 150, "walk": "普通", "indoor": true, "note": "需事先預約購票。"}, {"id": 30, "name": "東京迪士尼海洋", "area": "舞濱", "cat": "樂園", "icon": "🌋", "minutes": 600, "walk": "較多步行", "indoor": false, "note": "適合安排一整天，步行時間較長。"}, {"id": 10000, "name": "HOTEL TAVINOS ASAKUSA", "area": "Google Maps 東京清單", "cat": "住宿", "icon": "🏨", "minutes": 60, "walk": "待確認", "indoor": true, "note": "住宿", "mapUrl": "https://www.google.com/maps/place/HOTEL+TAVINOS+ASAKUSA/data=!4m2!3m1!1s0x60188fe25e0f84e3:0x58e4a9625472f0d1", "source": "google-takeout"}, {"id": 10001, "name": "黑毛和牛壽喜燒 日本橋一里", "area": "Google Maps 東京清單", "cat": "美食", "icon": "🍽️", "minutes": 90, "walk": "待確認", "indoor": true, "note": "壽喜燒", "mapUrl": "https://www.google.com/maps/place/%E9%BB%91%E6%AF%9B%E5%92%8C%E7%89%9B%E5%A3%BD%E5%96%9C%E7%87%92+%E6%97%A5%E6%9C%AC%E6%A9%8B%E4%B8%80%E9%87%8C/data=!4m2!3m1!1s0x601889004d1c4c01:0xd546648fc9d92bad", "source": "google-takeout"}, {"id": 10002, "name": "Irokawa Unagi Kaminari-mon", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Irokawa+Unagi+Kaminari-mon/data=!4m2!3m1!1s0x60188ec708f65555:0x4bb31c294b45243b", "source": "google-takeout"}, {"id": 10003, "name": "天助", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E5%A4%A9%E5%8A%A9/data=!4m2!3m1!1s0x6018f27da366a65d:0xcdcf9bc0a624da13", "source": "google-takeout"}, {"id": 10004, "name": "鴻廷肥龍老火鍋-台北店｜麻辣火鍋 重慶老火鍋", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E9%B4%BB%E5%BB%B7%E8%82%A5%E9%BE%8D%E8%80%81%E7%81%AB%E9%8D%8B-%E5%8F%B0%E5%8C%97%E5%BA%97%EF%BD%9C%E9%BA%BB%E8%BE%A3%E7%81%AB%E9%8D%8B+%E9%87%8D%E6%85%B6%E8%80%81%E7%81%AB%E9%8D%8B/data=!4m2!3m1!1s0x3442a9bce8ca36df:0xf59079445eb9fb31", "source": "google-takeout"}, {"id": 10005, "name": "明治屋 日本橋店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E6%98%8E%E6%B2%BB%E5%B1%8B+%E6%97%A5%E6%9C%AC%E6%A9%8B%E5%BA%97/data=!4m2!3m1!1s0x60188957e9a6d947:0x4f8146d62ddd5316", "source": "google-takeout"}, {"id": 10006, "name": "寶可夢中心Mega Tokyo", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E5%AF%B6%E5%8F%AF%E5%A4%A2%E4%B8%AD%E5%BF%83Mega+Tokyo/data=!4m2!3m1!1s0x60188d6f044d6725:0x5c5c669ed9f5c455", "source": "google-takeout"}, {"id": 10007, "name": "Village Vanguard Shinjuku Lumine EST", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "動漫店", "mapUrl": "https://www.google.com/maps/place/Village+Vanguard+Shinjuku+Lumine+EST/data=!4m2!3m1!1s0x60188cd0a6f79805:0x3584bb8918052238", "source": "google-takeout"}, {"id": 10008, "name": "Ovo Nipporiten", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "草莓蛋糕", "mapUrl": "https://www.google.com/maps/place/Ovo+Nipporiten/data=!4m2!3m1!1s0x60188dec51a391c3:0xa8f7ec5e2e34b2b5", "source": "google-takeout"}, {"id": 10009, "name": "鰻魚飯老店 小川菊", "area": "Google Maps 東京清單", "cat": "美食", "icon": "🍽️", "minutes": 90, "walk": "待確認", "indoor": true, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E9%B0%BB%E9%AD%9A%E9%A3%AF%E8%80%81%E5%BA%97+%E5%B0%8F%E5%B7%9D%E8%8F%8A/data=!4m2!3m1!1s0x6018da60bc145beb:0x54dd392ce4f9ca59", "source": "google-takeout"}, {"id": 10010, "name": "Hayashiya", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Hayashiya/data=!4m2!3m1!1s0x6018da60c1ddcb21:0x9161fb4a22353cc8", "source": "google-takeout"}, {"id": 10011, "name": "Turret Coffee Tsukiji", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Turret+Coffee+Tsukiji/data=!4m2!3m1!1s0x60188ba3e3e2815b:0x1b877ae335ae5b65", "source": "google-takeout"}, {"id": 10012, "name": "菅野", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E8%8F%85%E9%87%8E/data=!4m2!3m1!1s0x60188bdede36a4d3:0xc1f48f6c3394f579", "source": "google-takeout"}, {"id": 10013, "name": "Miyake Suisan", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Miyake+Suisan/data=!4m2!3m1!1s0x60188bdf1f0ccccf:0x1413e70989e8f603", "source": "google-takeout"}, {"id": 10014, "name": "Soratsuki", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Soratsuki/data=!4m2!3m1!1s0x60188bdf22515923:0x52d125d2c60480b9", "source": "google-takeout"}, {"id": 10015, "name": "丸豐御飯糰屋", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E4%B8%B8%E8%B1%90%E5%BE%A1%E9%A3%AF%E7%B3%B0%E5%B1%8B/data=!4m2!3m1!1s0x60188bdedc9c02f9:0xc39a0467a5a4e0bd", "source": "google-takeout"}, {"id": 10016, "name": "鰻魚 うなぎ食堂", "area": "Google Maps 東京清單", "cat": "美食", "icon": "🍽️", "minutes": 90, "walk": "待確認", "indoor": true, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E9%B0%BB%E9%AD%9A+%E3%81%86%E3%81%AA%E3%81%8E%E9%A3%9F%E5%A0%82/data=!4m2!3m1!1s0x60188bdf2f88d74d:0xce59baa2e7a3edb", "source": "google-takeout"}, {"id": 10017, "name": "29 Terrace", "area": "Google Maps 東京清單", "cat": "美食", "icon": "🍽️", "minutes": 90, "walk": "待確認", "indoor": true, "note": "牛舌燒肉", "mapUrl": "https://www.google.com/maps/place/29+Terrace/data=!4m2!3m1!1s0x60188d4a2899f869:0x3696d5678ef5f313", "source": "google-takeout"}, {"id": 10018, "name": "Nagomi Yamanakako", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Nagomi+Yamanakako/data=!4m2!3m1!1s0x601965a89f42bfd1:0x5a7bcf5a9b89a7b9", "source": "google-takeout"}, {"id": 10019, "name": "迴轉壽司 Toriton 池袋東武店", "area": "Google Maps 東京清單", "cat": "美食", "icon": "🍽️", "minutes": 90, "walk": "待確認", "indoor": true, "note": "迴轉壽司", "mapUrl": "https://www.google.com/maps/place/%E8%BF%B4%E8%BD%89%E5%A3%BD%E5%8F%B8+Toriton+%E6%B1%A0%E8%A2%8B%E6%9D%B1%E6%AD%A6%E5%BA%97/data=!4m2!3m1!1s0x60188d5d9e6fe2b5:0xe647312eae9997f0", "source": "google-takeout"}, {"id": 10020, "name": "舍鈴 池袋東口店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E8%88%8D%E9%88%B4+%E6%B1%A0%E8%A2%8B%E6%9D%B1%E5%8F%A3%E5%BA%97/data=!4m2!3m1!1s0x60188d67e10701e9:0x10a5e2ec4361fbe0", "source": "google-takeout"}, {"id": 10021, "name": "Zoff 池袋購物公園店", "area": "Google Maps 東京清單", "cat": "購物", "icon": "🛍️", "minutes": 120, "walk": "待確認", "indoor": true, "note": "眼鏡店", "mapUrl": "https://www.google.com/maps/place/Zoff+%E6%B1%A0%E8%A2%8B%E8%B3%BC%E7%89%A9%E5%85%AC%E5%9C%92%E5%BA%97/data=!4m2!3m1!1s0x60188d67a28de5b7:0xd0ce478c90c27ff0", "source": "google-takeout"}, {"id": 10022, "name": "焼肉 ZENIBA 渋谷店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E7%84%BC%E8%82%89+ZENIBA+%E6%B8%8B%E8%B0%B7%E5%BA%97/data=!4m2!3m1!1s0x60188ca63e5d0235:0x94f34e551fa74ece", "source": "google-takeout"}, {"id": 10023, "name": "Stabler Shimokitazawa Meatsand", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Stabler+Shimokitazawa+Meatsand/data=!4m2!3m1!1s0x6018f31ab7460421:0xeeed9abd11532aa4", "source": "google-takeout"}, {"id": 10024, "name": "白髭泡芙工房", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E7%99%BD%E9%AB%AD%E6%B3%A1%E8%8A%99%E5%B7%A5%E6%88%BF/data=!4m2!3m1!1s0x6018f36dcdd50f65:0x8465c5b484a16f18", "source": "google-takeout"}, {"id": 10025, "name": "東橫INN 池袋北口2", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E6%9D%B1%E6%A9%ABINN+%E6%B1%A0%E8%A2%8B%E5%8C%97%E5%8F%A32/data=!4m2!3m1!1s0x60188d5e381b0ee9:0x5c292940e88c15a4", "source": "google-takeout"}, {"id": 10026, "name": "活美登利 迴轉壽司", "area": "Google Maps 東京清單", "cat": "美食", "icon": "🍽️", "minutes": 90, "walk": "待確認", "indoor": true, "note": "迴轉壽司", "mapUrl": "https://www.google.com/maps/place/%E6%B4%BB%E7%BE%8E%E7%99%BB%E5%88%A9+%E8%BF%B4%E8%BD%89%E5%A3%BD%E5%8F%B8/data=!4m2!3m1!1s0x60188d5dbe4145ed:0xb04703a55bd99b97", "source": "google-takeout"}, {"id": 10027, "name": "漢堡排 嘉 ( Hamburg 嘉)", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E6%BC%A2%E5%A0%A1%E6%8E%92+%E5%98%89+(+Hamburg+%E5%98%89)/data=!4m2!3m1!1s0x60188d03668bfe1b:0xa1961023b61c7d47", "source": "google-takeout"}, {"id": 10028, "name": "極味屋 澀谷PARCO店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "漢堡排", "mapUrl": "https://www.google.com/maps/place/%E6%A5%B5%E5%91%B3%E5%B1%8B+%E6%BE%80%E8%B0%B7PARCO%E5%BA%97/data=!4m2!3m1!1s0x60188ddddb728f6f:0x50c3d97c2a683698", "source": "google-takeout"}, {"id": 10029, "name": "AEON超市 My Basket", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/AEON%E8%B6%85%E5%B8%82+My+Basket/data=!4m2!3m1!1s0x6018895c64c4c54b:0x10eb3c0adfc56448", "source": "google-takeout"}, {"id": 10030, "name": "東橫INN 茅場町站", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E6%9D%B1%E6%A9%ABINN+%E8%8C%85%E5%A0%B4%E7%94%BA%E7%AB%99/data=!4m2!3m1!1s0x601889d314dc638f:0x115c0202d80e6d88", "source": "google-takeout"}, {"id": 10031, "name": "Hachinoki", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Hachinoki/data=!4m2!3m1!1s0x60188e9fb8d91bd3:0xe74a8fe0f98ad8fb", "source": "google-takeout"}, {"id": 10032, "name": "Matsuzakagyu Yoshida", "area": "Google Maps 東京清單", "cat": "美食", "icon": "🍽️", "minutes": 90, "walk": "待確認", "indoor": true, "note": "壽喜燒", "mapUrl": "https://www.google.com/maps/place/Matsuzakagyu+Yoshida/data=!4m2!3m1!1s0x6018f32dc3006f51:0xd9b65e5934ecbdac", "source": "google-takeout"}, {"id": 10033, "name": "Sukiyaki Matsukiya", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Sukiyaki+Matsukiya/data=!4m2!3m1!1s0x60188b558a20cfb7:0xf517e09f474ffb30", "source": "google-takeout"}, {"id": 10034, "name": "ささもと新宿店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E3%81%95%E3%81%95%E3%82%82%E3%81%A8%E6%96%B0%E5%AE%BF%E5%BA%97/data=!4m2!3m1!1s0x60188d6e24fb750d:0x25f67a9a2b5043c0", "source": "google-takeout"}, {"id": 10035, "name": "麻布台之丘 森JP Tower", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E9%BA%BB%E5%B8%83%E5%8F%B0%E4%B9%8B%E4%B8%98+%E6%A3%AEJP+Tower/data=!4m2!3m1!1s0x60188bdecb913b5d:0xf582651d930e5526", "source": "google-takeout"}, {"id": 10036, "name": "新宿燒肉 牛舌の檸檬", "area": "Google Maps 東京清單", "cat": "美食", "icon": "🍽️", "minutes": 90, "walk": "待確認", "indoor": true, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E6%96%B0%E5%AE%BF%E7%87%92%E8%82%89+%E7%89%9B%E8%88%8C%E3%81%AE%E6%AA%B8%E6%AA%AC/data=!4m2!3m1!1s0x60188d29c40e3255:0x148f6cd600a5a08", "source": "google-takeout"}, {"id": 10037, "name": "拉麵 風雲兒", "area": "Google Maps 東京清單", "cat": "美食", "icon": "🍽️", "minutes": 90, "walk": "待確認", "indoor": true, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E6%8B%89%E9%BA%B5+%E9%A2%A8%E9%9B%B2%E5%85%92/data=!4m2!3m1!1s0x60188ccfae1f4fe7:0x2d6a64fb6fab829c", "source": "google-takeout"}, {"id": 10038, "name": "Rotating Sushi Oedo Shinjuku Nishiguchi", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Rotating+Sushi+Oedo+Shinjuku+Nishiguchi/data=!4m2!3m1!1s0x60188cd700788c6b:0xe046ae40eb25998b", "source": "google-takeout"}, {"id": 10039, "name": "MANDAREKE COMPLEX", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/MANDAREKE+COMPLEX/data=!4m2!3m1!1s0x60188c1db588759b:0x8c537b9b72799bd3", "source": "google-takeout"}, {"id": 10040, "name": "すき焼き ちかよ", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E3%81%99%E3%81%8D%E7%84%BC%E3%81%8D+%E3%81%A1%E3%81%8B%E3%82%88/data=!4m2!3m1!1s0x60184ffbe881db27:0x8ab7d192bb33a29b", "source": "google-takeout"}, {"id": 10041, "name": "Mlesna Tea Yoyogi-Uehara", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Mlesna+Tea+Yoyogi-Uehara/data=!4m2!3m1!1s0x60188de6284fbfd3:0xadded3185f5797a7", "source": "google-takeout"}, {"id": 10042, "name": "the b 赤坂見附", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/the+b+%E8%B5%A4%E5%9D%82%E8%A6%8B%E9%99%84/data=!4m2!3m1!1s0x60188c7edda65abd:0x298ad2d912b81ef4", "source": "google-takeout"}, {"id": 10043, "name": "Tokyo Melon Pan Tsukishima Monja Street Shop", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Tokyo+Melon+Pan+Tsukishima+Monja+Street+Shop/data=!4m2!3m1!1s0x6018897aa4e70b77:0xb000dba364384f42", "source": "google-takeout"}, {"id": 10044, "name": "魚菜 Hazama", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E9%AD%9A%E8%8F%9C+Hazama/data=!4m2!3m1!1s0x6018897a10751255:0x602600127da60378", "source": "google-takeout"}, {"id": 10045, "name": "Char-grilled yakitori Sasano Ya", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "燒烤", "mapUrl": "https://www.google.com/maps/place/Char-grilled+yakitori+Sasano+Ya/data=!4m2!3m1!1s0x60188e84f0ff5ed3:0x575729faf4f068ba", "source": "google-takeout"}, {"id": 10046, "name": "TRUFFLE mini ecute EDITION有樂町店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "木村拓哉", "mapUrl": "https://www.google.com/maps/place/TRUFFLE+mini+ecute+EDITION%E6%9C%89%E6%A8%82%E7%94%BA%E5%BA%97/data=!4m2!3m1!1s0x60188b698add0d4f:0x21cae707791e9d1a", "source": "google-takeout"}, {"id": 10047, "name": "釣船茶屋Zauo 新宿店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E9%87%A3%E8%88%B9%E8%8C%B6%E5%B1%8BZauo+%E6%96%B0%E5%AE%BF%E5%BA%97/data=!4m2!3m1!1s0x60188cd304448515:0x70dd014502d5b265", "source": "google-takeout"}, {"id": 10048, "name": "甜點 銀座WEST 本店", "area": "Google Maps 東京清單", "cat": "美食", "icon": "🍽️", "minutes": 90, "walk": "待確認", "indoor": true, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E7%94%9C%E9%BB%9E+%E9%8A%80%E5%BA%A7WEST+%E6%9C%AC%E5%BA%97/data=!4m2!3m1!1s0x60188bef2e27b899:0x27dc0c57eaef8dba", "source": "google-takeout"}, {"id": 10049, "name": "鮨＆BAR 不二楼", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E9%AE%A8%EF%BC%86BAR+%E4%B8%8D%E4%BA%8C%E6%A5%BC/data=!4m2!3m1!1s0x60188b8647864c55:0x147d3660475fbb8", "source": "google-takeout"}, {"id": 10050, "name": "Yamada No Unagi", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Yamada+No+Unagi/data=!4m2!3m1!1s0x60188d5ea5537763:0xa3518e58d6ce7445", "source": "google-takeout"}, {"id": 10051, "name": "American Diner Andra", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/American+Diner+Andra/data=!4m2!3m1!1s0x60188e99bc7f861b:0xed9efba3103a448d", "source": "google-takeout"}, {"id": 10052, "name": "平八", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E5%B9%B3%E5%85%AB/data=!4m2!3m1!1s0x6018863b92cd75fb:0xd0f99698f90f871c", "source": "google-takeout"}, {"id": 10053, "name": "The Tourist Hotel & Cafe Akihabara", "area": "Google Maps 東京清單", "cat": "住宿", "icon": "🏨", "minutes": 60, "walk": "待確認", "indoor": true, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/The+Tourist+Hotel+%26+Cafe+Akihabara/data=!4m2!3m1!1s0x60188ea66c8f8afd:0x12e854b654380ba5", "source": "google-takeout"}, {"id": 10054, "name": "淺草關東煮老店 大多福", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E6%B7%BA%E8%8D%89%E9%97%9C%E6%9D%B1%E7%85%AE%E8%80%81%E5%BA%97+%E5%A4%A7%E5%A4%9A%E7%A6%8F/data=!4m2!3m1!1s0x60188e94ed6e8977:0x5f0590379e5342b1", "source": "google-takeout"}, {"id": 10055, "name": "Cafe Yoridocoro", "area": "Google Maps 東京清單", "cat": "美食", "icon": "🍽️", "minutes": 90, "walk": "待確認", "indoor": true, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Cafe+Yoridocoro/data=!4m2!3m1!1s0x60184f59e93d0001:0xf083c09040a93ad1", "source": "google-takeout"}, {"id": 10056, "name": "東京銀座AGORA酒店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E6%9D%B1%E4%BA%AC%E9%8A%80%E5%BA%A7AGORA%E9%85%92%E5%BA%97/data=!4m2!3m1!1s0x60188bf77f5c17eb:0xfaa6a17df483b0f", "source": "google-takeout"}, {"id": 10057, "name": "Ramen Break Beats", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Ramen+Break+Beats/data=!4m2!3m1!1s0x60188ba06040c8e5:0x130116b5f7d65812", "source": "google-takeout"}, {"id": 10058, "name": "Horidome Villa Hotel", "area": "Google Maps 東京清單", "cat": "住宿", "icon": "🏨", "minutes": 60, "walk": "待確認", "indoor": true, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Horidome+Villa+Hotel/data=!4m2!3m1!1s0x60188953a842f2bf:0x8fe8e9ffce2fa34a", "source": "google-takeout"}, {"id": 10059, "name": "焼肉 じゅん 二子玉川", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E7%84%BC%E8%82%89+%E3%81%98%E3%82%85%E3%82%93+%E4%BA%8C%E5%AD%90%E7%8E%89%E5%B7%9D/data=!4m2!3m1!1s0x6018f5332f0a83b5:0x17705948624f22c5", "source": "google-takeout"}, {"id": 10060, "name": "焼肉九田家", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E7%84%BC%E8%82%89%E4%B9%9D%E7%94%B0%E5%AE%B6/data=!4m2!3m1!1s0x60188d93b6cd671d:0xce4fb2838cc07b3d", "source": "google-takeout"}, {"id": 10061, "name": "Ueno Woo Hotel 《上野 窩 旅店》 上野ウーホテル", "area": "Google Maps 東京清單", "cat": "住宿", "icon": "🏨", "minutes": 60, "walk": "待確認", "indoor": true, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Ueno+Woo+Hotel+%E3%80%8A%E4%B8%8A%E9%87%8E+%E7%AA%A9+%E6%97%85%E5%BA%97%E3%80%8B+%E4%B8%8A%E9%87%8E%E3%82%A6%E3%83%BC%E3%83%9B%E3%83%86%E3%83%AB/data=!4m2!3m1!1s0x60188f7c255346b3:0x54abffbbfc2877de", "source": "google-takeout"}, {"id": 10062, "name": "麵散", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E9%BA%B5%E6%95%A3/data=!4m2!3m1!1s0x60188d6ff9699deb:0x5fda2231d05d8d8b", "source": "google-takeout"}, {"id": 10063, "name": "麺や 響", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E9%BA%BA%E3%82%84+%E9%9F%BF/data=!4m2!3m1!1s0x60188b8556307a8f:0xf692da7a29e7f34a", "source": "google-takeout"}, {"id": 10064, "name": "Ramen Afro Beats", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Ramen+Afro+Beats/data=!4m2!3m1!1s0x60188dac4c941cd3:0x37e3afb8ba57e79e", "source": "google-takeout"}, {"id": 10065, "name": "いづも 池袋", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E3%81%84%E3%81%A5%E3%82%82+%E6%B1%A0%E8%A2%8B/data=!4m2!3m1!1s0x60188d06e8f6de9d:0xde7a04a7fd57a130", "source": "google-takeout"}, {"id": 10066, "name": "無印良品 新宿", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E7%84%A1%E5%8D%B0%E8%89%AF%E5%93%81+%E6%96%B0%E5%AE%BF/data=!4m2!3m1!1s0x60188cda4c698855:0xb8d4fdfd22a170ef", "source": "google-takeout"}, {"id": 10067, "name": "Graniph Harajuku", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Graniph+Harajuku/data=!4m2!3m1!1s0x60188d98fc76b62d:0x3f0a6572dc9fa60a", "source": "google-takeout"}, {"id": 10068, "name": "靴下屋 MARK IS みなとみらい店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E9%9D%B4%E4%B8%8B%E5%B1%8B+MARK+IS+%E3%81%BF%E3%81%AA%E3%81%A8%E3%81%BF%E3%82%89%E3%81%84%E5%BA%97/data=!4m2!3m1!1s0x60185c42cd941f25:0x3a97c5f5cfaa325b", "source": "google-takeout"}, {"id": 10069, "name": "Tabio KITTE branch", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Tabio+KITTE+branch/data=!4m2!3m1!1s0x60188bfa3795614b:0x80c87995baf38d40", "source": "google-takeout"}, {"id": 10070, "name": "Tabio Japan GINZA SIX店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Tabio+Japan+GINZA+SIX%E5%BA%97/data=!4m2!3m1!1s0x60188be636667a7d:0xf794ed466d098800", "source": "google-takeout"}, {"id": 10071, "name": "Kutsushitaya Harajukutakeshitadoriten - Tabio", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Kutsushitaya+Harajukutakeshitadoriten+-+Tabio/data=!4m2!3m1!1s0x60188cbae6c948b9:0xf248341620ca8fd4", "source": "google-takeout"}, {"id": 10072, "name": "Tabio Omotesando Hills Ten", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Tabio+Omotesando+Hills+Ten/data=!4m2!3m1!1s0x60188ca1780e2c7f:0x6e91f707ff3a6f6d", "source": "google-takeout"}, {"id": 10073, "name": "澀谷飲兵衛橫丁", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E6%BE%80%E8%B0%B7%E9%A3%B2%E5%85%B5%E8%A1%9B%E6%A9%AB%E4%B8%81/data=!4m2!3m1!1s0x60188b5801d200a7:0xdfae104c597fa255", "source": "google-takeout"}, {"id": 10074, "name": "PARCO澀谷", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/PARCO%E6%BE%80%E8%B0%B7/data=!4m2!3m1!1s0x60188ca8e2fe2173:0x1adbb1909538391b", "source": "google-takeout"}, {"id": 10075, "name": "Torikizoku", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Torikizoku/data=!4m2!3m1!1s0x60188db40cc94dc5:0x71351b6f487fa9d2", "source": "google-takeout"}, {"id": 10076, "name": "澀谷線流", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E6%BE%80%E8%B0%B7%E7%B7%9A%E6%B5%81/data=!4m2!3m1!1s0x60188b31a00165ed:0x387c407b91e2ad68", "source": "google-takeout"}, {"id": 10077, "name": "Doll Kiss", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Doll+Kiss/data=!4m2!3m1!1s0x60188ca9cd2da81f:0x2a8ec2cdadf1316f", "source": "google-takeout"}, {"id": 10078, "name": "水果千層蛋糕 Harbs", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E6%B0%B4%E6%9E%9C%E5%8D%83%E5%B1%A4%E8%9B%8B%E7%B3%95+Harbs/data=!4m2!3m1!1s0x60188b58fab92e25:0x842d816833533b7f", "source": "google-takeout"}, {"id": 10079, "name": "TUMI 銀座店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/TUMI+%E9%8A%80%E5%BA%A7%E5%BA%97/data=!4m2!3m1!1s0x60188be3ecbcff41:0x50a1dca1c84ae1c2", "source": "google-takeout"}, {"id": 10080, "name": "TUMI 銀座五丁目店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/TUMI+%E9%8A%80%E5%BA%A7%E4%BA%94%E4%B8%81%E7%9B%AE%E5%BA%97/data=!4m2!3m1!1s0x60188b8232bde59b:0x1a8865b5ddb56c53", "source": "google-takeout"}, {"id": 10081, "name": "TUMI 松屋銀座店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/TUMI+%E6%9D%BE%E5%B1%8B%E9%8A%80%E5%BA%A7%E5%BA%97/data=!4m2!3m1!1s0x60188be41e193131:0x2d2ea0ff53d05ee2", "source": "google-takeout"}, {"id": 10082, "name": "TUMI", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/TUMI/data=!4m2!3m1!1s0x60188bef88ae713f:0x46d678ff52cc64d1", "source": "google-takeout"}, {"id": 10083, "name": "日默瓦 銀座七丁目店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E6%97%A5%E9%BB%98%E7%93%A6+%E9%8A%80%E5%BA%A7%E4%B8%83%E4%B8%81%E7%9B%AE%E5%BA%97/data=!4m2!3m1!1s0x60188b5e9a3e7c95:0x7835725891bd9326", "source": "google-takeout"}, {"id": 10084, "name": "GU 銀座店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/GU+%E9%8A%80%E5%BA%A7%E5%BA%97/data=!4m2!3m1!1s0x60188be66f9afb63:0x6308aa1f9691c4b0", "source": "google-takeout"}, {"id": 10085, "name": "日默瓦 松屋銀座店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E6%97%A5%E9%BB%98%E7%93%A6+%E6%9D%BE%E5%B1%8B%E9%8A%80%E5%BA%A7%E5%BA%97/data=!4m2!3m1!1s0x60188be69ff7a905:0xbba00153198389c9", "source": "google-takeout"}, {"id": 10086, "name": "Samsonite Black Label Ginza", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Samsonite+Black+Label+Ginza/data=!4m2!3m1!1s0x60188be8eac6b805:0x5fdaf5368b39624d", "source": "google-takeout"}, {"id": 10087, "name": "Samsonite", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Samsonite/data=!4m2!3m1!1s0x60188be56da85129:0x267755ef3b0ee225", "source": "google-takeout"}, {"id": 10088, "name": "Ginza Karen", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Ginza+Karen/data=!4m2!3m1!1s0x60188be61841d50b:0xc9b5f45a1e14dc22", "source": "google-takeout"}, {"id": 10089, "name": "星巴克 橫濱Hammerhead店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E6%98%9F%E5%B7%B4%E5%85%8B+%E6%A9%AB%E6%BF%B1Hammerhead%E5%BA%97/data=!4m2!3m1!1s0x60185ce31ddcee11:0xf7ceb5797f5be090", "source": "google-takeout"}, {"id": 10090, "name": "Kurumicco Factory", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Kurumicco+Factory/data=!4m2!3m1!1s0x60185dcc31ea1dc1:0xe769d9812ae4e535", "source": "google-takeout"}, {"id": 10091, "name": "橫濱WORLD PORTERS", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E6%A9%AB%E6%BF%B1WORLD+PORTERS/data=!4m2!3m1!1s0x60185c59beaafaf9:0xd56ab19f19ba6e03", "source": "google-takeout"}, {"id": 10092, "name": "MITSUI OUTLET PARK 橫濱港灣", "area": "Google Maps 東京清單", "cat": "購物", "icon": "🛍️", "minutes": 120, "walk": "待確認", "indoor": true, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/MITSUI+OUTLET+PARK+%E6%A9%AB%E6%BF%B1%E6%B8%AF%E7%81%A3/data=!4m2!3m1!1s0x601843aa08c6761b:0x64ee61d79a6d3f7f", "source": "google-takeout"}, {"id": 10093, "name": "北海道厚岸 牡蠣餐廳", "area": "Google Maps 東京清單", "cat": "美食", "icon": "🍽️", "minutes": 90, "walk": "待確認", "indoor": true, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E5%8C%97%E6%B5%B7%E9%81%93%E5%8E%9A%E5%B2%B8+%E7%89%A1%E8%A0%A3%E9%A4%90%E5%BB%B3/data=!4m2!3m1!1s0x60188955a9167da9:0xf00c702bb0b12de1", "source": "google-takeout"}, {"id": 10094, "name": "利久牛舌 東京車站店", "area": "Google Maps 東京清單", "cat": "交通", "icon": "🚉", "minutes": 30, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E5%88%A9%E4%B9%85%E7%89%9B%E8%88%8C+%E6%9D%B1%E4%BA%AC%E8%BB%8A%E7%AB%99%E5%BA%97/data=!4m2!3m1!1s0x60185144178a7ec3:0x22307195bf20ba85", "source": "google-takeout"}, {"id": 10095, "name": "Ningyocho Imahan Nihombashi Takashimaya S.C. Restaurant", "area": "Google Maps 東京清單", "cat": "美食", "icon": "🍽️", "minutes": 90, "walk": "待確認", "indoor": true, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Ningyocho+Imahan+Nihombashi+Takashimaya+S.C.+Restaurant/data=!4m2!3m1!1s0x601889c0c4e85837:0xd5aa59324ab1a92a", "source": "google-takeout"}, {"id": 10096, "name": "Kaneko Hannosuke - Otemachi One", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Kaneko+Hannosuke+-+Otemachi+One/data=!4m2!3m1!1s0x60188d7aeeaa4569:0x78b2889522abcb0a", "source": "google-takeout"}, {"id": 10097, "name": "天婦羅 金子半之助 日本橋店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E5%A4%A9%E5%A9%A6%E7%BE%85+%E9%87%91%E5%AD%90%E5%8D%8A%E4%B9%8B%E5%8A%A9+%E6%97%A5%E6%9C%AC%E6%A9%8B%E5%BA%97/data=!4m2!3m1!1s0x6018895435c5f7ff:0x51ee2674c996f3a0", "source": "google-takeout"}, {"id": 10098, "name": "稻庭烏龍麵與飯 金子半之助", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E7%A8%BB%E5%BA%AD%E7%83%8F%E9%BE%8D%E9%BA%B5%E8%88%87%E9%A3%AF+%E9%87%91%E5%AD%90%E5%8D%8A%E4%B9%8B%E5%8A%A9/data=!4m2!3m1!1s0x60188955afa4dd97:0xef5d0740c0ef6d4d", "source": "google-takeout"}, {"id": 10099, "name": "日本橋天丼 金子半之助", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E6%97%A5%E6%9C%AC%E6%A9%8B%E5%A4%A9%E4%B8%BC+%E9%87%91%E5%AD%90%E5%8D%8A%E4%B9%8B%E5%8A%A9/data=!4m2!3m1!1s0x60188955d3834ea3:0x1cd196b29b306fb0", "source": "google-takeout"}, {"id": 10100, "name": "Kaneko Hannosuke - Gransta Tokyo", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Kaneko+Hannosuke+-+Gransta+Tokyo/data=!4m2!3m1!1s0x60188b76fdfc1a23:0x590425821b8e7e1d", "source": "google-takeout"}, {"id": 10101, "name": "電光石火 銀座店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E9%9B%BB%E5%85%89%E7%9F%B3%E7%81%AB+%E9%8A%80%E5%BA%A7%E5%BA%97/data=!4m2!3m1!1s0x60188b4af2b9f77d:0x9170851fa3ceb854", "source": "google-takeout"}, {"id": 10102, "name": "Denkosekka Yokohamaminatomiraiten", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Denkosekka+Yokohamaminatomiraiten/data=!4m2!3m1!1s0x60185da791f4d90b:0x9ed9aa2d0b56935a", "source": "google-takeout"}, {"id": 10103, "name": "迴轉壽司 根室花丸 銀座店", "area": "Google Maps 東京清單", "cat": "美食", "icon": "🍽️", "minutes": 90, "walk": "待確認", "indoor": true, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E8%BF%B4%E8%BD%89%E5%A3%BD%E5%8F%B8+%E6%A0%B9%E5%AE%A4%E8%8A%B1%E4%B8%B8+%E9%8A%80%E5%BA%A7%E5%BA%97/data=!4m2!3m1!1s0x60188ba22930f771:0xf7a3d4b793ed6367", "source": "google-takeout"}, {"id": 10104, "name": "萬年湯", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E8%90%AC%E5%B9%B4%E6%B9%AF/data=!4m2!3m1!1s0x60188d265cf60947:0x204e2384c2ba8f20", "source": "google-takeout"}, {"id": 10105, "name": "HARBS LUMINE EST新宿店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/HARBS+LUMINE+EST%E6%96%B0%E5%AE%BF%E5%BA%97/data=!4m2!3m1!1s0x60188d5033c973d7:0x71c869250b4dcfd2", "source": "google-takeout"}, {"id": 10106, "name": "伊勢丹 新宿店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E4%BC%8A%E5%8B%A2%E4%B8%B9+%E6%96%B0%E5%AE%BF%E5%BA%97/data=!4m2!3m1!1s0x60188cdba56b3bf7:0x8b741cc73341edb5", "source": "google-takeout"}, {"id": 10107, "name": "TOHO影城 新宿（電影院）", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/TOHO%E5%BD%B1%E5%9F%8E+%E6%96%B0%E5%AE%BF%EF%BC%88%E9%9B%BB%E5%BD%B1%E9%99%A2%EF%BC%89/data=!4m2!3m1!1s0x60188cd82b4cf2ff:0x4e180e7a40fbffe8", "source": "google-takeout"}, {"id": 10108, "name": "唐吉訶德 新宿歌舞伎町店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E5%94%90%E5%90%89%E8%A8%B6%E5%BE%B7+%E6%96%B0%E5%AE%BF%E6%AD%8C%E8%88%9E%E4%BC%8E%E7%94%BA%E5%BA%97/data=!4m2!3m1!1s0x60188cd9dbeab93d:0x8583055007d02928", "source": "google-takeout"}, {"id": 10109, "name": "212 KITCHEN STORE コピス吉祥寺店", "area": "Google Maps 東京清單", "cat": "文化自然", "icon": "⛩️", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/212+KITCHEN+STORE+%E3%82%B3%E3%83%94%E3%82%B9%E5%90%89%E7%A5%A5%E5%AF%BA%E5%BA%97/data=!4m2!3m1!1s0x6018ee47d2181e63:0x266f114d1229f907", "source": "google-takeout"}, {"id": 10110, "name": "Coppice吉祥寺", "area": "Google Maps 東京清單", "cat": "文化自然", "icon": "⛩️", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Coppice%E5%90%89%E7%A5%A5%E5%AF%BA/data=!4m2!3m1!1s0x6018ee47d4904707:0x5ab0a0a9a61ab68", "source": "google-takeout"}, {"id": 10111, "name": "光專寺", "area": "Google Maps 東京清單", "cat": "文化自然", "icon": "⛩️", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E5%85%89%E5%B0%88%E5%AF%BA/data=!4m2!3m1!1s0x6018ee461417b355:0xba78f475bb74a5aa", "source": "google-takeout"}, {"id": 10112, "name": "月窗寺", "area": "Google Maps 東京清單", "cat": "文化自然", "icon": "⛩️", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E6%9C%88%E7%AA%97%E5%AF%BA/data=!4m2!3m1!1s0x6018ee4646fd8eb1:0xd494a9e232cf5087", "source": "google-takeout"}, {"id": 10113, "name": "吉祥寺LOFT 生活雜貨專門店", "area": "Google Maps 東京清單", "cat": "文化自然", "icon": "⛩️", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E5%90%89%E7%A5%A5%E5%AF%BALOFT+%E7%94%9F%E6%B4%BB%E9%9B%9C%E8%B2%A8%E5%B0%88%E9%96%80%E5%BA%97/data=!4m2!3m1!1s0x6018ee4628804ff3:0x957e4f284abadf98", "source": "google-takeout"}, {"id": 10114, "name": "井之頭弁財天", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E4%BA%95%E4%B9%8B%E9%A0%AD%E5%BC%81%E8%B2%A1%E5%A4%A9/data=!4m2!3m1!1s0x6018ee367044a729:0x8c71e492dd44ba9e", "source": "google-takeout"}, {"id": 10115, "name": "絞肉米飯 吉祥寺店", "area": "Google Maps 東京清單", "cat": "文化自然", "icon": "⛩️", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E7%B5%9E%E8%82%89%E7%B1%B3%E9%A3%AF+%E5%90%89%E7%A5%A5%E5%AF%BA%E5%BA%97/data=!4m2!3m1!1s0x6018ef1dccdcd9a9:0x26e4aeab41bba61f", "source": "google-takeout"}, {"id": 10116, "name": "Yodobashi Camera Multimedia Kichijoji Store", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Yodobashi+Camera+Multimedia+Kichijoji+Store/data=!4m2!3m1!1s0x6018ee470ac2f9f1:0xe2f2d67fbf9a81fc", "source": "google-takeout"}, {"id": 10117, "name": "三井OUTLET PARK 幕張", "area": "Google Maps 東京清單", "cat": "購物", "icon": "🛍️", "minutes": 120, "walk": "待確認", "indoor": true, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E4%B8%89%E4%BA%95OUTLET+PARK+%E5%B9%95%E5%BC%B5/data=!4m2!3m1!1s0x6022821f8b6fffff:0x8e4926ae77dfce2e", "source": "google-takeout"}, {"id": 10118, "name": "路克龍蝦堡 澀谷公園街店", "area": "Google Maps 東京清單", "cat": "文化自然", "icon": "⛩️", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E8%B7%AF%E5%85%8B%E9%BE%8D%E8%9D%A6%E5%A0%A1+%E6%BE%80%E8%B0%B7%E5%85%AC%E5%9C%92%E8%A1%97%E5%BA%97/data=!4m2!3m1!1s0x60188ca8ce3ee4f1:0x79bdeb8554067c2c", "source": "google-takeout"}, {"id": 10119, "name": "Luke’s Lobster（龍蝦堡）", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Luke%E2%80%99s+Lobster%EF%BC%88%E9%BE%8D%E8%9D%A6%E5%A0%A1%EF%BC%89/data=!4m2!3m1!1s0x60188ca408b49a21:0x288b80aabc120b01", "source": "google-takeout"}, {"id": 10120, "name": "宮下公園", "area": "Google Maps 東京清單", "cat": "文化自然", "icon": "⛩️", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E5%AE%AE%E4%B8%8B%E5%85%AC%E5%9C%92/data=!4m2!3m1!1s0x60188de622941551:0x5400fedc2467d9be", "source": "google-takeout"}, {"id": 10121, "name": "澀谷LOFT 生活雜貨專門店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E6%BE%80%E8%B0%B7LOFT+%E7%94%9F%E6%B4%BB%E9%9B%9C%E8%B2%A8%E5%B0%88%E9%96%80%E5%BA%97/data=!4m2!3m1!1s0x60188ca85add52bf:0xc942f69271e3b8b4", "source": "google-takeout"}, {"id": 10122, "name": "澀谷SCRAMBLE SQUARE", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E6%BE%80%E8%B0%B7SCRAMBLE+SQUARE/data=!4m2!3m1!1s0x60188b8427e1c0b1:0x78f6e23397061d6f", "source": "google-takeout"}, {"id": 10123, "name": "東京迪士尼旗艦店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E6%9D%B1%E4%BA%AC%E8%BF%AA%E5%A3%AB%E5%B0%BC%E6%97%97%E8%89%A6%E5%BA%97/data=!4m2!3m1!1s0x60188d4ca91dcd4d:0x1690197cf0618eb2", "source": "google-takeout"}, {"id": 10124, "name": "Hekkelun", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Hekkelun/data=!4m2!3m1!1s0x60188b9335f1bfa9:0xfc09ad2bd1f472c7", "source": "google-takeout"}, {"id": 10125, "name": "ラ カンティーヌ サントル", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E3%83%A9+%E3%82%AB%E3%83%B3%E3%83%86%E3%82%A3%E3%83%BC%E3%83%8C+%E3%82%B5%E3%83%B3%E3%83%88%E3%83%AB/data=!4m2!3m1!1s0x60188b5966eeb507:0x20098c8212dabd8", "source": "google-takeout"}, {"id": 10126, "name": "銀座木村家 總本店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E9%8A%80%E5%BA%A7%E6%9C%A8%E6%9D%91%E5%AE%B6+%E7%B8%BD%E6%9C%AC%E5%BA%97/data=!4m2!3m1!1s0x60188be67fd7649b:0x11837a452f5a1fb5", "source": "google-takeout"}, {"id": 10127, "name": "GAP銀座旗艦店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/GAP%E9%8A%80%E5%BA%A7%E6%97%97%E8%89%A6%E5%BA%97/data=!4m2!3m1!1s0x60188be59574fe75:0xaabda07834c499ea", "source": "google-takeout"}, {"id": 10128, "name": "阪急男士東京店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E9%98%AA%E6%80%A5%E7%94%B7%E5%A3%AB%E6%9D%B1%E4%BA%AC%E5%BA%97/data=!4m2!3m1!1s0x60188be562c880b5:0x79e943ae780264d4", "source": "google-takeout"}, {"id": 10129, "name": "LUMINE 有樂町", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/LUMINE+%E6%9C%89%E6%A8%82%E7%94%BA/data=!4m2!3m1!1s0x60188be57b9220f3:0x1d1bfa06a17c1fc6", "source": "google-takeout"}, {"id": 10130, "name": "無印良品 銀座", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E7%84%A1%E5%8D%B0%E8%89%AF%E5%93%81+%E9%8A%80%E5%BA%A7/data=!4m2!3m1!1s0x60188baa38aecf7d:0xab5a3452172b5f9", "source": "google-takeout"}, {"id": 10131, "name": "東急PLAZA 銀座", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E6%9D%B1%E6%80%A5PLAZA+%E9%8A%80%E5%BA%A7/data=!4m2!3m1!1s0x60188be88f255fcb:0xf6a117f1eb97af26", "source": "google-takeout"}, {"id": 10132, "name": "GINZA SIX", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/GINZA+SIX/data=!4m2!3m1!1s0x60188bef472c0001:0xcfcb0363f18109fc", "source": "google-takeout"}, {"id": 10133, "name": "辻半 日本橋店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E8%BE%BB%E5%8D%8A+%E6%97%A5%E6%9C%AC%E6%A9%8B%E5%BA%97/data=!4m2!3m1!1s0x60188bfd0d57e253:0x211fa4fa71a7c61e", "source": "google-takeout"}, {"id": 10134, "name": "Kirimugiya Jinroku", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Kirimugiya+Jinroku/data=!4m2!3m1!1s0x60188ce9d14ecc6f:0x66eff19972ecfcdf", "source": "google-takeout"}, {"id": 10135, "name": "Kirimugiya Jinroku Naruko", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Kirimugiya+Jinroku+Naruko/data=!4m2!3m1!1s0x60188de2696bbc35:0x840329d8867b82ba", "source": "google-takeout"}, {"id": 10136, "name": "岡半 本店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E5%B2%A1%E5%8D%8A+%E6%9C%AC%E5%BA%97/data=!4m2!3m1!1s0x60188be8b959cf87:0x3407967c10580704", "source": "google-takeout"}, {"id": 10137, "name": "ミルクスタンド 秋葉原店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E3%83%9F%E3%83%AB%E3%82%AF%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%89+%E7%A7%8B%E8%91%89%E5%8E%9F%E5%BA%97/data=!4m2!3m1!1s0x60188c1cffbef7f9:0x32555b592f9181c", "source": "google-takeout"}, {"id": 10138, "name": "河口湖起司蛋糕花園", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E6%B2%B3%E5%8F%A3%E6%B9%96%E8%B5%B7%E5%8F%B8%E8%9B%8B%E7%B3%95%E8%8A%B1%E5%9C%92/data=!4m2!3m1!1s0x60195e26692b7221:0x86ac2a8ad64cbe2", "source": "google-takeout"}, {"id": 10139, "name": "豊福 和牛咖哩麵包", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E8%B1%8A%E7%A6%8F+%E5%92%8C%E7%89%9B%E5%92%96%E5%93%A9%E9%BA%B5%E5%8C%85/data=!4m2!3m1!1s0x60188ec121d0e831:0xc53f747337a0acb5", "source": "google-takeout"}, {"id": 10140, "name": "淺草炸肉餅", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E6%B7%BA%E8%8D%89%E7%82%B8%E8%82%89%E9%A4%85/data=!4m2!3m1!1s0x60188ec121f3c5d5:0x9fe1c9087625b6c6", "source": "google-takeout"}, {"id": 10141, "name": "UNIQLO TOKYO", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/UNIQLO+TOKYO/data=!4m2!3m1!1s0x60188be5ac9444e1:0x3be1b0c166da508b", "source": "google-takeout"}, {"id": 10142, "name": "UNIQLO 銀座店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/UNIQLO+%E9%8A%80%E5%BA%A7%E5%BA%97/data=!4m2!3m1!1s0x60188be66e07d36f:0x45e536859ebe18d3", "source": "google-takeout"}, {"id": 10143, "name": "增上寺", "area": "Google Maps 東京清單", "cat": "文化自然", "icon": "⛩️", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E5%A2%9E%E4%B8%8A%E5%AF%BA/data=!4m2!3m1!1s0x60188bbe91676c0b:0x88a4a86ddb1dbd24", "source": "google-takeout"}, {"id": 10144, "name": "Tsukiji Iroha", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Tsukiji+Iroha/data=!4m2!3m1!1s0x60188b02fa96fc05:0x6b698474efc5b7b", "source": "google-takeout"}, {"id": 10145, "name": "Asahi Honten Tsukiji", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Asahi+Honten+Tsukiji/data=!4m2!3m1!1s0x60188b1079e25fed:0x614cbbfa4217a504", "source": "google-takeout"}, {"id": 10146, "name": "築地山長玉子燒", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E7%AF%89%E5%9C%B0%E5%B1%B1%E9%95%B7%E7%8E%89%E5%AD%90%E7%87%92/data=!4m2!3m1!1s0x60188bded74080a5:0xa83446acc5f0991c", "source": "google-takeout"}, {"id": 10147, "name": "吉澤商店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E5%90%89%E6%BE%A4%E5%95%86%E5%BA%97/data=!4m2!3m1!1s0x60188bdf29aec43d:0x8c7da0a1e8179f03", "source": "google-takeout"}, {"id": 10148, "name": "多慶屋", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E5%A4%9A%E6%85%B6%E5%B1%8B/data=!4m2!3m1!1s0x60188f3d7a96d2ad:0x8ba675baf63ef978", "source": "google-takeout"}, {"id": 10149, "name": "串燒名店 鳥竹", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E4%B8%B2%E7%87%92%E5%90%8D%E5%BA%97+%E9%B3%A5%E7%AB%B9/data=!4m2!3m1!1s0x60188b57ca57cb1f:0x95f8eee476d2572e", "source": "google-takeout"}, {"id": 10150, "name": "Kirby Café", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Kirby+Caf%C3%A9/data=!4m2!3m1!1s0x60188ed644483b7d:0xc4f9088800a80935", "source": "google-takeout"}, {"id": 10151, "name": "Unatoto", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Unatoto/data=!4m2!3m1!1s0x60188e9e5d1c13e9:0x7b919ad73d3cb92c", "source": "google-takeout"}, {"id": 10152, "name": "大統領 本店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E5%A4%A7%E7%B5%B1%E9%A0%98+%E6%9C%AC%E5%BA%97/data=!4m2!3m1!1s0x60188e9882eb388d:0xa520e94ee40763e4", "source": "google-takeout"}, {"id": 10153, "name": "Bic Camera 池袋本店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Bic+Camera+%E6%B1%A0%E8%A2%8B%E6%9C%AC%E5%BA%97/data=!4m2!3m1!1s0x60188d670d1a305f:0x70a1288e7cf0f33f", "source": "google-takeout"}, {"id": 10154, "name": "友都八喜多媒體 秋葉原店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E5%8F%8B%E9%83%BD%E5%85%AB%E5%96%9C%E5%A4%9A%E5%AA%92%E9%AB%94+%E7%A7%8B%E8%91%89%E5%8E%9F%E5%BA%97/data=!4m2!3m1!1s0x60188ea7d9cc4f19:0x7bb917c6708b7376", "source": "google-takeout"}, {"id": 10155, "name": "友都八喜 Yodobashi Camera Multimedia 上野店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E5%8F%8B%E9%83%BD%E5%85%AB%E5%96%9C+Yodobashi+Camera+Multimedia+%E4%B8%8A%E9%87%8E%E5%BA%97/data=!4m2!3m1!1s0x60188e9e6a08d789:0xf4f1be32d9c9d6ba", "source": "google-takeout"}, {"id": 10156, "name": "溫蒂漢堡", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E6%BA%AB%E8%92%82%E6%BC%A2%E5%A0%A1/data=!4m2!3m1!1s0x60188e9eb9e13993:0xd96d3595e1a4fdf0", "source": "google-takeout"}, {"id": 10157, "name": "Andersen Atre Ueno", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Andersen+Atre+Ueno/data=!4m2!3m1!1s0x60188e9c1ad496af:0xaa035d41b9abb0c", "source": "google-takeout"}, {"id": 10158, "name": "OS Drug 上野店藥妝店", "area": "Google Maps 東京清單", "cat": "購物", "icon": "🛍️", "minutes": 120, "walk": "待確認", "indoor": true, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/OS+Drug+%E4%B8%8A%E9%87%8E%E5%BA%97%E8%97%A5%E5%A6%9D%E5%BA%97/data=!4m2!3m1!1s0x60188e9f8d7f0001:0x84247f318693f62c", "source": "google-takeout"}, {"id": 10159, "name": "Nikinokashi", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Nikinokashi/data=!4m2!3m1!1s0x60188e9f91feecf1:0x39021c70b15312cb", "source": "google-takeout"}, {"id": 10160, "name": "鮨 百万石", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E9%AE%A8+%E7%99%BE%E4%B8%87%E7%9F%B3/data=!4m2!3m1!1s0x60188ea20708cc1b:0xfbc25b3dfa8f7911", "source": "google-takeout"}, {"id": 10161, "name": "上野 藪蕎麥", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E4%B8%8A%E9%87%8E+%E8%97%AA%E8%95%8E%E9%BA%A5/data=!4m2!3m1!1s0x60188e9f00990001:0xe5712d18d31d5ab", "source": "google-takeout"}, {"id": 10162, "name": "肉の大山 上野店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E8%82%89%E3%81%AE%E5%A4%A7%E5%B1%B1+%E4%B8%8A%E9%87%8E%E5%BA%97/data=!4m2!3m1!1s0x60188e9e544efcb1:0xd62d92459e3c1d61", "source": "google-takeout"}, {"id": 10163, "name": "燒肉亭 六歌仙", "area": "Google Maps 東京清單", "cat": "美食", "icon": "🍽️", "minutes": 90, "walk": "待確認", "indoor": true, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E7%87%92%E8%82%89%E4%BA%AD+%E5%85%AD%E6%AD%8C%E4%BB%99/data=!4m2!3m1!1s0x60188cd700890879:0x3e5fd755a58636f3", "source": "google-takeout"}, {"id": 10164, "name": "鯛魚燒 くりこ庵", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E9%AF%9B%E9%AD%9A%E7%87%92+%E3%81%8F%E3%82%8A%E3%81%93%E5%BA%B5/data=!4m2!3m1!1s0x6018ee47e6569773:0x7415556c103dbe1f", "source": "google-takeout"}, {"id": 10165, "name": "黑毛和牛炸肉餅 Satou", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E9%BB%91%E6%AF%9B%E5%92%8C%E7%89%9B%E7%82%B8%E8%82%89%E9%A4%85+Satou/data=!4m2!3m1!1s0x6018ee47d8c3ea11:0x480a2b9bf5253a37", "source": "google-takeout"}, {"id": 10166, "name": "Kirarina 京王吉祥寺", "area": "Google Maps 東京清單", "cat": "文化自然", "icon": "⛩️", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Kirarina+%E4%BA%AC%E7%8E%8B%E5%90%89%E7%A5%A5%E5%AF%BA/data=!4m2!3m1!1s0x6018ee380a11861d:0xcd6a3353cfa84940", "source": "google-takeout"}, {"id": 10167, "name": "唐吉軻德 吉祥寺站前店", "area": "Google Maps 東京清單", "cat": "文化自然", "icon": "⛩️", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E5%94%90%E5%90%89%E8%BB%BB%E5%BE%B7+%E5%90%89%E7%A5%A5%E5%AF%BA%E7%AB%99%E5%89%8D%E5%BA%97/data=!4m2!3m1!1s0x6018ee4803af5c2f:0x757fbf13c1a7dd3d", "source": "google-takeout"}, {"id": 10168, "name": "PARCO 吉祥寺", "area": "Google Maps 東京清單", "cat": "文化自然", "icon": "⛩️", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/PARCO+%E5%90%89%E7%A5%A5%E5%AF%BA/data=!4m2!3m1!1s0x6018ee4869213157:0xfbd5aeca18e80fb", "source": "google-takeout"}, {"id": 10169, "name": "丸井吉祥寺店", "area": "Google Maps 東京清單", "cat": "文化自然", "icon": "⛩️", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E4%B8%B8%E4%BA%95%E5%90%89%E7%A5%A5%E5%AF%BA%E5%BA%97/data=!4m2!3m1!1s0x6018ee381ca259a5:0x9aa70328fa61e0c1", "source": "google-takeout"}, {"id": 10170, "name": "艾妥列 吉祥寺店", "area": "Google Maps 東京清單", "cat": "文化自然", "icon": "⛩️", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E8%89%BE%E5%A6%A5%E5%88%97+%E5%90%89%E7%A5%A5%E5%AF%BA%E5%BA%97/data=!4m2!3m1!1s0x6018ee47fa737d5d:0x1112dad8fa4f50e6", "source": "google-takeout"}, {"id": 10171, "name": "Kichijōji Petit Mura", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Kichij%C5%8Dji+Petit+Mura/data=!4m2!3m1!1s0x6018ee494564f00b:0x10f918221a23dade", "source": "google-takeout"}, {"id": 10172, "name": "井之頭恩賜公園", "area": "Google Maps 東京清單", "cat": "文化自然", "icon": "⛩️", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E4%BA%95%E4%B9%8B%E9%A0%AD%E6%81%A9%E8%B3%9C%E5%85%AC%E5%9C%92/data=!4m2!3m1!1s0x6018ee357495662d:0x8067c21dd5e0f34f", "source": "google-takeout"}, {"id": 10173, "name": "野田岩 麻布飯倉本店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E9%87%8E%E7%94%B0%E5%B2%A9+%E9%BA%BB%E5%B8%83%E9%A3%AF%E5%80%89%E6%9C%AC%E5%BA%97/data=!4m2!3m1!1s0x60188bbd2e0de3ad:0xaf851dc1ac96e866", "source": "google-takeout"}, {"id": 10174, "name": "篝 銀座 本店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E7%AF%9D+%E9%8A%80%E5%BA%A7+%E6%9C%AC%E5%BA%97/data=!4m2!3m1!1s0x60188b206409298f:0x82596ca4626f1e33", "source": "google-takeout"}, {"id": 10175, "name": "史努比博物館", "area": "Google Maps 東京清單", "cat": "室內文化", "icon": "🏛️", "minutes": 120, "walk": "待確認", "indoor": true, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E5%8F%B2%E5%8A%AA%E6%AF%94%E5%8D%9A%E7%89%A9%E9%A4%A8/data=!4m2!3m1!1s0x60188b9dd0d97ed3:0x7c0f44073a3c60ce", "source": "google-takeout"}, {"id": 10176, "name": "澀谷車站", "area": "Google Maps 東京清單", "cat": "交通", "icon": "🚉", "minutes": 30, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E6%BE%80%E8%B0%B7%E8%BB%8A%E7%AB%99/data=!4m2!3m1!1s0x60188b563b00109f:0x337328def1e2ab26", "source": "google-takeout"}, {"id": 10177, "name": "澀谷中心街", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E6%BE%80%E8%B0%B7%E4%B8%AD%E5%BF%83%E8%A1%97/data=!4m2!3m1!1s0x60188ca83757a153:0x6f4231232abaf7d1", "source": "google-takeout"}, {"id": 10178, "name": "AFURI 原宿", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/AFURI+%E5%8E%9F%E5%AE%BF/data=!4m2!3m1!1s0x60188cba4d7bad6d:0xcb6d1919ead5d016", "source": "google-takeout"}, {"id": 10179, "name": "阿美橫丁入口", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E9%98%BF%E7%BE%8E%E6%A9%AB%E4%B8%81%E5%85%A5%E5%8F%A3/data=!4m2!3m1!1s0x60188f391c315bef:0x447339e4eb8ca507", "source": "google-takeout"}, {"id": 10180, "name": "仲町通り", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E4%BB%B2%E7%94%BA%E9%80%9A%E3%82%8A/data=!4m2!3m1!1s0x60188ff54a83d5cf:0x2d077b264362d891", "source": "google-takeout"}, {"id": 10181, "name": "阿美橫丁", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E9%98%BF%E7%BE%8E%E6%A9%AB%E4%B8%81/data=!4m2!3m1!1s0x60188f00af83b787:0x654b0a29a45fcf0a", "source": "google-takeout"}, {"id": 10182, "name": "Afternoon Tea Tea Room", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Afternoon+Tea+Tea+Room/data=!4m2!3m1!1s0x60188e9c1baa02ff:0x9899fd0198bb2adc", "source": "google-takeout"}, {"id": 10183, "name": "築地場外市場", "area": "Google Maps 東京清單", "cat": "購物", "icon": "🛍️", "minutes": 120, "walk": "待確認", "indoor": true, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E7%AF%89%E5%9C%B0%E5%A0%B4%E5%A4%96%E5%B8%82%E5%A0%B4/data=!4m2!3m1!1s0x60188b21cd0b675b:0xa26e24a1bf97025c", "source": "google-takeout"}, {"id": 10184, "name": "豪德寺", "area": "Google Maps 東京清單", "cat": "文化自然", "icon": "⛩️", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E8%B1%AA%E5%BE%B7%E5%AF%BA/data=!4m2!3m1!1s0x6018f39f99015555:0x6b0e9ad51be4cac", "source": "google-takeout"}, {"id": 10185, "name": "Shogun Burger Shinjuku", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Shogun+Burger+Shinjuku/data=!4m2!3m1!1s0x60188d527b9db527:0x8d421b36bbcce5f7", "source": "google-takeout"}, {"id": 10186, "name": "SHAKE SHACK Shinjuku Southern Terrace", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/SHAKE+SHACK+Shinjuku+Southern+Terrace/data=!4m2!3m1!1s0x60188cd019870ccf:0xe2cd851965e2608d", "source": "google-takeout"}, {"id": 10187, "name": "今半本店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E4%BB%8A%E5%8D%8A%E6%9C%AC%E5%BA%97/data=!4m2!3m1!1s0x60188ec6ce96eb9f:0xc1072b31f976da56", "source": "google-takeout"}, {"id": 10188, "name": "澀谷 SKY", "area": "Google Maps 東京清單", "cat": "景觀", "icon": "🌇", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E6%BE%80%E8%B0%B7+SKY/data=!4m2!3m1!1s0x60188b6825f61ae1:0x6ff47ee61e522473", "source": "google-takeout"}, {"id": 10189, "name": "忠犬八公像", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E5%BF%A0%E7%8A%AC%E5%85%AB%E5%85%AC%E5%83%8F/data=!4m2!3m1!1s0x60188b57efbd57c7:0x217e9d9fe306fba", "source": "google-takeout"}, {"id": 10190, "name": "平價和牛牛排丼 Red Rock", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E5%B9%B3%E5%83%B9%E5%92%8C%E7%89%9B%E7%89%9B%E6%8E%92%E4%B8%BC+Red+Rock/data=!4m2!3m1!1s0x60188ca337af2f4b:0x4190db1e9a3645bb", "source": "google-takeout"}, {"id": 10191, "name": "明治神宮", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E6%98%8E%E6%B2%BB%E7%A5%9E%E5%AE%AE/data=!4m2!3m1!1s0x60188cb79a4c26e5:0x8fca893849103f73", "source": "google-takeout"}, {"id": 10192, "name": "三鷹之森吉卜力美術館", "area": "Google Maps 東京清單", "cat": "室內文化", "icon": "🏛️", "minutes": 120, "walk": "待確認", "indoor": true, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E4%B8%89%E9%B7%B9%E4%B9%8B%E6%A3%AE%E5%90%89%E5%8D%9C%E5%8A%9B%E7%BE%8E%E8%A1%93%E9%A4%A8/data=!4m2!3m1!1s0x6018ee34e5038c2d:0x4de155903f849205", "source": "google-takeout"}, {"id": 10193, "name": "六本木新城展望台 東京城市景觀", "area": "Google Maps 東京清單", "cat": "景觀", "icon": "🌇", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E5%85%AD%E6%9C%AC%E6%9C%A8%E6%96%B0%E5%9F%8E%E5%B1%95%E6%9C%9B%E5%8F%B0+%E6%9D%B1%E4%BA%AC%E5%9F%8E%E5%B8%82%E6%99%AF%E8%A7%80/data=!4m2!3m1!1s0x60188b770edd442b:0x667ab47030771257", "source": "google-takeout"}, {"id": 10194, "name": "AFURI 六本木交差點", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/AFURI+%E5%85%AD%E6%9C%AC%E6%9C%A8%E4%BA%A4%E5%B7%AE%E9%BB%9E/data=!4m2!3m1!1s0x60188b82ae04f9e7:0xc6b78964c8658353", "source": "google-takeout"}, {"id": 10195, "name": "合味道紀念館 橫濱", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E5%90%88%E5%91%B3%E9%81%93%E7%B4%80%E5%BF%B5%E9%A4%A8+%E6%A9%AB%E6%BF%B1/data=!4m2!3m1!1s0x60185c577b6193dd:0x7368667740b93abe", "source": "google-takeout"}, {"id": 10196, "name": "橫濱紅磚倉庫 2號館", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E6%A9%AB%E6%BF%B1%E7%B4%85%E7%A3%9A%E5%80%89%E5%BA%AB+2%E8%99%9F%E9%A4%A8/data=!4m2!3m1!1s0x60185cf885807149:0x94947dd82acc3d73", "source": "google-takeout"}, {"id": 10197, "name": "GUNDAM FACTORY YOKOHAMA", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/GUNDAM+FACTORY+YOKOHAMA/data=!4m2!3m1!1s0x60185df2887c6bf7:0xc83634d218e1d77d", "source": "google-takeout"}, {"id": 10198, "name": "巨大麵包超人像", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E5%B7%A8%E5%A4%A7%E9%BA%B5%E5%8C%85%E8%B6%85%E4%BA%BA%E5%83%8F/data=!4m2!3m1!1s0x60185dfbde846693:0x48662ecb787588ee", "source": "google-takeout"}, {"id": 10199, "name": "東京押上 京成Richmond酒店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E6%9D%B1%E4%BA%AC%E6%8A%BC%E4%B8%8A+%E4%BA%AC%E6%88%90Richmond%E9%85%92%E5%BA%97/data=!4m2!3m1!1s0x60188f29dc6aaaab:0x818d154dbdc242f4", "source": "google-takeout"}, {"id": 10200, "name": "Izakaya restaurant", "area": "Google Maps 東京清單", "cat": "美食", "icon": "🍽️", "minutes": 90, "walk": "待確認", "indoor": true, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Izakaya+restaurant/data=!4m2!3m1!1s0x60188bc796198749:0xa0dbda7b983c05fa", "source": "google-takeout"}, {"id": 10201, "name": "鳥貴族 浜松町店(5月下旬OPEN予定‼)", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E9%B3%A5%E8%B2%B4%E6%97%8F+%E6%B5%9C%E6%9D%BE%E7%94%BA%E5%BA%97(5%E6%9C%88%E4%B8%8B%E6%97%ACOPEN%E4%BA%88%E5%AE%9A%E2%80%BC)/data=!4m2!3m1!1s0x60188bba2440e769:0x39210801ba411e5", "source": "google-takeout"}, {"id": 10202, "name": "麵創房 無敵家", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E9%BA%B5%E5%89%B5%E6%88%BF+%E7%84%A1%E6%95%B5%E5%AE%B6/data=!4m2!3m1!1s0x60188d682708f977:0x829333b0d73eb2cd", "source": "google-takeout"}, {"id": 10203, "name": "五代目 花山烏冬 銀座店", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E4%BA%94%E4%BB%A3%E7%9B%AE+%E8%8A%B1%E5%B1%B1%E7%83%8F%E5%86%AC+%E9%8A%80%E5%BA%A7%E5%BA%97/data=!4m2!3m1!1s0x60188be095730edd:0xc3804ee1afc7eb9e", "source": "google-takeout"}, {"id": 10204, "name": "Spadium Japon", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Spadium+Japon/data=!4m2!3m1!1s0x6018e9123c74641b:0x156adc84ebf7f6a4", "source": "google-takeout"}, {"id": 10205, "name": "大黑湯", "area": "Google Maps 東京清單", "cat": "其他", "icon": "📍", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E5%A4%A7%E9%BB%91%E6%B9%AF/data=!4m2!3m1!1s0x6018892aaada3a09:0xac9bcb5fc57de4d9", "source": "google-takeout"}, {"id": 10206, "name": "豐洲市場", "area": "Google Maps 東京清單", "cat": "購物", "icon": "🛍️", "minutes": 120, "walk": "待確認", "indoor": true, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E8%B1%90%E6%B4%B2%E5%B8%82%E5%A0%B4/data=!4m2!3m1!1s0x601889f8cfbb8f5b:0xd6bfad0e525033dc", "source": "google-takeout"}, {"id": 10207, "name": "Hotel Tavinos Hamamatsucho", "area": "Google Maps 東京清單", "cat": "住宿", "icon": "🏨", "minutes": 60, "walk": "待確認", "indoor": true, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/Hotel+Tavinos+Hamamatsucho/data=!4m2!3m1!1s0x60188d04161fbed7:0xcab174627e429ccd", "source": "google-takeout"}, {"id": 10208, "name": "淺草寺", "area": "Google Maps 東京清單", "cat": "文化自然", "icon": "⛩️", "minutes": 90, "walk": "待確認", "indoor": false, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E6%B7%BA%E8%8D%89%E5%AF%BA/data=!4m2!3m1!1s0x60188ec1a4463df1:0x6c0d289a8292810d", "source": "google-takeout"}, {"id": 10209, "name": "頂級飯店CABIN 新宿", "area": "Google Maps 東京清單", "cat": "住宿", "icon": "🏨", "minutes": 60, "walk": "待確認", "indoor": true, "note": "從 Google Maps「日本東京」私人清單匯入", "mapUrl": "https://www.google.com/maps/place/%E9%A0%82%E7%B4%9A%E9%A3%AF%E5%BA%97CABIN+%E6%96%B0%E5%AE%BF/data=!4m2!3m1!1s0x60188d27f74eeef5:0x2031fc0b9a2562ee", "source": "google-takeout"}];

const $ = (selector) => document.querySelector(selector);
const byId = (id) => document.getElementById(id);

let state = loadState();

function loadState() {
  const saved = JSON.parse(localStorage.getItem('tokyoFreeChoice') || 'null');
  const base = {
    page: 'browse',
    spots: defaultSpots,
    cat: '全部',
    sourceFilter: '全部',
    query: '',
    selected: [],
    plan: [],
    version: APP_VERSION,
    fontScale: 1,
    hideDuplicates: true,
    startTime: '09:00'
  };
  if (!saved) return base;
  return {
    ...base,
    ...saved,
    spots: Array.isArray(saved.spots) ? saved.spots : defaultSpots,
    selected: Array.isArray(saved.selected) ? saved.selected : [],
    plan: Array.isArray(saved.plan) ? saved.plan : []
  };
}

function save() {
  localStorage.setItem('tokyoFreeChoice', JSON.stringify(state));
}

function migrate() {
  const spotsByUrl = new Set((state.spots || []).map(s => s.mapUrl).filter(Boolean));
  const spotsByName = new Set((state.spots || []).map(s => normalize(s.name)));
  for (const spot of defaultSpots) {
    const newByUrl = spot.mapUrl && !spotsByUrl.has(spot.mapUrl);
    const newByName = !spot.mapUrl && !spotsByName.has(normalize(spot.name));
    if (newByUrl || newByName) state.spots.push(spot);
  }
  state.version = APP_VERSION;
  save();
}

function normalize(value = '') {
  return String(value).trim().toLowerCase().replace(/\s+/g, '');
}

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function go(page) {
  state.page = page;
  save();
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setFontScale(scale) {
  state.fontScale = scale;
  document.documentElement.style.setProperty('--font-scale', scale);
  save();
  toast(scale > 1 ? '文字已放大' : '文字已恢復標準大小');
}

function toggle(id) {
  const index = state.selected.indexOf(id);
  if (index >= 0) {
    state.selected.splice(index, 1);
    toast('已從想去清單移除');
  } else {
    state.selected.push(id);
    toast('已加入想去清單');
  }
  save();
  render();
}

function selectedSpots() {
  const map = new Map(state.spots.map(s => [s.id, s]));
  return state.selected.map(id => map.get(id)).filter(Boolean);
}

function openPlace(id) {
  const spot = state.spots.find(s => s.id === id);
  if (!spot) return;
  const url = spot.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.name + ' 東京')}`;
  window.open(url, '_blank', 'noopener');
}

function navigateTo(id, mode = 'transit') {
  const spot = state.spots.find(s => s.id === id);
  if (!spot) return;
  const destination = [spot.name, spot.area && !spot.area.includes('Google Maps') ? spot.area : '', '日本'].filter(Boolean).join(' ');
  const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}&travelmode=${mode}`;
  window.open(url, '_blank', 'noopener');
}

function sourceLabel(spot) {
  if (spot.source === 'google-takeout') return '我的 Google 清單';
  if (spot.source === 'manual') return '自行新增';
  return '精選景點';
}

function getFilteredSpots() {
  const q = normalize(state.query);
  let list = state.spots.filter(spot => {
    const categoryMatch = state.cat === '全部' || spot.cat === state.cat;
    const source = sourceLabel(spot);
    const sourceMatch = state.sourceFilter === '全部' || source === state.sourceFilter;
    const text = normalize(`${spot.name} ${spot.area || ''} ${spot.note || ''} ${spot.cat || ''}`);
    return categoryMatch && sourceMatch && (!q || text.includes(q));
  });

  if (state.hideDuplicates) {
    const seen = new Set();
    list = list.filter(spot => {
      const key = normalize(spot.name);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }
  return list;
}

let searchTimer;
function handleSearch(value) {
  state.query = value;
  save();
  clearTimeout(searchTimer);
  searchTimer = setTimeout(updateBrowseResults, 160);
}

function clearSearch() {
  state.query = '';
  save();
  const input = byId('searchInput');
  if (input) {
    input.value = '';
    input.focus();
  }
  updateBrowseResults();
}

function updateBrowseResults() {
  if (state.page !== 'browse') return;
  const list = getFilteredSpots();
  const count = byId('resultCount');
  const grid = byId('spotGrid');
  const clear = byId('clearSearch');
  if (count) count.textContent = `找到 ${list.length} 個地點`;
  if (clear) clear.hidden = !state.query;
  if (grid) grid.innerHTML = renderSpotCards(list);
}

function setCategory(category) {
  state.cat = category;
  save();
  render();
}

function setSource(source) {
  state.sourceFilter = source;
  save();
  render();
}

function toggleDuplicates() {
  state.hideDuplicates = !state.hideDuplicates;
  save();
  render();
}

function renderSpotCards(list) {
  if (!list.length) {
    return `<div class="empty-state">
      <div class="empty-icon">🔎</div>
      <h3>找不到符合的地點</h3>
      <p>可以換個關鍵字、選擇其他分類，或新增自己的景點。</p>
      <button class="btn primary" onclick="clearAllFilters()">清除篩選條件</button>
    </div>`;
  }

  return list.map(spot => `
    <article class="spot-card">
      <div class="spot-head">
        <div class="spot-icon" aria-hidden="true">${escapeHtml(spot.icon || '📍')}</div>
        <div class="spot-title-wrap">
          <h3>${escapeHtml(spot.name)}</h3>
          <div class="spot-sub">${escapeHtml(sourceLabel(spot))}</div>
        </div>
        <button class="heart ${state.selected.includes(spot.id) ? 'active' : ''}"
          onclick="toggle(${spot.id})"
          aria-label="${state.selected.includes(spot.id) ? '從想去清單移除' : '加入想去清單'}">
          ${state.selected.includes(spot.id) ? '♥' : '♡'}
        </button>
      </div>

      <div class="spot-info">
        <span>📂 ${escapeHtml(spot.cat || '其他')}</span>
        <span>⏱ ${formatDuration(spot.minutes || 90)}</span>
        <span>🚶 ${escapeHtml(spot.walk || '待確認')}</span>
      </div>

      ${spot.note ? `<p class="spot-note">${escapeHtml(spot.note)}</p>` : ''}

      <div class="card-actions">
        <button class="btn secondary" onclick="openPlace(${spot.id})">查看地點</button>
        <button class="btn primary" onclick="navigateTo(${spot.id}, 'transit')">大眾運輸導航</button>
      </div>
    </article>
  `).join('');
}

function clearAllFilters() {
  state.query = '';
  state.cat = '全部';
  state.sourceFilter = '全部';
  save();
  render();
}

function formatDuration(minutes) {
  if (minutes < 60) return `${minutes} 分鐘`;
  if (minutes % 60 === 0) return `${minutes / 60} 小時`;
  return `${Math.floor(minutes / 60)} 小時 ${minutes % 60} 分`;
}

function browsePage() {
  const categories = ['全部', ...new Set(state.spots.map(s => s.cat).filter(Boolean))];
  const sources = ['全部', '我的 Google 清單', '精選景點', '自行新增'];
  const list = getFilteredSpots();

  return `
    <section class="welcome">
      <div class="welcome-copy">
        <small>你的東京旅行收藏</small>
        <h1>今天想去哪裡？</h1>
        <p>搜尋景點、加入想去清單，再直接開啟 Google Maps 導航。</p>
      </div>
      <div class="stat">${state.spots.length}<span>個地點</span></div>
    </section>

    <section class="search-panel" aria-label="搜尋與篩選">
      <label class="search-label" for="searchInput">搜尋景點</label>
      <div class="search-wrap">
        <span aria-hidden="true">🔎</span>
        <input id="searchInput" class="search-input" value="${escapeHtml(state.query)}"
          placeholder="例如：六歌仙、淺草、燒肉"
          oninput="handleSearch(this.value)"
          autocomplete="off">
        <button id="clearSearch" class="clear-search" onclick="clearSearch()" ${state.query ? '' : 'hidden'} aria-label="清除搜尋">✕</button>
      </div>

      <div class="filter-block">
        <div class="filter-title">資料來源</div>
        <div class="chips">
          ${sources.map(source => `<button class="chip ${state.sourceFilter === source ? 'active' : ''}" onclick="setSource('${source}')">${source}</button>`).join('')}
        </div>
      </div>

      <details class="category-details" ${state.cat !== '全部' ? 'open' : ''}>
        <summary>景點分類 ${state.cat !== '全部' ? `・${escapeHtml(state.cat)}` : ''}</summary>
        <div class="chips category-chips">
          ${categories.map(category => `<button class="chip ${state.cat === category ? 'active' : ''}" onclick="setCategory('${escapeHtml(category)}')">${escapeHtml(category)}</button>`).join('')}
        </div>
      </details>

      <label class="switch-row">
        <input type="checkbox" ${state.hideDuplicates ? 'checked' : ''} onchange="toggleDuplicates()">
        <span>隱藏同名重複地點</span>
      </label>
    </section>

    <div class="results-bar">
      <strong id="resultCount">找到 ${list.length} 個地點</strong>
      ${(state.query || state.cat !== '全部' || state.sourceFilter !== '全部') ? `<button onclick="clearAllFilters()">清除篩選</button>` : ''}
    </div>

    <section id="spotGrid" class="spot-grid">${renderSpotCards(list)}</section>
  `;
}

function chosenPage() {
  const list = selectedSpots();
  if (!list.length) {
    return `
      <section class="page-section">
        <h1>想去清單</h1>
        <div class="empty-state card">
          <div class="empty-icon">♡</div>
          <h3>還沒有加入景點</h3>
          <p>到「找景點」按愛心或「＋想去」，就會出現在這裡。</p>
          <button class="btn primary" onclick="go('browse')">開始找景點</button>
        </div>
      </section>`;
  }

  return `
    <section class="page-section">
      <div class="page-heading">
        <div><h1>想去清單</h1><p>共 ${list.length} 個地點，可調整順序後產生行程。</p></div>
        <button class="text-button danger" onclick="clearSelected()">全部清除</button>
      </div>

      <div class="chosen-list">
        ${list.map((spot, index) => `
          <article class="chosen-card">
            <div class="order">${index + 1}</div>
            <div class="chosen-main">
              <h3>${escapeHtml(spot.name)}</h3>
              <p>${escapeHtml(spot.cat || '其他')}・${formatDuration(spot.minutes || 90)}</p>
              <div class="chosen-actions">
                <button onclick="openPlace(${spot.id})">地圖</button>
                <button onclick="navigateTo(${spot.id}, 'transit')">導航</button>
              </div>
            </div>
            <div class="order-controls">
              <button onclick="moveSelected(${index}, -1)" ${index === 0 ? 'disabled' : ''} aria-label="往上移">↑</button>
              <button onclick="moveSelected(${index}, 1)" ${index === list.length - 1 ? 'disabled' : ''} aria-label="往下移">↓</button>
              <button class="remove-small" onclick="toggle(${spot.id})" aria-label="移除">✕</button>
            </div>
          </article>
        `).join('')}
      </div>

      <div class="sticky-action">
        <button class="btn primary full" onclick="makePlan()">依目前順序建立行程</button>
      </div>
    </section>`;
}

function moveSelected(index, direction) {
  const target = index + direction;
  if (target < 0 || target >= state.selected.length) return;
  [state.selected[index], state.selected[target]] = [state.selected[target], state.selected[index]];
  save();
  render();
}

function clearSelected() {
  if (!confirm('確定要清除全部想去景點嗎？')) return;
  state.selected = [];
  state.plan = [];
  save();
  render();
}

function addPage() {
  return `
    <section class="page-section">
      <h1>新增景點</h1>
      <div class="tip-card">
        <strong>最簡單的新增方式</strong>
        <ol>
          <li>在 Google Maps 找到地點</li>
          <li>按「分享」並複製連結</li>
          <li>將名稱與連結貼到下方</li>
        </ol>
      </div>

      <form class="form-card" onsubmit="addCustom(event)">
        <label for="n">景點名稱 <span class="required">必填</span></label>
        <input id="n" required placeholder="例如：六歌仙燒肉">

        <label for="u">Google Maps 分享連結</label>
        <input id="u" inputmode="url" placeholder="https://maps.app.goo.gl/...">
        <div class="help">貼上連結後，「查看地點」會直接開啟該地點。</div>

        <div class="two-col">
          <div>
            <label for="a">所在區域</label>
            <input id="a" placeholder="例如：新宿">
          </div>
          <div>
            <label for="c">類型</label>
            <select id="c">
              <option>美食</option><option>文化</option><option>景觀</option>
              <option>購物</option><option>自然</option><option>室內</option>
              <option>住宿</option><option>交通</option><option>其他</option>
            </select>
          </div>
        </div>

        <div class="two-col">
          <div>
            <label for="m">停留時間</label>
            <select id="m">
              <option value="30">30 分鐘</option><option value="60">1 小時</option>
              <option value="90" selected>1.5 小時</option><option value="120">2 小時</option>
              <option value="180">3 小時</option>
            </select>
          </div>
          <div>
            <label for="w">步行程度</label>
            <select id="w">
              <option>輕鬆</option><option>普通</option><option>較多步行</option><option selected>待確認</option>
            </select>
          </div>
        </div>

        <label for="t">備註</label>
        <textarea id="t" placeholder="例如：需要預約、晚餐候選、朋友推薦"></textarea>

        <button class="btn primary full" type="submit">儲存這個景點</button>
      </form>

      ${manualSpotsSection()}
    </section>`;
}

function manualSpotsSection() {
  const manual = state.spots.filter(s => s.source === 'manual');
  if (!manual.length) return '';
  return `
    <section class="manual-section">
      <h2>我自行新增的景點</h2>
      ${manual.map(s => `
        <div class="manual-row">
          <div><strong>${escapeHtml(s.name)}</strong><span>${escapeHtml(s.area || '未填區域')}</span></div>
          <button onclick="deleteManual(${s.id})">刪除</button>
        </div>`).join('')}
    </section>`;
}

function addCustom(event) {
  event.preventDefault();
  const name = byId('n').value.trim();
  const mapUrl = byId('u').value.trim();

  if (!name) return toast('請輸入景點名稱');
  if (mapUrl && !/^https?:\/\//i.test(mapUrl)) return toast('Google Maps 連結格式不正確');

  const spot = {
    id: Date.now(),
    name,
    area: byId('a').value.trim() || '自訂',
    cat: byId('c').value,
    icon: '📍',
    minutes: Number(byId('m').value),
    walk: byId('w').value,
    indoor: false,
    note: byId('t').value.trim() || '自行新增的景點',
    mapUrl,
    source: 'manual'
  };

  state.spots.unshift(spot);
  state.selected.push(spot.id);
  save();
  toast('已新增並加入想去清單');
  setTimeout(() => go('chosen'), 500);
}

function deleteManual(id) {
  const spot = state.spots.find(s => s.id === id);
  if (!spot || !confirm(`確定刪除「${spot.name}」嗎？`)) return;
  state.spots = state.spots.filter(s => s.id !== id);
  state.selected = state.selected.filter(selectedId => selectedId !== id);
  state.plan = state.plan.filter(s => s.id !== id);
  save();
  render();
}

function makePlan() {
  const list = selectedSpots();
  const [hours, minutes] = (state.startTime || '09:00').split(':').map(Number);
  let time = hours * 60 + minutes;
  state.plan = list.map(spot => {
    const item = { ...spot, start: time };
    time += (spot.minutes || 90) + 30;
    return item;
  });
  save();
  go('plan');
}

function setStartTime(value) {
  state.startTime = value;
  save();
  if (state.plan.length) makePlan();
}

function formatClock(total) {
  const hours = Math.floor(total / 60) % 24;
  const minutes = total % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

function planPage() {
  if (!state.plan.length) {
    return `
      <section class="page-section">
        <h1>我的行程</h1>
        <div class="empty-state card">
          <div class="empty-icon">🗓️</div>
          <h3>尚未建立行程</h3>
          <p>先加入想去景點，再依順序建立行程。</p>
          <button class="btn primary" onclick="go('chosen')">前往想去清單</button>
        </div>
      </section>`;
  }

  return `
    <section class="page-section">
      <div class="page-heading">
        <div><h1>我的行程</h1><p>時間是概略安排，景點間預留 30 分鐘移動。</p></div>
      </div>

      <label class="start-time">出發時間
        <input type="time" value="${state.startTime || '09:00'}" onchange="setStartTime(this.value)">
      </label>

      <div class="timeline">
        ${state.plan.map((spot, index) => `
          <article class="timeline-item">
            <div class="timeline-time">${formatClock(spot.start)}</div>
            <div class="timeline-dot"></div>
            <div class="timeline-card">
              <small>第 ${index + 1} 站</small>
              <h3>${escapeHtml(spot.name)}</h3>
              <p>${formatDuration(spot.minutes || 90)}・${escapeHtml(spot.cat || '其他')}</p>
              <div class="travel-buttons">
                <button onclick="navigateTo(${spot.id}, 'transit')">🚆 大眾運輸</button>
                <button onclick="navigateTo(${spot.id}, 'walking')">🚶 步行</button>
              </div>
            </div>
          </article>
        `).join('')}
      </div>

      <button class="btn secondary full" onclick="go('chosen')">返回調整順序</button>
    </section>`;
}

function toast(message) {
  let element = byId('toast');
  if (!element) {
    element = document.createElement('div');
    element.id = 'toast';
    element.className = 'toast';
    element.setAttribute('role', 'status');
    document.body.appendChild(element);
  }
  element.textContent = message;
  element.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => element.classList.remove('show'), 1800);
}

function render() {
  document.documentElement.style.setProperty('--font-scale', state.fontScale || 1);
  const pages = {
    browse: browsePage,
    chosen: chosenPage,
    add: addPage,
    plan: planPage
  };
  const body = (pages[state.page] || browsePage)();

  byId('app').innerHTML = `
    <div class="shell">
      <header class="topbar">
        <button class="brand" onclick="go('browse')" aria-label="回到景點搜尋">
          <span>🗼</span>
          <div><small>東京自由行</small><strong>我的景點清單</strong></div>
        </button>
        <div class="top-actions">
          <button class="font-button" onclick="setFontScale(${state.fontScale > 1 ? 1 : 1.12})">${state.fontScale > 1 ? '標準字' : '放大字'}</button>
          <button class="selected-count" onclick="go('chosen')">♥ ${state.selected.length}</button>
        </div>
      </header>

      <main>${body}</main>

      <nav class="bottom-nav" aria-label="主要功能">
        <button class="${state.page === 'browse' ? 'active' : ''}" onclick="go('browse')"><span>🔎</span><b>找景點</b></button>
        <button class="${state.page === 'chosen' ? 'active' : ''}" onclick="go('chosen')"><span>♥</span><b>想去</b></button>
        <button class="${state.page === 'add' ? 'active' : ''}" onclick="go('add')"><span>＋</span><b>新增</b></button>
        <button class="${state.page === 'plan' ? 'active' : ''}" onclick="go('plan')"><span>🗓</span><b>行程</b></button>
      </nav>
    </div>`;
}

migrate();
render();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!sessionStorage.getItem('reloaded-v6')) {
      sessionStorage.setItem('reloaded-v6', '1');
      window.location.reload();
    }
  });
}
