/* extra.js: more quiz questions, English Grammar quiz, Student of the Month */
// [topic, class (0 = all), question, [options], index of correct option]
D.quiz.push(
["Mathematics",6,"Which number is prime?",["9","11","15","21"],1],
["Mathematics",7,"Value of 2³?",["6","8","9","12"],1],
["Mathematics",8,"Area of a rectangle 6 cm by 4 cm?",["10 cm²","24 cm²","20 cm²","12 cm²"],1],
["Mathematics",9,"Solve 2x − 4 = 10. x = ?",["7","3","5","14"],0],
["Mathematics",9,"Hypotenuse of a right triangle with sides 3 and 4?",["5","7","6","12"],0],
["Mathematics",10,"Roots of x² − 5x + 6 = 0?",["2 and 3","1 and 6","−2 and −3","5 and 1"],0],
["Mathematics",10,"sin 30° equals…",["1/2","√3/2","1","0"],0],
["Science",6,"Which is a good conductor of electricity?",["Copper","Wood","Rubber","Plastic"],0],
["Science",7,"Which plant part absorbs water?",["Roots","Leaves","Flower","Fruit"],0],
["Science",8,"Plants take in which gas for photosynthesis?",["Carbon dioxide","Oxygen","Nitrogen","Hydrogen"],0],
["Science",9,"SI unit of electric current?",["Ampere","Volt","Ohm","Watt"],0],
["Science",9,"Atomic number of carbon?",["6","12","8","14"],0],
["Science",10,"Which blood cells fight infection?",["White blood cells","Red blood cells","Platelets","Plasma"],0],
["Science",10,"Newton’s second law is…",["F = m × a","F = m ÷ a","F = a ÷ m","F = m + a"],0],
["English Grammar",0,"She ___ a book now.",["is reading","reads","read","has read"],0],
["English Grammar",0,"I ___ my homework yesterday.",["did","do","does","doing"],0],
["English Grammar",0,"___ apple a day keeps the doctor away.",["An","A","The","No article"],0],
["English Grammar",0,"Opposite of “brave”?",["Cowardly","Strong","Bold","Fearless"],0],
["English Grammar",0,"They ___ playing when it rained.",["were","was","is","are"],0],
["English Grammar",0,"Which word is a noun?",["Honesty","Quickly","Beautiful","Run"],0],
["English Grammar",0,"Plural of “man”?",["Men","Mans","Manes","Mens"],0],
["English Grammar",0,"He is good ___ maths.",["at","on","to","with"],0],
["English Grammar",0,"Tomorrow I ___ visit my uncle.",["will","did","was","had"],0],
["Computer",0,"CPU stands for…",["Central Processing Unit","Computer Personal Unit","Central Program Utility","Control Processing Unit"],0],
["Computer",0,"Which is an input device?",["Keyboard","Monitor","Printer","Speaker"],0],
["Computer",0,"One byte equals how many bits?",["8","4","16","2"],0],
["Computer",0,"Ctrl + C does…",["Copy","Cut","Paste","Close"],0]
);
$('#qt').innerHTML=[...new Set(D.quiz.map(q=>q[0]))].map(t=>`<option>${t}</option>`).join('');
$('#english').insertAdjacentHTML('afterbegin','<p><a class="btn gold" href="#quiz" id="gq">Take the Grammar Quiz</a></p>');
$('#gq').onclick=()=>{$('#qt').value='English Grammar'};

/* Student of the Month and honours: edit with REAL, approved names only */
const SOTM={name:"Student name (sample)",cls:9,why:"Sample: write why this student was chosen.",photo:""};
// [name, class, category, achievement, photo path like images/students/ali.jpg]
const HON=[
["Student name (sample)",10,"Position Holders","Sample: 1st position",""],
["Student name (sample)",10,"Board Toppers","Sample: board examination topper",""],
["Student name (sample)",9,"Scholarships","Sample: scholarship winner",""],
["Student name (sample)",8,"Sports","Sample: sports winner",""],
["Student name (sample)",9,"Science Exhibition","Sample: exhibition winner",""],
["Student name (sample)",8,"STEAM","Sample: STEAM project winner",""]];
function ach(c){$('#ach-list').innerHTML=`<div class="card" style="grid-column:1/-1;border-left-color:#e5a50a"><div style="max-width:260px">${ph(SOTM.photo,SOTM.name,'⭐')}</div><span class="tag">⭐ Student of the Month</span><h3>${E(SOTM.name)}</h3><span class="tag s">Class ${SOTM.cls}</span><p>${E(SOTM.why)}</p></div>`+HON.filter(h=>c=='All'||h[2]==c).map(h=>`<div class="card">${ph(h[4],h[0],'🏅')}<span class="tag">${E(h[2])}</span><h3>${E(h[0])}</h3><span class="tag s">Class ${h[1]}</span><p>${E(h[3])}</p></div>`).join('')}
$('#achievements .note').insertAdjacentHTML('afterend','<div class="filters" id="ac">'+['All',...new Set(HON.map(h=>h[2]))].map(c=>`<button class="btn alt" data-c="${c}">${c}</button>`).join('')+'</div>');
$('#ac').onclick=e=>{if(e.target.dataset.c)ach(e.target.dataset.c)};
ach('All');
