/*
  EDIT THIS FILE to manage the portfolio.
  - `category`: which tab the project appears in: "desktop", "mobile", "workshops" or "gameux".
  - `cover`: optional image path (put images in /img). Without it a coloured placeholder is shown.
  - `desc`: { en, pl } project description (blank line = new paragraph).
*/
const mk = (id, category, title, sub, color, color2) => ({
  id, category, title, sub, year: "2025", color, color2, cover: "",
  desc: { en: "Project description goes here.\n\nBlank line = new paragraph.", pl: "Tutaj wpisz opis projektu.\n\nPusta linia = nowy akapit." }
});
const PROJECTS = [
  mk("dash", "desktop", "Analytics Dashboard", "Web app · Redesign", "#1f3550", "#4a6f86"),
  mk("shop", "desktop", "E-commerce Checkout", "Web · UX research", "#7a1f1f", "#a5442f"),
  mk("cms", "desktop", "Content Editor", "SaaS · Design system", "#2a2a5a", "#5a5a9a"),
  mk("bank", "mobile", "Banking App", "iOS · Android", "#1f5b6b", "#4f8a78"),
  mk("fit", "mobile", "Fitness Tracker", "Mobile · Onboarding", "#a5442f", "#e07b1a"),
  mk("travel", "mobile", "Travel Planner", "Mobile · Prototype", "#8a6d1f", "#d8b66e"),
  mk("ws-ux", "workshops", "UX Research Workshop", "Facilitation · 2 days", "#2a2a2a", "#777"),
  mk("ws-ds", "workshops", "Design Sprint", "Team workshop · 5 days", "#1f3550", "#2a2a5a"),
  mk("ws-map", "workshops", "Journey Mapping", "Remote workshop", "#4f8a78", "#1f5b6b"),
  mk("g-hud", "gameux", "HUD & Menus", "Game UI · Action RPG", "#1a1a1a", "#7a1f1f"),
  mk("g-onb", "gameux", "Player Onboarding", "Game UX · Tutorial flow", "#2a2a5a", "#e07b1a"),
  mk("g-shop", "gameux", "In-game Store", "Game UX · Monetisation UI", "#1f5b6b", "#8a6d1f")
];

const ABOUT = {
  en: "UX/UI designer working across desktop, mobile and games.\n\nThis portfolio shows selected projects, workshops I run, and game UX/UI work. Edit data/projects.js to add your own.",
  pl: "Projektant/ka UX/UI pracujący/a przy aplikacjach desktopowych, mobilnych i grach.\n\nTo portfolio zawiera wybrane projekty, prowadzone przeze mnie warsztaty oraz prace z zakresu UX/UI w grach. Edytuj data/projects.js, aby dodać własne."
};
