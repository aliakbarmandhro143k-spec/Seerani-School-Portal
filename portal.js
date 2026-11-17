(function () {
  "use strict";
  var D = window.PORTAL_DATA;
  var page = document.body.getAttribute("data-page");
  var main = document.getElementById("main");

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function empty(msg) { return '<div class="empty">' + esc(msg || "Abhi koi record nahi hai - jald yahan maloomat add ki jayegi.") + "</div>"; }
  function ph(s) { return (window.PORTAL_PHOTOS && window.PORTAL_PHOTOS[s]) || s; }
  function uniq(arr) { return arr.filter(function (v, i) { return arr.indexOf(v) === i; }); }
  function fmtDate(d) {
    var dt = new Date(d + "T00:00:00");
    return dt.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  }
  function chips(container, options, onPick) {
    var cur = options[0];
    container.innerHTML = options.map(function (o, i) {
      return '<button class="chip' + (i === 0 ? " on" : "") + '" data-v="' + esc(o) + '">' + esc(o) + "</button>";
    }).join("");
    container.addEventListener("click", function (e) {
      var b = e.target.closest(".chip"); if (!b) return;
      $$(".chip", container).forEach(function (x) { x.classList.remove("on"); });
      b.classList.add("on"); cur = b.getAttribute("data-v"); onPick(cur);
    });
  }

  var R = {};

  /* ---------- HUB ---------- */
  R.hub = function () {
    var latest = D.notices.slice().sort(function (a, b) { return b.date.localeCompare(a.date); }).slice(0, 5);
    var t = $("#ticker");
    if (t && latest.length) t.innerHTML = latest.map(function (n) { return esc(n.title); }).join("   •   ");
    var st = $("#stats");
    if (st) {
      var mcq = D.tests.reduce(function (a, t) { return a + t.questions.length; }, 0);
      st.innerHTML = [[D.tests.length, "Quizzes"], [mcq, "MCQs"], [D.library.length, "Books & Links"], [D.vocab.length + D.synonyms.length + D.antonyms.length, "English Words"]].map(function (x) {
        return "<div><b>" + x[0] + "</b><span>" + x[1] + "</span></div>";
      }).join("");
    }
    var s = $("#strip");
    if (s && D.gallery.length) s.innerHTML = D.gallery.slice(0, 6).map(function (g) {
      return '<a href="gallery.html"><figure><div class="ph"><img loading="lazy" src="' + esc(ph(g.src)) + '" alt="' + esc(g.caption) + '"></div><figcaption>' + esc(g.caption) + "</figcaption></figure></a>";
    }).join("");
  };

  /* ---------- PAST PAPERS ---------- */
  R.papers = function () {
    main.innerHTML =
      '<div class="note">Class 9–10: Sindh Board (BISE Hyderabad) ke papers neeche diye gaye links par milte hain. Class 6–8 ke papers school ke annual exams ke hote hain, jo jald yahan upload kiye jayenge.</div>' +
      '<div class="bar"><select id="c"><option value="">Sab classes</option>' +
      [6, 7, 8, 9, 10].map(function (c) { return '<option value="' + c + '">Class ' + c + "</option>"; }).join("") +
      '</select><select id="s"><option value="">Sab subjects</option>' +
      uniq(D.papers.map(function (p) { return p.subject; })).sort().map(function (s) { return "<option>" + esc(s) + "</option>"; }).join("") +
      '</select><input id="q" placeholder="Search…"></div><div id="out" class="list"></div>';
    function draw() {
      var c = $("#c").value, s = $("#s").value, q = $("#q").value.toLowerCase();
      var items = D.papers.filter(function (p) {
        return (!c || String(p.cls) === c) && (!s || p.subject === s) &&
          (p.subject + " " + p.title + " " + (p.years || p.year)).toLowerCase().indexOf(q) > -1;
      }).sort(function (a, b) { return b.cls - a.cls || a.subject.localeCompare(b.subject); });
      $("#out").innerHTML = items.length ? items.map(function (p) {
        return '<div class="card row"><div><h3>' + esc(p.subject) + " — " + esc(p.title) + "</h3>" +
          '<div class="meta"><span class="tag">Class ' + p.cls + '</span><span class="tag gold">' + esc(p.years || p.year) + "</span></div></div>" +
          '<a class="btn sm" href="' + esc(p.file) + '" target="_blank" rel="noopener">' + (/^https?:/.test(p.file) ? "Open ↗" : "⬇ PDF") + "</a></div>";
      }).join("") : empty();
    }
    $$("#c,#s,#q").forEach(function (e) { e.addEventListener("input", draw); }); draw();
  };

  /* ---------- STUDENT ACHIEVEMENTS ---------- */
  R.students = function () {
    main.innerHTML = '<div class="chips" id="ch"></div><div class="grid" id="out"></div>';
    function draw(cat) {
      var items = D.studentAchievements.filter(function (a) { return cat === "All" || a.category === cat; });
      $("#out").innerHTML = items.length ? items.map(function (a) {
        var av = a.photo ? '<img class="avatar" src="' + esc(ph(a.photo)) + '" alt="">' : '<div class="avatar">' + esc(a.name.charAt(0)) + "</div>";
        return '<div class="card person">' + av + "<div><h3>" + esc(a.name) + '</h3><div class="meta">' + esc(a.cls) + " · " + a.year +
          "</div><div>" + esc(a.title) + '</div><span class="tag">' + esc(a.category) + "</span></div></div>";
      }).join("") : empty();
    }
    chips($("#ch"), ["All", "Position Holder", "Certificate", "Competition"], draw); draw("All");
  };

  /* ---------- SCHOOL ACHIEVEMENTS ---------- */
  R.school = function () {
    main.innerHTML = '<div class="chips" id="ch"></div><div class="list" id="out"></div>';
    function draw(cat) {
      var items = D.schoolAchievements.filter(function (a) { return cat === "All" || a.category === cat; })
        .sort(function (a, b) { return (b.year || 0) - (a.year || 0); });
      $("#out").innerHTML = items.length ? items.map(function (a) {
        return '<div class="card">' + (a.image ? '<img src="' + esc(ph(a.image)) + '" alt="' + esc(a.title) + '" style="border-radius:10px;margin-bottom:10px;width:100%;max-height:340px;object-fit:cover">' : "") +
          '<div class="row"><h3>🏅 ' + esc(a.title) + '</h3>' + (a.year ? '<span class="tag gold">' + a.year + "</span>" : "") +
          '</div><span class="tag">' + esc(a.category) + '</span><p class="meta" style="margin:8px 0 0">' + esc(a.text) + "</p></div>";
      }).join("") : empty();
    }
    chips($("#ch"), ["All", "Events", "Award", "Sports", "Science Exhibition"], draw); draw("All");
  };

  /* ---------- TEACHERS ---------- */
  R.teachers = function () {
    main.innerHTML = (D.staffPhotos && D.staffPhotos.length ? '<div class="gal" style="margin-bottom:18px">' + D.staffPhotos.map(function (p) {
      return '<figure><div class="ph"><img src="' + esc(ph(p.src)) + '" alt="' + esc(p.caption) + '" loading="lazy"></div><figcaption>' + esc(p.caption) + "</figcaption></figure>";
    }).join("") + "</div>" : "") + '<div class="bar"><input id="q" placeholder="Teacher ya subject search karein…"></div><div class="grid" id="out"></div>';
    function draw() {
      var q = $("#q").value.toLowerCase();
      var items = D.teachers.filter(function (t) { return (t.name + " " + t.subject + " " + t.role).toLowerCase().indexOf(q) > -1; });
      $("#out").innerHTML = items.length ? items.map(function (t) {
        var av = t.photo ? '<img class="avatar" src="' + esc(ph(t.photo)) + '" alt="">' : '<div class="avatar">' + esc(t.name.charAt(0)) + "</div>";
        return '<div class="card person">' + av + "<div><h3>" + esc(t.name) + '</h3><span class="tag">' + esc(t.subject) +
          '</span><div class="meta">' + esc(t.role) + "<br>" + esc(t.qualification) + "</div></div></div>";
      }).join("") : empty();
    }
    $("#q").addEventListener("input", draw); draw();
  };

  /* ---------- NOTICES ---------- */
  R.notices = function () {
    main.innerHTML = '<div class="chips" id="ch"></div><div class="list" id="out"></div>';
    function draw(cat) {
      var items = D.notices.filter(function (n) { return cat === "All" || n.category === cat; })
        .sort(function (a, b) { return b.date.localeCompare(a.date); });
      $("#out").innerHTML = items.length ? items.map(function (n) {
        return '<div class="card"><div class="row"><h3>' + (n.important ? "📌 " : "") + esc(n.title) + '</h3><span class="meta">' + fmtDate(n.date) +
          "</span></div>" + '<span class="tag ' + (n.important ? "red" : "") + '">' + (n.important ? "Important · " : "") + esc(n.category) +
          '</span><p style="margin:8px 0 0">' + esc(n.text) + "</p></div>";
      }).join("") : empty();
    }
    chips($("#ch"), ["All"].concat(uniq(D.notices.map(function (n) { return n.category; }))), draw); draw("All");
  };

  /* ---------- LIBRARY ---------- */
  R.library = function () {
    main.innerHTML = (D.libraryNote ? '<div class="note">ℹ️ ' + esc(D.libraryNote) + "</div>" : "") + '<div class="chips" id="ch"></div><div class="bar"><select id="c"><option value="">Sab classes</option>' +
      ["6", "7", "8", "9", "10"].map(function (c) { return '<option value="' + c + '">Class ' + c + "</option>"; }).join("") +
      '</select><input id="q" placeholder="Search…"></div><div class="list" id="out"></div>';
    var type = "All";
    function draw() {
      var c = $("#c").value, q = $("#q").value.toLowerCase();
      var items = D.library.filter(function (b) {
        return (type === "All" || b.type === type) && (!c || b.cls === c || b.cls === "All") &&
          (b.title + " " + b.subject).toLowerCase().indexOf(q) > -1;
      });
      $("#out").innerHTML = items.length ? items.map(function (b) {
        var ic = b.type === "Book" ? "📘" : b.type === "Notes" ? "📝" : b.type === "Shah Jo Risalo" ? "📜" : "📄";
        return '<div class="card row"><div><h3>' + ic + " " + esc(b.title) + '</h3><div class="meta"><span class="tag">' + esc(b.type) +
          '</span><span class="tag gold">Class ' + esc(b.cls) + '</span><span class="tag blue">' + esc(b.subject) + "</span></div></div>" +
          '<a class="btn sm" href="' + esc(b.file) + '" target="_blank" rel="noopener">' + (/^https?:/.test(b.file) ? "Open ↗" : "Open / Download") + "</a></div>";
      }).join("") : empty();
    }
    chips($("#ch"), ["All", "Book", "Shah Jo Risalo", "Notes", "Educational PDF"], function (v) { type = v; draw(); });
    $$("#c,#q").forEach(function (e) { e.addEventListener("input", draw); }); draw();
  };

  /* ---------- ONLINE TESTS ---------- */
  R.tests = function () {
    var gcol = { Maths: "#e0a82e", Science: "#0b8a5f", English: "#a3162f", GK: "#1f6fb2", Computer: "#6b3fa0" };
    var cur = "All";
    function shuffle(a) {
      a = a.slice();
      for (var i = a.length - 1; i > 0; i--) { var k = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[k]; a[k] = t; }
      return a;
    }
    function menu() {
      var groups = ["All"].concat(uniq(D.tests.map(function (t) { return t.group; })));
      main.innerHTML = '<div class="chips" id="ch"></div><div class="grid" id="out"></div>';
      var ch = $("#ch");
      ch.innerHTML = groups.map(function (g) { return '<button class="chip' + (g === cur ? " on" : "") + '" data-v="' + esc(g) + '">' + esc(g) + "</button>"; }).join("");
      ch.addEventListener("click", function (e) {
        var b = e.target.closest(".chip"); if (!b) return;
        cur = b.getAttribute("data-v");
        $$(".chip", ch).forEach(function (x) { x.classList.toggle("on", x === b); });
        list();
      });
      list();
    }
    function list() {
      var items = D.tests.filter(function (t) { return cur === "All" || t.group === cur; });
      $("#out").innerHTML = items.map(function (t) {
        return '<div class="card tcard" style="--g:' + (gcol[t.group] || "#1b2a6b") + '"><h3>' + esc(t.title) + '</h3><div class="meta"><span class="tag">' + esc(t.subject) +
          '</span><span class="tag gold">Class ' + esc(t.cls) + '</span></div><p class="meta" style="margin:8px 0 12px">' + t.questions.length +
          ' MCQs · har baar naye order mein</p><button class="btn" data-id="' + t.id + '">▶ Start Test</button></div>';
      }).join("");
      $$("button[data-id]").forEach(function (b) { b.addEventListener("click", function () { start(b.getAttribute("data-id")); }); });
    }
    function start(id) {
      var t = D.tests.filter(function (x) { return x.id === id; })[0], i = 0, score = 0, log = [];
      var qs = shuffle(t.questions).map(function (q) {
        return { q: q.q, opts: shuffle(q.options.map(function (o, k) { return { o: o, ok: k === q.answer }; })) };
      });
      function q() {
        var cur = qs[i], L = ["A", "B", "C", "D"];
        main.innerHTML = '<div class="card"><div class="meta">' + esc(t.title) + " · Question " + (i + 1) + " / " + qs.length +
          '</div><div class="prog"><div style="width:' + (i / qs.length * 100) + '%"></div></div><h3 style="font-size:1.2rem;margin-bottom:10px">' + esc(cur.q) + "</h3>" +
          cur.opts.map(function (o, k) { return '<button class="opt" data-k="' + k + '"><b>' + L[k] + "</b>" + esc(o.o) + "</button>"; }).join("") +
          '<div id="nx"></div></div>';
        $$(".opt").forEach(function (b) {
          b.addEventListener("click", function () {
            var k = +b.getAttribute("data-k"), right = "";
            $$(".opt").forEach(function (x, n) { x.disabled = true; if (cur.opts[n].ok) { x.classList.add("ok"); right = cur.opts[n].o; } });
            if (!cur.opts[k].ok) b.classList.add("bad"); else score++;
            log.push({ q: cur.q, picked: cur.opts[k].o, right: right, ok: cur.opts[k].ok });
            $("#nx").innerHTML = '<button class="btn" id="go">' + (i + 1 < qs.length ? "Next →" : "Result dekhein") + "</button>";
            $("#go").addEventListener("click", function () { i++; i < qs.length ? q() : done(); });
          });
        });
      }
      function done() {
        var pct = Math.round(score / qs.length * 100);
        var msg = pct >= 80 ? "Shandar! 🌟" : pct >= 50 ? "Achha, mazeed mehnat karein 👍" : "Dobara koshish karein 💪";
        main.innerHTML = '<div class="card"><div class="score">' + score + " / " + qs.length + '</div><p style="text-align:center;font-size:1.1rem">' + pct + "% — " + msg + "</p>" +
          "<h3>Review</h3>" + log.map(function (l) {
            return '<div class="note" style="background:' + (l.ok ? "#e6f4ec" : "#fde8e5") + '">' + (l.ok ? "✅ " : "❌ ") + esc(l.q) +
              (l.ok ? "" : "<br><small>Aapka jawab: " + esc(l.picked) + " · Sahi jawab: <b>" + esc(l.right) + "</b></small>") + "</div>";
          }).join("") + '<button class="btn" id="re">Dobara</button> <button class="btn alt" id="mn">Tests ki list</button></div>';
        $("#re").addEventListener("click", function () { start(id); });
        $("#mn").addEventListener("click", menu);
        window.scrollTo(0, 0);
      }
      q();
      window.scrollTo(0, 0);
    }
    menu();
  };

  /* ---------- CONTACT ---------- */
  R.contact = function () {
    var num = D.school.whatsapp, who = D.school.contactName || "School";
    var pretty = "+" + num.slice(0, 2) + " " + num.slice(2, 5) + " " + num.slice(5);
    var types = ["Report a problem", "Question", "Suggestion", "Admission inquiry"];
    var probs = ["Broken furniture", "Water or toilets", "Cleanliness", "Harassment or bullying", "Electricity or fans", "Other"];
    main.innerHTML =
      '<div class="card" style="margin-bottom:16px"><div class="row"><div><h3>📱 ' + esc(who) + '</h3><div class="meta">WhatsApp: <b>' + esc(pretty) + '</b></div></div>' +
      '<a class="btn" href="https://wa.me/' + esc(num) + '" target="_blank" rel="noopener">Seedha WhatsApp kholein</a></div></div>' +
      '<div class="card"><h3>✉️ Message bhejein</h3><p class="meta">Form bharein, phir "WhatsApp par bhejein" dabayein. WhatsApp khulega aur message pehle se likha hoga; aap khud Send dabayenge. Is site par koi maloomat save nahi hoti.</p>' +
      '<div class="form"><label>Kis cheez ke liye?<select id="ty">' + types.map(function (t) { return "<option>" + t + "</option>"; }).join("") + '</select></label>' +
      '<label id="pl" style="display:block">Masle ki qism<select id="pr">' + probs.map(function (t) { return "<option>" + t + "</option>"; }).join("") + '</select></label>' +
      '<label>Class<select id="cl"><option>Class 6</option><option>Class 7</option><option>Class 8</option><option>Class 9</option><option>Class 10</option><option>Class 11</option><option>Class 12</option><option>Parent / Other</option></select></label>' +
      '<label>Naam (zaroori nahi)<input id="nm" placeholder="Apna naam"></label>' +
      '<label>Message<textarea id="ms" rows="5" placeholder="Yahan apna message likhein…"></textarea></label>' +
      '<div class="note" id="serious" style="display:none">⚠️ Harassment ya bullying jaise serious masle mein baat seedha Head Master se bhi karein.</div>' +
      '<div class="row" style="justify-content:flex-start"><button class="btn" id="send">💬 WhatsApp par bhejein</button><button class="btn alt" id="cp">Copy message</button></div><p id="st" class="meta"></p></div></div>';
    function build() {
      var ty = $("#ty").value, lines = ["*Seerani Digital Portal*", "Type: " + ty];
      if (ty === "Report a problem") lines.push("Problem: " + $("#pr").value);
      lines.push("Class: " + $("#cl").value);
      if ($("#nm").value.trim()) lines.push("Name: " + $("#nm").value.trim());
      lines.push("", $("#ms").value.trim());
      return lines.join("\n");
    }
    function sync() {
      var rep = $("#ty").value === "Report a problem";
      $("#pl").style.display = rep ? "block" : "none";
      $("#serious").style.display = rep && $("#pr").value === "Harassment or bullying" ? "block" : "none";
    }
    $$("#ty,#pr").forEach(function (e) { e.addEventListener("change", sync); }); sync();
    $("#send").addEventListener("click", function () {
      if (!$("#ms").value.trim()) { $("#st").textContent = "Pehle message likhein."; return; }
      window.open("https://wa.me/" + num + "?text=" + encodeURIComponent(build()), "_blank");
      $("#st").textContent = "WhatsApp khul gaya - wahan Send dabayein.";
    });
    $("#cp").addEventListener("click", function () {
      if (!$("#ms").value.trim()) { $("#st").textContent = "Pehle message likhein."; return; }
      if (navigator.clipboard) navigator.clipboard.writeText(build()).then(function () { $("#st").textContent = "Message copy ho gaya."; });
      else $("#st").textContent = build();
    });
  };

  /* ---------- STEAM ---------- */
  R.steam = function () {
    main.innerHTML = '<div class="chips" id="ch"></div><div class="grid" id="out"></div>';
    var icon = { Science: "🔬", Technology: "💻", Engineering: "⚙️", Art: "🎨", Maths: "📐" };
    function draw(cat) {
      var items = D.steam.filter(function (p) { return cat === "All" || p.category === cat; });
      $("#out").innerHTML = items.length ? items.map(function (p) {
        var img = p.image ? '<img src="' + esc(ph(p.image)) + '" alt="' + esc(p.title) + '" style="border-radius:10px;margin-bottom:8px;width:100%">' : "";
        return '<div class="card">' + img + "<h3>" + (icon[p.category] || "💡") + " " + esc(p.title) + '</h3><span class="tag">' + esc(p.category) +
          '</span><span class="tag gold">' + esc(p.cls) + '</span><p style="margin:8px 0">' + esc(p.text) + '</p><div class="meta">👥 ' + esc(p.students) + "</div></div>";
      }).join("") : empty();
    }
    chips($("#ch"), ["All", "Science", "Technology", "Engineering", "Art", "Maths"], draw); draw("All");
  };

  /* ---------- CALENDAR ---------- */
  R.calendar = function () {
    var now = new Date(), y = now.getFullYear(), m = now.getMonth();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    function pad(n) { return (n < 10 ? "0" : "") + n; }
    function evOn(yy, mm, dd) {
      var ds = yy + "-" + pad(mm + 1) + "-" + pad(dd), md = pad(mm + 1) + "-" + pad(dd);
      return D.calendar.filter(function (e) { return e.date === ds || e.md === md; });
    }
    function draw() {
      var first = new Date(y, m, 1).getDay(), days = new Date(y, m + 1, 0).getDate(), html = "";
      ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].forEach(function (n) { html += '<div class="dn">' + n + "</div>"; });
      for (var b = 0; b < first; b++) html += '<div class="d blank"></div>';
      var list = [];
      for (var d = 1; d <= days; d++) {
        var evs = evOn(y, m, d), isT = d === now.getDate() && m === now.getMonth() && y === now.getFullYear();
        var dow = new Date(y, m, d).getDay();
        html += '<div class="d' + (isT ? " today" : "") + (dow === 5 ? " fri" : "") + '"><b>' + d + "</b>" +
          evs.map(function (e) { list.push({ d: d, e: e }); return '<span class="ev ' + e.type + '">' + esc(e.title) + "</span>"; }).join("") + "</div>";
      }
      main.innerHTML = '<div class="calhead"><button class="btn sm" id="pv">← Pichla</button><h2>' + months[m] + " " + y +
        '</h2><button class="btn sm" id="nx">Agla →</button></div><div class="cal">' + html + "</div>" +
        '<div class="legend"><span><i style="background:var(--red)"></i>Exam</span><span><i style="background:var(--green)"></i>Holiday</span><span><i style="background:var(--blue)"></i>Event</span></div>' +
        "<h3>Is mahine ke events</h3>" + (list.length ? '<div class="list">' + list.map(function (x) {
          return '<div class="card row"><b>' + x.d + " " + months[m] + "</b><span>" + esc(x.e.title) + '</span><span class="tag ' +
            (x.e.type === "exam" ? "red" : x.e.type === "event" ? "blue" : "") + '">' + x.e.type + "</span></div>";
        }).join("") + "</div>" : empty("Is mahine koi event nahi."));
      $("#pv").addEventListener("click", function () { m--; if (m < 0) { m = 11; y--; } draw(); });
      $("#nx").addEventListener("click", function () { m++; if (m > 11) { m = 0; y++; } draw(); });
    }
    draw();
  };

  /* ---------- GALLERY ---------- */
  R.gallery = function () {
    main.innerHTML = '<div class="chips" id="ch"></div><div class="gal" id="out"></div>' +
      '<div class="lb" id="lb"><button aria-label="Close">×</button><div><img id="lbi" alt=""><p id="lbc"></p></div></div>';
    function draw(cat) {
      var items = D.gallery.filter(function (g) { return cat === "All" || g.category === cat; });
      $("#out").innerHTML = items.length ? items.map(function (g, i) {
        return '<figure data-i="' + D.gallery.indexOf(g) + '"><div class="ph"><img loading="lazy" src="' + esc(ph(g.src)) + '" alt="' + esc(g.caption) +
          '" onerror="this.parentNode.textContent=\'🖼️\'"></div><figcaption>' + esc(g.caption) + "</figcaption></figure>";
      }).join("") : empty("Photos jald upload ki jayengi. 📷");
    }
    $("#out").addEventListener("click", function (e) {
      var f = e.target.closest("figure"); if (!f) return;
      var g = D.gallery[+f.getAttribute("data-i")];
      $("#lbi").src = ph(g.src); $("#lbc").textContent = g.caption; $("#lb").classList.add("open");
    });
    $("#lb").addEventListener("click", function () { $("#lb").classList.remove("open"); });
    chips($("#ch"), ["All"].concat(uniq(D.gallery.map(function (g) { return g.category; }))), draw); draw("All");
  };

  /* ---------- ENGLISH ---------- */
  R.english = function () {
    main.innerHTML = '<div class="chips" id="tabs"></div><div id="out"></div>';
    function speak(t) {
      if (!("speechSynthesis" in window)) { alert("Aapka browser awaaz support nahi karta."); return; }
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(t); u.lang = "en-US"; u.rate = 0.9; window.speechSynthesis.speak(u);
    }
    function searchList(items, render, ph) {
      $("#out").innerHTML = '<div class="bar"><input id="sq" placeholder="' + ph + '"></div><div class="wl" id="wl"></div>';
      function draw() {
        var q = $("#sq").value.toLowerCase();
        var f = items.filter(function (x) { return JSON.stringify(x).toLowerCase().indexOf(q) > -1; });
        $("#wl").innerHTML = f.length ? f.map(render).join("") : empty("Koi lafz nahi mila.");
      }
      $("#sq").addEventListener("input", draw); draw();
    }
    var tabs = {
      "Vocabulary": function () {
        var i = 0;
        function card() {
          var v = D.vocab[i];
          $("#out").innerHTML = '<p class="meta" style="text-align:center">Card ' + (i + 1) + " / " + D.vocab.length + ' — palatne ke liye card par tap karein</p>' +
            '<div class="flash"><div class="in" id="fl"><div class="f">' + esc(v.w) + '</div><div class="b"><div><span class="urdu">' + esc(v.ur) + "</span><small>" + esc(v.ex) + "</small></div></div></div></div>" +
            '<p style="text-align:center;margin-top:18px"><button class="btn alt" id="p">← Pichla</button> <button class="btn alt" id="sp">🔊 Sunein</button> <button class="btn" id="n">Agla →</button></p>';
          $("#fl").addEventListener("click", function () { this.classList.toggle("flip"); });
          $("#p").addEventListener("click", function () { i = (i - 1 + D.vocab.length) % D.vocab.length; card(); });
          $("#n").addEventListener("click", function () { i = (i + 1) % D.vocab.length; card(); });
          $("#sp").addEventListener("click", function () { speak(v.w + ". " + v.ex); });
        }
        card();
      },
      "Grammar": function () {
        $("#out").innerHTML = '<div class="list">' + D.grammar.map(function (g, n) {
          return '<details class="card"' + (n === 0 ? " open" : "") + "><summary>" + esc(g.title) + ' <span class="urdu" style="color:var(--muted);font-size:1rem">— ' + esc(g.ur) + "</span></summary><p>" + esc(g.text) +
            '</p><ul style="margin:0;padding-left:20px">' + g.examples.map(function (e) { return "<li>" + esc(e) + "</li>"; }).join("") + "</ul></details>";
        }).join("") + "</div>";
      },
      "Synonyms": function () {
        searchList(D.synonyms, function (s) {
          return '<div class="r"><div><b>' + esc(s.w) + '</b> <span class="urdu meta">' + esc(s.ur) + '</span></div><div>' +
            s.s.map(function (x) { return '<span class="pill">' + esc(x) + "</span>"; }).join("") + "</div></div>";
        }, "Synonym search karein… (jaise happy)");
      },
      "Antonyms": function () {
        searchList(D.antonyms, function (s) {
          return '<div class="r"><div><b>' + esc(s.w) + '</b> <span class="meta">↔</span> <b style="color:var(--red)">' + esc(s.a) + '</b></div><div class="urdu meta">' + esc(s.ur) + "</div></div>";
        }, "Antonym search karein… (jaise hot)");
      },
      "Idioms": function () {
        $("#out").innerHTML = '<div class="list">' + D.idioms.map(function (x) {
          return '<div class="card"><h3>💬 ' + esc(x.i) + "</h3><div>" + esc(x.m) + '</div><div class="urdu meta">' + esc(x.ur) + '</div><div class="meta" style="margin-top:6px">Example: ' + esc(x.ex) + "</div></div>";
        }).join("") + "</div>";
      },
      "Speaking": function () {
        $("#out").innerHTML = D.speaking.map(function (g) {
          return "<h3>" + esc(g.group) + '</h3><div class="list" style="margin-bottom:18px">' + g.items.map(function (s) {
            return '<div class="card row"><div><b>' + esc(s.en) + '</b><div class="urdu meta">' + esc(s.ur) + '</div></div><button class="btn sm" data-s="' + esc(s.en) + '">🔊</button></div>';
          }).join("") + "</div>";
        }).join("");
        $$("button[data-s]").forEach(function (b) { b.addEventListener("click", function () { speak(b.getAttribute("data-s")); }); });
      },
      "Writing": function () {
        $("#out").innerHTML = '<div class="list">' + D.writing.map(function (w, n) {
          return '<div class="card"><div class="row"><h3>✍️ ' + esc(w.title) + '</h3><button class="btn sm" data-c="' + n + '">Copy</button></div><pre class="letter">' + esc(w.text) + "</pre></div>";
        }).join("") + "</div>";
        $$("button[data-c]").forEach(function (b) {
          b.addEventListener("click", function () {
            var t = D.writing[+b.getAttribute("data-c")].text;
            if (navigator.clipboard) navigator.clipboard.writeText(t).then(function () { b.textContent = "Copied ✓"; }); else alert(t);
          });
        });
      }
    };
    chips($("#tabs"), Object.keys(tabs), function (k) { tabs[k](); });
    tabs.Vocabulary();
  };

  if (page !== "contact" && D.school.whatsapp) {
    var fab = document.createElement("a");
    fab.className = "wafab"; fab.href = "contact.html"; fab.setAttribute("aria-label", "Contact the school"); fab.innerHTML = "💬<span>Contact</span>";
    document.body.appendChild(fab);
  }
  function boot() { if (R[page]) R[page](); }
  if (page === "gallery" || page === "teachers" || page === "hub") {
    var sc = document.createElement("script");
    sc.src = "photos.js"; sc.onload = boot; sc.onerror = boot;
    document.head.appendChild(sc);
  } else boot();
})();
