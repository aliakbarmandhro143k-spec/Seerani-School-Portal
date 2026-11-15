const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const WA='923332597174';
const NAV=[["home","Home","گھر","ہوم","🏠"],["papers","Past Papers","پراڻا پيپر","پرانے پرچے","📝"],["achievements","Achievements","ڪاميابيون","کامیابیاں","🏆"],["library","Library","لائبريري","لائبریری","📚"],["quiz","Quizzes","ڪوئز","کوئز","❓"],["teachers","Teachers","استاد","اساتذہ","👨‍🏫"],["news","News","خبرون","خبریں","📢"],["gallery","Gallery","گيلري","گیلری","📷"],["steam","STEAM","اسٽيم","اسٹیم","🔬"],["careers","Careers","ڪيريئر","کیریئر","🎓"],["calendar","Calendar","ڪئلينڊر","کیلنڈر","📅"],["english","English","انگريزي","انگریزی","🔤"],["safe","Stay Safe","محفوظ","محفوظ","🛡️"],["report","Report","رپورٽ","رپورٹ","⚠️"],["contact","Contact","رابطو","رابطہ","📞"]];
const E=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const samp=t=>t.startsWith('Sample')?'<span class="tag">Sample</span>':'';
const cls=n=>n?'Class '+n:'All classes';
let lang='en';
function nav(){const i={en:1,sd:2,ur:3}[lang];$('#nav').innerHTML=NAV.map(n=>`<a href="#${n[0]}">${n[4]} ${n[i]}</a>`).join('');
 $('#tiles').innerHTML=NAV.slice(1).map(n=>`<a class="card" href="#${n[0]}"><div class="em">${n[4]}</div><h3>${n[i]}</h3></a>`).join('');mark()}
function mark(){const id=location.hash.slice(1)||'home';$$('nav a').forEach(a=>a.classList.toggle('on',a.hash=='#'+id))}
function go(){let id=location.hash.slice(1)||'home';if(!$('#'+id))id='home';$$('main>section').forEach(s=>s.hidden=s.id!==id);mark();scrollTo(0,0)}
addEventListener('hashchange',go);
$$('.lang button').forEach(b=>b.onclick=()=>{lang=b.dataset.l;document.documentElement.lang=lang;document.documentElement.dir=lang=='en'?'ltr':'rtl';$$('.lang button').forEach(x=>x.classList.toggle('on',x==b));nav()});
const file=f=>f?`<a class="btn" href="${E(f)}" target="_blank" rel="noopener">Preview</a> <a class="btn alt" href="${E(f)}" download>Download</a>`:'<span class="note">PDF not added yet</span>';
const rowCard=r=>`<div class="card"><h3>${E(r[0])}</h3>${samp(r[0])}<span class="tag s">${cls(r[1])}</span><span class="tag s">${E(r[2])}</span><span class="tag">${E(r[3])}</span><p>${file(r[4])}</p></div>`;
function filtered(key){const box=$(`.filters[data-box=${key}]`);const c=box.querySelector('.c').value,s=box.querySelector('.s').value;
 $('#'+key+'-list').innerHTML=D[key].filter(r=>(c=='0'||r[1]==c||r[1]==0)&&(s==''||r[2]==s)).map(rowCard).join('')||'<p class="note">Nothing found. Try another class or subject.</p>'}
['papers','library'].forEach(k=>{const subs=[...new Set(D[k].map(r=>r[2]))].sort();
 $(`.filters[data-box=${k}]`).innerHTML=`<select class="c" aria-label="Class"><option value="0">All classes</option>${[6,7,8,9,10].map(c=>`<option>${c}</option>`).join('')}</select><select class="s" aria-label="Subject"><option value="">All subjects</option>${subs.map(s=>`<option>${E(s)}</option>`).join('')}</select>`;
 $$(`.filters[data-box=${k}] select`).forEach(s=>s.onchange=()=>filtered(k));filtered(k)});
