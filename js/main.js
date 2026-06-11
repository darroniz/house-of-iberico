/* House of Ibérico — interacciones */

/* ---------- datos de recetas ---------- */
const BUNNY_LIB = "298118";

const RECIPES = [
  {
    name: "Mediterranean",
    items: [
      { t: "Confit Tomato & Ibérico Ham on Toast", p: "https://ibericosense.co.uk/wp-content/uploads/2026/06/confit-tomato-iberico-scaled.jpg", g: "82c93428-fb37-4463-9b76-2db28aa80d53" },
      { t: "Macaroni with Baked Feta & Ibérico Ham", p: "https://ibericosense.co.uk/wp-content/uploads/2026/06/macaroni-feta-iberico-3.jpg", g: "5bc6f945-308c-4afd-9e8e-98dfdc7f7e22" },
      { t: "Peach, Burrata & Ibérico Ham Salad", p: "https://ibericosense.co.uk/wp-content/uploads/2026/06/peach-burrata-iberico-4.jpg", g: "a4dcb56e-6efc-481f-9556-151d5c665d18" },
      { t: "Watermelon Gazpacho with Ibérico Ham", p: "https://ibericosense.co.uk/wp-content/uploads/2026/06/watermelon-gazpacho-iberico-scaled.jpg", g: "69872943-c5c6-4169-879c-89f2da7154ea" },
      { t: "Green Salad with Lentils & Ibérico Ham", p: "https://ibericosense.co.uk/wp-content/uploads/2026/06/green-salad-lentils-iberico-3.jpg", g: "55421fc6-f155-4790-9148-ba0ebb0f7212" }
    ]
  },
  {
    name: "Tapas by Omar",
    items: [
      { t: "Ibérico Ham Croquettes", p: "images/iberico-croquettes.jpg", g: "7ab6f534-5625-4ac7-a93e-62406e3d2d13" },
      { t: "‘Patatas Bravas’ with Ibérico Ham", p: "images/patatas-bravas-iberico.jpg", g: "c90e8322-3717-41fc-9800-27610f5d97dd" },
      { t: "Ibérico Ham Paella with Quail Eggs", p: "images/paella-quail-eggs-iberico.jpg", g: "8b79dfbe-aa9d-40b3-9750-0ad2964bbd24" },
      { t: "Melon Carpaccio with Ibérico Ham", p: "images/melon-carpaccio-iberico.jpg", g: "9f34d726-d34a-475c-a7a7-6aadd6457dee" },
      { t: "‘Gambas al Ajillo’ with Ibérico Ham", p: "images/gambas-al-ajillo-iberico.jpg", g: "fdcf4a19-3925-4f81-a11d-2debea84e401" }
    ]
  },
  {
    name: "Zero Waste",
    items: [
      { t: "Ibérico Ham Bone Broth", p: "images/iberico-bone-broth.jpg", g: "db2f9bd8-fcf5-4a30-8fc4-9b7cb4e71b01" },
      { t: "Forgotten Vegetables Sauté with Ibérico Ham", p: "images/forgotten-vegetables-iberico.jpg", g: "0b34147f-0e16-4f3d-9951-82164626114d" },
      { t: "French-Style Ibérico Ham Pâté", p: "images/iberico-pate.jpg", g: "05319593-7c97-400b-8ee4-101b0cb9c262" },
      { t: "Garlic Soup with Ibérico Ham", p: "images/garlic-soup-iberico.jpg", g: "d655fd1e-78dc-4c89-86ee-0a98f73a178c" },
      { t: "‘Migas’ with Ibérico Ham", p: "images/migas-iberico.jpg", g: "696e5879-0c0e-4174-97ca-003837e20ec2" }
    ]
  },
  {
    name: "Quick & Easy",
    items: [
      { t: "Broken Eggs with Prawns & Ibérico Ham", p: "images/broken-eggs-iberico.jpg", g: "36911193-51d5-4e17-aa49-189e6fa5d085" },
      { t: "Spanish Omelette with Ibérico Ham Alioli", p: "images/spanish-omelette-iberico.jpg", g: "79e49433-0ec8-46a0-8f12-01c31d44fe0a" },
      { t: "Caramelised Fig Toasts with Ibérico Ham", p: "images/fig-toasts-iberico.jpg", g: "d07e98cd-7e83-4682-9b4c-bfea7058ecf7" },
      { t: "Sautéed Artichokes with Ibérico Ham & Manchego", p: "images/artichokes-iberico.jpg", g: "41e221c3-fadc-4772-b30e-f8d48b777763" },
      { t: "Chickpeas with Spinach & Ibérico Ham", p: "images/chickpeas-spinach-iberico.jpg", g: "16d1874c-aebd-4ece-9e7e-fdb523424313" }
    ]
  }
];

