# CONTEXT

- 当前状态：作品集网站已完成，本次处理拖慢构建和发布的旧视频。
- 本次完成：`public/media/tarot-process.mp4` 从 33MB 压到 4.0MB，保留真实制作过程视频。
- 本次完成：`public/media/projects/mechanical/track-run.mp4` 从 15MB 压到 6.9MB，保留真实轨道运行视频。
- 本次完成：视频尺寸改为按视频自身记录，`mediaDimensions` 补齐三段 MP4 的宽高，页面不再借用封面尺寸。
- 关键决定：视频继续使用真实 MP4，不改成占位图；缺尺寸时直接报错，避免发布后才发现布局问题。
- 验证结果：`pnpm test` 通过 36 项，`pnpm build` 通过，`git diff --check` 通过。
- 下一步：等待用户预览确认。
