(() => {
  const view = document.getElementById("view");
  const $ = id => document.getElementById(id);
  const store = { get: k => { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} } };
  let lang = store.get("lang") === "pl" ? "pl" : "en";
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const cover = p => p.cover ? `<img src="${esc(p.cover)}" alt="${esc(p.title)}">`
    : `<div class="ph" style="background:linear-gradient(145deg,${esc(p.color)},${esc(p.color2)})">${esc(p.sub)}</div>`;
  const T = { en: { back: "← Back", about: "About" }, pl: { back: "← Wróć", about: "O mnie" } };
  const NAV = {
    en: { desktop: "Desktop", mobile: "Mobile", workshops: "Workshops", requests: "Requests", gameux: "Game UX/UI", about: "About" },
    pl: { desktop: "Desktop", mobile: "Mobile", workshops: "Warsztaty", requests: "Zapytania", gameux: "Game UX/UI", about: "O mnie" }
  };
  const EMPTY = { en: "Nothing here yet.", pl: "Na razie nic tu nie ma." };
  const R = {
    en: { h: "Send a request", intro: "Tell me about your project, workshop or game. I read every message.", title: "What do you need?", note: "Details (optional)", name: "Your name (optional)", send: "Send", mail: "Email" },
    pl: { h: "Wyślij zapytanie", intro: "Napisz o swoim projekcie, warsztacie lub grze. Czytam każdą wiadomość.", title: "Czego potrzebujesz?", note: "Szczegóły (opcjonalnie)", name: "Twoje imię (opcjonalnie)", send: "Wyślij", mail: "E-mail" }
  };
  // set your address here; the form opens the visitor's mail client
  const CONTACT_EMAIL = "";
  let cur = location.hash.replace(/^#\/?/, "");

  function grid(c) {
    const list = PROJECTS.filter(p => p.category === c);
    if (!list.length) { view.innerHTML = `<p class="empty">${EMPTY[lang]}</p>`; return; }
    view.innerHTML = `<div class="grid">${list.map(p => `
      <a class="card" href="#/project/${esc(p.id)}"><div class="img">${cover(p)}</div>
      <h2>${esc(p.title)}</h2><p>${esc(p.sub)}</p></a>`).join("")}</div>`;
  }
  function project(id) {
    const p = PROJECTS.find(x => x.id === id); if (!p) return grid("desktop");
    view.innerHTML = `<a class="back" href="#/${esc(p.category)}">${T[lang].back}</a>
      <article class="book"><div class="img">${cover(p)}</div><div>
      <h1>${esc(p.title)}</h1><p class="meta">${[p.sub, p.year].filter(Boolean).map(esc).join("  ·  ")}</p>
      <div class="desc">${(p.desc[lang] || "").split(/\n\s*\n/).map(t => `<p>${esc(t)}</p>`).join("")}</div>
      </div></article>`;
  }
  function about() {
    view.innerHTML = `<div class="about"><h1>${T[lang].about}</h1>${ABOUT[lang].split(/\n\s*\n/).map(p => `<p>${esc(p)}</p>`).join("")}</div>`;
  }
  function requests() {
    const t = R[lang];
    view.innerHTML = `<section class="req"><h1>${t.h}</h1><p class="lead">${t.intro}</p>
      <form id="reqForm">
        <label>${t.title}<input id="rTitle" required maxlength="160"></label>
        <label>${t.note}<textarea id="rNote" rows="4" maxlength="1000"></textarea></label>
        <label>${t.name}<input id="rName" maxlength="60"></label>
        <div><button type="submit">${t.send}</button></div>
      </form></section>`;
    $("reqForm").onsubmit = e => {
      e.preventDefault();
      if (!CONTACT_EMAIL) return;
      const body = `${$("rNote").value}\n\n${$("rName").value}`;
      location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent($("rTitle").value)}&body=${encodeURIComponent(body)}`;
    };
  }
  function route() {
    const h = cur;
    const pr = h.startsWith("project/") ? PROJECTS.find(x => x.id === h.slice(8)) : null;
    const page = pr ? pr.category : (NAV.en[h] ? h : "desktop");
    document.querySelectorAll("[data-nav]").forEach(a => { a.classList.toggle("on", a.dataset.nav === page); a.textContent = NAV[lang][a.dataset.nav]; });
    document.querySelectorAll(".lang button").forEach(b => b.classList.toggle("on", b.dataset.lang === lang));
    document.documentElement.lang = lang;
    view.style.animation = "none"; void view.offsetWidth; view.style.animation = "";
    if (h === "requests") requests(); else if (h === "about") about(); else if (h.startsWith("project/")) project(h.slice(8)); else grid(page);
    scrollTo(0, 0);
  }
  document.querySelectorAll(".lang button").forEach(b => b.onclick = () => { lang = b.dataset.lang; store.set("lang", lang); route(); });
  document.addEventListener("click", e => {
    const a = e.target.closest('a[href^="#"]'); if (!a) return;
    e.preventDefault(); cur = a.getAttribute("href").replace(/^#\/?/, "");
    try { history.replaceState(null, "", "#/" + cur); } catch (err) {}
    route();
  });
  addEventListener("hashchange", () => { cur = location.hash.replace(/^#\/?/, ""); route(); });
  route();
})();
