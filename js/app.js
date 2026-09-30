(() => {
  const view = document.getElementById("view");
  const store = { get: k => { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} } };
  let lang = store.get("lang") === "pl" ? "pl" : "en";
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const cover = b => b.cover ? `<img src="${esc(b.cover)}" alt="${esc(b.title)}">` : `<div style="height:100%;background:${esc(b.color)}"></div>`;
  const T = { en: { none: "No translations in this language yet.", back: "← All books", about: "About" },
              pl: { none: "Brak tłumaczeń w tym języku.", back: "← Wszystkie książki", about: "O projekcie" } };

  function grid() {
    view.innerHTML = `<div class="grid">${BOOKS.map(b => `
      <a class="card" href="#/book/${esc(b.id)}"><div class="img">${cover(b)}</div>
      <h2>${esc(b.title)}</h2><p>${esc(b.jp)}</p></a>`).join("")}</div>`;
  }
  function book(id) {
    const b = BOOKS.find(x => x.id === id); if (!b) return grid();
    const done = b.chapters.filter(c => c.text[lang]);
    view.innerHTML = `<a class="back" href="#/">${T[lang].back}</a>
      <article class="book"><div class="img">${cover(b)}</div><div>
      <h1>${esc(b.title)}</h1><p class="jp">${esc(b.jp)}</p>
      <p class="meta">${[b.author, b.year, lang.toUpperCase()].filter(Boolean).map(esc).join("  ·  ")}</p>
      ${done.length ? done.map(c => `<h3>${esc(c.title[lang] || c.title.en || "")}</h3>` +
        c.text[lang].split(/\n\s*\n/).map(p => `<p class="t">${esc(p)}</p>`).join("")).join("") : `<p class="empty">${T[lang].none}</p>`}
      </div></article>`;
  }
  function about() {
    const a = (typeof ABOUT !== "undefined" && ABOUT[lang]) || "";
    view.innerHTML = `<div class="about"><h1>${T[lang].about}</h1>${a.split(/\n\s*\n/).map(p => `<p>${esc(p)}</p>`).join("")}</div>`;
  }
  let cur = location.hash.replace(/^#\/?/, "");
  function route() {
    const h = cur;
    document.querySelectorAll("[data-nav]").forEach(a => a.classList.toggle("on", a.dataset.nav === (h === "about" ? "about" : "work")));
    document.querySelectorAll(".lang button").forEach(b => b.classList.toggle("on", b.dataset.lang === lang));
    document.documentElement.lang = lang;
    view.style.animation = "none"; void view.offsetWidth; view.style.animation = "";
    if (h === "about") about(); else if (h.startsWith("book/")) book(h.slice(5)); else grid();
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
