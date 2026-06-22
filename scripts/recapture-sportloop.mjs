import { mkdtempSync, mkdirSync, rmSync } from "node:fs";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const sharp = require("sharp");

const root = resolve(import.meta.dirname, "..");
const output = join(root, "public/media/projects/sportloop");
const interactions = join(output, "interactions");
const work = mkdtempSync(join(tmpdir(), "sportloop-capture-"));
const chrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const source = "https://liiizncu.github.io/SportLoop/";

mkdirSync(interactions, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  executablePath: chrome,
});
const page = await browser.newPage({
  viewport: { width: 440, height: 956 },
  deviceScaleFactor: 1,
  reducedMotion: "no-preference",
});

await page.goto(source, { waitUntil: "domcontentloaded", timeout: 30_000 });
await page.waitForTimeout(800);
// 原站使用 env(safe-area-inset-top)，桌面 Chrome 中该值为 0。
// 截图时补入 iPhone 顶部安全区，避免作品集设备框的灵动岛遮挡页面标题。
await page.addStyleTag({
  content: ".app { padding-top: 65px !important; }",
});

async function prepareStudent(route, selectedId = "") {
  await page.evaluate(
    ({ nextRoute, nextSelectedId }) => {
      state.loggedIn = true;
      state.loginRole = "student";
      state.isAdmin = false;
      state.route = nextRoute;
      state.selectedId = nextSelectedId;
      state.renderedRoute = "";
      store = clone(seed);
      store.profile = emptyRemoteProfile();
      render();
    },
    { nextRoute: route, nextSelectedId: selectedId },
  );
  await page.waitForTimeout(300);
}

async function prepareAdmin(route = "admin") {
  await page.evaluate((nextRoute) => {
    state.loggedIn = true;
    state.loginRole = "admin";
    state.isAdmin = true;
    state.route = nextRoute;
    state.renderedRoute = "";
    store = clone(seed);
    render();
  }, route);
  await page.waitForTimeout(300);
}

async function waitForLoadedImages(requiredSelector = "") {
  await page.waitForFunction(
    (selector) => {
      const visibleImages = [...document.querySelectorAll("img")].filter((image) => {
        const rect = image.getBoundingClientRect();
        return (
          rect.width > 0 &&
          rect.height > 0 &&
          rect.bottom > 0 &&
          rect.top < window.innerHeight
        );
      });
      const required = selector ? document.querySelector(selector) : null;
      return (
        (!selector ||
          (required instanceof HTMLImageElement &&
            required.complete &&
            required.naturalWidth > 0)) &&
        visibleImages.every((image) => image.complete && image.naturalWidth > 0)
      );
    },
    requiredSelector,
    { timeout: 10_000 },
  );
}

async function captureStatic(path, prepare, requiredSelector = "") {
  await prepare();
  await waitForLoadedImages(requiredSelector);
  const png = join(work, `${path.split("/").at(-1)}.png`);
  await page.screenshot({ path: png });
  await sharp(png).webp({ quality: 82 }).toFile(path);
}

