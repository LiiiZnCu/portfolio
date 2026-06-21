# Portfolio Media Completeness Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 让桌面与手机项目媒体一屏完整可见，并补齐 SportLoop 真实交互动效与各项目关键素材。

**Architecture:** 由 `projects.js` 维护媒体来源与展示类型，`project-explorer.js` 负责主媒体和原图查看交互，`styles.css` 负责基于视口高度的响应式约束。PPT 媒体先提取到项目资源目录，再由数据层引用。

**Tech Stack:** Vite、原生 HTML/CSS/JavaScript、PPTX ZIP 媒体、浏览器原生视频。

---

### Task 1: 一屏媒体规则

**Files:**
- Modify: `src/styles.css`
- Modify: `src/project-explorer.js`
- Test: `tests/homepage.test.js`

- [ ] 添加主媒体视口高度测试。
- [ ] 将桌面主媒体限制为 `calc(100dvh - 12rem)`，手机限制为 `62dvh`。
- [ ] 使用 `object-fit: contain` 保持完整比例。
- [ ] 运行 `pnpm test`。

### Task 2: SportLoop 交互动效

**Files:**
- Create: `public/media/projects/sportloop/interactions/`
- Modify: `src/projects.js`
- Test: `tests/homepage.test.js`

- [ ] 从 PPT 提取第 18—23 页的 9 个 GIF。
- [ ] 合并为点击反馈、环形滑动、下拉刷新、器材筛选、借用流程、借用状态六组。
- [ ] 压缩为网页视频或保留经体积检查的 GIF。
- [ ] 在 SportLoop 过程章节中接入六组真实动效。
- [ ] 增加六组动效存在和可访问测试。

### Task 3: 八项目素材审计

**Files:**
- Modify: `src/projects.js`
- Modify: `CONTEXT.md`
- Modify: `lessons.md`

- [ ] 对照原始 PPT、PDF 和项目目录核对每项素材。
- [ ] 删除同内容重复引用。
- [ ] 仅补充能解释研究、结构、交互、测试或结果的真实素材。
- [ ] 记录没有真实过程素材的项目，不补造内容。

### Task 4: 响应式浏览器验证

**Files:**
- Test: `tests/homepage.test.js`

- [ ] 运行 `pnpm test` 和 `pnpm build`。
- [ ] 在 1440px、768px、390px 逐项切换 8 个项目。
- [ ] 验证主媒体高度不超过视口、图片不裁切、视频可播放。
- [ ] 验证页面无横向溢出和内容重叠。