const ph=(src,alt,ic)=>src?`<img class="ph" src="${E(src)}" alt="${E(alt)}" loading="lazy" onerror="this.outerHTML='<div class=ph>${ic}</div>'">`:`<div class="ph">${ic}</div>`;
$('#ach-list').innerHTML=D.achievements.map(a=>`<div class="card">${ph(a[3],a[0],'🏅')}<h3>${E(a[0])}</h3><span class="tag s">Class ${a[1]}</span><p>${E(a[2])}</p></div>`).join('');
$('#teachers-list').innerHTML=D.teachers.map(t=>`<div class="card">${ph(t[4],t[0],'👤')}<h3>${E(t[0])}</h3><p><b>${E(t[3])}</b><br>${E(t[1])}<br>Subject: ${E(t[2])}</p></div>`).join('');
const news=D.news.map(n=>`<div class="card"><span class="tag">${E(n[3])}</span><h3>${E(n[1])}</h3><p class="note">${E(n[0])}</p><p>${E(n[2])}</p></div>`).join('');
$('#news-list').innerHTML=news;$('#homenews').innerHTML=D.news.slice(0,3).map(n=>`<div class="card"><span class="tag">${E(n[3])}</span><h3>${E(n[1])}</h3><p class="note">${E(n[0])}</p></div>`).join('');
$('#gallery-list').innerHTML=D.gallery.map(g=>`<figure class="card" style="margin:0">${ph('images/gallery/'+g[0],g[1],'📷')}<figcaption>${E(g[1])}</figcaption></figure>`).join('');
$('#steam-list').innerHTML=D.steam.map(p=>`<div class="card">${ph('',p[0],'🔧')}<h3>${E(p[0])}</h3><p><b>Students:</b> ${E(p[1])}<br><b>Materials:</b> ${E(p[2])}</p><p>${E(p[3])}</p>${p[4]?`<a class="btn" href="${E(p[4])}" target="_blank" rel="noopener">Watch video</a>`:''}</div>`).join('');
$('#careers-list').innerHTML=D.careers.map(c=>`<div class="card"><h3>${E(c[0])}</h3><p>${E(c[1])}</p>${c[2]?`<a class="btn" href="${E(c[2])}" target="_blank" rel="noopener">Visit website</a>`:''}</div>`).join('');
$('#cal-list').innerHTML='<table><tr><th>Date</th><th>Event</th><th>Type</th></tr>'+D.calendar.map(r=>`<tr><td>${E(r[0])}</td><td>${E(r[1])}</td><td>${E(r[2])}</td></tr>`).join('')+'</table>';
const day=Math.floor(Date.now()/864e5),w=D.vocab[day%D.vocab.length];
$('#wod').innerHTML=`<h3>${w[0]}</h3><p>${w[1]}</p>`;
$('#vocab').innerHTML=D.vocab.map(v=>`<div class="card"><b>${v[0]}</b><br>${v[1]}</div>`).join('');
$('#tenses').innerHTML='<table><tr><th>Tense</th><th>Example</th></tr>'+D.tenses.map(t=>`<tr><td>${t[0]}</td><td>${t[1]}</td></tr>`).join('')+'</table>';
$('#sent').innerHTML=D.sentences.map(s=>`<div class="card">${s}</div>`).join('');
$('#speak').innerHTML=D.speak.map(s=>`<li>${s}</li>`).join('');
$('#rules').innerHTML=D.rules.map(r=>`<div class="card"><h3>${r[0]}</h3><p>${r[1]}</p></div>`).join('');
$('#elders').innerHTML=D.elders.map(r=>`<div class="card"><h3>${r[0]}</h3><p lang="sd" dir="rtl">${r[1]}</p><p lang="ur" dir="rtl">${r[2]}</p></div>`).join('');
$('#fake').innerHTML=D.fake.map((f,i)=>`<label><input type="checkbox" class="fk"> ${f}</label>`).join('')+'<button class="btn" id="fc">Check it</button><p id="fr"></p>';
$('#fc').onclick=()=>{const n=$$('.fk:checked').length,t=D.fake.length;$('#fr').textContent=n==t?'Good signs: all 5 checks passed. Still ask a teacher if unsure.':n>=3?`${n} of ${t} checks passed. Be careful and check another trusted source before sharing.`:`Only ${n} of ${t} checks passed. This news is probably fake. Do not forward it.`};
/* Quiz */
const topics=[...new Set(D.quiz.map(q=>q[0]))];$('#qt').innerHTML=topics.map(t=>`<option>${t}</option>`).join('');
const shuf=a=>a.map(x=>[Math.random(),x]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]);
let Q=[],qi=0,sc=0;
$('#qs').onclick=()=>{const t=$('#qt').value,c=+$('#qc').value;let p=D.quiz.filter(q=>q[0]==t&&(c==0||q[1]==0||q[1]==c));
 Q=shuf(p).slice(0,10);qi=0;sc=0;Q.length?ask():$('#qbox').innerHTML='<p class="note">No questions for this class yet. Add some in data/data.js.</p>'};
