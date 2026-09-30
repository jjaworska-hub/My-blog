(() => {
  const $ = id => document.getElementById(id);
  const shelf = $("shelf"), track = $("track"), filters = $("filters"), frame = document.querySelector(".frame");
  const store = { get: k => { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} } };
  let lang = store.get("lang") || "en";
  let filter = "ALL", current = 0, els = [];
  const visible = () => BOOKS.filter(b => filter === "ALL" || b.tag === filter);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const face = b => `<div class="face" style="background:${b.color}">${b.cover ? `<img src="${esc(b.cover)}" alt="">` : `<h4>${esc(b.title)}</h4><small>${esc(b.jp)}</small>`}</div>`;

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
    track.innerHTML = ""; els = [];
    visible().forEach((b, i) => {
      const el = document.createElement("button");
      el.className = "book"; el.setAttribute("aria-label", b.title);
      el.innerHTML = `<span class="spine" style="background:${b.color}">${esc(b.title)}</span><div class="cover">${face(b)}</div>`;
      el.onclick = () => { if (moved) return; if (i === current) openReader(); else select(i); };
      track.appendChild(el); els.push(el);
    });
    select(current, true);
  }

  function select(i, first) {
    const list = visible(); if (!list.length) return;
    current = Math.max(0, Math.min(list.length - 1, i));
    els.forEach((e, k) => e.classList.toggle("active", k === current));
    const b = list[current];
    $("title").textContent = b.title; $("jpTitle").textContent = b.jp;
    $("meta").textContent = `${b.year}  ·  ${b.tag.toUpperCase()}`;
    $("counter").textContent = `${current + 1} / ${list.length}`;
    const info = $("info"); info.classList.remove("in"); void info.offsetWidth; info.classList.add("in");
    if (first) snap = true;
  }

  // smooth centring: chase the active book's centre every frame, so it follows the width animation
  let tx = 0, snap = true;
  (function tick() {
    const a = els[current];
    if (a && !$("shelfView").hidden) {
      const target = shelf.clientWidth / 2 - (a.offsetLeft + a.offsetWidth / 2);
      tx = snap ? target : tx + (target - tx) * 0.09;
      if (Math.abs(target - tx) < 0.3) tx = target;
      snap = false;
      track.style.transform = `translate3d(${tx}px,0,0)`;
    }
    requestAnimationFrame(tick);
  })();

  // input: buttons, keys, wheel, drag
  $("prev").onclick = () => select(current - 1);
  $("next").onclick = () => select(current + 1);
  shelf.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") select(current - 1);
    if (e.key === "ArrowRight") select(current + 1);
    if (e.key === "Enter") openReader();
  });
  let acc = 0, lock = 0;
  shelf.addEventListener("wheel", e => {
    e.preventDefault();
    const now = performance.now(); if (now < lock) return;
    acc += Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(acc) > 40) { select(current + (acc > 0 ? 1 : -1)); acc = 0; lock = now + 420; }
  }, { passive: false });
  let down = false, startX = 0, moved = false, lastStep = 0;
  shelf.addEventListener("pointerdown", e => { down = true; moved = false; startX = lastStep = e.clientX; });
  addEventListener("pointermove", e => {
    if (!down) return;
    if (Math.abs(e.clientX - startX) > 6) { moved = true; shelf.classList.add("drag"); }
    if (moved && Math.abs(e.clientX - lastStep) > 70) { select(current + (e.clientX < lastStep ? 1 : -1)); lastStep = e.clientX; }
  });
  addEventListener("pointerup", () => { down = false; shelf.classList.remove("drag"); setTimeout(() => moved = false); });

  // reader
  function renderReader() {
    const b = visible()[current];
    let h = `<div><h2>${esc(b.title)}</h2><p class="sub">${esc(b.jp)}  ·  ${lang.toUpperCase()}</p>`;
    const done = b.chapters.filter(c => c.text[lang]);
    if (!done.length) h += `<p class="empty">${lang === "pl" ? "Brak tłumaczeń w tym języku." : "No translations in this language yet."}</p>`;
    done.forEach(c => {
      h += `<h3>${esc(c.title[lang] || c.title.en || "")}</h3>` + c.text[lang].split(/\n\s*\n/).map(p => `<p>${esc(p)}</p>`).join("");
    });
    h += `</div><figure><div class="poster">${face(b)}</div></figure>`;
    $("reader").innerHTML = h;
  }
  let busy = false;
  function openReader() {
    if (busy || !visible().length) return; busy = true;
    const c = $("curtain"), a = els[current].getBoundingClientRect(), f = frame.getBoundingClientRect();
    c.style.setProperty("--cx", (a.left + a.width / 2 - f.left) + "px");
    c.style.setProperty("--cy", (a.top + a.height / 2 - f.top) + "px");
    c.classList.add("go");
    setTimeout(() => {
      renderReader();
      frame.classList.add("reading");
      $("shelfView").hidden = true; $("readerView").hidden = false;
      c.classList.remove("go"); c.style.transition = "none"; void c.offsetWidth; c.style.transition = "";
      frame.classList.remove("reading-in"); void frame.offsetWidth; frame.classList.add("reading-in");
      scrollTo(0, 0); busy = false;
    }, 800);
  }
  function closeReader() {
    if (busy) return; busy = true; frame.classList.add("leaving");
    setTimeout(() => {
      frame.classList.remove("leaving", "reading", "reading-in");
      $("readerView").hidden = true; $("shelfView").hidden = false;
      snap = true; select(current); busy = false;
    }, 420);
  }
  $("readBtn").onclick = e => { e.preventDefault(); openReader(); };
  $("backBtn").onclick = closeReader;
  $("aboutBtn").onclick = e => e.preventDefault();

  document.querySelectorAll(".lang button").forEach(b => {
    b.classList.toggle("on", b.dataset.lang === lang);
    b.onclick = () => {
      lang = b.dataset.lang; store.set("lang", lang);
      document.querySelectorAll(".lang button").forEach(x => x.classList.toggle("on", x === b));
      if (!$("readerView").hidden) { renderReader(); frame.classList.remove("reading-in"); void frame.offsetWidth; frame.classList.add("reading-in"); }
    };
  });

  buildFilters(); buildShelf();
})();