const PLAY_SVG = '<svg viewBox="0 0 448 512"><path d="M424 214.7L72 6.6C44-10.3 0 6 0 48v416c0 42 44 58 72 41l352-208c31-19 31-64 0-83z"/></svg>';

/* ---------- pestañas + parrilla ---------- */
const tabsEl = document.querySelector(".tabs");
const panelsEl = document.querySelector(".recipes__panels");

RECIPES.forEach((cat, i) => {
  const tab = document.createElement("button");
  tab.className = "tab";
  tab.setAttribute("role", "tab");
  tab.setAttribute("aria-selected", i === 0 ? "true" : "false");
  tab.innerHTML = `${cat.name}<sup>${cat.items.length}</sup>`;
  tab.addEventListener("click", () => showPanel(i));
  tabsEl.appendChild(tab);

  const grid = document.createElement("div");
  grid.className = "recipes__grid";
  grid.style.display = i === 0 ? "grid" : "none";

  cat.items.forEach((item, j) => {
    if (item.p) {
      const card = document.createElement("article");
      card.className = "rcard rcard--photo" + (j === 0 ? " rcard--feature" : "");
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", "Watch recipe: " + item.t);
      card.innerHTML =
        `<img loading="lazy" src="${item.p}" alt="${item.t}">` +
        `<div class="rcard__ov"></div>` +
        `<span class="rcard__watch">${PLAY_SVG} Watch recipe</span>` +
        `<span class="rcard__play">${PLAY_SVG}</span>` +
        `<h3 class="rcard__name">${item.t}</h3>`;
      const open = () => openLightbox(item);
      card.addEventListener("click", open);
      card.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
      grid.appendChild(card);
    } else {
      const card = document.createElement("article");
      card.className = "rcard rcard--soon";
      card.innerHTML =
        `<span class="rcard__idx">${String(j + 1).padStart(2, "0")}</span>` +
        `<div><h3 class="rcard__name">${item.t}</h3>` +
        `<p class="rcard__soon">Video recipe — coming soon</p></div>`;
      grid.appendChild(card);
    }
  });
  panelsEl.appendChild(grid);
});

function showPanel(i) {
  [...tabsEl.children].forEach((t, j) => t.setAttribute("aria-selected", j === i ? "true" : "false"));
  [...panelsEl.children].forEach((p, j) => (p.style.display = j === i ? "grid" : "none"));
}

/* ---------- lightbox Bunny ---------- */
const lightbox = document.querySelector(".lightbox");
const lbFrame = lightbox.querySelector(".lightbox__frame");
const lbTitle = lightbox.querySelector(".lightbox__title");

function openLightbox(item) {
  lbTitle.textContent = item.t;
  lbFrame.innerHTML = `<iframe src="https://iframe.mediadelivery.net/embed/${BUNNY_LIB}/${item.g}?autoplay=true&preload=true" allow="autoplay;fullscreen" allowfullscreen title="${item.t}"></iframe>`;
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  lightbox.classList.remove("open");
  lbFrame.innerHTML = "";
  document.body.style.overflow = "";
}
lightbox.querySelector(".lightbox__close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });

/* ---------- vídeos del embajador ---------- */
document.querySelectorAll(".film").forEach((film) => {
  const video = film.querySelector("video");
  const playBtn = film.querySelector(".film__play");
  playBtn.addEventListener("click", () => {
    document.querySelectorAll(".film.playing video").forEach((v) => { if (v !== video) { v.pause(); v.closest(".film").classList.remove("playing"); v.controls = false; } });
    film.classList.add("playing");
    video.controls = true;
    video.play();
  });
  video.addEventListener("ended", () => { film.classList.remove("playing"); video.controls = false; });
});

/* ---------- reveal on scroll ---------- */
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }),
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
