# CONTEXT

- 当前状态：作品集网站已完成，本次拆分项目数据层。
- 本次完成：`src/projects.js` 改为只汇总 8 个项目模块，单个项目数据放到 `src/projects/{id}.js`。
- 本次完成：测试改为读取入口和项目文件，并新增结构测试锁定拆分方式。
- 关键决定：页面继续从 `src/projects.js` 导入同一个 `projects` 数组，保持页面效果、hash 跳转和既有渲染逻辑不变。
- 验证结果：`pnpm test` 通过 39 项，`pnpm build` 通过。
- 下一步：等待用户预览确认。
