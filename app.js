/* app.js - the portal's CODE. Do NOT put data here.
   Data lives in data.js (const D={...}). index.html loads data.js first, then this file. */
(function () {
  "use strict";
  if (typeof D === "undefined") {
    document.getElementById("app").innerHTML =
      '<p style="color:#b00;padding:16px">data.js did not load. Make sure data.js is in the same folder as index.html.</p>';
    return;
  }

  var T = {
    en: {
      home: "Home", quiz: "Quiz", papers: "Past Papers", library: "Library", ach: "Achievements",
      teachers: "Teachers", news: "News", gallery: "Gallery", steam: "STEAM", careers: "Careers",
      cal: "Calendar", english: "English", safe: "Digital Safety",
      school: "Government Boys Higher Secondary School Seerani",
      sub: "Government of Sindh · District Badin",
      track: "Track 2: AI & Digital Solutions",
      tag: "Smart ideas for a digital Sindh. Learn, report, and stay safe online.",
      w1: "Welcome", w1t: "to the digital portal of Government Boys Higher Secondary School Seerani, District Badin.",
      bq: "Play a quiz", bp: "Find past papers",
      motto: "We learn, celebrate, and now we build technology for our own community.",
      explore: "Explore the portal", latest: "Latest news",
      start: "Start quiz", next: "Next", again: "Play again", score: "Your score", topic: "Topic",
      cls: "Class", all: "All", subject: "Subject", open: "Open", soon: "Coming soon", allcls: "All classes",
      right: "Correct!", wrong: "Wrong. Correct answer: ", qn: "Question",
      materials: "Materials", students: "Students",
      vocab: "Vocabulary", tenses: "Tenses", sentences: "Useful sentences", speak: "Speaking practice",
      rules: "Online safety rules", elders: "For parents and elders", fake: "Is this news real? Tick what is true:",
      good: "Looks trustworthy.", bad: "Be careful. Do not forward it.", none: "Nothing here yet.",
      student: "Student", close: "Tap to close"
    },
    sd: {
      home: "گهر", quiz: "ڪوئز", papers: "پراڻا پيپر", library: "لائبريري", ach: "ڪاميابيون",
      teachers: "استاد", news: "خبرون", gallery: "گيلري", steam: "اسٽيم", careers: "ڪيريئر",
      cal: "ڪئلينڊر", english: "انگريزي", safe: "ڊجيٽل حفاظت",
      school: "گورنمينٽ بوائز هاءِ سيڪنڊري اسڪول سيراڻي",
      sub: "سنڌ سرڪار · ضلعو بدين",
      track: "ٽريڪ 2: AI ۽ ڊجيٽل حل",
      tag: "ڊجيٽل سنڌ لاءِ هوشيار خيال. سکو، رپورٽ ڪريو، ۽ آن لائن محفوظ رهو.",
      w1: "ڀليڪار", w1t: "گورنمينٽ بوائز هاءِ سيڪنڊري اسڪول سيراڻي، ضلعو بدين جي ڊجيٽل پورٽل ۾ ڀليڪار.",
      bq: "ڪوئز کيڏو", bp: "پراڻا پيپر ڳوليو",
      motto: "اسين سکون ٿا، ملهايون ٿا، ۽ هاڻي پنهنجي ڪميونٽي لاءِ ٽيڪنالاجي ٺاهيون ٿا.",
      explore: "پورٽل ڏسو", latest: "تازيون خبرون",
      start: "ڪوئز شروع ڪريو", next: "اڳيون", again: "ٻيهر کيڏو", score: "توهان جو اسڪور", topic: "عنوان",
      cls: "ڪلاس", all: "سڀ", subject: "مضمون", open: "کوليو", soon: "جلد اچي رهيو آهي", allcls: "سڀ ڪلاس",
      right: "صحيح!", wrong: "غلط. صحيح جواب: ", qn: "سوال",
      materials: "سامان", students: "شاگرد",
      vocab: "لفظ", tenses: "زمانا", sentences: "ڪارآمد جملا", speak: "ڳالهائڻ جي مشق",
      rules: "آن لائن حفاظت جا اصول", elders: "والدين ۽ وڏن لاءِ", fake: "ڇا هيءَ خبر سچي آهي؟ جيڪي سچ آهي ان تي ٽِڪ ڪريو:",
      good: "ڀروسي جوڳي لڳي ٿي.", bad: "خبردار. اڳتي نه موڪليو.", none: "اڃا ڪجهه ناهي.",
      student: "شاگرد", close: "بند ڪرڻ لاءِ ٽيپ ڪريو"
    },
    ur: {
      home: "ہوم", quiz: "کوئز", papers: "پرانے پیپر", library: "لائبریری", ach: "کامیابیاں",
      teachers: "اساتذہ", news: "خبریں", gallery: "گیلری", steam: "اسٹیم", careers: "کیریئر",
      cal: "کیلنڈر", english: "انگریزی", safe: "ڈیجیٹل تحفظ",
      school: "گورنمنٹ بوائز ہائر سیکنڈری اسکول سیرانی",
      sub: "حکومتِ سندھ · ضلع بدین",
      track: "ٹریک 2: AI اور ڈیجیٹل حل",
      tag: "ڈیجیٹل سندھ کے لیے سمارٹ آئیڈیاز۔ سیکھیں، رپورٹ کریں اور آن لائن محفوظ رہیں۔",
      w1: "خوش آمدید", w1t: "گورنمنٹ بوائز ہائر سیکنڈری اسکول سیرانی، ضلع بدین کے ڈیجیٹل پورٹل میں خوش آمدید۔",
      bq: "کوئز کھیلیں", bp: "پرانے پیپر تلاش کریں",
      motto: "ہم سیکھتے ہیں، خوشیاں مناتے ہیں، اور اب اپنی کمیونٹی کے لیے ٹیکنالوجی بناتے ہیں۔",
      explore: "پورٹل دیکھیں", latest: "تازہ خبریں",
      start: "کوئز شروع کریں", next: "اگلا", again: "دوبارہ کھیلیں", score: "آپ کا اسکور", topic: "موضوع",
      cls: "جماعت", all: "سب", subject: "مضمون", open: "کھولیں", soon: "جلد آ رہا ہے", allcls: "تمام جماعتیں",
      right: "درست!", wrong: "غلط۔ درست جواب: ", qn: "سوال",
      materials: "سامان", students: "طلبہ",
      vocab: "الفاظ", tenses: "زمانے", sentences: "کارآمد جملے", speak: "بولنے کی مشق",
      rules: "آن لائن تحفظ کے اصول", elders: "والدین اور بزرگوں کے لیے", fake: "کیا یہ خبر سچی ہے؟ جو درست ہو اس پر ٹک کریں:",
      good: "قابلِ بھروسا لگتی ہے۔", bad: "احتیاط کریں۔ آگے نہ بھیجیں۔", none: "ابھی کچھ نہیں۔",
      student: "طالب علم", close: "بند کرنے کے لیے ٹیپ کریں"
    }
  };

  var lang = "en";
  var F = { papers: { cls: "all", sub: "all" }, library: { cls: "all", sub: "all" } };
  var Q = { topic: "", cls: "all", list: [], i: 0, s: 0, state: "setup", pick: -1 };

  function t(k) { return (T[lang] && T[lang][k]) || T.en[k] || k; }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(s) { return document.querySelector(s); }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), x = a[i]; a[i] = a[j]; a[j] = x;
    }
    return a;
  }
  function uniq(a) { return a.filter(function (v, i) { return a.indexOf(v) === i; }); }
  function clsLabel(c) { return c ? t("cls") + " " + c : t("allcls"); }
  function isUrl(u) { return /^https?:\/\//i.test(u || ""); }

  var SECTIONS = [
    ["home", "home"], ["quiz", "quiz"], ["papers", "papers"], ["library", "library"],
    ["ach", "ach"], ["teachers", "teachers"], ["news", "news"], ["gallery", "gallery"],
    ["steam", "steam"], ["careers", "careers"], ["cal", "cal"], ["english", "english"], ["safe", "safe"]
  ];
  var ICONS = { quiz: "🎯", papers: "📝", library: "📚", ach: "🏆", teachers: "👨‍🏫", news: "📰", gallery: "🖼️",
    steam: "🔬", careers: "🎓", cal: "📅", english: "🗣️", safe: "🛡️" };

  function photo(name, folder) {
    // returns an <img> that tries images/<folder>/<name>, then <name>, else hides itself
    return '<img class="av" data-n="' + esc(name) + '" data-d="' + folder + '" src="images/' + folder + "/" + encodeURIComponent(name) + '" alt="">';
  }
  function avatar(name, file, folder) {
    if (file) return photo(file, folder);
    return '<div class="av">' + esc(String(name).trim().charAt(0).toUpperCase()) + "</div>";
  }

  /* ---------- section builders ---------- */
  function listHTML(kind) {
    var rows = D[kind] || [], f = F[kind];
    var classes = uniq(rows.map(function (r) { return r[1]; }).filter(Boolean)).sort(function (a, b) { return a - b; });
    var subs = uniq(rows.map(function (r) { return r[2]; }));
    var h = '<div class="filters"><select data-f="' + kind + '" data-k="cls"><option value="all">' + t("cls") + ": " + t("all") + "</option>";
    classes.forEach(function (c) { h += '<option value="' + c + '"' + (String(f.cls) === String(c) ? " selected" : "") + ">" + t("cls") + " " + c + "</option>"; });
    h += '</select><select data-f="' + kind + '" data-k="sub"><option value="all">' + t("subject") + ": " + t("all") + "</option>";
    subs.forEach(function (s) { h += '<option value="' + esc(s) + '"' + (f.sub === s ? " selected" : "") + ">" + esc(s) + "</option>"; });
    h += "</select></div>";
    var shown = rows.filter(function (r) {
      return (f.cls === "all" || r[1] === 0 || String(r[1]) === String(f.cls)) && (f.sub === "all" || r[2] === f.sub);
    });
    h += '<div class="grid w">';
    shown.forEach(function (r) {
      h += '<div class="card"><h3>' + esc(r[0]) + '</h3><p><span class="tag">' + esc(clsLabel(r[1])) + '</span><span class="tag">' + esc(r[2]) + "</span>" +
        (r[3] ? '<span class="tag">' + esc(r[3]) + "</span>" : "") + "</p>" +
        (isUrl(r[4]) ? '<a class="btn" target="_blank" rel="noopener" href="' + esc(r[4]) + '">' + t("open") + "</a>"
          : '<span class="btn dis">' + t("soon") + "</span>") + "</div>";
    });
    if (!shown.length) h += '<p class="empty">' + t("none") + "</p>";
    return h + "</div>";
  }

  function newsHTML(rows) {
    var h = '<div class="grid w">';
    rows.forEach(function (r) {
      h += '<div class="card"><p>' + esc(r[0]) + ' <span class="tag">' + esc(r[3]) + "</span></p><h3>" + esc(r[1]) + "</h3><p>" + esc(r[2]) + "</p></div>";
    });
    return h + "</div>";
  }

  function quizHTML() {
    var topics = uniq(D.quiz.map(function (q) { return q[0]; }));
    if (!Q.topic) Q.topic = topics[0];
    if (Q.state === "setup") {
      var h = '<div class="card"><div class="filters"><select data-q="topic">';
      topics.forEach(function (x) { h += '<option value="' + esc(x) + '"' + (Q.topic === x ? " selected" : "") + ">" + esc(x) + "</option>"; });
      h += '</select><select data-q="cls"><option value="all">' + t("cls") + ": " + t("all") + "</option>";
      [6, 7, 8, 9].forEach(function (c) { h += '<option value="' + c + '"' + (String(Q.cls) === String(c) ? " selected" : "") + ">" + t("cls") + " " + c + "</option>"; });
      return h + '</select></div><button class="btn" data-act="qstart">' + t("start") + "</button></div>";
    }
    if (Q.state === "done") {
      return '<div class="card"><h3>' + t("score") + ": " + Q.s + " / " + Q.list.length + '</h3><button class="btn" data-act="qagain">' + t("again") + "</button></div>";
    }
    var q = Q.list[Q.i], pct = Math.round((Q.i / Q.list.length) * 100);
    var h2 = '<div class="card"><div class="row"><span class="tag">' + esc(q.topic) + "</span><span>" + t("qn") + " " + (Q.i + 1) + "/" + Q.list.length + " · " + Q.s + '</span></div><div class="bar2"><i style="width:' + pct + '%"></i></div><div class="q" dir="auto">' + esc(q.text) + "</div>";
    q.opts.forEach(function (o, i) {
      var cl = "opt";
      if (Q.pick >= 0) { if (i === q.ans) cl += " ok"; else if (i === Q.pick) cl += " no"; }
      h2 += '<button class="' + cl + '" data-act="qpick" data-i="' + i + '"' + (Q.pick >= 0 ? " disabled" : "") + ">" + esc(o) + "</button>";
    });
    if (Q.pick >= 0) {
      h2 += "<p><b>" + (Q.pick === q.ans ? t("right") : t("wrong") + esc(q.opts[q.ans])) + '</b></p><button class="btn" data-act="qnext">' + t("next") + "</button>";
    }
    return h2 + "</div>";
  }

  function startQuiz() {
    var pool = D.quiz.filter(function (q) {
      return q[0] === Q.topic && (Q.cls === "all" || q[1] === 0 || String(q[1]) === String(Q.cls));
    });
    if (!pool.length) pool = D.quiz.filter(function (q) { return q[0] === Q.topic; });
    Q.list = shuffle(pool).slice(0, 10).map(function (q) {
      var correct = q[3][q[4]], opts = shuffle(q[3]);
      return { topic: q[0], text: q[2], opts: opts, ans: opts.indexOf(correct) };
    });
    Q.i = 0; Q.s = 0; Q.pick = -1; Q.state = "play";
  }

  function build() {
    var h = "";
    // HOME
    h += '<section id="home"><div class="hero"><img data-n="download.jpeg" data-d="" src="download.jpeg" alt="">' +
      '<p class="t"><span class="pill">' + t("track") + "</span></p><p class=\"t\">" + t("sub") + "</p><h1>" + t("school") + "</h1><p class=\"t\">" + t("tag") + "</p>" +
      '<div class="btns"><a class="btn" href="#quiz">' + t("bq") + '</a><a class="btn alt" href="#papers">' + t("bp") + "</a></div></div>" +
      '<div class="welcome"><p><b>Welcome</b> to the digital portal of Government Boys Higher Secondary School Seerani, District Badin.</p>' +
      '<p class="sd"><b>ڀليڪار</b> گورنمينٽ بوائز هاءِ سيڪنڊري اسڪول سيراڻي، ضلعو بدين جي ڊجيٽل پورٽل ۾ ڀليڪار.</p>' +
      '<p class="ur"><b>خوش آمدید</b> گورنمنٹ بوائز ہائر سیکنڈری اسکول سیرانی، ضلع بدین کے ڈیجیٹل پورٹل میں خوش آمدید۔</p></div>' +
      '<div class="logos"><img data-n="download (1).jpeg" data-d="" src="download%20(1).jpeg" alt="Government of Sindh emblem">' +
      '<img data-n="download (2).jpeg" data-d="" src="download%20(2).jpeg" alt="Sindh STREAM Journey logo">' +
      '<img data-n="download (3).jpeg" data-d="" src="download%20(3).jpeg" alt="ILM Studio logo"></div>' +
      '<p style="text-align:center;color:var(--mut)">' + t("motto") + "</p>" +
      "<h2>" + t("explore") + '</h2><div class="grid">';
    SECTIONS.slice(1).forEach(function (s) {
      h += '<a class="card tile" href="#' + s[0] + '"><span>' + ICONS[s[0]] + "</span>" + t(s[1]) + "</a>";
    });
    h += "</div><h2 style=\"margin-top:20px\">" + t("latest") + "</h2>" + newsHTML((D.news || []).slice(0, 3)) + "</section>";

    h += '<section id="quiz"><h2>' + t("quiz") + '</h2><div id="quizBox">' + quizHTML() + "</div></section>";
    h += '<section id="papers"><h2>' + t("papers") + '</h2><div id="box-papers">' + listHTML("papers") + "</div></section>";
    h += '<section id="library"><h2>' + t("library") + '</h2><div id="box-library">' + listHTML("library") + "</div></section>";

    h += '<section id="ach"><h2>' + t("ach") + '</h2><div class="grid w">';
    (D.achievements || []).forEach(function (r) {
      h += '<div class="card person">' + avatar(r[0], r[3], "achievements") + "<div><h3>" + esc(r[0]) + "</h3><p>" + t("cls") + " " + esc(r[1]) + "</p><p><b>" + esc(r[2]) + "</b></p></div></div>";
    });
    h += "</div></section>";

    h += '<section id="teachers"><h2>' + t("teachers") + '</h2><div class="grid w">';
    (D.teachers || []).forEach(function (r) {
      h += '<div class="card person">' + avatar(r[0], r[4], "teachers") + "<div><h3>" + esc(r[0]) + "</h3><p>" + esc(r[3]) + " · " + esc(r[2]) + "</p><p>" + esc(r[1]) + "</p></div></div>";
    });
    h += "</div></section>";

    h += '<section id="news"><h2>' + t("news") + "</h2>" + newsHTML(D.news || []) + "</section>";

    h += '<section id="gallery"><h2>' + t("gallery") + '</h2><div class="gal">';
    (D.gallery || []).forEach(function (r) {
      h += '<figure data-cap="' + esc(r[1]) + '"><img loading="lazy" data-n="' + esc(r[0]) + '" data-d="gallery" src="images/gallery/' + encodeURIComponent(r[0]) + '" alt="' + esc(r[1]) + '"><figcaption>' + esc(r[1]) + "</figcaption></figure>";
    });
    h += "</div></section>";

    h += '<section id="steam"><h2>' + t("steam") + '</h2><div class="grid w">';
    (D.steam || []).forEach(function (r) {
      h += '<div class="card"><h3>' + esc(r[0]) + "</h3><p><b>" + t("students") + ":</b> " + esc(r[1]) + "</p><p><b>" + t("materials") + ":</b> " + esc(r[2]) + "</p><p>" + esc(r[3]) + "</p></div>";
    });
    h += "</div></section>";

    h += '<section id="careers"><h2>' + t("careers") + '</h2><div class="grid w">';
    (D.careers || []).forEach(function (r) {
      h += '<div class="card"><h3>' + esc(r[0]) + "</h3><p>" + esc(r[1]) + "</p>" +
        (isUrl(r[2]) ? '<a class="btn" target="_blank" rel="noopener" href="' + esc(r[2]) + '">' + t("open") + "</a>" : "") + "</div>";
    });
    h += "</div></section>";

    h += '<section id="cal"><h2>' + t("cal") + '</h2><div class="grid w">';
    (D.calendar || []).forEach(function (r) {
      h += '<div class="card"><p>' + esc(r[0]) + ' <span class="tag">' + esc(r[2]) + "</span></p><h3>" + esc(r[1]) + "</h3></div>";
    });
    h += "</div></section>";

    h += '<section id="english"><h2>' + t("english") + "</h2><h3>" + t("vocab") + '</h3><div class="grid">';
    (D.vocab || []).forEach(function (r) { h += '<div class="card"><h3>' + esc(r[0]) + "</h3><p>" + esc(r[1]) + "</p></div>"; });
    h += "</div><h3>" + t("tenses") + '</h3><div class="grid w">';
    (D.tenses || []).forEach(function (r) { h += '<div class="card"><h3>' + esc(r[0]) + "</h3><p>" + esc(r[1]) + "</p></div>"; });
    h += "</div><h3>" + t("sentences") + '</h3><div class="card"><ul>';
    (D.sentences || []).forEach(function (s) { h += "<li>" + esc(s) + "</li>"; });
    h += "</ul></div><h3>" + t("speak") + '</h3><div class="card"><ol>';
    (D.speak || []).forEach(function (s) { h += "<li>" + esc(s) + "</li>"; });
    h += "</ol></div></section>";

    h += '<section id="safe"><h2>' + t("safe") + "</h2><h3>" + t("rules") + '</h3><div class="grid w">';
    (D.rules || []).forEach(function (r) { h += '<div class="card"><h3>' + esc(r[0]) + "</h3><p>" + esc(r[1]) + "</p></div>"; });
    h += "</div><h3>" + t("elders") + '</h3><div class="grid w">';
    (D.elders || []).forEach(function (r) {
      h += '<div class="card"><p><b>' + esc(r[0]) + '</b></p><p class="sd">' + esc(r[1]) + '</p><p class="ur">' + esc(r[2]) + "</p></div>";
    });
    h += "</div><h3>" + t("fake") + '</h3><div class="card" id="fakeBox">';
    (D.fake || []).forEach(function (s, i) {
      h += '<label class="chk"><input type="checkbox" data-fk="' + i + '"><span>' + esc(s) + "</span></label>";
    });
    h += '<div id="fakeRes"></div></div></section>';
    return h;
  }

  /* ---------- render + events ---------- */
  function fixImages(root) {
    Array.prototype.forEach.call(root.querySelectorAll("img[data-n]"), function (img) {
      img.addEventListener("error", function () {
        if (!img.dataset.tried) {
          img.dataset.tried = "1";
          img.src = encodeURIComponent(img.dataset.n);
        } else {
          img.style.visibility = "hidden";
        }
      });
    });
  }

  function render() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "en" ? "ltr" : "rtl";
    $("#nav").innerHTML = SECTIONS.map(function (s) { return '<a href="#' + s[0] + '">' + t(s[1]) + "</a>"; }).join("");
    $("#app").innerHTML = build();
    fixImages($("#app"));
    updateFake();
    Array.prototype.forEach.call(document.querySelectorAll("#lang button"), function (b) {
      b.className = b.getAttribute("data-l") === lang ? "on" : "";
    });
  }

  function updateFake() {
    var boxes = document.querySelectorAll("#fakeBox input"), n = 0, any = false;
    Array.prototype.forEach.call(boxes, function (b) { if (b.checked) { n++; any = true; } });
    var r = $("#fakeRes");
    if (!r) return;
    if (!any) { r.innerHTML = ""; return; }
    var ok = n >= Math.max(1, boxes.length - 1);
    r.innerHTML = '<div class="res ' + (ok ? "good" : "bad") + '">' + (ok ? t("good") : t("bad")) + " (" + n + "/" + boxes.length + ")</div>";
  }

  var app = $("#app");

  app.addEventListener("click", function (e) {
    var fig = e.target.closest("figure[data-cap]");
    if (fig) {
      var im = fig.querySelector("img"), lb = $("#lb");
      lb.querySelector("img").src = im.src;
      $("#lbc").textContent = fig.getAttribute("data-cap") + " · " + t("close");
      lb.style.display = "flex";
      return;
    }
    var b = e.target.closest("[data-act]");
    if (!b) return;
    var a = b.getAttribute("data-act");
    if (a === "qstart" || a === "qagain") {
      if (a === "qagain") { Q.state = "setup"; } else { startQuiz(); }
    } else if (a === "qpick") {
      if (Q.pick >= 0) return;
      Q.pick = +b.getAttribute("data-i");
      if (Q.pick === Q.list[Q.i].ans) Q.s++;
    } else if (a === "qnext") {
      Q.i++; Q.pick = -1;
      if (Q.i >= Q.list.length) Q.state = "done";
    }
    $("#quizBox").innerHTML = quizHTML();
  });

  app.addEventListener("change", function (e) {
    var el = e.target;
    if (el.hasAttribute("data-f")) {
      var kind = el.getAttribute("data-f");
      F[kind][el.getAttribute("data-k")] = el.value;
      $("#box-" + kind).innerHTML = listHTML(kind);
    } else if (el.hasAttribute("data-q")) {
      Q[el.getAttribute("data-q")] = el.value;
    } else if (el.hasAttribute("data-fk")) {
      updateFake();
    }
  });

  $("#lang").addEventListener("click", function (e) {
    var l = e.target.getAttribute && e.target.getAttribute("data-l");
    if (l) { lang = l; render(); }
  });
  $("#lb").addEventListener("click", function () { this.style.display = "none"; });

  render();
})();
