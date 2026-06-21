# SportLoop iPhone 16 Pro Max Frame Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将 SportLoop 的 8 个界面截图与动图统一放入响应式 iPhone 16 Pro Max 外框。

**Architecture:** 项目数据声明设备类型，媒体渲染器输出稳定属性，CSS 单独负责设备外观与尺寸。原始媒体文件不改写，避免动画损失和内容裁切。

**Tech Stack:** Vanilla JavaScript、CSS、Node Test、Vite

---

### Task 1: 标记 SportLoop 手机媒体

**Files:**
- Modify: `src/projects.js`
- Test: `tests/homepage.test.js`

- [x] 给 SportLoop 主图和 7 个图库媒体增加 `deviceFrame: "iphone-16-pro-max"`。
- [x] 增加测试，确认共 8 个手机媒体且其他项目不受影响。

### Task 2: 输出设备框属性

**Files:**
- Modify: `src/project-explorer.js`
- Test: `tests/homepage.test.js`

- [x] 在媒体容器输出 `data-device-frame="iphone-16-pro-max"`。
- [x] 无设备字段时不输出属性。

### Task 3: 实现外框与响应式尺寸

**Files:**
- Modify: `src/styles.css`
- Test: `tests/homepage.test.js`

- [x] 使用 `aspect-ratio: 440 / 956`、3px 深色边框和大圆角。
- [x] 删除黑色内垫与额外 padding，并为全部 8 个媒体统一增加灵动岛。
- [x] 媒体文件本身统一为 440×956，外框内不再二次缩放。
- [x] 桌面端和手机端沿用现有一屏高度限制。

### Task 4: 验证

**Files:**
- Modify: `CONTEXT.md`
- Modify: `lessons.md`

- [x] 运行 `pnpm test`，预期全部通过。
- [x] 运行 `pnpm build`，预期构建成功。
- [x] 在桌面和手机视口检查静态截图与动画媒体。
