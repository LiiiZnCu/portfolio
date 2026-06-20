# Portfolio Editorial Gallery Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 把现有作品集首页重排为图片优先、过程清楚、可快速切换的编辑式项目展厅。

**Architecture:** 保留 Vite 与原生 HTML/CSS/JavaScript。`projects.js` 提供结构化项目叙事与媒体节点，新的 `project-explorer.js` 专门负责项目目录、项目切换、章节和媒体交互，`app.js` 只处理页面级导航与初始化。项目过程素材从用户原始 PPT/PDF 中提取并裁切为独立 WebP，不直接堆放完整展板。

**Tech Stack:** Vite、原生 HTML、CSS、JavaScript、Node.js 测试、Pillow/PDF/PPT 素材提取。

---

### Task 1: 锁定新版信息结构

**Files:**
- Modify: `tests/homepage.test.js`
- Modify: `index.html`

- [ ] **Step 1: 为个人简介、项目目录和项目章节写失败测试**

在 `tests/homepage.test.js` 增加检查：

```js
test("首屏只保留精简个人身份，PORTFOLIO 不再作为大标题", () => {
  assert.match(html, /智能交互设计学生。/);
  assert.doesNotMatch(html, /<h1[^>]*>\s*PORTFOLIO\s*<\/h1>/);
  assert.match(html, /data-profile-details/);
});

test("项目内容按问题、过程、方案和结果组织", () => {
  for (const project of projectData) {
    assert.ok(project.sections?.problem?.length >= 30);
    assert.ok(project.sections?.process?.length >= 1);
    assert.ok(project.sections?.solution?.length >= 30);
    assert.ok(project.sections?.outcome?.length >= 20);
  }
});

test("手机端具有可展开项目目录", () => {
  assert.match(html, /data-project-menu-button/);
  assert.match(app, /aria-expanded/);
});
```

- [ ] **Step 2: 运行测试并确认失败**

Run:

```bash
PATH=/Users/liiizncu/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:/Users/liiizncu/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin:$PATH pnpm test
```

Expected: 新增 3 项测试失败，旧测试保持通过。

- [ ] **Step 3: 重写首页固定结构**

在 `index.html` 中：

- 将首屏改为姓名、身份、简短介绍、彩色照片和一行核心资料。
- 将工具、经历、语言放入带 `data-profile-details` 的 `<details>`。
- 删除大号 `PORTFOLIO` 区域。
- 项目区增加带 `data-project-menu-button` 的手机项目菜单按钮。
- 项目区保留 `data-project-selector` 与 `data-project-stage` 容器。

- [ ] **Step 4: 运行结构测试**

Expected: 首屏和手机项目菜单测试通过；项目数据章节测试仍失败。

### Task 2: 从 PPT/PDF 提取解释性过程素材

**Files:**
- Create: `public/media/projects/sportloop/research-users.webp`
- Create: `public/media/projects/sportloop/information-architecture.webp`
- Create: `public/media/projects/sportloop/task-flow.webp`
- Create: `public/media/projects/versa/user-journey.webp`
- Create: `public/media/projects/versa/structure-system.webp`
- Create: `public/media/projects/opera-tarot/cultural-mapping.webp`
- Create: `public/media/projects/argentina/information-encoding.webp`
- Create: `public/media/projects/mechanical/design-sketch.webp`

- [ ] **Step 1: 定位原始页面与图片**

从以下来源提取：

```text
/Users/liiizncu/Desktop/作品 2/网页制作设计/前期调研/校园体育器材借用与维护系统.pdf
/Users/liiizncu/Desktop/作品 2/网页制作设计/校园体育器材借用与维护系统(1).pptx
/Users/liiizncu/Desktop/作品 2/空气炸锅优化设计/空气炸锅 4.pdf
/Users/liiizncu/Desktop/作品 2/空气炸锅优化设计/产品结构与制造基础-最终汇报F4.pdf
/Users/liiizncu/Desktop/作品 2/中国戏曲元素塔罗牌/一袭戏服，一种人生 2.pptx
/Users/liiizncu/Desktop/作品 2/信息可视化/展板1-01.jpg
/Users/liiizncu/Desktop/作品 2/机械轨道及爬楼车制作/机械轨道及爬楼车.pdf
```

