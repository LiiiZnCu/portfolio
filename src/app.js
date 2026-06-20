import { mountProjectExplorer } from "./project-explorer.js";
import { projects } from "./projects.js";

const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");

mountProjectExplorer({
  projects,
  selector: document.querySelector("[data-project-selector]"),
  stage: document.querySelector("[data-project-stage]"),
  menuButton: document.querySelector("[data-project-menu-button]"),
  currentLabel: document.querySelector("[data-current-project-label]"),
});

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "打开导航" : "关闭导航");
  nav.classList.toggle("is-open", !isOpen);
});

nav.addEventListener("click", (event) => {
  if (!event.target.matches("a")) return;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "打开导航");
  nav.classList.remove("is-open");
});

document.querySelector("[data-year]").textContent = new Date().getFullYear();
