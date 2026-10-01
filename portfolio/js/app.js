(() => {
  const view = document.getElementById("view");
  const $ = id => document.getElementById(id);
  const store = { get: k => { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} } };
  let lang = store.get("lang") === "pl" ? "pl" : "en";
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const caseProjects = (typeof CASES !== "undefined" ? CASES : []).map(c => ({ id: c.id, category: c.category, title: c.title, sub: c.tags.slice(0, 3).join(" · "), year: "", cover: c.thumb, cs: c }));
  const ALL = caseProjects.concat(PROJECTS);
  const cover = p => p.cover ? `<img src="${esc(p.cover)}" alt="${esc(p.title)}">`
    : `<div class="ph" style="background:linear-gradient(145deg,${esc(p.color)},${esc(p.color2)})">${esc(p.sub)}</div>`;
  const T = { en: { back: "← Back", about: "About" }, pl: { back: "← Wróć", about: "O mnie" } };
  const NAV = {
    en: { desktop: "Desktop", mobile: "Mobile", workshops: "Workshops", gameux: "Game UX/UI", requests: "Requests", about: "About" },
    pl: { desktop: "Desktop", mobile: "Mobile", workshops: "Warsztaty", gameux: "Game UX/UI", requests: "Zapytania", about: "O mnie" }
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
    const list = ALL.filter(p => p.category === c);
    if (!list.length) { view.innerHTML = `<p class="empty">${EMPTY[lang]}</p>`; return; }
    view.innerHTML = `<div class="grid${c === "desktop" ? " cols2" : ""}">${list.map(p => `
      <a class="card" href="#/project/${esc(p.id)}"><div class="img">${cover(p)}</div>
      <h2>${esc(p.title)}</h2><p>${esc(p.sub)}</p></a>`).join("")}</div>`;
  }

  const html = s => s == null ? "" : s;
  function block(b) {
    if (b.type === "visual") return `<figure class="cs-visual"><img src="${esc(b.img)}" alt="${esc(b.alt || b.label)}" loading="lazy">${b.note ? `<figcaption>${html(b.note)}</figcaption>` : ""}</figure>`;
    if (b.type === "pullquote") return `<blockquote class="cs-pull">${html(b.quote)}</blockquote>`;
    if (b.type === "text") return `<div class="cs-text">${b.h ? `<h2>${html(b.h)}</h2>` : ""}${(b.p || []).map(p => `<p>${html(p)}</p>`).join("")}${b.quote ? `<blockquote>${html(b.quote)}</blockquote>` : ""}${b.cards ? `<div class="cs-cards">${b.cards.map(c => `<div><h3>${html(c.h)}</h3><p>${html(c.p)}</p></div>`).join("")}</div>` : ""}</div>`;
    if (b.type === "challenges") return `<div class="cs-text"><h2>${html(b.h)}</h2>${b.items.map(it => `<div class="cs-chal"><span>${esc(it.num)}</span><div><h3>${html(it.title)}</h3>${it.problem ? `<p><b>Problem</b> ${html(it.problem)}</p>` : ""}<p><b>Decision</b> ${html(it.decision)}</p>${it.why ? `<p><b>Why it mattered</b> ${html(it.why)}</p>` : ""}</div></div>`).join("")}</div>`;
    if (b.type === "beforeafter") return `<div class="cs-text">${b.h ? `<h2>${html(b.h)}</h2>` : ""}<div class="cs-ba"><div><h3>${html(b.beforeH)}</h3><p>${html(b.beforeP)}</p></div><div class="after"><h3>${html(b.afterH)}</h3><p>${html(b.afterP)}</p></div></div></div>`;
    if (b.type === "compareslider") return `<div class="cs-text">${b.h ? `<h2>${html(b.h)}</h2>` : ""}<div class="cs-compare" style="aspect-ratio:${esc(b.afterRatio || "1549/1776")}">
      <img src="${esc(b.afterImg)}" alt="${esc(b.afterAlt)}"><div class="cs-clip"><img src="${esc(b.beforeImg)}" alt="${esc(b.beforeAlt)}"></div>
      <span class="cs-tag l">${esc(b.beforeLabel || "Before")}</span><span class="cs-tag r">${esc(b.afterLabel || "After")}</span>
      <div class="cs-line"></div><input type="range" min="0" max="100" value="50" aria-label="${esc(b.h || "Compare before and after")}"></div>${b.note ? `<p class="cs-note">${html(b.note)}</p>` : ""}</div>`;
    return "";
  }
  function caseStudy(p) {
    const c = p.cs, i = ALL.indexOf(p), sibs = ALL.filter(x => x.cs);
    const nxt = sibs[(sibs.indexOf(p) + 1) % sibs.length];
    view.innerHTML = `<a class="back" href="#/${esc(p.category)}">${T[lang].back}</a>
      <article class="case"><header><p class="kicker">${esc(c.kicker)}</p><h1>${esc(c.title)}</h1><p class="dek">${esc(c.dek)}</p>
      <dl class="cs-meta">${c.meta.map(m => `<div><dt>${esc(m.label)}</dt><dd>${esc(m.val)}</dd></div>`).join("")}</dl>
      ${c.nda ? `<p class="cs-nda">${esc(c.nda)}</p>` : ""}</header>
      ${c.blocks.map(block).join("")}
      ${nxt && nxt !== p ? `<a class="cs-next" href="#/project/${esc(nxt.id)}">Next case study<strong>${esc(nxt.title)} →</strong></a>` : ""}</article>`;
    view.querySelectorAll(".cs-compare").forEach(el => {
      const r = el.querySelector("input"), clip = el.querySelector(".cs-clip"), line = el.querySelector(".cs-line");
      const set = v => { clip.style.clipPath = `inset(0 ${100 - v}% 0 0)`; line.style.left = v + "%"; };
      r.oninput = () => set(r.value); set(50);
    });
  }
  function project(id) {
    const p = ALL.find(x => x.id === id); if (!p) return grid("desktop");
    if (p.cs) return caseStudy(p);
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
    const pr = h.startsWith("project/") ? ALL.find(x => x.id === h.slice(8)) : null;
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