具体内容：

- SportLoop：三类用户、信息架构、核心任务流程。
- VERSA：用户旅程与上下加热/玻璃内胆结构。
- 戏曲塔罗：大阿卡那、小阿卡那、人物与道具的映射。
- 阿根廷：从展板中裁出信息编码和关系图，不用整张展板替代过程。
- 机械：轨道和爬楼车的设计草图。

- [ ] **Step 2: 裁切和压缩素材**

统一规则：

```text
格式：WebP
最长边：2000px
质量：86
保留原始彩色
不加入新文字或装饰
只裁掉 PPT/PDF 页眉、页脚和无关留白
```

- [ ] **Step 3: 检查素材内容**

逐张确认：

- 没有把完整汇报展板伪装成过程图。
- 没有重复现有成果图。
- 文字在桌面端可辨认。
- 图片归属项目正确。

### Task 3: 将项目数据改为结构化叙事

**Files:**
- Modify: `src/projects.js`
- Test: `tests/homepage.test.js`

- [ ] **Step 1: 为每个项目添加统一字段**

每个项目使用：

```js
{
  id,
  number,
  title,
  subtitle,
  category,
  summary,
  facts: ["类型", "媒介", "关键词"],
  heroMedia,
  sections: {
    problem: "项目问题与目标",
    process: [
      {
        title: "用户研究",
        text: "解释该过程为什么影响后续方案。",
        media: { type: "image", src: "...", alt: "...", caption: "..." }
      }
    ],
    solution: "关键方案与设计决定",
    outcome: "完成内容与最终呈现"
  },
  gallery
}
```

- [ ] **Step 2: 精简重复素材**

执行以下清理：

- SportLoop 删除重复学生首页，只保留研究、流程、学生端和管理端。
- VERSA 删除重复开合角度，保留主图、用户旅程、结构图、材质与视频。
- 弧刃保留 3 张不同目的的图。
- 戏曲塔罗保留文化映射、手绘过程、卡组、包装与视频。
- 阿根廷整张双展板只在结果处出现一次。
- 机械保留草图、轨道、制作、结构和攀爬结果。
- 空间装置保留日间与夜间。
- AIGC 海报保留方法说明和两张最终海报。

- [ ] **Step 3: 运行项目数据测试**

Expected: 8 个项目都通过统一字段、素材存在和过程节点检查。

### Task 4: 拆分并重写项目展厅交互

**Files:**
- Create: `src/project-explorer.js`
- Modify: `src/app.js`
- Modify: `tests/homepage.test.js`

- [ ] **Step 1: 写失败测试**

检查 `project-explorer.js` 包含：

```js
assert.match(explorer, /data-project-menu-button/);
assert.match(explorer, /history\.replaceState/);
assert.match(explorer, /ArrowDown|ArrowRight/);
assert.match(explorer, /data-next-project/);
assert.match(explorer, /data-previous-project/);
```

- [ ] **Step 2: 创建 Project Explorer 模块**

模块职责：

- 渲染桌面项目目录。
- 控制手机项目菜单开合。
- 根据 hash 恢复当前项目。
- 渲染主图、项目事实、问题、过程、方案和结果。
- 切换当前项目并更新 URL。
- 提供上一个/下一个项目按钮。
- 切换图片与视频。
- 项目切换时只添加一次 `is-transitioning` 状态，并在动画后移除。

导出：

```js
export function mountProjectExplorer({
  projects,
  selector,
  stage,
  menuButton,
}) {}
```

- [ ] **Step 3: 精简 app.js**

`app.js` 仅负责：

