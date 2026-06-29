import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { access, readFile } from "node:fs/promises";
import test from "node:test";
import { mediaDimensions } from "../src/media-dimensions.js";
import { projects as projectData } from "../src/projects.js";

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
const css = await readFile(new URL("../src/styles.css", import.meta.url), "utf8");
const projects = await readFile(new URL("../src/projects.js", import.meta.url), "utf8");
const app = await readFile(new URL("../src/app.js", import.meta.url), "utf8");
const explorer = await readFile(
  new URL("../src/project-explorer.js", import.meta.url),
  "utf8",
);
const viteConfig = await readFile(
  new URL("../vite.config.js", import.meta.url),
  "utf8",
);
const sportloopCapture = await readFile(
  new URL("../scripts/recapture-sportloop.mjs", import.meta.url),
  "utf8",
);

function readWebpSize(buffer) {
  const chunkType = buffer.subarray(12, 16).toString("ascii");

  if (chunkType === "VP8X") {
    return {
      width: buffer.readUIntLE(24, 3) + 1,
      height: buffer.readUIntLE(27, 3) + 1,
    };
  }

  if (chunkType === "VP8 ") {
    return {
      width: buffer.readUInt16LE(26) & 0x3fff,
      height: buffer.readUInt16LE(28) & 0x3fff,
    };
  }

  throw new Error(`不支持的 WebP 类型：${chunkType}`);
}

function readAnimatedWebpMetadata(buffer) {
  const durations = [];
  let loop = null;
  let offset = 12;

  while (offset + 8 <= buffer.length) {
    const type = buffer.subarray(offset, offset + 4).toString("ascii");
    const size = buffer.readUInt32LE(offset + 4);
    if (type === "ANIM" && offset + 14 <= buffer.length) {
      loop = buffer.readUInt16LE(offset + 12);
    }
    if (type === "ANMF" && offset + 23 <= buffer.length) {
      durations.push(buffer.readUIntLE(offset + 20, 3));
    }
    offset += 8 + size + (size % 2);
  }

  return { durations, loop };
}

function readMp4VideoSize(buffer) {
  const videoEntries = [];

  function readBoxes(start = 0, end = buffer.length) {
    const boxes = [];
    let offset = start;

    while (offset + 8 <= end) {
      let size = buffer.readUInt32BE(offset);
      const type = buffer.subarray(offset + 4, offset + 8).toString("ascii");
      let headerSize = 8;

      if (size === 1) {
        size = Number(buffer.readBigUInt64BE(offset + 8));
        headerSize = 16;
      }

      if (size === 0) {
        size = end - offset;
      }

      if (size < headerSize || offset + size > end) break;

      boxes.push({
        type,
        content: offset + headerSize,
        end: offset + size,
      });
      offset += size;
    }

    return boxes;
  }

  function walk(start = 0, end = buffer.length) {
    for (const box of readBoxes(start, end)) {
      if (box.type === "stsd") {
        const entryCount = buffer.readUInt32BE(box.content + 4);
        let entryOffset = box.content + 8;

        for (let index = 0; index < entryCount; index += 1) {
          const entrySize = buffer.readUInt32BE(entryOffset);
          const entryType = buffer
            .subarray(entryOffset + 4, entryOffset + 8)
            .toString("ascii");

          if (["avc1", "hvc1", "hev1", "mp4v"].includes(entryType)) {
            videoEntries.push({
              width: buffer.readUInt16BE(entryOffset + 32),
              height: buffer.readUInt16BE(entryOffset + 34),
            });
          }

          entryOffset += entrySize;
        }
      }

      if (["moov", "trak", "mdia", "minf", "stbl"].includes(box.type)) {
        walk(box.content, box.end);
      }
    }
  }

  walk();

  if (videoEntries.length !== 1) {
    throw new Error(`无法确定 MP4 视频尺寸：${videoEntries.length} 条视频轨`);
  }

  return videoEntries[0];
}

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
  assert.match(html, /PROFILE DETAILS/);
  assert.doesNotMatch(html, /<details|<summary|展开个人档案/);
});

