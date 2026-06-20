import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { access, readFile } from "node:fs/promises";
import test from "node:test";
import { projects as projectData } from "../src/projects.js";

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
const css = await readFile(new URL("../src/styles.css", import.meta.url), "utf8");
const projects = await readFile(new URL("../src/projects.js", import.meta.url), "utf8");
const app = await readFile(new URL("../src/app.js", import.meta.url), "utf8");
const explorer = await readFile(
  new URL("../src/project-explorer.js", import.meta.url),
  "utf8",
);

test("首屏以个人身份为主标题，PORTFOLIO 只作为站点标识", () => {
  assert.match(html, /<h1[^>]*>\s*黎昕彤\s*<span>Li Xintong<\/span>\s*<\/h1>/);
  assert.doesNotMatch(html, /<h1[^>]*>\s*PORTFOLIO\s*<\/h1>/);
  assert.doesNotMatch(html, /在系统与物件之间|编排叙事/);
  assert.match(html, /黎昕彤/);
  assert.match(html, /Li Xintong/);
  assert.match(html, /广州美术学院/);
  assert.match(html, /智能交互设计/);
  assert.match(html, /用户研究/);
  assert.match(html, /data-profile-details/);
});

test("首页包含项目、关于和联系方式", () => {
  assert.match(html, /id="about"/);
  assert.match(html, /id="projects"/);
  assert.match(html, /id="contact"/);
});

test("首页列出八个真实项目且不使用生成图片", () => {
  assert.match(projects, /SportLoop/);
  assert.match(projects, /VERSA/);
  assert.match(projects, /弧刃/);
  assert.match(projects, /一袭戏服，一种人生/);
  assert.match(projects, /从凝视到亲吻/);
  assert.match(projects, /控制理论与结构原理/);
  assert.match(projects, /生长中的记忆/);
  assert.match(projects, /英美松皮炎湿疹海报/);
  assert.match(projects, /number: "08"/);
  assert.doesNotMatch(html + projects, /generated_images|unsplash|placeholder/i);
  assert.doesNotMatch(html, /没有真实素材|无真实素材/);
});

test("八个项目都使用项目目录中的多张真实素材", async () => {
  assert.equal(projectData.length, 8);

  for (const project of projectData) {
    assert.ok(project.heroMedia?.src, `${project.title} 缺少项目主图`);
    assert.ok(project.summary?.length >= 25, `${project.title} 项目摘要不完整`);
    assert.ok(project.sections?.problem?.length >= 30, `${project.title} 缺少问题说明`);
    assert.ok(project.sections?.process?.length >= 1, `${project.title} 缺少过程节点`);
    assert.ok(project.sections?.solution?.length >= 30, `${project.title} 缺少方案说明`);
    assert.ok(project.sections?.outcome?.length >= 20, `${project.title} 缺少结果说明`);
    assert.ok(Array.isArray(project.gallery), `${project.title} 缺少结果素材列表`);

    const mediaItems = [
      project.heroMedia,
      ...project.sections.process.flatMap((section) =>
        section.media ? [section.media] : [],
      ),
      ...project.gallery,
    ];
    const mediaSources = mediaItems.map((media) => media.src);
    const mediaHashes = [];

    assert.equal(
      new Set(mediaSources).size,
      mediaSources.length,
      `${project.title} 存在重复素材`,
    );

    for (const media of mediaItems) {
      assert.ok(media.src, `${project.title} 有素材缺少地址`);
      const mediaUrl = new URL(`../public${media.src}`, import.meta.url);
      await access(mediaUrl);
      const buffer = await readFile(mediaUrl);
      mediaHashes.push(createHash("sha256").update(buffer).digest("hex"));
    }

    assert.equal(
      new Set(mediaHashes).size,
      mediaHashes.length,
      `${project.title} 存在内容相同的重复素材`,
    );
  }

  assert.doesNotMatch(
    projects,
    /process-board\.webp|argentina\/board-(?:one|two)\.webp|aigc-posters\.webp/,
  );
});

test("项目使用可选择的展厅结构，不连续渲染八张长卡片", () => {
  assert.match(html, /data-project-selector/);
  assert.match(html, /data-project-stage/);
  assert.match(html, /data-project-menu-button/);
  assert.doesNotMatch(app, /projects\.map\(createProject\)/);
  assert.match(explorer, /history\.replaceState/);
  assert.match(explorer, /hashchange/);
  assert.match(explorer, /ArrowDown/);
  assert.match(explorer, /data-previous-project/);
  assert.match(explorer, /data-next-project/);
  assert.match(explorer, /data-media-previous/);
  assert.match(explorer, /data-media-next/);
});

test("空气炸锅和戏曲塔罗都包含真实过程视频", () => {
  const versa = projectData.find((project) => project.title === "VERSA");
  const tarot = projectData.find(
    (project) => project.title === "一袭戏服，一种人生",
  );

  assert.ok(
    [...versa.gallery, ...versa.sections.process.map((item) => item.media)].some(
      (media) => media?.type === "video",
    ),
  );
  assert.ok(
    [...tarot.gallery, ...tarot.sections.process.map((item) => item.media)].some(
      (media) => media?.type === "video",
    ),
  );
});

test("个人照片和项目图片保持彩色", () => {
  assert.doesNotMatch(css, /filter:\s*grayscale/);
});

test("首页使用简历中的公开联系方式，不公开手机号和出生日期", () => {
  assert.match(html, /3414887923@qq\.com/);
  assert.doesNotMatch(html, /15812442807|2006\s*\/\s*01\s*\/\s*23/);
});

test("视觉系统使用真白底和克制的东方暗红点缀", () => {
  assert.match(css, /--paper:\s*#fff(?:fff)?;/);
  assert.match(css, /--ink:/);
  assert.match(css, /--accent:/);
  assert.doesNotMatch(css, /background:\s*var\(--red\)/);
  assert.match(css, /prefers-reduced-motion/);
});

test("页面具备基础可访问性", () => {
  assert.match(html, /href="#main"/);
  assert.match(html, /<main id="main"/);
  assert.match(html, /aria-label="主导航"/);
  assert.match(html, /aria-label="打开导航"/);
});

test("页面声明空图标，避免浏览器请求不存在的 favicon", () => {
  assert.match(html, /rel="icon"\s+href="data:,"/);
});

test("部署在 GitHub Pages 子目录时使用站点基础路径加载媒体", () => {
  assert.doesNotMatch(html, /src="\/media\//);
  assert.match(explorer, /import\.meta\.env\.BASE_URL/);
  assert.match(explorer, /resolveAssetPath/);
});
