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
  function empty(msg) { return '<div class="empty">' + esc(msg || "Koi record nahi mila.") + "</div>"; }
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
  };

  /* ---------- PAST PAPERS ---------- */
  R.papers = function () {
    main.innerHTML =
      '<div class="bar"><select id="c"><option value="">Sab classes</option>' +
      [6, 7, 8, 9, 10].map(function (c) { return '<option value="' + c + '">Class ' + c + "</option>"; }).join("") +
      '</select><select id="s"><option value="">Sab subjects</option>' +
      uniq(D.papers.map(function (p) { return p.subject; })).sort().map(function (s) { return "<option>" + esc(s) + "</option>"; }).join("") +
      '</select><input id="q" placeholder="Search…"></div><div id="out" class="list"></div>';
    function draw() {
      var c = $("#c").value, s = $("#s").value, q = $("#q").value.toLowerCase();
      var items = D.papers.filter(function (p) {
        return (!c || String(p.cls) === c) && (!s || p.subject === s) &&
          (p.subject + " " + p.title + " " + p.year).toLowerCase().indexOf(q) > -1;
      }).sort(function (a, b) { return a.cls - b.cls || b.year - a.year; });
      $("#out").innerHTML = items.length ? items.map(function (p) {
        return '<div class="card row"><div><h3>' + esc(p.subject) + " — " + esc(p.title) + "</h3>" +
          '<div class="meta"><span class="tag">Class ' + p.cls + '</span><span class="tag gold">' + p.year + "</span></div></div>" +
          '<a class="btn sm" href="' + esc(p.file) + '" target="_blank" rel="noopener">⬇ PDF</a></div>';
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
        var av = a.photo ? '<img class="avatar" src="' + esc(a.photo) + '" alt="">' : '<div class="avatar">' + esc(a.name.charAt(0)) + "</div>";
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
        .sort(function (a, b) { return b.year - a.year; });
      $("#out").innerHTML = items.length ? items.map(function (a) {
        return '<div class="card"><div class="row"><h3>🏅 ' + esc(a.title) + '</h3><span class="tag gold">' + a.year +
          '</span></div><span class="tag">' + esc(a.category) + '</span><p class="meta" style="margin:8px 0 0">' + esc(a.text) + "</p></div>";
      }).join("") : empty();
    }
    chips($("#ch"), ["All", "Award", "Sports", "Science Exhibition"], draw); draw("All");
  };

  /* ---------- TEACHERS ---------- */
  R.teachers = function () {
    main.innerHTML = '<div class="bar"><input id="q" placeholder="Teacher ya subject search karein…"></div><div class="grid" id="out"></div>';
    function draw() {
      var q = $("#q").value.toLowerCase();
      var items = D.teachers.filter(function (t) { return (t.name + " " + t.subject + " " + t.role).toLowerCase().indexOf(q) > -1; });
      $("#out").innerHTML = items.length ? items.map(function (t) {
        var av = t.photo ? '<img class="avatar" src="' + esc(t.photo) + '" alt="">' : '<div class="avatar">' + esc(t.name.charAt(0)) + "</div>";
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
    main.innerHTML = '<div class="chips" id="ch"></div><div class="bar"><select id="c"><option value="">Sab classes</option>' +
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
        var ic = b.type === "Book" ? "📘" : b.type === "Notes" ? "📝" : "📄";
        return '<div class="card row"><div><h3>' + ic + " " + esc(b.title) + '</h3><div class="meta"><span class="tag">' + esc(b.type) +
          '</span><span class="tag gold">Class ' + esc(b.cls) + '</span><span class="tag blue">' + esc(b.subject) + "</span></div></div>" +
          '<a class="btn sm" href="' + esc(b.file) + '" target="_blank" rel="noopener">Open / Download</a></div>';
      }).join("") : empty();
    }
    chips($("#ch"), ["All", "Book", "Notes", "Educational PDF"], function (v) { type = v; draw(); });
    $$("#c,#q").forEach(function (e) { e.addEventListener("input", draw); }); draw();
  };

  /* ---------- ONLINE TESTS ---------- */
  R.tests = function () {
    function menu() {
      main.innerHTML = '<div class="grid">' + D.tests.map(function (t) {
        return '<div class="card"><h3>' + esc(t.title) + '</h3><div class="meta"><span class="tag">' + esc(t.subject) + '</span><span class="tag gold">Class ' +
          esc(t.cls) + "</span></div><p class=\"meta\">" + t.questions.length + ' MCQs</p><button class="btn" data-id="' + t.id + '">Start Test</button></div>';
      }).join("") + "</div>";
      $$("button[data-id]").forEach(function (b) { b.addEventListener("click", function () { start(b.getAttribute("data-id")); }); });
    }
    function start(id) {
      var t = D.tests.filter(function (x) { return x.id === id; })[0], i = 0, score = 0, log = [];
      function q() {
        var cur = t.questions[i];
        main.innerHTML = '<div class="card"><div class="meta">' + esc(t.title) + " · Question " + (i + 1) + " / " + t.questions.length +
          '</div><div class="prog"><div style="width:' + (i / t.questions.length * 100) + '%"></div></div><h3 style="font-size:1.2rem">' + esc(cur.q) + "</h3>" +
          cur.options.map(function (o, k) { return '<button class="opt" data-k="' + k + '">' + esc(o) + "</button>"; }).join("") +
          '<div id="nx"></div></div>';
        $$(".opt").forEach(function (b) {
          b.addEventListener("click", function () {
            var k = +b.getAttribute("data-k");
            $$(".opt").forEach(function (x, n) { x.disabled = true; if (n === cur.answer) x.classList.add("ok"); });
            if (k !== cur.answer) b.classList.add("bad"); else score++;
            log.push({ q: cur.q, picked: cur.options[k], right: cur.options[cur.answer], ok: k === cur.answer });
            $("#nx").innerHTML = '<button class="btn" id="go">' + (i + 1 < t.questions.length ? "Next →" : "Result dekhein") + "</button>";
            $("#go").addEventListener("click", function () { i++; i < t.questions.length ? q() : done(); });
          });
        });
      }
      function done() {
        var pct = Math.round(score / t.questions.length * 100);
        var msg = pct >= 80 ? "Shandar! 🌟" : pct >= 50 ? "Achha, mazeed mehnat karein 👍" : "Dobara koshish karein 💪";
        main.innerHTML = '<div class="card"><div class="score">' + score + " / " + t.questions.length + '</div><p style="text-align:center">' + pct + "% — " + msg + "</p>" +
          '<h3>Review</h3>' + log.map(function (l) {
            return '<div class="note" style="background:' + (l.ok ? "#e6f4ec" : "#fde8e5") + '">' + (l.ok ? "✅ " : "❌ ") + esc(l.q) +
              (l.ok ? "" : "<br><small>Aapka jawab: " + esc(l.picked) + " · Sahi jawab: <b>" + esc(l.right) + "</b></small>") + "</div>";
          }).join("") + '<button class="btn" id="re">Dobara</button> <button class="btn alt" id="mn">Tests ki list</button></div>';
        $("#re").addEventListener("click", function () { start(id); });
        $("#mn").addEventListener("click", menu);
      }
      q();
    }
    menu();
  };

  /* ---------- STEAM ---------- */
  R.steam = function () {
    main.innerHTML = '<div class="chips" id="ch"></div><div class="grid" id="out"></div>';
    var icon = { Science: "🔬", Technology: "💻", Engineering: "⚙️", Art: "🎨", Maths: "📐" };
    function draw(cat) {
      var items = D.steam.filter(function (p) { return cat === "All" || p.category === cat; });
      $("#out").innerHTML = items.length ? items.map(function (p) {
        var img = p.image ? '<img src="' + esc(p.image) + '" alt="' + esc(p.title) + '" style="border-radius:10px;margin-bottom:8px;width:100%">' : "";
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
        return '<figure data-i="' + D.gallery.indexOf(g) + '"><div class="ph"><img loading="lazy" src="' + esc(g.src) + '" alt="' + esc(g.caption) +
          '" onerror="this.remove()">🖼️</div><figcaption>' + esc(g.caption) + "</figcaption></figure>";
      }).join("") : empty();
    }
    $("#out").addEventListener("click", function (e) {
      var f = e.target.closest("figure"); if (!f) return;
      var g = D.gallery[+f.getAttribute("data-i")];
      $("#lbi").src = g.src; $("#lbc").textContent = g.caption; $("#lb").classList.add("open");
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
        $("#out").innerHTML = '<div class="list">' + D.grammar.map(function (g) {
          return '<div class="card"><h3>' + esc(g.title) + ' <span class="urdu" style="color:var(--muted);font-size:1rem">— ' + esc(g.ur) + "</span></h3><p>" + esc(g.text) +
            '</p><ul style="margin:0;padding-left:20px">' + g.examples.map(function (e) { return "<li>" + esc(e) + "</li>"; }).join("") + "</ul></div>";
        }).join("") + "</div>";
      },
      "Speaking": function () {
        $("#out").innerHTML = D.speaking.map(function (g) {
          return "<h3>" + esc(g.group) + '</h3><div class="list" style="margin-bottom:18px">' + g.items.map(function (s) {
            return '<div class="card row"><div><b>' + esc(s.en) + '</b><div class="urdu meta">' + esc(s.ur) + '</div></div><button class="btn sm" data-s="' + esc(s.en) + '">🔊</button></div>';
          }).join("") + "</div>";
        }).join("");
        $$("button[data-s]").forEach(function (b) { b.addEventListener("click", function () { speak(b.getAttribute("data-s")); }); });
      }
    };
    chips($("#tabs"), Object.keys(tabs), function (k) { tabs[k](); });
    tabs.Vocabulary();
  };

  if (R[page]) R[page]();
})();
