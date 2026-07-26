
const defaultSpots=[{"id": 1, "name": "淺草寺", "area": "淺草", "cat": "文化", "icon": "🏯", "minutes": 90, "walk": "輕鬆", "indoor": false, "note": "東京代表性寺院，周邊可一起逛仲見世商店街。"}, {"id": 2, "name": "仲見世商店街", "area": "淺草", "cat": "購物", "icon": "🏮", "minutes": 60, "walk": "輕鬆", "indoor": false, "note": "適合買伴手禮與品嚐傳統小吃。"}, {"id": 3, "name": "東京晴空塔", "area": "押上", "cat": "景觀", "icon": "🗼", "minutes": 120, "walk": "輕鬆", "indoor": true, "note": "有電梯與室內空間，適合看城市景色。"}, {"id": 4, "name": "墨田水族館", "area": "押上", "cat": "室內", "icon": "🐧", "minutes": 90, "walk": "輕鬆", "indoor": true, "note": "室內景點，適合下雨或想輕鬆走。"}, {"id": 5, "name": "上野公園", "area": "上野", "cat": "自然", "icon": "🌳", "minutes": 90, "walk": "普通", "indoor": false, "note": "公園範圍大，可依體力自由調整停留時間。"}, {"id": 6, "name": "東京國立博物館", "area": "上野", "cat": "文化", "icon": "🏛️", "minutes": 150, "walk": "輕鬆", "indoor": true, "note": "適合喜歡日本歷史與文化的人。"}, {"id": 7, "name": "阿美橫町", "area": "上野", "cat": "美食", "icon": "🍢", "minutes": 90, "walk": "普通", "indoor": false, "note": "市場街區，可吃東西與買藥妝。"}, {"id": 8, "name": "秋葉原電器街", "area": "秋葉原", "cat": "購物", "icon": "🎮", "minutes": 120, "walk": "普通", "indoor": true, "note": "電器、動漫與特色商店集中。"}, {"id": 9, "name": "東京車站丸之內", "area": "東京站", "cat": "地標", "icon": "🚉", "minutes": 60, "walk": "輕鬆", "indoor": true, "note": "交通方便，適合拍照與逛周邊商場。"}, {"id": 10, "name": "KITTE丸之內", "area": "東京站", "cat": "購物", "icon": "🏬", "minutes": 90, "walk": "輕鬆", "indoor": true, "note": "室內商場，有餐廳與休息空間。"}, {"id": 11, "name": "築地場外市場", "area": "築地", "cat": "美食", "icon": "🍣", "minutes": 120, "walk": "普通", "indoor": false, "note": "適合早上前往，海鮮與小吃選擇多。"}, {"id": 12, "name": "銀座", "area": "銀座", "cat": "購物", "icon": "💎", "minutes": 150, "walk": "普通", "indoor": true, "note": "百貨、餐廳與品牌店集中。"}, {"id": 13, "name": "東京鐵塔", "area": "芝公園", "cat": "景觀", "icon": "🗼", "minutes": 120, "walk": "輕鬆", "indoor": true, "note": "經典東京地標，可搭電梯上展望台。"}, {"id": 14, "name": "增上寺", "area": "芝公園", "cat": "文化", "icon": "🏯", "minutes": 60, "walk": "輕鬆", "indoor": false, "note": "可與東京鐵塔安排在同一區。"}, {"id": 15, "name": "teamLab Borderless", "area": "麻布台", "cat": "室內", "icon": "✨", "minutes": 150, "walk": "普通", "indoor": true, "note": "熱門數位藝術展，建議事先預約。"}, {"id": 16, "name": "澀谷十字路口", "area": "澀谷", "cat": "地標", "icon": "🚦", "minutes": 30, "walk": "輕鬆", "indoor": false, "note": "東京代表性街景，適合拍照。"}, {"id": 17, "name": "SHIBUYA SKY", "area": "澀谷", "cat": "景觀", "icon": "🌇", "minutes": 90, "walk": "輕鬆", "indoor": true, "note": "熱門展望景點，建議提前購票。"}, {"id": 18, "name": "明治神宮", "area": "原宿", "cat": "文化", "icon": "⛩️", "minutes": 120, "walk": "較多步行", "indoor": false, "note": "森林步道較長，適合體力較好時前往。"}, {"id": 19, "name": "表參道", "area": "表參道", "cat": "購物", "icon": "🛍️", "minutes": 120, "walk": "普通", "indoor": true, "note": "建築、咖啡與購物店家集中。"}, {"id": 20, "name": "新宿御苑", "area": "新宿", "cat": "自然", "icon": "🌿", "minutes": 120, "walk": "普通", "indoor": false, "note": "大型庭園，適合散步與休息。"}, {"id": 21, "name": "東京都廳展望室", "area": "新宿", "cat": "景觀", "icon": "🏙️", "minutes": 60, "walk": "輕鬆", "indoor": true, "note": "室內展望空間，交通方便。"}, {"id": 22, "name": "思出橫丁", "area": "新宿", "cat": "美食", "icon": "🍢", "minutes": 60, "walk": "輕鬆", "indoor": false, "note": "適合晚餐與體驗東京老街氛圍。"}, {"id": 23, "name": "池袋太陽城", "area": "池袋", "cat": "室內", "icon": "🏬", "minutes": 150, "walk": "輕鬆", "indoor": true, "note": "購物、餐飲與室內景點集中。"}, {"id": 24, "name": "teamLab Planets", "area": "豐洲", "cat": "室內", "icon": "💡", "minutes": 150, "walk": "普通", "indoor": true, "note": "沉浸式展覽，建議提前購票。"}, {"id": 25, "name": "台場海濱公園", "area": "台場", "cat": "自然", "icon": "🌊", "minutes": 90, "walk": "普通", "indoor": false, "note": "可看海景與彩虹大橋。"}, {"id": 26, "name": "DiverCity東京", "area": "台場", "cat": "購物", "icon": "🤖", "minutes": 150, "walk": "輕鬆", "indoor": true, "note": "鋼彈地標、商場與餐廳集中。"}, {"id": 27, "name": "豪德寺", "area": "世田谷", "cat": "文化", "icon": "🐈", "minutes": 90, "walk": "普通", "indoor": false, "note": "招財貓寺院，適合喜歡特色景點的人。"}, {"id": 28, "name": "井之頭恩賜公園", "area": "吉祥寺", "cat": "自然", "icon": "🦆", "minutes": 120, "walk": "普通", "indoor": false, "note": "公園與湖景，適合散步。"}, {"id": 29, "name": "三鷹之森吉卜力美術館", "area": "三鷹", "cat": "室內", "icon": "🎬", "minutes": 150, "walk": "普通", "indoor": true, "note": "需事先預約購票。"}, {"id": 30, "name": "東京迪士尼海洋", "area": "舞濱", "cat": "樂園", "icon": "🌋", "minutes": 600, "walk": "較多步行", "indoor": false, "note": "適合安排一整天，步行時間較長。"}];
let state=JSON.parse(localStorage.getItem('tokyoFreeChoice')||'null')||{page:'browse',spots:defaultSpots,cat:'全部',query:'',selected:[],plan:[]};
function save(){localStorage.setItem('tokyoFreeChoice',JSON.stringify(state));}
function go(p){state.page=p;save();render();scrollTo(0,0)}
function toggle(id){const i=state.selected.indexOf(id);if(i>=0)state.selected.splice(i,1);else state.selected.push(id);save();render();}
function selectedSpots(){return state.spots.filter(s=>state.selected.includes(s.id));}
function browse(){
 const cats=['全部',...new Set(state.spots.map(s=>s.cat))];
 const list=state.spots.filter(s=>(state.cat==='全部'||s.cat===state.cat)&&(!state.query||s.name.includes(state.query)||s.area.includes(state.query)));
 return `<div class="hero"><small>東京自由行景點資料庫</small><h1>想去哪裡，自己選</h1><p>瀏覽大量景點，也可以自己新增，再自由決定今天要去哪裡。</p><input class="search" placeholder="搜尋景點或地區" value="${state.query}" oninput="state.query=this.value;save();render()"></div>
 <div class="filters">${cats.map(c=>`<button class="filter ${state.cat===c?'on':''}" onclick="state.cat='${c}';save();render()">${c}</button>`).join('')}</div>
 <div class="grid">${list.map(s=>`<article class="spot"><div class="icon">${s.icon}</div><h3>${s.name}</h3><div class="meta">${s.area}｜${s.minutes} 分鐘｜${s.walk}</div><div class="note">${s.note}</div><div class="tagrow"><span class="tag">${s.cat}</span><span class="tag">${s.indoor?'室內':'戶外'}</span></div><div class="actions"><button class="btn secondary" onclick="window.open('https://www.google.com/maps/search/?api=1&query='+encodeURIComponent('${s.name} 東京'),'_blank')">地圖</button><button class="btn primary ${state.selected.includes(s.id)?'selected':''}" onclick="toggle(${s.id})">${state.selected.includes(s.id)?'✓ 已選擇':'＋ 想去'}</button></div></article>`).join('')}</div>`;
}
function chosen(){
 const list=selectedSpots();
 return `<div class="section"><h2>我想去的景點</h2>${!list.length?'<div class="empty">還沒有選擇景點</div>':list.map(s=>`<div class="card row"><div class="rowIcon">${s.icon}</div><div><strong>${s.name}</strong><div class="meta">${s.area}｜${s.minutes} 分鐘</div></div><button class="remove" onclick="toggle(${s.id})">移除</button></div>`).join('')}
 ${list.length?'<button class="btn primary full" onclick="makePlan()">依區域整理建議順序</button>':''}</div>`;
}
function addPage(){
 return `<div class="section"><h2>新增自己的景點</h2><div class="card form">
 <label>景點名稱</label><input id="n" placeholder="例如：想吃的餐廳">
 <label>所在區域</label><input id="a" placeholder="例如：新宿">
 <label>類型</label><select id="c"><option>文化</option><option>景觀</option><option>美食</option><option>購物</option><option>自然</option><option>室內</option><option>其他</option></select>
 <label>預計停留時間</label><select id="m"><option value="30">30 分鐘</option><option value="60">1 小時</option><option value="90">1.5 小時</option><option value="120">2 小時</option><option value="180">3 小時</option></select>
 <label>步行程度</label><select id="w"><option>輕鬆</option><option>普通</option><option>較多步行</option></select>
 <label>備註</label><textarea id="t" placeholder="例如：朋友推薦、需要預約、想吃的餐廳"></textarea>
 <button class="btn primary full" onclick="addCustom()">新增到景點資料庫</button></div></div>`;
}
function addCustom(){
 const name=document.getElementById('n').value.trim();
 if(!name)return alert('請輸入景點名稱');
 state.spots.push({id:Date.now(),name,area:document.getElementById('a').value||'自訂',cat:document.getElementById('c').value,icon:'📍',minutes:Number(document.getElementById('m').value),walk:document.getElementById('w').value,indoor:false,note:document.getElementById('t').value||'自行新增的景點'});
 save();alert('已新增景點');go('browse');
}
function makePlan(){
 let list=selectedSpots().slice().sort((a,b)=>a.area.localeCompare(b.area,'zh-Hant'));
 let t=9*60;
 state.plan=list.map(s=>{let start=t;t+=s.minutes+30;return {...s,start}});
 save();go('plan');
}
function fmt(m){return String(Math.floor(m/60)).padStart(2,'0')+':'+String(m%60).padStart(2,'0')}
function plan(){
 return `<div class="section"><h2>今日景點順序</h2><div class="notice">這裡只是協助把已選景點依區域整理，不會限制爸媽一定要照順序走，隨時都能改。</div>${!state.plan.length?'<div class="empty">尚未產生行程</div>':state.plan.map(s=>`<div class="card planitem"><div class="time">${fmt(s.start)}</div><div><strong>${s.icon} ${s.name}</strong><div class="meta">${s.area}｜停留約 ${s.minutes} 分鐘</div><button class="btn secondary full" onclick="window.open('https://www.google.com/maps/search/?api=1&query='+encodeURIComponent('${s.name} 東京'),'_blank')">開啟地圖</button></div></div>`).join('')}</div>`;
}
function render(){
 const body=state.page==='browse'?browse():state.page==='chosen'?chosen():state.page==='add'?addPage():plan();
 document.getElementById('app').innerHTML=`<div class="shell"><header class="top"><div><small>長輩自由行助手</small><strong>東京自由選景點</strong></div><button class="count" onclick="go('chosen')">已選 ${state.selected.length}</button></header><main>${body}</main><nav class="bottom"><button class="${state.page==='browse'?'on':''}" onclick="go('browse')">🗺️<span>景點</span></button><button class="${state.page==='chosen'?'on':''}" onclick="go('chosen')">❤️<span>想去</span></button><button class="${state.page==='add'?'on':''}" onclick="go('add')">➕<span>新增</span></button><button class="${state.page==='plan'?'on':''}" onclick="go('plan')">🗓️<span>行程</span></button></nav></div>`;
}
render();
