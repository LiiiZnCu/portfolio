function resolveAssetPath(path = "") {
  if (!path || /^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith("data:")) {
    return path;
  }

  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}

function createTestResults(media, className) {
  const metricRows = media.metrics
    .map(
      (metric) => `
        <div class="test-results__metric">
          <strong>${metric.label}</strong>
          <div class="test-results__values">
            ${metric.values
              .map(
                (value, index) => `
                  <span
                    class="test-results__value"
                    style="--result-value: ${(value / metric.max) * 100}%"
                  >
                    <i aria-hidden="true"></i>
                    <b>${value}${metric.unit}</b>
                    <small>U${media.users[index]}</small>
                  </span>
                `,
              )
              .join("")}
          </div>
        </div>
      `,
    )
    .join("");

  return `
    <div
      class="${className} test-results"
      role="img"
      aria-label="${media.alt}"
      data-test-results
    >
      <header class="test-results__header">
        <span>USABILITY TEST / 05 USERS</span>
        <div>
          <strong>${media.highlight.value}</strong>
          <p>${media.highlight.label}</p>
        </div>
      </header>
      <div class="test-results__metrics">
        ${metricRows}
      </div>
    </div>
  `;
}

function createMedia(media, className = "") {
  if (media.type === "test-results") {
    return createTestResults(media, className);
  }

  if (media.type === "video") {
    return `
      <video
        class="${className}"
        controls
        playsinline
        preload="metadata"
        poster="${resolveAssetPath(media.poster)}"
        aria-label="${media.alt}"
      >
        <source src="${resolveAssetPath(media.src)}" type="video/mp4" />
        你的浏览器暂不支持视频播放。
      </video>
    `;
  }

  return `
    <img
      class="${className}"
      src="${resolveAssetPath(media.src)}"
      alt="${media.alt}"
      loading="eager"
      decoding="async"
    />
  `;
}

function createFigure(media, className = "") {
  const deviceFrame = media.deviceFrame
    ? ` data-device-frame="${media.deviceFrame}"`
    : "";

  return `
    <figure class="project-figure ${className}">
      <div class="project-figure__media"${deviceFrame}>
        ${createMedia(media, "project-media")}
      </div>
      <figcaption>${media.caption}</figcaption>
    </figure>
  `;
}

function createProjectTab(project, index, activeIndex) {
  return `
    <button
      class="project-tab${index === activeIndex ? " is-active" : ""}"
      id="project-tab-${project.id}"
      type="button"
      role="tab"
      aria-selected="${index === activeIndex}"
      aria-controls="project-panel"
      tabindex="${index === activeIndex ? "0" : "-1"}"
      data-project-index="${index}"
    >
      <span>${project.number}</span>
      <strong>${project.title}</strong>
      <small>${project.category}</small>
    </button>
  `;
}

function createProcessSection(section, index) {
  return `
    <article class="process-block${section.media ? "" : " is-text-only"}">
      <div class="process-block__copy">
        <span>${String(index + 1).padStart(2, "0")} / PROCESS</span>
        <h4>${section.title}</h4>
        <p>${section.text}</p>
      </div>
      ${section.media ? createFigure(section.media, "process-block__figure") : ""}
    </article>
  `;
}

function createMediaViewer(mediaItems, activeMediaIndex) {
  const media = mediaItems[activeMediaIndex];
  const controls =
    mediaItems.length > 1
      ? `
        <nav class="media-pagination" aria-label="当前项目媒体切换">
          <button type="button" data-media-previous aria-label="上一张媒体">←</button>
          <span>
            ${String(activeMediaIndex + 1).padStart(2, "0")}
            /
            ${String(mediaItems.length).padStart(2, "0")}
          </span>
          <button type="button" data-media-next aria-label="下一张媒体">→</button>
        </nav>
      `
      : "";

  return `
    ${createFigure(media, "project-lead__figure")}
    ${controls}
  `;
}