test("首页包含项目、关于和联系方式", () => {
  assert.match(html, /id="about"/);
  assert.match(html, /id="projects"/);
  assert.match(html, /id="contact"/);
});

test("首页定位文案自然，个人档案按内容自适应换行", () => {
  assert.match(html, /<p class="hero__role">\s*智能交互设计\s*<\/p>/);
  assert.match(html, /关注视觉设计、交互体验与 AI\s+辅助创作/);
  assert.doesNotMatch(html, /产品与交互设计学生。/);
  assert.match(
    css,
    /\.profile-details__grid\s*\{[^}]*repeat\(\s*auto-fit,\s*minmax\(\s*min\(100%,\s*16rem\),\s*1fr\s*\)\s*\)/s,
  );
  assert.match(
    css,
    /\.profile-details__heading span\s*\{[^}]*white-space:\s*nowrap;/s,
  );
  assert.match(
    css,
    /\.profile-facts dd,[\s\S]*?\.profile-details__grid p\s*\{[^}]*word-break:\s*keep-all;/s,
  );
  assert.match(
    css,
    /\.test-results__header p\s*\{[^}]*text-wrap:\s*pretty;/s,
  );
  assert.match(
    css,
    /\.narrative-copy h4,[\s\S]*?\.process-block__copy h4\s*\{[^}]*text-wrap:\s*balance;/s,
  );
});

test("项目区不显示多余的阅读说明", () => {
  assert.doesNotMatch(
    html,
    /8 个跨媒介项目。选择项目，按问题、过程、方案与产出查看。/,
  );
});

