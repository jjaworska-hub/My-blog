(() => {
  const view = document.getElementById("view");
  const store = { get: k => { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); return true; } catch (e) { return false; } }, del: k => { try { localStorage.removeItem(k); } catch (e) {} } };
  let lang = store.get("lang") === "pl" ? "pl" : "en";
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const cover = b => b.cover ? `<img src="${esc(b.cover)}" alt="${esc(b.title)}">` : `<div class="nocover" style="background:${esc(b.color)}"><span lang="ja">${esc(b.main || b.jp || b.title)}</span></div>`;
  const T = { en: { none: "No translations in this language yet.", back: "← Back", about: "About" },
              pl: { none: "Brak tłumaczeń w tym języku.", back: "← Wróć", about: "O projekcie" } };

  const NAV = { en: { books: "Books", manga: "Manga", other: "Other", requests: "Requests", learn: "Learn Japanese", about: "About" }, pl: { books: "Książki", manga: "Manga", other: "Inne", requests: "Prośby", learn: "Nauka japońskiego", about: "O projekcie" } };
  const EMPTY = { en: "Nothing here yet.", pl: "Na razie nic tu nie ma." };
  const cat = b => b.category || "books";
  function grid(c) {
    const list = BOOKS.filter(b => cat(b) === c);
    if (!list.length) { view.innerHTML = `<p class="empty">${EMPTY[lang]}</p>`; return; }
    view.innerHTML = `<div class="grid">${list.map(b => `
      <a class="card" href="#/book/${esc(b.id)}"><div class="img">${cover(b)}</div>
      <h2>${esc(b.title)}</h2>${b.jp ? `<p>${esc(b.jp)}</p>` : ""}</a>`).join("")}</div>`;
  }
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
    en: { page: "Page", pages: "Pages", prevPage: "Previous", nextPage: "Next", bmMark: "Bookmark here", bmClear: "Remove bookmark", resume: "Continue where you stopped", notes: "Notes", notesPh: "Write your notes about this book…", saved: "Saved", nosave: "Can’t save here: browser storage is unavailable.", local: "Notes are saved in this browser, on this device.", deck: "Download flashcards", deckSoon: "Coming soon", deckHint: "Vocabulary from this book", words: "Words", grammar: "Grammar", note: "Note", close: "Close", sentence: (n, N) => `Sentence ${n} of ${N}`, prev: "Previous sentence", next: "Next sentence", furi: "Furigana", hint: "Laid out like a Japanese book: start on the right page and turn pages to the left. Hover a sentence to see it on both pages. Click it for the word and grammar breakdown.", jpLabel: "日本語", trLabel: "English", reading: "Reading" },
    pl: { page: "Strona", pages: "Strony", prevPage: "Poprzednia", nextPage: "Następna", bmMark: "Zakładka tutaj", bmClear: "Usuń zakładkę", resume: "Wróć do zakładki", notes: "Notatki", notesPh: "Zapisz tu notatki o tej książce…", saved: "Zapisano", nosave: "Nie można zapisać: pamięć przeglądarki jest niedostępna.", local: "Notatki zapisują się w tej przeglądarce, na tym urządzeniu.", deck: "Pobierz fiszki", deckSoon: "Wkrótce", deckHint: "Słownictwo z tej książki", sentence: (n, N) => `Zdanie ${n} z ${N}`, prev: "Poprzednie zdanie", next: "Następne zdanie", furi: "Furigana", words: "Słowa", grammar: "Gramatyka", note: "Uwaga", close: "Zamknij", hint: "Układ jak w japońskiej książce: zacznij od prawej strony i przewracaj strony w lewo. Najedź na zdanie, aby zobaczyć je na obu stronach. Kliknij, aby zobaczyć słowa i gramatykę.", jpLabel: "日本語", trLabel: "Polski", reading: "Czytanie" }
  };
  // 漢字{かんじ} -> <ruby>漢字<rt>かんじ</rt></ruby> (input is escaped first)
  const ruby = str => esc(str).replace(/([\u4e00-\u9fff\u3005\u3006\u30f6]+)\{([^}]+)\}/g, "<ruby>$1<rt>$2</rt></ruby>");
  let furi = store.get("furi") !== "off";
  const tr = (s) => s[lang] || s.en || "";
  function sentencesHTML(list, side) {
    let out = "<p>";
    list.forEach(({ s, key }, i) => {
      if (i && s.para) out += "</p><p>";
      const txt = side === "jp" ? ruby(s.jp) : esc(tr(s));
      out += `<span class="sent" tabindex="0" role="button" data-s="${key}">${txt}</span>${side === "jp" ? "" : " "}`;
    });
    return out + "</p>";
  }
  function detailHTML(s, n, N, isBm) {
    const t = D[lang], m = o => esc(o && (o[lang] || o.en) || "");
    return `<div class="modal" role="dialog" aria-modal="true" aria-labelledby="mjp">
      <header class="mhead"><span class="mcount">${t.sentence(n, N)}</span>
        <button type="button" class="mbm" aria-pressed="${!!isBm}"><i></i><span>${isBm ? t.bmClear : t.bmMark}</span></button>
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
  function book(id) {
    const b = BOOKS.find(x => x.id === id); if (!b) return grid("books");
    const t = D[lang];
    // every bilingual page of the book, in reading order; plain-text chapters are shown below
    const spreads = [], plain = [];
    b.chapters.forEach((c, ci) => {
      if (c.sentences || c.pages) {
        const pgs = c.pages || [c.sentences];
        pgs.forEach((sents, pi) => spreads.push({ c, ci, pi, n: pgs.length, list: sents.map((s, i) => ({ s, key: `${ci}-${pi}-${i}` })) }));
      } else if (c.text && c.text[lang]) plain.push(c);
    });
    const loc = {}; spreads.forEach((sp, si) => sp.list.forEach((x, i) => { loc[x.key] = { si, s: x.s }; }));
    const order = spreads.flatMap(sp => sp.list.map(x => x.key));
    const plainHTML = plain.map(c => { const ct = c.title || {};
      return `<h3>${esc(tr(ct))}</h3>` + c.text[lang].split(/\n\s*\n/).map(p => `<p class="t">${esc(p)}</p>`).join(""); }).join("");

    view.innerHTML = `<a class="back" href="#/${cat(b)}">${T[lang].back}</a>
      <article class="book${furi ? "" : " nofuri"}"><header class="bhead"><div class="img">${cover(b)}</div><div>
      <h1>${esc(b.title)}</h1>${b.jp ? `<p class="jp">${esc(b.jp)}</p>` : ""}
      <p class="meta">${[b.author, b.year].filter(Boolean).map(esc).join("  ·  ")}</p>
      <div class="bactions"><button type="button" class="resume" id="resumeBtn" hidden></button></div></div></header>
      <div id="rdr"></div>${plainHTML}${!spreads.length && !plain.length ? `<p class="empty">${T[lang].none}</p>` : ""}
      <div class="bfoot"><div class="deckrow">
        ${b.flashcards ? `<a class="deck" href="${esc(b.flashcards)}" download><b>${t.deck}</b><span>${t.deckHint}</span></a>`
          : `<button type="button" class="deck off" disabled aria-disabled="true"><b>${t.deck}</b><span>${t.deckHint} · ${t.deckSoon}</span></button>`}
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
    function renderPage(n, dir) {
      if (!spreads.length) return;
      page = Math.max(0, Math.min(spreads.length - 1, n)); pageMemo = { id: b.id, n: page };
      const sp = spreads[page], ct = sp.c.title || {};
      const pager = spreads.length > 1 ? `<nav class="pager" aria-label="${t.pages}">
        <button type="button" class="pgprev" ${page === 0 ? "disabled" : ""}><span>${t.prevPage}</span> ›</button>
        <span class="pgnums">${spreads.map((_, k) => `<button type="button" class="pgn${k === page ? " on" : ""}" data-pg="${k}" aria-label="${t.page} ${k + 1}"${k === page ? ' aria-current="page"' : ""}>${k + 1}</button>`).join("")}</span>
        <button type="button" class="pgnext" ${page === spreads.length - 1 ? "disabled" : ""}>‹ <span>${t.nextPage}</span></button></nav>` : "";
      rdr.innerHTML = `<h3>${ct.jp ? `<span class="cjp" lang="ja">${ruby(ct.jp)}</span> ` : ""}<span>${esc(tr(ct))}</span>${spreads.length > 1 ? ` <small class="chpage">${t.page} ${page + 1} / ${spreads.length}</small>` : ""}</h3>
        <div class="tools"><p class="hint">${t.hint}</p><button type="button" class="furitoggle" aria-pressed="${furi}">${t.furi}: ${furi ? "ON" : "OFF"}</button></div>
        <div class="spread${dir ? " turn-" + dir : ""}">
          <div class="page jp" lang="ja"><span class="plabel">${t.jpLabel}</span>${sentencesHTML(sp.list, "jp")}</div>
          <div class="page tr"><span class="plabel">${t.trLabel}</span>${sentencesHTML(sp.list, "tr")}</div></div>${pager}`;
      applyMarks();
    }
    const goPage = (n, scroll) => {
      const to = Math.max(0, Math.min(spreads.length - 1, n)); if (to === page && rdr.firstChild) return;
      renderPage(to, to > page ? "next" : "prev");
      if (scroll) window.scrollTo({ top: Math.max(0, rdr.getBoundingClientRect().top + scrollY - 20), behavior: "smooth" });
    };
    pageApi = { go: d => goPage(page + d, true) };

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
      else if (el.closest(".pgn")) goPage(+el.closest(".pgn").dataset.pg, true);
      else if (el.closest(".pgprev")) goPage(page - 1, true);
      else if (el.closest(".pgnext")) goPage(page + 1, true);
      else if (el.closest(".furitoggle")) {
        furi = !furi; store.set("furi", furi ? "on" : "off");
        view.querySelector(".book").classList.toggle("nofuri", !furi);
        view.querySelectorAll(".furitoggle").forEach(x => { x.setAttribute("aria-pressed", furi); x.textContent = `${t.furi}: ${furi ? "ON" : "OFF"}`; });
      }
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
    const isOwner = !!(user && user.isOwner && user.isOwner());
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
    view.onmouseover = view.onmouseout = view.onfocusin = view.onfocusout = view.onclick = view.onkeydown = null;
    const h = cur;
    const page = h.startsWith("book/") ? cat(BOOKS.find(x => x.id === h.slice(5)) || {}) : (NAV.en[h] ? h : "books");
    document.querySelectorAll("[data-nav]").forEach(a => { a.classList.toggle("on", a.dataset.nav === page); a.textContent = NAV[lang][a.dataset.nav]; });
    document.querySelectorAll(".lang button").forEach(b => b.classList.toggle("on", b.dataset.lang === lang));
    document.documentElement.lang = lang;
    view.style.animation = "none"; void view.offsetWidth; view.style.animation = "";
    if (h === "learn") learn(); else if (h === "requests") requests(); else if (h === "about") about(); else if (h.startsWith("book/")) book(h.slice(5)); else grid(page);
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