async function recordInteraction(name, prepare, targetSelector) {
  const framesDir = join(work, name);
  mkdirSync(framesDir, { recursive: true });
  await prepare();

  let frame = 0;
  const capture = async () => {
    await page.screenshot({
      path: join(framesDir, `frame-${String(frame).padStart(3, "0")}.png`),
    });
    frame += 1;
  };

  for (let index = 0; index < 4; index += 1) await capture();

  const target = page.locator(targetSelector);
  if ((await target.count()) !== 1) {
    throw new Error(`${name} 的目标不唯一：${targetSelector}`);
  }
  await target.click();

  for (let index = 0; index < 8; index += 1) {
    await capture();
    await page.waitForTimeout(35);
  }
  for (let index = 0; index < 8; index += 1) await capture();

  const framePaths = Array.from({ length: frame }, (_, index) =>
    join(framesDir, `frame-${String(index).padStart(3, "0")}.png`),
  );
  const tallHeight = 956 * framePaths.length;
  const tallBuffer = await sharp({
    create: {
      width: 440,
      height: tallHeight,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .composite(
      framePaths.map((input, index) => ({
        input,
        left: 0,
        top: index * 956,
      })),
    )
    .raw()
    .toBuffer();

  await sharp(tallBuffer, {
    raw: {
      width: 440,
      height: tallHeight,
      channels: 4,
      pageHeight: 956,
    },
  })
    .webp({
      quality: 78,
      effort: 4,
      loop: 0,
      delay: Array(framePaths.length).fill(83),
    })
    .toFile(join(interactions, `${name}.webp`));
}

async function recordAdminFanSwitch() {
  const name = "admin-fan-switch";
  const framesDir = join(work, name);
  mkdirSync(framesDir, { recursive: true });
  await prepareAdmin("admin");

  let frame = 0;
  const capture = async () => {
    await page.screenshot({
      path: join(framesDir, `frame-${String(frame).padStart(3, "0")}.png`),
    });
    frame += 1;
  };

  for (let index = 0; index < 4; index += 1) await capture();

  const stage = page.locator("[data-admin-fan-stage]");
  if ((await stage.count()) !== 1) {
    throw new Error("管理员扇形菜单不唯一");
  }
  const box = await stage.boundingBox();
  if (!box) throw new Error("管理员扇形菜单不可见");

  const startX = box.x + box.width * 0.68;
  const endX = box.x + box.width * 0.28;
  const y = box.y + box.height * 0.58;
  await page.mouse.move(startX, y);
  await page.mouse.down();
  for (let index = 1; index <= 10; index += 1) {
    const x = startX + ((endX - startX) * index) / 10;
    await page.mouse.move(x, y);
    await capture();
    await page.waitForTimeout(28);
  }
  await page.mouse.up();
  for (let index = 0; index < 8; index += 1) {
    await capture();
    await page.waitForTimeout(35);
  }
  for (let index = 0; index < 8; index += 1) await capture();

  const framePaths = Array.from({ length: frame }, (_, index) =>
    join(framesDir, `frame-${String(index).padStart(3, "0")}.png`),
  );
  const tallHeight = 956 * framePaths.length;
  const tallBuffer = await sharp({
    create: {
      width: 440,
      height: tallHeight,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .composite(
      framePaths.map((input, index) => ({
        input,
        left: 0,
        top: index * 956,
      })),
    )
    .raw()
    .toBuffer();

  await sharp(tallBuffer, {
    raw: {
      width: 440,
      height: tallHeight,
      channels: 4,
      pageHeight: 956,
    },
  })
    .webp({
      quality: 78,
      effort: 4,
      loop: 0,
      delay: Array(framePaths.length).fill(83),
    })
    .toFile(join(interactions, `${name}.webp`));
}

await captureStatic(join(output, "student-home.webp"), () =>
  prepareStudent("home"),
);
await captureStatic(join(output, "equipment-detail.webp"), () =>
  prepareStudent("detail", "paddle-red"),
);
await captureStatic(join(output, "admin-dashboard.webp"), () =>
  prepareAdmin("admin"),
);
await captureStatic(join(output, "profile.webp"), () =>
  prepareStudent("profile"),
  ".profile-folder-img",
);

await recordInteraction(
  "page-transition",
  () => prepareStudent("home"),
  'button.primary-button[data-route="list"]',
);
await recordAdminFanSwitch();
await recordInteraction(
  "admin-page-switch",
  () => prepareAdmin("admin"),
  'button[data-admin-route="adminEquipment"][data-admin-fan-index="0"]',
);
await recordInteraction(
  "period-select",
  () => prepareStudent("detail", "paddle-red"),
  "button.duration-option:nth-of-type(2)",
);
await recordInteraction(
  "equipment-filter",
  () => prepareStudent("list"),
  'button[data-category="篮球"]',
);

await browser.close();
rmSync(work, { recursive: true, force: true });

console.log("SportLoop 最新界面已重新截取。");
