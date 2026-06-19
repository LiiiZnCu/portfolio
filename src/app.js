import { projects } from "./projects.js";

const projectList = document.querySelector("[data-project-list]");
const emptyState = document.querySelector("[data-empty]");
const filterButtons = [...document.querySelectorAll("[data-filter]")];
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");

function arrowIcon() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  `;
}

function createMedia(project) {
  if (!project.media) return "";
  return `
    <figure class="project__media">
      <video
        muted
        loop
        playsinline
        preload="metadata"
        poster="${project.media.poster}"
        aria-label="${project.media.label}"
      >
        <source src="${project.media.src}" type="video/mp4" />
      </video>
      <button class="media-toggle" type="button" aria-label="播放项目过程视频">
        <span>播放过程</span>
      </button>
    </figure>
  `;
}

function createLabels(project) {
  return `
    <div class="project__labels project__labels--${project.accent}">
      ${project.labels.map((label) => `<span>${label}</span>`).join("")}
    </div>
  `;
}

function createProject(project) {
  return `
    <article
      class="project project--${project.tone} ${project.media ? "project--has-media" : ""}"
      data-category="${project.category}"
    >
      <div class="project__number">${project.number}</div>
      <div class="project__content">
        <p class="project__category">${project.category}</p>
        <h3>${project.title}</h3>
        <p class="project__subtitle">${project.subtitle}</p>
        <p class="project__description">${project.description}</p>
        <span class="project__action" aria-label="${project.title}案例正在整理">
          <span>案例整理中</span>
          ${arrowIcon()}
        </span>
      </div>
      ${project.media ? createMedia(project) : createLabels(project)}
    </article>
  `;
}

function bindVideoControls() {
  document.querySelectorAll(".project__media").forEach((media) => {
    const video = media.querySelector("video");
    const button = media.querySelector(".media-toggle");

    button.addEventListener("click", async () => {
      if (video.paused) {
        await video.play();
        media.classList.add("is-playing");
        button.setAttribute("aria-label", "暂停项目过程视频");
        button.querySelector("span").textContent = "暂停过程";
      } else {
        video.pause();
        media.classList.remove("is-playing");
        button.setAttribute("aria-label", "播放项目过程视频");
        button.querySelector("span").textContent = "播放过程";
      }
    });
  });
}

function renderProjects(filter = "全部") {
  const visibleProjects =
    filter === "全部"
      ? projects
      : projects.filter((project) => project.category === filter);

  projectList.innerHTML = visibleProjects.map(createProject).join("");
  emptyState.hidden = visibleProjects.length > 0;
  bindVideoControls();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderProjects(button.dataset.filter);
  });
});

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "打开导航" : "关闭导航");
  nav.classList.toggle("is-open", !isOpen);
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "打开导航");
    nav.classList.remove("is-open");
  }
});

document.querySelector("[data-year]").textContent = new Date().getFullYear();
renderProjects();
