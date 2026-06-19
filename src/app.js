import { projects } from "./projects.js";

const projectSelector = document.querySelector("[data-project-selector]");
const projectStage = document.querySelector("[data-project-stage]");
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");

let activeProjectIndex = Math.max(
  0,
  projects.findIndex((project) => location.hash === `#project-${project.id}`),
);
let activeMediaIndex = 0;

function createProjectSelector() {
  projectSelector.innerHTML = projects
    .map(
      (project, index) => `
        <button
          class="project-tab${index === activeProjectIndex ? " is-active" : ""}"
          id="project-tab-${project.id}"
          type="button"
          role="tab"
          aria-selected="${index === activeProjectIndex}"
          aria-controls="project-panel"
          tabindex="${index === activeProjectIndex ? "0" : "-1"}"
          data-project-id="${project.id}"
          data-project-index="${index}"
        >
          <span class="project-tab__number">${project.number}</span>
          <span class="project-tab__copy">
            <strong>${project.title}</strong>
            <small>${project.category}</small>
          </span>
          <span class="project-tab__mark" aria-hidden="true"></span>
        </button>
      `,
    )
    .join("");
}

function createMedia(media, project) {
  if (media.type === "video") {
    return `
      <video
        class="gallery-media"
        controls
        playsinline
        preload="metadata"
        poster="${media.poster ?? project.gallery[0].src}"
        aria-label="${media.alt}"
      >
        <source src="${media.src}" type="video/mp4" />
        你的浏览器暂不支持视频播放。
      </video>
    `;
  }

  return `
    <img
      class="gallery-media"
      src="${media.src}"
      alt="${media.alt}"
      decoding="async"
    />
  `;
}

function createThumbnail(media, project, index) {
  const thumbnail = media.poster ?? media.src;
  const mediaLabel = media.type === "video" ? "视频" : `图片 ${index + 1}`;

  return `
    <button
      class="gallery-thumb${index === activeMediaIndex ? " is-active" : ""}"
      type="button"
      aria-label="查看${mediaLabel}：${media.caption}"
      aria-pressed="${index === activeMediaIndex}"
      data-media-index="${index}"
    >
      <img src="${thumbnail}" alt="" loading="lazy" decoding="async" />
      <span>${String(index + 1).padStart(2, "0")}</span>
      ${media.type === "video" ? '<b aria-hidden="true">PLAY</b>' : ""}
    </button>
  `;
}

function createGallery(project) {
  const media = project.gallery[activeMediaIndex];

  return `
    <div class="project-gallery" data-project-gallery>
      <figure class="gallery-view">
        <div class="gallery-view__media" data-media-view>
          ${createMedia(media, project)}
        </div>
        <figcaption>
          <span data-media-count>${String(activeMediaIndex + 1).padStart(2, "0")} / ${String(project.gallery.length).padStart(2, "0")}</span>
          <span data-media-caption>${media.caption}</span>
        </figcaption>
        <div class="gallery-controls" aria-label="项目素材切换">
          <button type="button" data-gallery-previous aria-label="上一张素材">←</button>
          <button type="button" data-gallery-next aria-label="下一张素材">→</button>
        </div>
      </figure>
      <div class="gallery-thumbs" data-media-thumbnails>
        ${project.gallery
          .map((item, index) => createThumbnail(item, project, index))
          .join("")}
      </div>
    </div>
  `;
}

function renderProject() {
  const project = projects[activeProjectIndex];
  const labels = project.labels.map((label) => `<span>${label}</span>`).join("");
  const highlights = project.highlights
    .map((highlight) => `<li>${highlight}</li>`)
    .join("");

  projectStage.innerHTML = `
    <article
      class="project-panel"
      id="project-panel"
      role="tabpanel"
      aria-labelledby="project-tab-${project.id}"
      tabindex="0"
    >
      <header class="project-panel__header">
        <div>
          <p class="project-kicker">${project.number} / ${project.category}</p>
          <h3>${project.title}</h3>
          <p class="project-subtitle">${project.subtitle}</p>
        </div>
        <div class="project-labels" aria-label="项目标签">${labels}</div>
      </header>

      <div class="project-panel__body">
        <div class="project-story">
          <div class="story-block story-block--lead">
            <span>OVERVIEW</span>
            <p>${project.overview}</p>
          </div>
          <div class="story-block">
            <span>CHALLENGE</span>
            <p>${project.challenge}</p>
          </div>
          <div class="story-block">
            <span>RESPONSE</span>
            <p>${project.response}</p>
          </div>
          <div class="story-block">
            <span>KEY POINTS</span>
            <ul>${highlights}</ul>
          </div>
        </div>

        ${createGallery(project)}
      </div>
    </article>
  `;

  bindGalleryControls();
}

function updateGallery() {
  const project = projects[activeProjectIndex];
  const media = project.gallery[activeMediaIndex];
  const mediaView = projectStage.querySelector("[data-media-view]");
  const count = projectStage.querySelector("[data-media-count]");
  const caption = projectStage.querySelector("[data-media-caption]");

  mediaView.innerHTML = createMedia(media, project);
  count.textContent = `${String(activeMediaIndex + 1).padStart(2, "0")} / ${String(project.gallery.length).padStart(2, "0")}`;
  caption.textContent = media.caption;

  projectStage.querySelectorAll("[data-media-index]").forEach((button) => {
    const isActive = Number(button.dataset.mediaIndex) === activeMediaIndex;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function changeMedia(nextIndex) {
  const mediaCount = projects[activeProjectIndex].gallery.length;
  activeMediaIndex = (nextIndex + mediaCount) % mediaCount;
  updateGallery();
}

function bindGalleryControls() {
  projectStage
    .querySelector("[data-gallery-previous]")
    .addEventListener("click", () => changeMedia(activeMediaIndex - 1));
  projectStage
    .querySelector("[data-gallery-next]")
    .addEventListener("click", () => changeMedia(activeMediaIndex + 1));

  projectStage.querySelectorAll("[data-media-index]").forEach((button) => {
    button.addEventListener("click", () => {
      changeMedia(Number(button.dataset.mediaIndex));
    });
  });
}

function selectProject(index, focusTab = false) {
  activeProjectIndex = index;
  activeMediaIndex = 0;

  projectSelector.querySelectorAll("[role='tab']").forEach((button, tabIndex) => {
    const isActive = tabIndex === activeProjectIndex;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
    button.tabIndex = isActive ? 0 : -1;
  });

  renderProject();
  history.replaceState(null, "", `#project-${projects[index].id}`);

  if (focusTab) {
    projectSelector.querySelectorAll("[role='tab']")[index].focus();
  }
}

projectSelector.addEventListener("click", (event) => {
  const button = event.target.closest("[data-project-index]");
  if (!button) return;
  selectProject(Number(button.dataset.projectIndex));
});

projectSelector.addEventListener("keydown", (event) => {
  if (!["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"].includes(event.key)) {
    return;
  }

  event.preventDefault();
  const direction = ["ArrowDown", "ArrowRight"].includes(event.key) ? 1 : -1;
  const nextIndex = (activeProjectIndex + direction + projects.length) % projects.length;
  selectProject(nextIndex, true);
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
createProjectSelector();
renderProject();
