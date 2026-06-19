import { projects } from "./projects.js";

const projectList = document.querySelector("[data-project-list]");
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");

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
        <span>PLAY PROCESS</span>
      </button>
    </figure>
  `;
}

function createProject(project) {
  const labels = project.labels.map((label) => `<span>${label}</span>`).join("");

  return `
    <article class="project project--${project.size}">
      <div class="project__header">
        <span>${project.number}</span>
        <span>${project.category}</span>
      </div>
      <div class="project__body">
        <div>
          <h3>${project.title}</h3>
          <p class="project__subtitle">${project.subtitle}</p>
        </div>
        <p class="project__description">${project.description}</p>
      </div>
      <div class="project__footer">
        <div class="project__labels">${labels}</div>
        <span class="project__status">CASE STUDY / IN PROGRESS</span>
      </div>
      ${createMedia(project)}
    </article>
  `;
}

function bindVideoControls() {
  document.querySelectorAll(".project__media").forEach((media) => {
    const video = media.querySelector("video");
    const button = media.querySelector(".media-toggle");
    const label = button.querySelector("span");

    button.addEventListener("click", async () => {
      if (video.paused) {
        await video.play();
        media.classList.add("is-playing");
        button.setAttribute("aria-label", "暂停项目过程视频");
        label.textContent = "PAUSE PROCESS";
        return;
      }

      video.pause();
      media.classList.remove("is-playing");
      button.setAttribute("aria-label", "播放项目过程视频");
      label.textContent = "PLAY PROCESS";
    });
  });
}

function renderProjects() {
  projectList.innerHTML = projects.map(createProject).join("");
  bindVideoControls();
}

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
renderProjects();