test("首页列出八个真实项目且不使用生成图片", () => {
  assert.match(projects, /SportLoop/);
  assert.match(projects, /VERSA/);
  assert.match(projects, /弧刃/);
  assert.match(projects, /一袭戏服，一种人生/);
  assert.match(projects, /从凝视到亲吻/);
  assert.match(projects, /轨迹与攀爬/);
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
    assert.ok(
      project.facts.every((fact) => fact.label && fact.value),
      `${project.title} 缺少清晰的项目范围、方法或产出标签`,
    );
    assert.ok(Array.isArray(project.gallery), `${project.title} 缺少结果素材列表`);

    const mediaItems = [
      project.heroMedia,
      ...project.sections.process.flatMap((section) =>
        section.media ? [section.media] : [],
      ),
      ...project.gallery,
    ];
    const fileMediaItems = mediaItems.filter((media) => media.src);
    const mediaSources = fileMediaItems.map((media) => media.src);
    const mediaHashes = [];

    assert.ok(
      mediaItems.every((media) => media.src || media.type === "test-results"),
      `${project.title} 有无法识别的媒体`,
    );
    assert.equal(
      new Set(mediaSources).size,
      mediaSources.length,
      `${project.title} 存在重复素材`,
    );

    for (const media of fileMediaItems) {
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
  assert.match(explorer, /project-tab__number/);
  assert.match(explorer, /project-tab__body/);
  assert.match(
    css,
    /\.project-tab\s*\{[^}]*grid-template-columns:\s*3rem\s*minmax\(0,\s*1fr\)\s*auto;/s,
  );
  assert.match(
    css,
    /@media \(max-width: 1180px\)[\s\S]*?\.project-selector\s*\{[^}]*display:\s*flex;[\s\S]*?overflow-x:\s*auto;/s,
  );
  assert.doesNotMatch(
    css,
    /grid-template-columns:\s*repeat\(4,\s*minmax\(0,\s*1fr\)\)/,
  );
});

test("项目首屏在手机先介绍后媒体，iPad 保持双栏展示", () => {
  assert.match(
    explorer,
    /<div class="project-lead">\s*<aside class="project-aside">[\s\S]*?<\/aside>\s*<div class="project-media-viewer"/,
  );
  assert.match(
    css,
    /\.project-media-viewer\s*\{[^}]*grid-column:\s*1;[^}]*grid-row:\s*1;/s,
  );
  assert.match(
    css,
    /\.project-aside\s*\{[^}]*grid-column:\s*2;[^}]*grid-row:\s*1;/s,
  );
  assert.doesNotMatch(
    css,
    /@media \(max-width: 1180px\)[\s\S]*?\.project-lead\s*\{[^}]*grid-template-columns:\s*1fr;/,
  );
  assert.match(
    css,
    /@media \(max-width: 760px\)[\s\S]*?\.project-lead\s*\{[^}]*flex-direction:\s*column;/,
  );
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

test("重点过程视频保留真实视频并控制体积", async () => {
  const videoSources = projectData.flatMap((project) => [
    ...project.gallery.filter((media) => media.type === "video").map((media) => media.src),
    ...project.sections.process
      .map((item) => item.media)
      .filter((media) => media?.type === "video")
      .map((media) => media.src),
  ]);
  const expectedVideos = [
    {
      src: "/media/tarot-process.mp4",
      size: { width: 480, height: 360 },
      maxBytes: 5 * 1024 * 1024,
    },
    {
      src: "/media/projects/mechanical/track-run.mp4",
      size: { width: 640, height: 364 },
      maxBytes: 10 * 1024 * 1024,
    },
  ];

  for (const video of expectedVideos) {
    assert.ok(videoSources.includes(video.src), `${video.src} 未被项目引用`);
    assert.deepEqual(mediaDimensions[video.src], video.size);

    const buffer = await readFile(new URL(`../public${video.src}`, import.meta.url));
    assert.deepEqual(readMp4VideoSize(buffer), video.size);
    assert.ok(
      buffer.byteLength <= video.maxBytes,
      `${video.src} 仍然过大：${buffer.byteLength} bytes`,
    );
  }
});

test("所有会渲染的媒体都有真实尺寸记录", async () => {
  const mediaItems = projectData.flatMap((project) => [
    project.heroMedia,
    ...(project.subprojects ?? []).map((item) => item.media),
    ...project.gallery,
    ...project.sections.process.map((item) => item.media),
  ]);

  for (const media of mediaItems.filter((item) => item?.src)) {
    const expectedSize = mediaDimensions[media.src];
    assert.ok(expectedSize, `${media.src} 缺少尺寸记录`);

    const buffer = await readFile(new URL(`../public${media.src}`, import.meta.url));
    if (media.type === "video") {
      assert.deepEqual(readMp4VideoSize(buffer), expectedSize);
    } else if (media.src.endsWith(".webp")) {
      assert.deepEqual(readWebpSize(buffer), expectedSize);
    }
  }
});

test("视频使用自身尺寸预留空间，不借用封面尺寸", () => {
  assert.doesNotMatch(
    explorer,
    /media\.type === "video"\s*\?\s*media\.poster\s*:\s*media\.src/,
  );
  assert.match(explorer, /mediaDimensions\[media\.src\]/);
});

test("个人照片和项目图片保持彩色", () => {
  assert.doesNotMatch(css, /filter:\s*grayscale/);
});

test("首页使用更新后的竖版个人照片", async () => {
  assert.match(
    html,
    /src="\.\/media\/projects\/portrait\.webp"[\s\S]*?width="900"[\s\S]*?height="1350"/,
  );

  const portrait = await readFile(
    new URL("../public/media/projects/portrait.webp", import.meta.url),
  );
  assert.deepEqual(readWebpSize(portrait), { width: 900, height: 1350 });
});

test("首页使用简历中的公开联系方式，不公开出生日期", () => {
  assert.match(html, /3414887923@qq\.com/);
  assert.match(html, /158\s*1244\s*2807/);
  assert.match(html, /tel:15812442807/);
  assert.doesNotMatch(html, /2006\s*\/\s*01\s*\/\s*23/);
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

test("项目渲染脚本兼容旧一点的 iPhone 和 iPad Safari", () => {
  const runtimeSource = [app, explorer, projects].join("\n");

  assert.doesNotMatch(runtimeSource, /\?\.|\?\?|\.(?:at)\(/);
  assert.match(viteConfig, /target:\s*"es2019"/);
});

test("项目图片按原始比例自适应，不使用固定比例框或图片边框", () => {
  assert.match(css, /\.project-media\s*\{[^}]*height:\s*auto;/s);
  assert.match(
    css,
    /\.project-media\s*\{[^}]*max-height:\s*calc\(100dvh - 12rem\);/s,
  );
  assert.match(css, /\.project-media\s*\{[^}]*object-fit:\s*contain;/s);
  assert.doesNotMatch(
    css,
    /\.project-lead \.project-media\s*\{[^}]*max-height:\s*calc\(100dvh - 26rem\);/s,
  );
  assert.match(
    css,
    /@media \(max-width: 760px\)[\s\S]*?\.project-media\s*\{[^}]*max-height:\s*62dvh;/,
  );
  assert.match(
    css,
    /@media \(max-width: 760px\)[\s\S]*?\.project-lead \.project-media\s*\{[^}]*max-height:\s*48dvh;/,
  );
  assert.match(
    css,
    /\.project-figure__media\s*\{[^}]*background:\s*transparent;/s,
  );
  assert.doesNotMatch(css, /\.project-figure__media\[data-ratio=/);
  assert.equal((css.match(/aspect-ratio:/g) ?? []).length, 1);
  assert.doesNotMatch(css, /\.project-figure figcaption\s*\{[^}]*border-top:/s);
});

test("项目首图优先加载，其余媒体延后加载并预留准确尺寸", () => {
  assert.match(explorer, /fetchpriority="\$\{isPriority \? "high" : "auto"\}"/);
  assert.match(explorer, /loading="\$\{isPriority \? "eager" : "lazy"\}"/);
  assert.match(explorer, /preload="none"/);
  assert.match(explorer, /decoding="\$\{isPriority \? "sync" : "async"\}"/);
  assert.match(explorer, /width="\$\{dimensions\.width\}"/);
  assert.match(explorer, /height="\$\{dimensions\.height\}"/);
  assert.match(explorer, /createFigure\(media,\s*"project-lead__figure",\s*true\)/);
  assert.doesNotMatch(explorer, /new Image\(\)|preloadRelatedMedia/);
});

test("过程媒体加载前按原始比例预留可见空间", () => {
  assert.match(explorer, /const intrinsicStyle =/);
  assert.match(explorer, /class="\$\{className\}\$\{isPriority \? "" : " is-deferred"\}"/);
  assert.match(
    explorer,
    /width:min\(100%, \$\{dimensions\.width\}px\); aspect-ratio:\$\{dimensions\.width\}\/\$\{dimensions\.height\}/,
  );
  assert.match(explorer, /<div class="project-figure__media"\$\{intrinsicStyle\}/);
  assert.match(css, /\.project-media\.is-deferred\s*\{[^}]*width:\s*100%;/s);
});

test("主要项目补齐不重复的成果媒体", () => {
  const expectedMediaCounts = new Map([
    ["SportLoop", 9],
    ["VERSA", 9],
    ["一袭戏服，一种人生", 4],
    ["轨迹与攀爬", 5],
  ]);

  for (const [title, expectedCount] of expectedMediaCounts) {
    const project = projectData.find((item) => item.title === title);
    assert.equal(
      1 + project.gallery.length,
      expectedCount,
      `${title} 成果媒体不完整`,
    );
  }

  assert.doesNotMatch(
    projects,
    /src:\s*"\/media\/projects\/(?:sportloop|versa)\.webp"/,
  );
});

test("机械项目改为作品集风格的独立过程图", async () => {
  const mechanical = projectData.find((item) => item.id === "mechanical");

  assert.equal(mechanical.title, "轨迹与攀爬");
  assert.doesNotMatch(projects, /控制理论与结构原理/);
  assert.equal(mechanical.heroMedia.src, "/media/projects/mechanical.webp");
  assert.match(mechanical.heroMedia.alt, /三叶轮爬楼机器人/);
  assert.match(mechanical.heroMedia.caption, /真实台阶/);

  const heroBuffer = await readFile(
    new URL("../public/media/projects/mechanical.webp", import.meta.url),
  );
  assert.deepEqual(readWebpSize(heroBuffer), { width: 1600, height: 1100 });
  assert.notEqual(
    createHash("sha256").update(heroBuffer).digest("hex"),
    "239d668f4811daf064e553622a24004e20afee254a9030e481676de7039e772a",
  );

  const processMedia = mechanical.sections.process.map(
    (section) =>
      section.media.type === "video"
        ? `${section.media.src}|${section.media.poster}`
        : section.media.src,
  );
  assert.deepEqual(processMedia, [
    "/media/projects/mechanical/design-sketch.webp",
    "/media/projects/mechanical/track-run.mp4|/media/projects/mechanical/track-run-poster.webp",
    "/media/projects/mechanical/robot-structure.webp",
    "/media/projects/mechanical/robot-on-stairs.webp",
  ]);

  const expectedSizes = new Map([
    ["/media/projects/mechanical/design-sketch.webp", { width: 2200, height: 1050 }],
    ["/media/projects/mechanical/track-run-poster.webp", { width: 960, height: 544 }],
    ["/media/projects/mechanical/robot-structure.webp", { width: 2200, height: 1100 }],
  ]);

  for (const [src, expectedSize] of expectedSizes) {
    const imageBuffer = await readFile(new URL(`../public${src}`, import.meta.url));
    assert.deepEqual(readWebpSize(imageBuffer), expectedSize);
  }
});

test("机械项目突出机械结构和运行验证", () => {
  const mechanical = projectData.find((item) => item.id === "mechanical");

  assert.match(mechanical.summary, /机械结构/);
  assert.match(mechanical.sections.problem, /机械结构/);
  assert.match(mechanical.sections.solution, /机构联动/);

  const trackRun = mechanical.sections.process.find(
    (section) => section.title === "用实测视频验证机构联动",
  );
  assert.equal(trackRun.media.type, "video");
  assert.equal(trackRun.media.src, "/media/projects/mechanical/track-run.mp4");
  assert.equal(trackRun.media.poster, "/media/projects/mechanical/track-run-poster.webp");

  assert.deepEqual(mediaDimensions["/media/projects/mechanical/track-detail.webp"], {
    width: 1706,
    height: 1279,
  });
  assert.deepEqual(mediaDimensions["/media/projects/mechanical/gear-detail.webp"], {
    width: 2299,
    height: 1533,
  });
});

test("机械项目按两个小项目分组展示", () => {
  const mechanical = projectData.find((item) => item.id === "mechanical");

  assert.equal(mechanical.heroMedia.src, "/media/projects/mechanical.webp");
  assert.deepEqual(
    mechanical.subprojects.map((item) => item.title),
    ["智能施工物流轨道", "三叶轮爬楼机器人"],
  );

  const phaseCounts = mechanical.sections.process.reduce((counts, section) => {
    counts.set(section.phase, (counts.get(section.phase) ?? 0) + 1);
    return counts;
  }, new Map());

  assert.equal(phaseCounts.get("A / 轨道系统"), 2);
  assert.equal(phaseCounts.get("B / 爬楼机器人"), 2);
  assert.match(explorer, /function createSubprojectOverview/);
  assert.match(explorer, /project\.subprojects/);
  assert.match(css, /\.project-subprojects\s*\{/);
  assert.match(css, /\.subproject-card__copy\s*\{[^}]*align-content:\s*start;/s);
  assert.match(css, /\.subproject-card__copy ul\s*\{[^}]*width:\s*fit-content;/s);
  assert.match(css, /\.subproject-card__copy ul\s*\{[^}]*align-items:\s*flex-start;/s);
});

test("SportLoop 展示从最新网页重新录制的真实交互动效", () => {
  const sportloop = projectData.find((project) => project.title === "SportLoop");
  const interactions = sportloop.gallery.filter((media) =>
    media.src.includes("/sportloop/interactions/"),
  );

  assert.equal(interactions.length, 5);
  assert.match(
    sportloop.sections.process.at(-1).text,
    /5 名用户|26%|51—62 秒|2—4 分/,
  );
});

test("SportLoop 九项媒体与说明文字一一对应", () => {
  const sportloop = projectData.find((project) => project.title === "SportLoop");
  const mediaItems = [sportloop.heroMedia, ...sportloop.gallery];

  assert.deepEqual(
    mediaItems.map(({ src, caption }) => ({ src, caption })),
    [
      {
        src: "/media/projects/sportloop/student-home.webp",
        caption: "学生端首页：借用状态、场馆信息与核心操作入口",
      },
      {
        src: "/media/projects/sportloop/equipment-detail.webp",
        caption: "器材详情：借用规则、时长选择与 NFC 入库状态",
      },
      {
        src: "/media/projects/sportloop/interactions/page-transition.webp",
        caption: "页面切换：首页进入器材列表时保持清楚的空间反馈",
      },
      {
        src: "/media/projects/sportloop/admin-dashboard.webp",
        caption: "管理员工作台：留言、任务、库存与管理功能集中展示",
      },
      {
        src: "/media/projects/sportloop/interactions/admin-fan-switch.webp",
        caption: "管理员扇形菜单：左右滑动切换当前管理模块",
      },
      {
        src: "/media/projects/sportloop/interactions/admin-page-switch.webp",
        caption: "管理端页面切换：从工作台进入器材档案",
      },
      {
        src: "/media/projects/sportloop/interactions/period-select.webp",
        caption: "时长选择：按课程节数更新借用时长",
      },
      {
        src: "/media/projects/sportloop/interactions/equipment-filter.webp",
        caption: "器材筛选：切换类别后直接更新列表内容",
      },
      {
        src: "/media/projects/sportloop/profile.webp",
        caption: "个人档案：借用状态、归还率、快捷操作与提醒",
      },
    ],
  );
});

test("SportLoop 动图包含可见时长，不再导出成瞬间结束的零时长帧", async () => {
  const sportloop = projectData.find((project) => project.title === "SportLoop");
  const interactions = sportloop.gallery.filter((media) =>
    media.src.includes("/sportloop/interactions/"),
  );

  for (const media of interactions) {
    const buffer = await readFile(
      new URL(`../public${media.src}`, import.meta.url),
    );
    const { durations, loop } = readAnimatedWebpMetadata(buffer);
    assert.ok(durations.length >= 2, `${media.src} 动画帧不足`);
    assert.equal(loop, 0, `${media.src} 没有循环播放`);
    assert.ok(
      durations.every((duration) => duration >= 60),
      `${media.src} 存在零时长或过快的动画帧`,
    );
    assert.ok(
      durations.reduce((total, duration) => total + duration, 0) >= 1_500,
      `${media.src} 动画停留时间不足`,
    );
    assert.ok(durations.at(-1) >= 900, `${media.src} 最终状态停留时间不足`);
  }
});

test("SportLoop 截图模拟 iPhone 顶部安全区，灵动岛不遮挡页面标题", () => {
  assert.match(
    sportloopCapture,
    /\.app \{ padding-top: 65px !important; \}/,
  );
});

test("SportLoop 个人页截图前确认档案袋图片真实加载完成", () => {
  assert.match(sportloopCapture, /waitForLoadedImages/);
  assert.match(sportloopCapture, /required\.naturalWidth > 0/);
  assert.match(sportloopCapture, /"\.profile-folder-img"/);
});

test("SportLoop 测试结论配有 PPT 原始数据可视化", () => {
  const sportloop = projectData.find((project) => project.title === "SportLoop");
  const testing = sportloop.sections.process.at(-1).media;

  assert.equal(testing.type, "test-results");
  assert.equal(testing.highlight.value, "26%");
  assert.deepEqual(
    testing.metrics.map((metric) => metric.values),
    [
      [1, 4, 5, 1, 2],
      [58, 52, 61, 62, 51],
      [4, 2, 3, 2, 3],
    ],
  );
  assert.match(explorer, /data-test-results/);
});

test("SportLoop 界面媒体统一使用 iPhone 16 Pro Max 外框", () => {
  const sportloop = projectData.find((project) => project.title === "SportLoop");
  const mediaItems = [sportloop.heroMedia, ...sportloop.gallery];

  assert.equal(mediaItems.length, 9);
  assert.ok(
    mediaItems.every(
      (media) => media.deviceFrame === "iphone-16-pro-max",
    ),
  );
  assert.match(explorer, /data-device-frame/);
  assert.match(
    css,
    /\[data-device-frame="iphone-16-pro-max"\]\s*\{[^}]*aspect-ratio:\s*440\s*\/\s*956;/s,
  );
  assert.match(
    css,
    /\[data-device-frame="iphone-16-pro-max"\]\s*\{[^}]*box-sizing:\s*content-box;/s,
  );
  assert.match(css, /\[data-device-frame="iphone-16-pro-max"\]\s*\{[^}]*border:\s*3px solid/s);
  assert.doesNotMatch(
    css,
    /\[data-device-frame="iphone-16-pro-max"\]\s*\{[^}]*padding:/s,
  );
  assert.match(
    css,
    /\[data-device-frame="iphone-16-pro-max"\][^{]*::after\s*\{/s,
  );
  assert.match(
    css,
    /\[data-device-frame="iphone-16-pro-max"\] \.project-media\s*\{[^}]*object-fit:\s*cover;/s,
  );
});

test("SportLoop 手机媒体文件本身就是 440×956", async () => {
  const sportloop = projectData.find((project) => project.title === "SportLoop");
  const mediaItems = [sportloop.heroMedia, ...sportloop.gallery];

  for (const media of mediaItems) {
    const buffer = await readFile(
      new URL(`../public${media.src}`, import.meta.url),
    );
    assert.deepEqual(readWebpSize(buffer), { width: 440, height: 956 });
  }
});

test("SportLoop 桌面主手机图不再被视口减法压缩", () => {
  assert.doesNotMatch(
    css,
    /\.project-lead[\s\S]*?data-device-frame="iphone-16-pro-max"[\s\S]*?height:\s*min\(calc\(100dvh\s*-\s*26rem\)/,
  );
  assert.match(
    css,
    /\.project-lead[\s\S]*?data-device-frame="iphone-16-pro-max"[\s\S]*?height:\s*clamp\(26rem,\s*68dvh,\s*42rem\)/,
  );
});

test("过程区左右交错时图片始终使用宽列", () => {
  assert.match(
    css,
    /\.process-block\s*\{[^}]*grid-template-columns:\s*minmax\(15rem,\s*0\.42fr\)\s+minmax\(0,\s*1fr\);/s,
  );
  assert.match(
    css,
    /\.process-block:nth-child\(even\)\s*\{[^}]*grid-template-columns:\s*minmax\(0,\s*1fr\)\s+minmax\(15rem,\s*0\.42fr\);/s,
  );
});