export function mountProjectExplorer({
  projects,
  selector,
  stage,
  menuButton,
  currentLabel,
}) {
  let activeIndex = Math.max(
    0,
    projects.findIndex((project) => location.hash === `#project-${project.id}`),
  );
  let activeMediaIndex = 0;

  function updateSelector() {
    selector.innerHTML = projects
      .map((project, index) => createProjectTab(project, index, activeIndex))
      .join("");
  }

  function renderProject() {
    const project = projects[activeIndex];
    const previous = projects[(activeIndex - 1 + projects.length) % projects.length];
    const next = projects[(activeIndex + 1) % projects.length];
    const mediaItems = [project.heroMedia, ...project.gallery];

    stage.innerHTML = `
      <article
        class="project-panel"
        id="project-panel"
        role="tabpanel"
        aria-labelledby="project-tab-${project.id}"
        tabindex="0"
      >
        <div class="project-lead">
          <div class="project-media-viewer" data-media-viewer>
            ${createMediaViewer(mediaItems, activeMediaIndex)}
          </div>

          <aside class="project-aside">
            <p class="project-kicker">${project.number} / ${project.category}</p>
            <h3>${project.title}</h3>
            <p class="project-subtitle">${project.subtitle}</p>
            <p class="project-summary">${project.summary}</p>
            <ul class="project-facts">
              ${project.facts.map((fact) => `<li>${fact}</li>`).join("")}
            </ul>
          </aside>
        </div>

        <section class="project-narrative">
          <div class="narrative-copy">
            <p class="project-kicker">01 / PROBLEM</p>
            <h4>问题与目标</h4>
            <p>${project.sections.problem}</p>
          </div>

          <div class="project-process">
            ${project.sections.process.map(createProcessSection).join("")}
          </div>

          <div class="solution-grid">
            <div class="narrative-copy">
              <p class="project-kicker">03 / SOLUTION</p>
              <h4>设计方案</h4>
              <p>${project.sections.solution}</p>
            </div>
            <div class="narrative-copy">
              <p class="project-kicker">04 / OUTCOME</p>
              <h4>完成结果</h4>
              <p>${project.sections.outcome}</p>
            </div>
          </div>

        </section>

        <nav class="project-pagination" aria-label="项目切换">
          <button type="button" data-previous-project>
            <span>← PREVIOUS</span>
            <strong>${previous.title}</strong>
          </button>
          <button type="button" data-next-project>
            <span>NEXT →</span>
            <strong>${next.title}</strong>
          </button>
        </nav>
      </article>
    `;

    currentLabel.textContent = `${project.number} / ${project.title}`;

    function updateMedia(index) {
      activeMediaIndex = (index + mediaItems.length) % mediaItems.length;
      const viewer = stage.querySelector("[data-media-viewer]");
      viewer.innerHTML = createMediaViewer(mediaItems, activeMediaIndex);
      bindMediaControls();
    }

    function bindMediaControls() {
      stage
        .querySelector("[data-media-previous]")
        ?.addEventListener("click", () => updateMedia(activeMediaIndex - 1));
      stage
        .querySelector("[data-media-next]")
        ?.addEventListener("click", () => updateMedia(activeMediaIndex + 1));
    }

    bindMediaControls();

    stage
      .querySelector("[data-previous-project]")
      .addEventListener("click", () => selectProject(activeIndex - 1));
    stage
      .querySelector("[data-next-project]")
      .addEventListener("click", () => selectProject(activeIndex + 1));
  }

  function selectProject(index, focusTab = false, updateUrl = true) {
    const nextIndex = (index + projects.length) % projects.length;
    if (nextIndex === activeIndex && stage.children.length) {
      closeMobileMenu();
      return;
    }

    stage.classList.add("is-transitioning");

    window.setTimeout(() => {
      activeIndex = nextIndex;
      activeMediaIndex = 0;
      updateSelector();
      renderProject();
      stage.classList.remove("is-transitioning");
      closeMobileMenu();

      if (updateUrl) {
        history.replaceState(null, "", `#project-${projects[activeIndex].id}`);
      }

      if (focusTab) {
        selector
          .querySelector(`[data-project-index="${activeIndex}"]`)
          ?.focus();
      }
    }, 160);
  }

  function closeMobileMenu() {
    menuButton.setAttribute("aria-expanded", "false");
    selector.classList.remove("is-open");
  }

  selector.addEventListener("click", (event) => {
    const button = event.target.closest("[data-project-index]");
    if (!button) return;
    selectProject(Number(button.dataset.projectIndex));
  });

  selector.addEventListener("keydown", (event) => {
    if (!["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"].includes(event.key)) {
      return;
    }

    event.preventDefault();
    const direction = ["ArrowDown", "ArrowRight"].includes(event.key) ? 1 : -1;
    selectProject(activeIndex + direction, true);
  });

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    selector.classList.toggle("is-open", !isOpen);
  });

  window.addEventListener("hashchange", () => {
    const hashIndex = projects.findIndex(
      (project) => location.hash === `#project-${project.id}`,
    );
    if (hashIndex >= 0 && hashIndex !== activeIndex) {
      selectProject(hashIndex, false, false);
    }
  });

  updateSelector();
  renderProject();
}