```js
import { projects } from "./projects.js";
import { mountProjectExplorer } from "./project-explorer.js";

mountProjectExplorer({
  projects,
  selector: document.querySelector("[data-project-selector]"),
  stage: document.querySelector("[data-project-stage]"),
  menuButton: document.querySelector("[data-project-menu-button]"),
});
```

同时保留顶部菜单和年份初始化。

- [ ] **Step 4: 运行交互静态测试**

Expected: 项目切换、深链接、键盘和前后项目测试通过。

### Task 5: 重做编辑式三栏排版

**Files:**
- Modify: `src/styles.css`

- [ ] **Step 1: 删除后台面板感样式**

删除或替换：

- `.project-explorer` 的整块外框。
- 每个故事块的表格式粗分隔。
- 大量标签框。
- 手机上连续横向项目标签。
- 过多等宽小字。

- [ ] **Step 2: 建立桌面三栏**

1440px 结构：

```css
.project-explorer {
  display: grid;
  grid-template-columns: minmax(12rem, 0.25fr) minmax(0, 1.25fr) minmax(16rem, 0.45fr);
  gap: clamp(2rem, 4vw, 5rem);
}
```

- 左栏：项目目录，当前项暗红。
- 中栏：主图和过程图片，占最大宽度。
- 右栏：标题、摘要、事实和项目导航，可在可用高度内保持可见。
- 过程章节在主图下方使用大图 + 窄文字的交错结构。

- [ ] **Step 3: 建立手机项目菜单**

375px 结构：

- 当前项目按钮宽度 100%，高度至少 52px。
- 点击后垂直展开 8 个项目。
- 选择项目后菜单自动关闭。
- 阅读顺序为标题 → 主图 → 摘要 → 过程 → 结果。
- 不使用横向项目滚动条。

- [ ] **Step 4: 添加克制动效**

```css
.project-stage.is-transitioning {
  opacity: 0;
  transform: translateY(0.5rem);
}

.project-stage {
  transition:
    opacity 200ms ease-out,
    transform 200ms ease-out;
}
```

在 reduced-motion 中取消位移。

### Task 6: 浏览器验证与修正

**Files:**
- Modify as needed: `index.html`
- Modify as needed: `src/styles.css`
- Modify as needed: `src/app.js`
- Modify as needed: `src/project-explorer.js`
- Modify as needed: `src/projects.js`

- [ ] **Step 1: 运行自动测试和构建**

Run:

```bash
PATH=/Users/liiizncu/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:/Users/liiizncu/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin:$PATH pnpm test
PATH=/Users/liiizncu/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:/Users/liiizncu/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin:$PATH pnpm build
```

Expected: 全部通过。

- [ ] **Step 2: 检查 1440px**

确认：

- 个人简介先于项目。
- 项目目录、主图和说明层级清楚。
- 图片明显大于文字区域。
- 不存在后台面板感。

- [ ] **Step 3: 检查 768px 和 375px**

确认：

- 手机项目菜单可开合并自动关闭。
- 所有项目都可选。
- 没有横向溢出。
- 视频、图片和长标题不被裁断。

- [ ] **Step 4: 检查全部 8 个项目**

确认：

- 每个项目至少一个过程节点。
- 没有重复图片。
- 展板只在结果处出现。
- VERSA 与戏曲塔罗视频可播放。
- 控制台无错误。

### Task 7: 更新项目记录

**Files:**
- Modify: `README.md`
- Modify: `ARCHITECTURE.md`
- Modify: `CONTEXT.md`
- Modify: `lessons.md`

- [ ] **Step 1: 更新架构与功能**

记录：

- `project-explorer.js` 的职责。
- 项目数据采用结构化叙事。
- PPT/PDF 过程素材的选择原则。
- 手机项目菜单和桌面三栏布局。

- [ ] **Step 2: 最终自检**

Run:

```bash
git diff --check
git status --short
```

Expected: 无格式错误；只包含本次作品集相关改动。