function ask(){const q=Q[qi],o=shuf(q[3].map((t,i)=>[t,i==q[4]]));
 $('#qbox').innerHTML=`<div class="panel"><div class="bar"><i style="width:${qi/Q.length*100}%"></i></div><p class="note">Question ${qi+1} of ${Q.length}</p><h3>${E(q[2])}</h3>${o.map(x=>`<button class="opt" data-r="${x[1]}">${E(x[0])}</button>`).join('')}<p id="qf"></p></div>`;
 $$('.opt').forEach(b=>b.onclick=()=>{$$('.opt').forEach(x=>{x.disabled=true;if(x.dataset.r=='true')x.classList.add('right')});
  if(b.dataset.r=='true'){sc++;$('#qf').textContent='✅ Correct!'}else{b.classList.add('wrong');$('#qf').textContent='❌ Wrong. The right answer is shown in green.'}
  $('#qf').insertAdjacentHTML('afterend',`<button class="btn" id="nx">${qi+1<Q.length?'Next question':'See my score'}</button>`);
  $('#nx').onclick=()=>{qi++;qi<Q.length?ask():done()}})}
function done(){const p=Math.round(sc/Q.length*100);$('#qbox').innerHTML=`<div class="panel"><h3>Your score: ${sc} / ${Q.length} (${p}%)</h3><p>${p>=80?'Excellent work!':p>=50?'Good. Practise once more.':'Keep practising. You can do it!'}</p><button class="btn" id="ta">Try again</button></div>`;$('#ta').onclick=()=>$('#qs').click()}
/* Forms (WhatsApp) */
const wa=t=>window.open(`https://wa.me/${WA}?text=${encodeURIComponent(t)}`,'_blank','noopener');
$('#rf').onsubmit=e=>{e.preventDefault();wa(rep())};
const rep=()=>{const f=$('#rf');return `School problem report\nType: ${f.t.value}\nClass: ${f.c.value}\nDetails: ${f.d.value}`};
$('#rf [data-a=cp]').onclick=async e=>{e.preventDefault();if(!$('#rf').d.value.trim()){$('#rm').textContent='Please write what is wrong first.';return}
 try{await navigator.clipboard.writeText(rep());$('#rm').textContent='Copied. Paste it in WhatsApp.'}catch{$('#rm').textContent='Could not copy. Select and copy the text yourself.'}};
$('#ff').onsubmit=e=>{e.preventDefault();const f=e.target;wa(`${f.t.value} for the school portal:\n${f.d.value}`)};
/* Search */
const idx=[...D.papers.map(r=>[r[0],`Past Papers · ${cls(r[1])} · ${r[2]}`,'papers']),...D.library.map(r=>[r[0],`Library · ${cls(r[1])} · ${r[2]}`,'library']),...D.news.map(n=>[n[1],'News','news']),...D.teachers.map(t=>[t[0]+' ('+t[2]+')','Teachers','teachers']),...D.steam.map(p=>[p[0],'STEAM','steam']),...D.vocab.map(v=>[v[0]+': '+v[1],'English','english']),...D.careers.map(c=>[c[0],'Careers','careers'])];
$('#q').oninput=e=>{const q=e.target.value.trim().toLowerCase();if(!q){go();return}
 const r=idx.filter(x=>(x[0]+x[1]).toLowerCase().includes(q));$$('main>section').forEach(s=>s.hidden=s.id!='search');
 $('#sr').innerHTML=r.map(x=>`<a class="card" href="#${x[2]}" onclick="$('#q').value=''"><h3>${E(x[0])}</h3><span class="note">${E(x[1])}</span></a>`).join('')||'<p class="note">No results. Try a different word.</p>'};
nav();go();
