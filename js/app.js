(() => {
  const view = document.getElementById("view");
  const store = { get: k => { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); return true; } catch (e) { return false; } }, del: k => { try { localStorage.removeItem(k); } catch (e) {} } };
  let lang = store.get("lang") === "pl" ? "pl" : "en";
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const cover = b => b.cover ? `<img src="${esc(b.cover)}" alt="${esc(b.title)}">` : `<div class="nocover" style="background:${esc(b.color)}"><span lang="ja">${esc(b.main || b.jp || b.title)}</span></div>`;
  const T = { en: { none: "No translations in this language yet.", back: "← Back", about: "About" },
              pl: { none: "Brak tłumaczeń w tym języku.", back: "← Wróć", about: "O projekcie" } };

  const NAV = { en: { books: "Books", manga: "Manga", other: "Other", requests: "Requests", learn: "Learn Japanese", about: "About", admin: "Admin" }, pl: { books: "Książki", manga: "Manga", other: "Inne", requests: "Prośby", learn: "Nauka japońskiego", about: "O projekcie", admin: "Admin" } };
  const EMPTY = { en: "Nothing here yet.", pl: "Na razie nic tu nie ma." };
  const cat = b => b.category || "books";
  function grid(c) {
    const list = BOOKS.filter(b => cat(b) === c);
    if (!list.length) { view.innerHTML = `<p class="empty">${EMPTY[lang]}</p>`; return; }
    view.innerHTML = `<div class="grid">${list.map(b => `
      <a class="card" href="#/book/${esc(b.id)}"><div class="img">${cover(b)}</div>
      <h2>${esc(b.title)}</h2>${b.jp ? `<p>${esc(b.jp)}</p>` : ""}</a>`).join("")}</div>`;
  }
  const ICON_CARDS = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="7" width="14" height="13" rx="2.2"/><path d="M7 4h11.5A2.5 2.5 0 0 1 21 6.5V16"/><path d="M7 12h6M7 15.5h4"/></svg>';
  const ICON_DL = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11"/><path d="M7.5 11 12 15.5 16.5 11"/><path d="M5 20h14"/></svg>';
  const wordsLabel = (n) => lang === "pl" ? (n === 1 ? "słowo" : (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14)) ? "słowa" : "słów") : (n === 1 ? "word" : "words");
  // Where the page runs inside Claude, files are saved through the `downloads` capability (viewer confirms).
  let dl = null;
  if (typeof claude !== "undefined" && claude.use) claude.use("downloads").then(v => { dl = v; }).catch(() => {});
  let modalApi = null, pageApi = null, pageMemo = { id: null, n: 0 }; // last page per visit, so switching language keeps your place
  document.addEventListener("keydown", e => {
    if (pageApi && !(modalApi && document.body.classList.contains("modal-open"))) {
      const tag = (e.target.tagName || "").toLowerCase();
      if (!e.altKey && !e.ctrlKey && !e.metaKey && tag !== "textarea" && tag !== "input" && tag !== "select") {
        if (e.key === "ArrowLeft") pageApi.go(1); else if (e.key === "ArrowRight") pageApi.go(-1);
      }
      return;
    }
    if (!modalApi || !document.body.classList.contains("modal-open")) return;
    if (e.key === "Escape") { e.preventDefault(); modalApi.close(); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); modalApi.step(-1); }
    else if (e.key === "ArrowRight") { e.preventDefault(); modalApi.step(1); }
  });
  const D = {
    en: { page: "Page", pages: "Pages", tate: "Vertical text", goto: "Go to page", go: "Go", prevPage: "Previous", nextPage: "Next", bmMark: "Bookmark here", bmClear: "Remove bookmark", resume: "Continue where you stopped", notes: "Notes", notesPh: "Write your notes about this book…", saved: "Saved", nosave: "Can’t save here: browser storage is unavailable.", local: "Notes are saved in this browser, on this device.", deck: "Download flashcards", deckSoon: "Coming soon", deckSaved: "Saved. In Anki: File → Import.", deckFail: "Could not save the file.", deckHint: "Vocabulary from this book", words: "Words", grammar: "Grammar", note: "Note", close: "Close", sentence: (n, N) => `Sentence ${n} of ${N}`, prev: "Previous sentence", next: "Next sentence", furi: "Furigana", hint: "Laid out like a Japanese book: start on the right page and turn pages to the left. Hover a sentence to see it on both pages. Click it for the word and grammar breakdown.", jpLabel: "日本語", trLabel: "English", reading: "Reading" },
    pl: { page: "Strona", pages: "Strony", tate: "Pismo pionowe", goto: "Idź do strony", go: "Idź", prevPage: "Poprzednia", nextPage: "Następna", bmMark: "Zakładka tutaj", bmClear: "Usuń zakładkę", resume: "Wróć do zakładki", notes: "Notatki", notesPh: "Zapisz tu notatki o tej książce…", saved: "Zapisano", nosave: "Nie można zapisać: pamięć przeglądarki jest niedostępna.", local: "Notatki zapisują się w tej przeglądarce, na tym urządzeniu.", deck: "Pobierz fiszki", deckSoon: "Wkrótce", deckSaved: "Zapisano. W Anki: Plik → Importuj.", deckFail: "Nie udało się zapisać pliku.", deckHint: "Słownictwo z tej książki", sentence: (n, N) => `Zdanie ${n} z ${N}`, prev: "Poprzednie zdanie", next: "Następne zdanie", furi: "Furigana", words: "Słowa", grammar: "Gramatyka", note: "Uwaga", close: "Zamknij", hint: "Układ jak w japońskiej książce: zacznij od prawej strony i przewracaj strony w lewo. Najedź na zdanie, aby zobaczyć je na obu stronach. Kliknij, aby zobaczyć słowa i gramatykę.", jpLabel: "日本語", trLabel: "Polski", reading: "Czytanie" }
  };
  // 漢字{かんじ} -> <ruby>漢字<rt>かんじ</rt></ruby> (input is escaped first)
  const ruby = str => esc(str).replace(/([\u4e00-\u9fff\u3005\u3006\u30f6]+)\{([^}]+)\}/g, "<ruby>$1<rt>$2</rt></ruby>").replace(/\n/g, "<br>").replace(/^(.*?)\t(.*)$/s, '<span class="tabl">$1</span><span class="tabnum">$2</span>');
  let furi = store.get("furi") !== "off";
  let tate = store.get("tate") !== "off"; // vertical Japanese text, as in the printed book
  const tr = (s) => s[lang] || s.en || "";
  // Paragraph look follows the first sentence: style hints (head, title, epi, poem, mark, toc, cont)
  // or, by default, a one-character indent unless the paragraph opens with a quotation.
  function paraClass(first) {
    const st = String(first.style || "").split(/\s+/).filter(Boolean);
    const cls = st.map(x => "st-" + x);
    const styled = st.some(x => ["head", "title", "epi", "poem", "mark", "toc"].includes(x));
    if (!styled && !st.includes("cont") && !first.jp.startsWith("「")) cls.push("ind");
    return cls.join(" ");
  }
  function sentencesHTML(list, side) {
    let out = "";
    list.forEach(({ s, key }, i) => {
      if (i === 0 || s.para) out += `${i ? "</p>" : ""}<p class="${paraClass(s)}">`;
      const txt = side === "jp" ? ruby(s.jp) : esc(tr(s));
      out += `<span class="sent" tabindex="0" role="button" data-s="${key}">${txt}</span>${side === "jp" ? "" : " "}`;
    });
    return out + "</p>";
  }
  function detailHTML(s, n, N, isBm) {
    const t = D[lang], m = o => esc(o && (o[lang] || o.en) || "");
    return `<div class="modal" role="dialog" aria-modal="true" aria-labelledby="mjp">
      <header class="mhead"><span class="mcount">${t.sentence(n, N)}</span>
        <button type="button" class="mbm" aria-pressed="${!!isBm}"><svg viewBox="0 0 16 20" aria-hidden="true"><path d="M2.5 1.75h11a.75.75 0 0 1 .75.75v15.9a.4.4 0 0 1-.64.32L8 14.6l-5.61 4.12a.4.4 0 0 1-.64-.32V2.5a.75.75 0 0 1 .75-.75z"/></svg><span>${isBm ? t.bmClear : t.bmMark}</span></button>
        <span class="mnav"><button type="button" class="mprev" aria-label="${t.prev}">‹</button><button type="button" class="mnext" aria-label="${t.next}">›</button>
        <button type="button" class="dclose" aria-label="${t.close}">×</button></span></header>
      <div class="mbody">
      <div class="dtop"><p class="djp" id="mjp" lang="ja">${ruby(s.jp)}</p><p class="dtr">${esc(tr(s))}</p></div>
      <div class="dcols">
      ${s.words && s.words.length ? `<section><h4>${t.words}</h4><table>${s.words.map(w => `<tr><td class="dw" lang="ja">${esc(w.word)}</td><td class="dr">${esc(w.reading || "")}</td><td>${m(w.meaning)}</td></tr>`).join("")}</table></section>` : ""}
      ${s.grammar && s.grammar.length ? `<section><h4>${t.grammar}</h4><ul>${s.grammar.map(g => `<li><b lang="ja">${esc(g.pattern)}</b><span>${m(g.explanation)}</span></li>`).join("")}</ul></section>` : ""}
      </div>
      ${s.note ? `<section class="dnote"><h4>${t.note}</h4><p>${m(s.note)}</p></section>` : ""}
      </div></div>`;
  }
  // pages added from the admin panel (db collection "pages") are appended to the last chapter
  let extraPages = {};
  function withExtra(b) {
    const ex = b && extraPages[b.id]; if (!ex || !ex.length) return b;
    const chapters = b.chapters.map(c => ({ ...c }));
    chapters.forEach(c => { if (!c.pages && c.sentences) { c.pages = [c.sentences]; delete c.sentences; } if (c.pages) c.pages = c.pages.slice(); });
    let last = -1; chapters.forEach((c, ci) => { if (c.pages) last = ci; });
    if (last < 0) return b;
    // pos = the page number shown by the pager ("Page 8 / 8"): text is appended to that page, or a new page is added at the end
    [...ex].sort((a, z) => (a.pos ?? 1e9) - (z.pos ?? 1e9)).forEach(x => {
      const ci = x.ci != null && chapters[x.ci] && chapters[x.ci].pages ? x.ci : last, pgs = chapters[ci].pages;
      const i = x.pos >= 1 ? x.pos - 1 : pgs.length;
      if (i < pgs.length) {
        const pg = pgs[i], base = Array.isArray(pg) ? { sentences: pg } : pg;
        pgs[i] = { ...base, ...(base.head || !x.page.head ? {} : { head: x.page.head }), ...(base.side || !x.page.side ? {} : { side: x.page.side }), sentences: [...base.sentences, ...x.page.sentences] };
      } else pgs.push(x.page);
    });
    return { ...b, chapters };
  }
  function book(id) {
    const b = withExtra(BOOKS.find(x => x.id === id)); if (!b) return grid("books");
    const t = D[lang];
    // every bilingual page of the book, in reading order; plain-text chapters are shown below
    const spreads = [], plain = [];
    b.chapters.forEach((c, ci) => {
      if (c.sentences || c.pages) {
        const pgs = c.pages || [c.sentences];
        pgs.forEach((pg, pi) => {
          const meta = Array.isArray(pg) ? {} : pg, sents = Array.isArray(pg) ? pg : pg.sentences;
          spreads.push({ c, ci, pi, n: pgs.length, meta, list: sents.map((s, i) => ({ s, key: `${ci}-${pi}-${i}` })) });
        });
      } else if (c.text && c.text[lang]) plain.push(c);
    });
    const loc = {}; spreads.forEach((sp, si) => sp.list.forEach((x, i) => { loc[x.key] = { si, s: x.s }; }));
    const order = spreads.flatMap(sp => sp.list.map(x => x.key));
    const plainHTML = plain.map(c => { const ct = c.title || {};
      return `<h3>${esc(tr(ct))}</h3>` + c.text[lang].split(/\n\s*\n/).map(p => `<p class="t">${esc(p)}</p>`).join(""); }).join("");

    view.innerHTML = `<a class="back" href="#/${cat(b)}">${T[lang].back}</a>
      <article class="book${furi ? "" : " nofuri"}${tate ? "" : " yoko"}"><header class="bhead"><div class="img">${cover(b)}</div><div>
      <h1>${esc(b.title)}</h1>${b.jp ? `<p class="jp">${esc(b.jp)}</p>` : ""}
      <p class="meta">${[b.author, b.year].filter(Boolean).map(esc).join("  ·  ")}</p>
      <div class="bactions"><button type="button" class="resume" id="resumeBtn" hidden></button></div></div></header>
      <div id="rdr"></div>${plainHTML}${!spreads.length && !plain.length ? `<p class="empty">${T[lang].none}</p>` : ""}
      <div class="bfoot"><div class="deckrow">
        ${b.flashcards
          ? `<a class="deck" href="${esc(b.flashcards)}" download id="deckLink"><span class="deckicon">${ICON_CARDS}</span><span class="decktext"><b>${t.deck}</b><span class="decksub">${t.deckHint}</span><span class="deckchips">${b.flashcardsCount ? `<i class="chip accent">${b.flashcardsCount} ${wordsLabel(b.flashcardsCount)}</i>` : ""}<i class="chip">Anki</i></span></span><span class="deckgo">${ICON_DL}</span></a><span class="deckstat" id="deckStat" role="status"></span>`
          : `<button type="button" class="deck off" disabled aria-disabled="true"><span class="deckicon">${ICON_CARDS}</span><span class="decktext"><b>${t.deck}</b><span class="decksub">${t.deckHint}</span><span class="deckchips"><i class="chip">${t.deckSoon}</i></span></span></button>`}
      </div></div>
      <button type="button" class="notesfab" id="notesBtn" aria-expanded="false" aria-controls="notes"><span>${t.notes}</span><i class="ndot" hidden></i></button>
      <aside class="notes" id="notes" aria-label="${t.notes}">
        <header><strong>${t.notes}</strong><span class="nbook">${esc(b.title)}</span><button type="button" class="nclose" aria-label="${t.close}">×</button></header>
        <textarea id="nText" placeholder="${t.notesPh}" spellcheck="true"></textarea>
        <div class="nfoot"><span id="nStat">${t.local}</span></div>
      </aside>
      <div class="mback" id="detail" hidden></div></article>`;

    const detail = $("detail"), rdr = $("rdr");
    const bmKeyName = `bm:${b.id}`, notesKeyName = `notes:${b.id}`;
    let bmKey = store.get(bmKeyName);
    if (bmKey && /^\d+-\d+$/.test(bmKey)) bmKey = bmKey.replace("-", "-0-"); // older bookmarks
    let selected = null, opener = null, page = 0;

    // ---- page rendering ----
    const applyMarks = () => {
      if (selected) rdr.querySelectorAll(`.sent[data-s="${selected}"]`).forEach(e => e.classList.add("sel"));
      refreshBm();
    };
    // All pages are laid out in one grid cell, so every page is as tall as the tallest one
    // and the arrows never move when you turn the page.
    let built = false;
    function buildReader() {
      const pager = spreads.length > 1 ? `<nav class="pager" aria-label="${t.pages}"><span class="pgnums">${spreads.map((_, k) => `<button type="button" class="pgn" data-pg="${k}" aria-label="${t.page} ${k + 1}">${k + 1}</button>`).join("")}</span>
        <form class="gotopage" id="gotoForm" autocomplete="off"><label for="gotoInput">${t.goto}</label>
          <input id="gotoInput" type="number" inputmode="numeric" step="1" placeholder="1–${spreads.length}" required>
          <button type="submit">${t.go}</button></form></nav>` : "";
      const titleOf = (sp, si) => { const ct = sp.c.title || {};
        return `<span class="rt" data-si="${si}">${ct.jp ? `<span class="cjp" lang="ja">${ruby(ct.jp)}</span> ` : ""}<span>${esc(tr(ct))}</span>${spreads.length > 1 ? ` <small class="chpage">${t.page} ${si + 1} / ${spreads.length}</small>` : ""}</span>`; };
      rdr.innerHTML = `<h3 id="rtitle">${spreads.map(titleOf).join("")}</h3>
        <div class="tools"><p class="hint">${t.hint}</p><span class="toolbtns"><button type="button" class="tatetoggle" aria-pressed="${tate}">${t.tate}: ${tate ? "ON" : "OFF"}</button><button type="button" class="furitoggle" aria-pressed="${furi}">${t.furi}: ${furi ? "ON" : "OFF"}</button></span></div>
        <div class="stage">${spreads.length > 1 ? `<button type="button" class="pgside pgnext" aria-label="${t.nextPage}"><span>‹</span></button><button type="button" class="pgside pgprev" aria-label="${t.prevPage}"><span>›</span></button>` : ""}
        <div class="stack">${spreads.map((sp, si) => `<div class="spread" data-si="${si}">
          <div class="page jp ${sp.meta.kind ? "k-" + sp.meta.kind : ""}" lang="ja"><span class="plabel">${t.jpLabel}</span>${sp.meta.head ? `<div class="runhead ${sp.meta.side === "right" ? "r" : "l"}">${esc(sp.meta.head)}</div>` : ""}<div class="vt">${sentencesHTML(sp.list, "jp")}</div></div>
          <div class="page tr"><span class="plabel">${t.trLabel}</span>${sentencesHTML(sp.list, "tr")}</div></div>`).join("")}</div></div>${pager}`;
      built = true;
    }
    function renderPage(n, dir) {
      if (!spreads.length) return;
      if (!built) buildReader();
      page = Math.max(0, Math.min(spreads.length - 1, n)); pageMemo = { id: b.id, n: page };
      rdr.querySelectorAll("#rtitle>.rt").forEach((el, si) => el.classList.toggle("cur", si === page));
      rdr.querySelectorAll(".stack>.spread").forEach((el, si) => {
        el.classList.remove("turn-next", "turn-prev");
        el.classList.toggle("cur", si === page);
        if (si === page && dir) { void el.offsetWidth; el.classList.add("turn-" + dir); }
      });
      rdr.querySelectorAll(".pgn").forEach(el => {
        const on = +el.dataset.pg === page; el.classList.toggle("on", on);
        if (on) el.setAttribute("aria-current", "page"); else el.removeAttribute("aria-current");
      });
      const pv = rdr.querySelector(".pgprev"), nx = rdr.querySelector(".pgnext");
      if (pv) pv.disabled = page === 0;
      if (nx) nx.disabled = page === spreads.length - 1;
      applyMarks();
    }
    const goPage = n => {
      const to = Math.max(0, Math.min(spreads.length - 1, n)); if (to === page && built) return;
      renderPage(to, to > page ? "next" : "prev");
    };
    pageApi = { go: d => goPage(page + d) };

    // ---- sentence modal ----
    const light = (key, on) => rdr.querySelectorAll(`.sent[data-s="${key}"]`).forEach(e => e.classList.toggle("hl", on));
    const show = key => {
      const L = loc[key]; if (!L) return;
      if (L.si !== page) renderPage(L.si, L.si > page ? "next" : "prev");
      rdr.querySelectorAll(".sent.sel").forEach(e => e.classList.remove("sel"));
      selected = key;
      rdr.querySelectorAll(`.sent[data-s="${key}"]`).forEach(e => e.classList.add("sel"));
      const n = order.indexOf(key);
      detail.innerHTML = detailHTML(L.s, n + 1, order.length, bmKey === key);
      detail.querySelector(".mprev").disabled = n <= 0;
      detail.querySelector(".mnext").disabled = n >= order.length - 1;
    };
    const openModal = key => {
      opener = document.activeElement;
      show(key); detail.hidden = false; document.body.classList.add("modal-open");
      detail.querySelector(".dclose").focus({ preventScroll: true });
    };
    const closeModal = () => {
      detail.hidden = true; detail.innerHTML = ""; selected = null;
      document.body.classList.remove("modal-open"); modalApi = null;
      rdr.querySelectorAll(".sent.sel").forEach(e => e.classList.remove("sel"));
      const back = opener && document.contains(opener) ? opener : rdr.querySelector(".sent");
      if (back && back.focus) back.focus({ preventScroll: true });
    };
    const step = d => {
      const n = order.indexOf(selected) + d; if (n < 0 || n >= order.length) return;
      show(order[n]);
      const want = detail.querySelector(d < 0 ? ".mprev" : ".mnext");
      (want && !want.disabled ? want : detail.querySelector(".dclose")).focus({ preventScroll: true });
    };

    // ---- bookmark ----
    const resumeBtn = $("resumeBtn");
    function refreshBm() {
      rdr.querySelectorAll(".sent.bm").forEach(e => e.classList.remove("bm"));
      rdr.querySelectorAll(".pgn.hasbm").forEach(e => e.classList.remove("hasbm"));
      const ok = !!bmKey && !!loc[bmKey];
      if (ok) {
        rdr.querySelectorAll(`.sent[data-s="${bmKey}"]`).forEach(e => e.classList.add("bm"));
        const pn = rdr.querySelector(`.pgn[data-pg="${loc[bmKey].si}"]`); if (pn) pn.classList.add("hasbm");
      }
      resumeBtn.hidden = !ok; resumeBtn.textContent = t.resume;
      const m = detail.querySelector(".mbm");
      if (m) { const on = ok && bmKey === selected; m.setAttribute("aria-pressed", on); m.querySelector("span").textContent = on ? t.bmClear : t.bmMark; }
    }
    const toggleBm = () => {
      if (!selected) return;
      if (bmKey === selected) { bmKey = null; store.del(bmKeyName); } else { bmKey = selected; store.set(bmKeyName, bmKey); }
      refreshBm();
    };
    const goToBm = () => {
      if (!bmKey || !loc[bmKey]) return;
      if (loc[bmKey].si !== page) renderPage(loc[bmKey].si, loc[bmKey].si > page ? "next" : "prev");
      const el = rdr.querySelector(`.page.jp .sent[data-s="${bmKey}"]`); if (!el) return;
      el.scrollIntoView({ block: "center", behavior: "smooth" });
      el.classList.remove("pulse"); void el.offsetWidth; el.classList.add("pulse");
    };

    // ---- notes drawer: one notebook per book, kept in this browser ----
    const notes = $("notes"), nText = $("nText"), nStat = $("nStat"), nBtn = $("notesBtn");
    const dot = nBtn.querySelector(".ndot");
    const saved0 = store.get(notesKeyName) || "";
    nText.value = saved0; dot.hidden = !saved0.trim();
    let nTimer = null;
    const saveNotes = () => {
      clearTimeout(nTimer);
      let ok = true;
      if (nText.value) ok = store.set(notesKeyName, nText.value); else store.del(notesKeyName);
      dot.hidden = !nText.value.trim();
      nStat.textContent = ok ? t.saved : t.nosave;
    };
    nText.oninput = () => { nStat.textContent = "…"; clearTimeout(nTimer); nTimer = setTimeout(saveNotes, 350); };
    const setNotes = open => {
      notes.classList.toggle("open", open); nBtn.setAttribute("aria-expanded", open);
      if (open) setTimeout(() => nText.focus({ preventScroll: true }), 220);
      else { saveNotes(); nStat.textContent = t.local; nBtn.focus({ preventScroll: true }); }
    };
    notes.onkeydown = e => { if (e.key === "Escape") { e.stopPropagation(); setNotes(false); } };

    modalApi = { close: closeModal, step };
    detail.onclick = e => {
      if (e.target === detail || e.target.closest(".dclose")) closeModal();
      else if (e.target.closest(".mbm")) toggleBm();
      else if (e.target.closest(".mprev")) step(-1);
      else if (e.target.closest(".mnext")) step(1);
    };
    detail.onkeydown = e => { // keep Tab focus inside the dialog
      if (e.key !== "Tab") return;
      const f = [...detail.querySelectorAll("button:not([disabled])")]; if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    const keyOf = e => { const s = e.target.closest && e.target.closest(".sent"); return s ? s.dataset.s : null; };
    view.onmouseover = e => { const k = keyOf(e); if (k) light(k, true); };
    view.onmouseout = e => { const k = keyOf(e); if (k) light(k, false); };
    view.onfocusin = view.onmouseover; view.onfocusout = view.onmouseout;
    view.onclick = e => {
      const k = keyOf(e), el = e.target.closest ? e.target : null; if (!el) return;
      if (k) openModal(k);
      else if (el.closest("#resumeBtn")) goToBm();
      else if (el.closest("#notesBtn")) setNotes(!notes.classList.contains("open"));
      else if (el.closest(".nclose")) setNotes(false);
      else if (el.closest(".pgn")) goPage(+el.closest(".pgn").dataset.pg);
      else if (el.closest(".pgprev")) goPage(page - 1);
      else if (el.closest(".pgnext")) goPage(page + 1);
      else if (el.closest("#deckLink") && dl && b.flashcardsText) {
        e.preventDefault();
        const stat = $("deckStat"); stat.textContent = "…";
        fetch(b.flashcardsText).then(r => { if (!r.ok) throw new Error("fetch"); return r.text(); })
          .then(text => dl.save({ filename: b.flashcardsText.split("/").pop(), data: text }))
          .then(() => { stat.textContent = t.deckSaved; })
          .catch(err => { stat.textContent = err && err.code === "declined" ? "" : t.deckFail; });
      }
      else if (el.closest(".tatetoggle")) {
        tate = !tate; store.set("tate", tate ? "on" : "off");
        view.querySelector(".book").classList.toggle("yoko", !tate);
        view.querySelectorAll(".tatetoggle").forEach(x => { x.setAttribute("aria-pressed", tate); x.textContent = `${t.tate}: ${tate ? "ON" : "OFF"}`; });
      }
      else if (el.closest(".furitoggle")) {
        furi = !furi; store.set("furi", furi ? "on" : "off");
        view.querySelector(".book").classList.toggle("nofuri", !furi);
        view.querySelectorAll(".furitoggle").forEach(x => { x.setAttribute("aria-pressed", furi); x.textContent = `${t.furi}: ${furi ? "ON" : "OFF"}`; });
      }
    };
    view.onsubmit = e => {
      if (!e.target.closest || !e.target.closest("#gotoForm")) return;
      e.preventDefault();
      const input = $("gotoInput"), n = parseInt(input.value, 10);
      if (Number.isNaN(n)) return;
      goPage(Math.max(1, Math.min(spreads.length, n)) - 1);
      input.value = ""; input.focus({ preventScroll: true });
    };
    view.onkeydown = e => { if ((e.key === "Enter" || e.key === " ") && keyOf(e)) { e.preventDefault(); openModal(keyOf(e)); } };

    renderPage(pageMemo.id === b.id ? pageMemo.n : 0);
  }
  function about() {
    const a = (typeof ABOUT !== "undefined" && ABOUT[lang]) || "";
    view.innerHTML = `<div class="about"><h1>${T[lang].about}</h1>${a.split(/\n\s*\n/).map(p => `<p>${esc(p)}</p>`).join("")}</div>`;
  }
  let cur = location.hash.replace(/^#\/?/, "");
  // ---- requests (shared list; needs the artifact `db` capability) ----
  const R = {
    en: { h: "Request a translation", intro: "Tell me what you would like to read in English or Polish. I read every request, but I can't promise when or whether I will translate it.",
          title: "What should I translate?", link: "Link or details (optional)", lang: "Language", pl: "Polish", en: "English", both: "Both",
          name: "Your name (optional)", send: "Send request", sending: "Sending…", thanks: "Thank you, your request was added.",
          list: "Requests so far", none: "No requests yet. Be the first.", need: "Adding a request needs contributor access. Ask the site owner to invite you.",
          off: "Requests are not available here.", err: "Could not send the request. Please try again.", del: "Remove", by: "by" },
    pl: { h: "Zgłoś prośbę o tłumaczenie", intro: "Napisz, co chciał(a)byś przeczytać po polsku lub angielsku. Czytam każdą prośbę, ale nie obiecuję, kiedy ani czy to przetłumaczę.",
          title: "Co przetłumaczyć?", link: "Link lub szczegóły (opcjonalnie)", lang: "Język", pl: "Polski", en: "Angielski", both: "Oba",
          name: "Twoje imię (opcjonalnie)", send: "Wyślij prośbę", sending: "Wysyłanie…", thanks: "Dziękuję, prośba została dodana.",
          list: "Dotychczasowe prośby", none: "Na razie brak próśb. Bądź pierwszy.", need: "Dodawanie próśb wymaga dostępu współtwórcy. Poproś właściciela strony o zaproszenie.",
          off: "Prośby nie są tu dostępne.", err: "Nie udało się wysłać prośby. Spróbuj ponownie.", del: "Usuń", by: "od" }
  };
  const claudeReady = (typeof claude !== "undefined" && claude.use) ? Promise.all([claude.use("db"), claude.use("user")]).catch(() => [null, null]) : Promise.resolve([null, null]);
  let unsub = null;
  async function requests() {
    const t = R[lang], [db, user] = await claudeReady;
    if (cur !== "requests") return;
    const canWrite = !!db && !(user && (await user.can("data.write")) === false);
    const isOwner = !!(user && await user.isOwner());
    view.innerHTML = `<section class="req"><h1>${t.h}</h1><p class="lead">${t.intro}</p>
      ${!db ? `<p class="empty">${t.off}</p>` : `
      <form id="reqForm" ${canWrite ? "" : "hidden"}>
        <label>${t.title}<input id="rTitle" required maxlength="160"></label>
        <label>${t.link}<textarea id="rNote" rows="3" maxlength="600"></textarea></label>
        <div class="row"><label>${t.lang}<select id="rLang"><option value="both">${t.both}</option><option value="pl">${t.pl}</option><option value="en">${t.en}</option></select></label>
        <label>${t.name}<input id="rName" maxlength="60"></label></div>
        <button type="submit" id="rSend">${t.send}</button><span class="status" id="rStatus" role="status"></span>
      </form>
      ${canWrite ? "" : `<p class="empty">${t.need}</p>`}
      <h2>${t.list}</h2><ul class="reqlist" id="reqList"></ul>`}</section>`;
    if (!db) return;
    const listEl = $("reqList"), status = $("rStatus"), col = db.collection("requests");
    const form = $("reqForm");
    if (canWrite) form.onsubmit = async e => {
      e.preventDefault();
      const btn = $("rSend"); btn.disabled = true; btn.textContent = t.sending; status.textContent = "";
      try {
        await col.add({ title: $("rTitle").value.trim(), note: $("rNote").value.trim(), lang: $("rLang").value, name: $("rName").value.trim(), createdAt: Date.now() });
        form.reset(); status.textContent = t.thanks;
      } catch (err) { status.textContent = t.err; }
      btn.disabled = false; btn.textContent = t.send;
    };
    const badge = l => l === "both" ? "PL + EN" : l.toUpperCase();
    unsub = col.orderBy("createdAt", "desc").limit(100).onSnapshot(snap => {
      listEl.innerHTML = snap.empty ? `<li class="none">${t.none}</li>` : snap.docs.map(d => { const r = d.data();
        return `<li><span class="badge">${esc(badge(r.lang))}</span><div><strong>${esc(r.title)}</strong>${r.note ? `<p>${esc(r.note)}</p>` : ""}
          <small>${new Date(r.createdAt).toLocaleDateString(lang)}${r.name ? ` · ${t.by} ${esc(r.name)}` : ""}</small></div>
          ${isOwner ? `<button class="del" data-id="${esc(d.id)}">${t.del}</button>` : ""}</li>`; }).join("");
      listEl.querySelectorAll(".del").forEach(b => b.onclick = () => col.doc(b.dataset.id).delete().catch(() => {}));
    }, () => { listEl.innerHTML = `<li class="none">${t.off}</li>`; });
  }
  const $ = id => document.getElementById(id);

  // ---- Admin panel (owner only; needs the db capability, so it exists in the Claude preview) ----
  const A = {
    en: { h: "Admin panel", lead: "Paste the Japanese text and the translations as plain text, with no need to match lines. In the Japanese box a new line starts a new paragraph and a line with --- starts a new page. The panel splits the text into sentences and matches the translations; then you can fix every sentence on its own.",
          book: "Book", chap: "Chapter", num: "Page number", run: "Running head (optional, used when the page is new)", runHint: "e.g. 11　第一話　鎌鼬",
          jp: "Original (Japanese)", en: "English (whole text)", pl: "Polish (whole text)", jpPh: "Paste the Japanese text. New line = new paragraph. --- = new page.", trPh: "Paste the whole translation. Paragraphs may be separate lines.",
          split: "Split into sentences and match", rowsH: "Sentences and translations", sent: "sentences", pages: "pages",
          furiAll: "Add furigana automatically", alignAll: "Match translations with Claude", working: "Working…", aiFail: "Claude could not do that. Try again.", aiDenied: "Claude was not allowed to run.",
          furiDone: "Furigana added to {n} sentences.", alignDone: "Translations matched.", noTr: "Paste a translation first.", kTip: "Click any Japanese word to edit its reading. Words without a reading are underlined with dots.",
          para: "new paragraph", newPage: "A new page starts at this sentence", newPageS: "new page", review: "Check this one: the translation did not split evenly",
          mergeUp: "Merge with the previous sentence", addBelow: "Add a sentence below", rm: "Delete", editTxt: "Edit Japanese text", doneTxt: "Done",
          kPh: "reading", kSave: "OK", kDel: "Remove", kCancel: "Cancel",
          save: "Add to page", saving: "Saving…", saved: "Added.", upd: "Update", cancel: "Cancel editing", empty: "Paste some Japanese text first.", err: "Saving failed. Try again.", badnum: "Enter a page number.",
          list: "Text added here", none2: "Nothing added yet.", edit: "Edit", del: "Delete", denied: "This panel is available only to the site owner, in the Claude preview.",
          lines: "sentences", pg: "Page", has: "This book has {n} pages. Page {p} exists: the text will be added at its end.",
          fresh: "A new page {p} will be added at the end.", gap: "A new page will be added at the end, as page {p}, because pages up to {n} exist so far." },
    pl: { h: "Panel administratora", lead: "Wklej tekst japoński i tłumaczenia jako zwykły tekst, bez dbania o linie. W polu japońskim nowa linia zaczyna nowy akapit, a linia z --- nową stronę. Panel sam podzieli tekst na zdania i dopasuje tłumaczenia, a potem możesz poprawić każde zdanie osobno.",
          book: "Książka", chap: "Rozdział", num: "Numer strony", run: "Nagłówek bieżący (opcjonalnie, używany dla nowej strony)", runHint: "np. 11　第一話　鎌鼬",
          jp: "Oryginał (japoński)", en: "Angielski (cały tekst)", pl: "Polski (cały tekst)", jpPh: "Wklej tekst japoński. Nowa linia = nowy akapit. --- = nowa strona.", trPh: "Wklej całe tłumaczenie. Akapity mogą być w osobnych liniach.",
          split: "Podziel na zdania i dopasuj", rowsH: "Zdania i tłumaczenia", sent: "zdań", pages: "stron",
          furiAll: "Dodaj furiganę automatycznie", alignAll: "Dopasuj tłumaczenia przez Claude", working: "Pracuję…", aiFail: "Claude nie dał rady. Spróbuj ponownie.", aiDenied: "Claude nie dostał zgody na uruchomienie.",
          furiDone: "Furigana dodana w {n} zdaniach.", alignDone: "Tłumaczenia dopasowane.", noTr: "Najpierw wklej tłumaczenie.", kTip: "Kliknij dowolne słowo japońskie, aby poprawić jego czytanie. Słowa bez czytania są podkreślone kropkami.",
          para: "nowy akapit", newPage: "Od tego zdania zaczyna się nowa strona", newPageS: "nowa strona", review: "Sprawdź to zdanie: tłumaczenie nie podzieliło się równo",
          mergeUp: "Scal z poprzednim zdaniem", addBelow: "Dodaj zdanie poniżej", rm: "Usuń", editTxt: "Edytuj tekst japoński", doneTxt: "Gotowe",
          kPh: "czytanie", kSave: "OK", kDel: "Usuń", kCancel: "Anuluj",
          save: "Dodaj na stronę", saving: "Zapisywanie…", saved: "Dodano.", upd: "Zaktualizuj", cancel: "Anuluj edycję", empty: "Najpierw wklej tekst japoński.", err: "Nie udało się zapisać. Spróbuj ponownie.", badnum: "Wpisz numer strony.",
          list: "Tekst dodany tutaj", none2: "Nic jeszcze nie dodano.", edit: "Edytuj", del: "Usuń", denied: "Ten panel jest dostępny tylko dla właściciela strony, w podglądzie w Claude.",
          lines: "zdań", pg: "Strona", has: "Ta książka ma {n} stron. Strona {p} istnieje: tekst zostanie dopisany na jej końcu.",
          fresh: "Zostanie dodana nowa strona {p} na końcu.", gap: "Zostanie dodana nowa strona na końcu, jako strona {p}, bo na razie istnieją strony do {n}." }
  };
  // sentence splitting for the admin panel
  const KJ = () => /([一-鿿々〆ヶ]+)(?:\{([^}]*)\})?/g;
  const stripF = x => x.replace(/\{[^}]*\}/g, "");
  const splitJp = par => (par.match(/[^。！？!?]*(?:[。！？!?]+[」』）)]*|$)/g) || []).map(x => x.trim()).filter(Boolean);
  const splitTr = par => par.split(/(?<=[.!?…][”"’'»)\]]?)\s+(?=[“"‘'«(\[—–-]?\s?[A-ZĄĆĘŁŃÓŚŹŻ0-9])/).map(x => x.trim()).filter(Boolean);
  const parseTr = v => v.split("\n").map(x => x.trim()).filter(x => x && !/^-{3,}$/.test(x)).map(splitTr);
  const fitTo = (arr, m) => arr.length > m ? [...arr.slice(0, m - 1), arr.slice(m - 1).join(" ")] : arr.concat(Array(m - arr.length).fill(""));
  // put translation sentences onto the Japanese rows: paragraph by paragraph when the paragraph counts agree, otherwise in order
  function alignText(rows, tp, key) {
    if (!tp.length) return;
    const groups = []; rows.forEach((r, i) => { (groups[r.pi] = groups[r.pi] || []).push(i); });
    if (tp.length === groups.length) groups.forEach((g, gi) => { const arr = fitTo(tp[gi], g.length), odd = tp[gi].length !== g.length;
      g.forEach((ri, k) => { rows[ri][key] = arr[k]; if (odd) rows[ri].flag = true; }); });
    else { const arr = fitTo(tp.flat(), rows.length); rows.forEach((r, i) => { r[key] = arr[i]; r.flag = true; }); }
  }
  async function admin() {
    const t = A[lang], [db, user] = await claudeReady;
    if (cur !== "admin") return;
    const owner = !!(db && user && await user.isOwner());
    if (!owner) { view.innerHTML = `<section class="req"><h1>${t.h}</h1><p class="empty">${t.denied}</p></section>`; return; }
    const sample = (typeof claude !== "undefined" && claude.use) ? await claude.use("sample").catch(() => null) : null;
    if (cur !== "admin") return;
    const col = db.collection("pages");
    view.innerHTML = `<section class="req adm"><h1>${t.h}</h1><p class="lead">${t.lead}</p>
      <form id="admForm">
        <div class="row"><label>${t.book}<select id="aBook">${BOOKS.map(b => `<option value="${esc(b.id)}">${esc(b.title)}</option>`).join("")}</select></label>
        <label>${t.num}<input id="aNum" type="number" min="1" step="1" required></label></div>
        <label id="aChapL" hidden>${t.chap}<select id="aChap"></select></label>
        <p class="hint" id="aHint"></p>
        <label>${t.run}<input id="aHead" maxlength="80" placeholder="${t.runHint}" lang="ja"></label>
        <label>${t.jp}<textarea id="aJp" rows="8" lang="ja" placeholder="${t.jpPh}"></textarea></label>
        <label>${t.en}<textarea id="aEn" rows="6" placeholder="${t.trPh}"></textarea></label>
        <label>${t.pl}<textarea id="aPl" rows="6" placeholder="${t.trPh}"></textarea></label>
        <div class="actions"><button type="button" id="aSplit">${t.split}</button></div>
        <div id="aWork" hidden>
          <div class="wbar"><h3>${t.rowsH}</h3><span id="aCount"></span>
            <button type="button" id="aFuriAll" ${sample ? "" : "hidden"}>${t.furiAll}</button>
            <button type="button" id="aAlignAll" ${sample ? "" : "hidden"}>${t.alignAll}</button></div>
          <p class="hint">${t.kTip}</p>
          <div id="aRows"></div>
        </div>
        <div class="actions"><button type="submit" id="aSave" disabled>${t.save}</button><button type="button" id="aCancel" hidden>${t.cancel}</button><span class="status" id="aStatus" role="status"></span></div>
      </form>
      <h2>${t.list}</h2><ul class="reqlist" id="aList"></ul></section>`;
    let rows = [], kedit = null, editId = null, docs = [];
    const st = m => { $("aStatus").textContent = m; };
    // ---- where the text goes (page number hint) ----
    const chapters = () => { const b = BOOKS.find(x => x.id === $("aBook").value), out = [];
      (b ? b.chapters : []).forEach((c, ci) => { const pgs = c.pages || (c.sentences ? [c.sentences] : null); if (pgs) out.push({ ci, c, n: pgs.length }); }); return out; };
    const fillChap = () => { const cs = chapters(); $("aChap").innerHTML = cs.map(x => `<option value="${x.ci}">${esc(x.c.title ? (x.c.title[lang] || x.c.title.en || "").replace(/\{[^}]*\}/g, "") : "#" + (x.ci + 1))} (${x.n})</option>`).join("");
      $("aChapL").hidden = cs.length < 2; };
    const hint = () => { const cs = chapters(), cx = cs.find(x => String(x.ci) === $("aChap").value) || cs[cs.length - 1], p = parseInt($("aNum").value, 10), h = $("aHint");
      if (!cx || !(p > 0)) { h.textContent = ""; return; }
      h.textContent = p <= cx.n ? t.has.replace("{n}", cx.n).replace("{p}", p) : p === cx.n + 1 ? t.fresh.replace("{p}", p) : t.gap.replace("{p}", cx.n + 1).replace("{n}", cx.n); };
    // ---- the sentence table ----
    const jpHtml = (txt, i) => { let n = 0;
      return esc(txt).replace(KJ(), (m, k, rd) => { const id = n++; return `<button type="button" class="kj${rd ? "" : " none"}" data-i="${i}" data-n="${id}">${rd ? `<ruby>${k}<rt>${rd}</rt></ruby>` : k}</button>`; }); };
    const nth = (txt, n) => { let c = 0, out = { k: "", rd: "" }; txt.replace(KJ(), (m, k, rd) => { if (c++ === n) out = { k, rd: rd || "" }; return m; }); return out; };
    const setReading = (i, n, rd) => { let c = 0; rows[i].jp = rows[i].jp.replace(KJ(), (m, k) => c++ === n ? (rd ? k + "{" + rd + "}" : k) : m); };
    const keditHtml = () => { const w = nth(rows[kedit.i].jp, kedit.n);
      return `<div class="kedit"><b lang="ja">${esc(w.k)}</b><input id="kIn" lang="ja" value="${esc(w.rd)}" placeholder="${t.kPh}" autocomplete="off">
        <button type="button" data-a="ksave">${t.kSave}</button><button type="button" data-a="kdel">${t.kDel}</button><button type="button" data-a="kcancel">${t.kCancel}</button></div>`; };
    const render = () => {
      const base = parseInt($("aNum").value, 10) || 1; let pg = -1; const out = [];
      rows.forEach((r, i) => {
        if (i === 0 || r.np) { pg++; out.push(`<h4 class="pgh">${t.pg} ${base + pg}</h4>`); }
        out.push(`<div class="rw${r.flag ? " flag" : ""}" data-i="${i}">
          <div class="rwh"><span class="rn">${i + 1}</span>
            <label class="pa"><input type="checkbox" data-a="para" ${r.para ? "checked" : ""}> ${t.para}</label>
            ${i ? `<button type="button" data-a="np" class="${r.np ? "on" : ""}" title="${t.newPage}">${t.newPageS}</button>` : ""}
            ${r.flag ? `<span class="fl" title="${t.review}">⚠</span>` : ""}<span class="sp"></span>
            ${i ? `<button type="button" data-a="mup" title="${t.mergeUp}">⤒</button>` : ""}<button type="button" data-a="add" title="${t.addBelow}">＋</button><button type="button" data-a="rm" title="${t.rm}">✕</button></div>
          <div class="jpv" lang="ja">${jpHtml(r.jp, i) || "<i>—</i>"}</div>
          ${kedit && kedit.i === i ? keditHtml() : ""}
          <button type="button" class="lnk" data-a="jpedit">${r.edit ? t.doneTxt : t.editTxt}</button>
          ${r.edit ? `<textarea data-f="jp" rows="2" lang="ja">${esc(r.jp)}</textarea>` : ""}
          <div class="cells">${["en", "pl"].map(k => `<div class="cell"><span class="cl">${k.toUpperCase()}</span><textarea data-f="${k}" rows="2">${esc(r[k])}</textarea>
            <span class="mv"><button type="button" data-a="mv" data-k="${k}" data-d="-1" ${i ? "" : "disabled"}>↑</button><button type="button" data-a="mv" data-k="${k}" data-d="1" ${i < rows.length - 1 ? "" : "disabled"}>↓</button></span></div>`).join("")}</div></div>`);
      });
      $("aRows").innerHTML = out.join("");
      $("aWork").hidden = !rows.length; $("aSave").disabled = !rows.length;
      $("aCount").textContent = `${rows.length} ${t.sent} · ${pg + 1} ${t.pages}`;
    };
    $("aRows").addEventListener("input", e => { const el = e.target, w = el.closest(".rw"), f = el.dataset.f; if (!w || !f) return;
      rows[+w.dataset.i][f] = el.value; if (f !== "jp") { rows[+w.dataset.i].flag = false; w.classList.remove("flag"); } });
    $("aRows").addEventListener("change", e => { const el = e.target, w = el.closest(".rw"); if (w && el.dataset.a === "para") rows[+w.dataset.i].para = el.checked; });
    $("aRows").addEventListener("keydown", e => { if (e.target.id === "kIn" && e.key === "Enter") { e.preventDefault(); const b = view.querySelector('[data-a="ksave"]'); if (b) b.click(); } });
    $("aRows").addEventListener("click", e => {
      const kj = e.target.closest(".kj");
      if (kj) { kedit = { i: +kj.dataset.i, n: +kj.dataset.n }; render(); const f = $("kIn"); if (f) { f.focus(); f.select(); } return; }
      const b = e.target.closest("button[data-a]"); if (!b) return;
      const a = b.dataset.a;
      if (a === "ksave" || a === "kdel") { setReading(kedit.i, kedit.n, a === "kdel" ? "" : $("kIn").value.trim().replace(/[{}\s]/g, "")); kedit = null; return render(); }
      if (a === "kcancel") { kedit = null; return render(); }
      const w = b.closest(".rw"), i = +w.dataset.i, r = rows[i]; kedit = null;
      if (a === "np") r.np = !r.np;
      else if (a === "jpedit") r.edit = !r.edit;
      else if (a === "add") rows.splice(i + 1, 0, { jp: "", en: "", pl: "", para: false, np: false, pi: r.pi });
      else if (a === "rm") rows.splice(i, 1);
      else if (a === "mup" && i) { const p = rows[i - 1]; p.jp += r.jp; p.en = [p.en, r.en].filter(Boolean).join(" "); p.pl = [p.pl, r.pl].filter(Boolean).join(" "); rows.splice(i, 1); }
      else if (a === "mv") { const o = rows[i + +b.dataset.d], k = b.dataset.k; if (o) { [r[k], o[k]] = [o[k], r[k]]; r.flag = o.flag = false; } }
      render();
    });
    // ---- paste -> sentences ----
    $("aSplit").onclick = () => {
      const raw = $("aJp").value; if (!raw.trim()) return st(t.empty);
      rows = []; kedit = null; let pi = 0;
      raw.split(/^[ \t]*-{3,}[ \t]*$/m).forEach((pg, k) => { const start = rows.length;
        pg.split("\n").map(x => x.trim()).filter(Boolean).forEach(par => { splitJp(par).forEach((s, j) => rows.push({ jp: s, en: "", pl: "", para: j === 0, np: false, pi })); pi++; });
        if (k && rows.length > start) rows[start].np = true; });
      alignText(rows, parseTr($("aEn").value), "en"); alignText(rows, parseTr($("aPl").value), "pl");
      st(""); render();
    };
    // ---- Claude helpers (furigana, matching translations) ----
    const busy = async fn => {
      const ids = ["aFuriAll", "aAlignAll", "aSplit", "aSave"]; ids.forEach(id => { $(id).disabled = true; }); st(t.working);
      try { await fn(); } catch (err) { st(err && err.code === "not_granted" ? t.aiDenied : t.aiFail); }
      ids.forEach(id => { $(id).disabled = false; }); $("aSave").disabled = !rows.length;
    };
    $("aFuriAll").onclick = () => busy(async () => {
      const idx = rows.map((r, i) => i).filter(i => KJ().test(rows[i].jp)); let done = 0;
      for (let c = 0; c < idx.length; c += 12) {
        const part = idx.slice(c, c + 12), src = part.map(i => rows[i].jp);
        const res = await sample.json("Add furigana to the Japanese sentences below. After every word that contains kanji, write its reading in hiragana in curly braces, in the form 漢字{かんじ}. Put only the kanji in front of the braces and leave okurigana and kana outside them, for example 見上げる -> 見上{みあ}げる and 食べる -> 食{た}べる. Choose the reading that fits the context. Keep any readings that are already there. Do not change, add or remove anything else. Reply with only a JSON array of " + src.length + " strings in the same order.\n\n" + JSON.stringify(src));
        if (Array.isArray(res) && res.length === src.length) part.forEach((i, k) => { if (typeof res[k] === "string" && stripF(res[k]) === stripF(src[k])) { rows[i].jp = res[k]; done++; } });
        st(`${t.working} ${Math.min(c + 12, idx.length)}/${idx.length}`);
      }
      render(); st(t.furiDone.replace("{n}", done));
    });
    $("aAlignAll").onclick = () => busy(async () => {
      const keys = ["en", "pl"].filter(k => $(k === "en" ? "aEn" : "aPl").value.trim()); if (!keys.length) return st(t.noTr);
      const n = rows.length, jp = rows.map(r => stripF(r.jp));
      const res = await sample.json("Below are " + n + " Japanese sentences (a JSON array) and the whole translation of the text as plain text" + (keys.length > 1 ? " in English and in Polish" : "") + ". Match the translation to the sentences. Reply with only a JSON object with the keys " + keys.map(k => '"' + k + '"').join(" and ") + ", each an array of exactly " + n + " strings: item k is the part of that translation that corresponds to Japanese sentence k. Use the translation text exactly as given and only cut or join it at sentence boundaries; never rewrite, translate or invent. Use an empty string when a sentence has no counterpart. Keep every part of the translation.\n\nJAPANESE:\n" + JSON.stringify(jp) + keys.map(k => "\n\n" + (k === "en" ? "ENGLISH:\n" : "POLISH:\n") + $(k === "en" ? "aEn" : "aPl").value.trim()).join(""));
      keys.forEach(k => { if (!res || !Array.isArray(res[k]) || res[k].length !== n) throw new Error("length"); });
      keys.forEach(k => rows.forEach((r, i) => { r[k] = String(res[k][i] || "").trim(); r.flag = false; }));
      render(); st(t.alignDone);
    });
    // ---- save / edit / list ----
    fillChap();
    $("aNum").oninput = $("aChap").onchange = () => { hint(); if (rows.length) render(); };
    $("aBook").onchange = () => { fillChap(); hint(); };
    const reset = () => { editId = null; rows = []; kedit = null; $("admForm").reset(); fillChap(); $("aWork").hidden = true; $("aSave").disabled = true; $("aSave").textContent = t.save; $("aCancel").hidden = true; hint(); };
    $("aCancel").onclick = reset;
    $("admForm").onsubmit = async e => {
      e.preventDefault();
      const first = parseInt($("aNum").value, 10); if (!(first > 0)) return st(t.badnum);
      const live = rows.filter(r => r.jp.trim()); if (!live.length) return st(t.empty);
      const pages = []; live.forEach((r, i) => { if (!i || r.np) pages.push([]); pages[pages.length - 1].push(r); });
      const head = $("aHead").value.trim(), bookId = $("aBook").value, ci = $("aChapL").hidden ? null : +$("aChap").value, base = Date.now(), dn = /^\s*(\d+)/.exec(head);
      const out = pages.map((rs, k) => ({ bookId, ci, pos: first + k, head: k ? "" : head, side: dn && !k ? (+dn[1] % 2 ? "left" : "right") : "", order: base + k,
        sentences: rs.map((r, j) => ({ jp: r.jp.trim(), en: r.en.trim(), pl: r.pl.trim(), para: j === 0 || !!r.para })) }));
      const btn = $("aSave"); btn.disabled = true; btn.textContent = t.saving; st("");
      try {
        for (let k = 0; k < out.length; k++) { if (k === 0 && editId) await col.doc(editId).set(out[0]); else await col.add(out[k]); }
        reset(); st(t.saved);
      } catch (err) { st(t.err); btn.disabled = false; btn.textContent = editId ? t.upd : t.save; }
    };
    unsub = col.orderBy("order", "desc").limit(300).onSnapshot(snap => {
      docs = snap.docs.map(d => ({ id: d.id, ...d.data() })).sort((a, z) => (a.bookId === z.bookId ? (a.pos || 0) - (z.pos || 0) || a.order - z.order : String(a.bookId).localeCompare(z.bookId)));
      const list = $("aList"); if (!list) return;
      list.innerHTML = docs.length ? docs.map(r => { const b = BOOKS.find(x => x.id === r.bookId);
        return `<li><span class="badge">${esc(r.pos != null ? r.pos : "·")}</span><div><strong>${esc(b ? b.title : r.bookId)} · ${t.pg} ${esc(r.pos != null ? r.pos : "?")}</strong>
          <small>${r.sentences.length} ${t.lines}${r.head ? " · " + esc(r.head) : ""}</small></div><span><button class="del" data-edit="${esc(r.id)}">${t.edit}</button> <button class="del" data-del="${esc(r.id)}">${t.del}</button></span></li>`; }).join("")
        : `<li class="none">${t.none2}</li>`;
      list.querySelectorAll("[data-del]").forEach(b => b.onclick = () => col.doc(b.dataset.del).delete().catch(() => {}));
      list.querySelectorAll("[data-edit]").forEach(b => b.onclick = () => {
        const r = docs.find(x => x.id === b.dataset.edit); if (!r) return;
        editId = r.id; $("aBook").value = r.bookId; fillChap(); if (r.ci != null) $("aChap").value = r.ci;
        $("aNum").value = r.pos != null ? r.pos : ""; $("aHead").value = r.head || ""; $("aJp").value = $("aEn").value = $("aPl").value = "";
        rows = r.sentences.map((x, j) => ({ jp: x.jp || "", en: x.en || "", pl: x.pl || "", para: j === 0 || !!x.para, np: false, pi: 0 })); kedit = null;
        $("aSave").textContent = t.upd; $("aCancel").hidden = false; hint(); render(); scrollTo(0, 0);
      });
    }, () => {});
  }

  // owner-only nav link, and a live feed of admin-added text into the readers
  (async () => {
    const [db, user] = await claudeReady;
    if (!db) return;
    db.collection("pages").orderBy("order", "asc").limit(500).onSnapshot(snap => {
      const next = {};
      snap.docs.forEach(d => { const r = d.data(); if (!r || !r.bookId || !Array.isArray(r.sentences)) return;
        (next[r.bookId] = next[r.bookId] || []).push({ pos: r.pos == null ? null : r.pos, ci: r.ci == null ? null : r.ci, page: { ...(r.head ? { head: r.head } : {}), ...(r.side ? { side: r.side } : {}), sentences: r.sentences } }); });
      const changed = JSON.stringify(next) !== JSON.stringify(extraPages); extraPages = next;
      if (changed && cur.startsWith("book/") && !document.body.classList.contains("modal-open")) route();
    }, () => {});
    if (user && await user.isOwner()) { const a = document.getElementById("navAdmin"); if (a) a.hidden = false; }
  })();

  // ---- Learn Japanese ----
  const KANA = {
    hira: ["あいうえお","かきくけこ","さしすせそ","たちつてと","なにぬねの","はひふへほ","まみむめも","や.ゆ.よ","らりるれろ","わ...を","ん...."],
    kata: ["アイウエオ","カキクケコ","サシスセソ","タチツテト","ナニヌネノ","ハヒフヘホ","マミムメモ","ヤ.ユ.ヨ","ラリルレロ","ワ...ヲ","ン...."]
  };
  const ROMAJI = ["a i u e o","ka ki ku ke ko","sa shi su se so","ta chi tsu te to","na ni nu ne no","ha hi fu he ho","ma mi mu me mo","ya . yu . yo","ra ri ru re ro","wa . . . wo","n . . . ."];
  const L = {
    en: { h: "Learn Japanese", lead: "A small starter kit for reading the series in the original: the two kana alphabets, and words from the books and their covers.",
          hira: "Hiragana", kata: "Katakana", hiraNote: "Used for grammar and native words.", kataNote: "Used for foreign words, sounds and emphasis. モノノ怪 is written with it.",
          words: "Words from the series", jp: "Japanese", read: "Reading", mean: "Meaning" },
    pl: { h: "Nauka japońskiego", lead: "Mały zestaw na start do czytania serii w oryginale: dwa alfabety kana oraz słowa z książek i ich okładek.",
          hira: "Hiragana", kata: "Katakana", hiraNote: "Używana w gramatyce i słowach rodzimych.", kataNote: "Używana dla słów obcych, dźwięków i podkreślenia. Zapisuje się nią モノノ怪.",
          words: "Słowa z serii", jp: "Japoński", read: "Czytanie", mean: "Znaczenie" }
  };
  function chart(kind) {
    return `<div class="kana">${KANA[kind].map((row, i) => { const rom = ROMAJI[i].split(" ");
      return [...row].map((ch, k) => ch === "." ? `<span class="kc empty"></span>` : `<span class="kc"><b>${ch}</b><i>${rom[k]}</i></span>`).join(""); }).join("")}</div>`;
  }
  function learn() {
    const t = L[lang];
    view.innerHTML = `<section class="learn"><h1>${t.h}</h1><p class="lead">${t.lead}</p>
      <h2>${t.hira}</h2><p class="note">${t.hiraNote}</p>${chart("hira")}
      <h2>${t.kata}</h2><p class="note">${t.kataNote}</p>${chart("kata")}
      <h2>${t.words}</h2><table class="words"><thead><tr><th>${t.jp}</th><th>${t.read}</th><th>${t.mean}</th></tr></thead><tbody>
      ${LEARN_WORDS.map(w => `<tr><td class="jpw">${esc(w.jp)}</td><td>${esc(w.read)}</td><td>${esc(w[lang])}</td></tr>`).join("")}</tbody></table></section>`;
  }

  function route() {
    if (unsub) { unsub(); unsub = null; }
    document.body.classList.remove("modal-open"); modalApi = null; pageApi = null;
    view.onmouseover = view.onmouseout = view.onfocusin = view.onfocusout = view.onclick = view.onkeydown = view.onsubmit = null;
    const h = cur;
    const page = h.startsWith("book/") ? cat(BOOKS.find(x => x.id === h.slice(5)) || {}) : (NAV.en[h] ? h : "books");
    document.querySelectorAll("[data-nav]").forEach(a => { a.classList.toggle("on", a.dataset.nav === page); a.textContent = NAV[lang][a.dataset.nav]; });
    document.querySelectorAll(".lang button").forEach(b => b.classList.toggle("on", b.dataset.lang === lang));
    document.documentElement.lang = lang;
    view.style.animation = "none"; void view.offsetWidth; view.style.animation = "";
    if (h === "learn") learn(); else if (h === "requests") requests(); else if (h === "admin") admin(); else if (h === "about") about(); else if (h.startsWith("book/")) book(h.slice(5)); else grid(page);
    scrollTo(0, 0);
  }
  document.querySelectorAll(".lang button").forEach(b => b.onclick = () => { lang = b.dataset.lang; store.set("lang", lang); route(); });
  // in-page navigation without depending on hash events (works inside sandboxed frames)
  document.addEventListener("click", e => {
    const a = e.target.closest('a[href^="#"]'); if (!a) return;
    e.preventDefault(); cur = a.getAttribute("href").replace(/^#\/?/, "");
    try { history.replaceState(null, "", "#/" + cur); } catch (err) {}
    route();
  });
  addEventListener("hashchange", () => { cur = location.hash.replace(/^#\/?/, ""); route(); });
  route();
})();
