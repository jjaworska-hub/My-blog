(() => {
  const $ = id => document.getElementById(id);
  const shelf = $("shelf"), filters = $("filters");
  let lang = localStorage.getItem("lang") || "en";
  let filter = "ALL", current = 0, els = [];
  const visible = () => BOOKS.filter(b => filter === "ALL" || b.tag === filter);

  function buildFilters() {
    const tags = ["ALL", ...new Set(BOOKS.map(b => b.tag))];
    filters.innerHTML = "";
    tags.forEach(t => {
      const b = document.createElement("button");
      b.textContent = t; b.className = t === filter ? "on" : "";
      b.onclick = () => { filter = t; current = 0; buildFilters(); buildShelf(); };
      filters.appendChild(b);
    });
  }

  function buildShelf() {
    shelf.innerHTML = ""; els = [];
    visible().forEach((b, i) => {
      const el = document.createElement("button");
      el.className = "book" + (b.cover ? " hascover" : "");
      el.style.background = b.color; el.setAttribute("aria-label", b.title);
      el.innerHTML = `<span>${b.title}</span>` + (b.cover ? `<img src="${b.cover}" alt="">` : "");
      el.onclick = () => { if (!moved) select(i); };
      shelf.appendChild(el); els.push(el);
    });
    select(current);
  }

  function select(i) {
    const list = visible(); if (!list.length) return;
    current = Math.max(0, Math.min(list.length - 1, i));
    els.forEach((e, k) => e.classList.toggle("active", k === current));
    const b = list[current];
    $("title").textContent = b.title; $("jpTitle").textContent = b.jp;
    $("meta").textContent = b.year;
    $("counter").textContent = `${current + 1} / ${list.length}`;
    setTimeout(() => {
      const e = els[current];
      shelf.scrollTo({ left: e.offsetLeft - shelf.clientWidth / 2 + e.offsetWidth / 2 });
    }, 0);
  }

  // input: arrows, keys, wheel, drag
  $("prev").onclick = () => select(current - 1);
  $("next").onclick = () => select(current + 1);
  shelf.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") select(current - 1);
    if (e.key === "ArrowRight") select(current + 1);
  });
  let wheelLock = false;
  shelf.addEventListener("wheel", e => {
    e.preventDefault(); if (wheelLock) return; wheelLock = true;
    select(current + ((e.deltaY || e.deltaX) > 0 ? 1 : -1));
    setTimeout(() => wheelLock = false, 180);
  }, { passive: false });
  let down = false, startX = 0, moved = false, lastStep = 0;
  shelf.addEventListener("pointerdown", e => { down = true; moved = false; startX = lastStep = e.clientX; });
  addEventListener("pointermove", e => {
    if (!down) return;
    if (Math.abs(e.clientX - startX) > 6) { moved = true; shelf.classList.add("drag"); }
    if (moved && Math.abs(e.clientX - lastStep) > 50) {
      select(current + (e.clientX < lastStep ? 1 : -1)); lastStep = e.clientX;
    }
  });
  addEventListener("pointerup", () => { down = false; shelf.classList.remove("drag"); setTimeout(() => moved = false); });

  // reader
  function esc(s) { return s.replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c])); }
  function showReader() {
    const b = visible()[current];
    let h = `<h2>${esc(b.title)}</h2><p class="sub">${esc(b.jp)} · ${lang.toUpperCase()}</p>`;
    const done = b.chapters.filter(c => c.text[lang]);
    if (!done.length) h += `<p class="empty">${lang === "pl" ? "Brak tłumaczeń w tym języku." : "No translations in this language yet."}</p>`;
    done.forEach(c => {
      h += `<h3>${esc(c.title[lang] || c.title.en || "")}</h3>` +
        c.text[lang].split(/\n\s*\n/).map(p => `<p>${esc(p)}</p>`).join("");
    });
    $("reader").innerHTML = h;
    $("shelfView").hidden = true; $("readerView").hidden = false; scrollTo(0, 0);
  }
  $("readBtn").onclick = e => { e.preventDefault(); showReader(); };
  $("backBtn").onclick = () => { $("readerView").hidden = true; $("shelfView").hidden = false; select(current); };
  $("aboutBtn").onclick = e => { e.preventDefault(); alert("Fan translations of the Mononoke light novels, Japanese → Polish & English."); };

  document.querySelectorAll(".lang button").forEach(b => {
    b.classList.toggle("on", b.dataset.lang === lang);
    b.onclick = () => {
      lang = b.dataset.lang; localStorage.setItem("lang", lang);
      document.querySelectorAll(".lang button").forEach(x => x.classList.toggle("on", x === b));
      if (!$("readerView").hidden) showReader();
    };
  });

  buildFilters(); buildShelf();
})();
