(() => {
  const view = document.getElementById("view");
  const store = { get: k => { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} } };
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
  const D = {
    en: { words: "Words", grammar: "Grammar", note: "Note", close: "Close", furi: "Furigana", hint: "Hover a sentence to see it on both pages. Click it for the word and grammar breakdown.", jpLabel: "日本語", trLabel: "English", reading: "Reading" },
    pl: { furi: "Furigana", words: "Słowa", grammar: "Gramatyka", note: "Uwaga", close: "Zamknij", hint: "Najedź na zdanie, aby zobaczyć je na obu stronach. Kliknij, aby zobaczyć słowa i gramatykę.", jpLabel: "日本語", trLabel: "Polski", reading: "Czytanie" }
  };
  // 漢字{かんじ} -> <ruby>漢字<rt>かんじ</rt></ruby> (input is escaped first)
  const ruby = str => esc(str).replace(/([\u4e00-\u9fff\u3005\u3006\u30f6]+)\{([^}]+)\}/g, "<ruby>$1<rt>$2</rt></ruby>");
  let furi = store.get("furi") !== "off";
  const tr = (s) => s[lang] || s.en || "";
  function sentencesHTML(c, ci, side) {
    let out = "<p>";
    c.sentences.forEach((s, i) => {
      if (i && s.para) out += "</p><p>";
      const txt = side === "jp" ? ruby(s.jp) : esc(tr(s));
      out += `<span class="sent" tabindex="0" role="button" data-s="${ci}-${i}">${txt}</span>${side === "jp" ? "" : " "}`;
    });
    return out + "</p>";
  }
  function detailHTML(s) {
    const t = D[lang], m = o => esc(o && (o[lang] || o.en) || "");
    return `<button class="dclose" aria-label="${t.close}">×</button>
      <div class="dtop"><p class="djp" lang="ja">${ruby(s.jp)}</p><p class="dtr">${esc(tr(s))}</p></div>
      <div class="dcols">
      ${s.words && s.words.length ? `<section><h4>${t.words}</h4><table>${s.words.map(w => `<tr><td class="dw" lang="ja">${esc(w.word)}</td><td class="dr">${esc(w.reading || "")}</td><td>${m(w.meaning)}</td></tr>`).join("")}</table></section>` : ""}
      ${s.grammar && s.grammar.length ? `<section><h4>${t.grammar}</h4><ul>${s.grammar.map(g => `<li><b lang="ja">${esc(g.pattern)}</b><span>${m(g.explanation)}</span></li>`).join("")}</ul></section>` : ""}
      ${s.note ? `<section><h4>${t.note}</h4><p>${m(s.note)}</p></section>` : ""}
      </div>`;
  }
  function book(id) {
    const b = BOOKS.find(x => x.id === id); if (!b) return grid("books");
    const t = D[lang];
    const chapters = b.chapters.filter(c => c.sentences || (c.text && c.text[lang]));
    const body = chapters.map((c, ci) => {
      const ct = c.title || {};
      const title = `<h3>${ct.jp ? `<span class="cjp" lang="ja">${ruby(ct.jp)}</span> ` : ""}<span>${esc(tr(ct))}</span></h3>`;
      if (c.sentences) return title + `<div class="tools"><p class="hint">${t.hint}</p><button type="button" class="furitoggle" aria-pressed="${furi}">${t.furi}: ${furi ? "ON" : "OFF"}</button></div><div class="spread">
        <div class="page jp" lang="ja"><span class="plabel">${t.jpLabel}</span>${sentencesHTML(c, ci, "jp")}</div>
        <div class="page tr"><span class="plabel">${t.trLabel}</span>${sentencesHTML(c, ci, "tr")}</div></div>`;
      return title + c.text[lang].split(/\n\s*\n/).map(p => `<p class="t">${esc(p)}</p>`).join("");
    }).join("");
    view.innerHTML = `<a class="back" href="#/${cat(b)}">${T[lang].back}</a>
      <article class="book${furi ? "" : " nofuri"}"><header class="bhead"><div class="img">${cover(b)}</div><div>
      <h1>${esc(b.title)}</h1>${b.jp ? `<p class="jp">${esc(b.jp)}</p>` : ""}
      <p class="meta">${[b.author, b.year].filter(Boolean).map(esc).join("  ·  ")}</p></div></header>
      ${body || `<p class="empty">${T[lang].none}</p>`}
      <aside class="detail" id="detail" hidden></aside></article>`;

    // sentence interaction: hover/focus lights both pages, click opens the breakdown
    const detail = $("detail");
    let selected = null;
    const light = (key, on) => view.querySelectorAll(`.sent[data-s="${key}"]`).forEach(e => e.classList.toggle("hl", on));
    const pick = key => {
      view.querySelectorAll(".sent.sel").forEach(e => e.classList.remove("sel"));
      if (!key || key === selected) { selected = null; detail.hidden = true; view.querySelector(".book").classList.remove("open"); return; }
      const [ci, i] = key.split("-").map(Number);
      selected = key;
      view.querySelectorAll(`.sent[data-s="${key}"]`).forEach(e => e.classList.add("sel"));
      detail.innerHTML = detailHTML(chapters[ci].sentences[i]); detail.hidden = false;
      view.querySelector(".book").classList.add("open");
      // keep the chosen sentence visible above the breakdown card
      const first = view.querySelector(`.sent[data-s="${key}"]`);
      if (first) { const over = first.getBoundingClientRect().bottom - (innerHeight - detail.offsetHeight) + 24; if (over > 0) scrollBy({ top: over, behavior: "smooth" }); }
    };
    const keyOf = e => { const s = e.target.closest && e.target.closest(".sent"); return s ? s.dataset.s : null; };
    view.onmouseover = e => { const k = keyOf(e); if (k) light(k, true); };
    view.onmouseout = e => { const k = keyOf(e); if (k) light(k, false); };
    view.onfocusin = view.onmouseover; view.onfocusout = view.onmouseout;
    view.onclick = e => {
      const k = keyOf(e);
      if (k) pick(k);
      else if (e.target.closest(".dclose")) pick(null);
      else if (e.target.closest(".furitoggle")) {
        furi = !furi; store.set("furi", furi ? "on" : "off");
        view.querySelector(".book").classList.toggle("nofuri", !furi);
        view.querySelectorAll(".furitoggle").forEach(x => { x.setAttribute("aria-pressed", furi); x.textContent = `${t.furi}: ${furi ? "ON" : "OFF"}`; });
      }
    };
    view.onkeydown = e => { if (e.key === "Escape") pick(null); if ((e.key === "Enter" || e.key === " ") && keyOf(e)) { e.preventDefault(); pick(keyOf(e)); } };
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
