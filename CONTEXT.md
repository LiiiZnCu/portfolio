# CONTEXT

- 当前状态：作品集网站已完成，本次处理移动端/iPad 项目媒体不显示问题。
- 本次完成：`public/media/tarot-process.mp4` 从 33MB 压到 4.0MB，保留真实制作过程视频。
- 本次完成：`public/media/projects/mechanical/track-run.mp4` 从 15MB 压到 6.9MB，保留真实轨道运行视频。
- 本次完成：视频尺寸改为按视频自身记录，`mediaDimensions` 补齐三段 MP4 的宽高，页面不再借用封面尺寸。
- 本次完成：移除项目渲染脚本中的可选链语法，并把 Vite 构建目标设为 `es2019`，避免旧一点的 iPhone/iPad Safari 不执行脚本。
- 关键决定：视频继续使用真实 MP4，不改成占位图；缺尺寸时直接报错，避免发布后才发现布局问题。
- 关键决定：移动端媒体问题先从运行脚本兼容性解决；线上媒体文件本身已确认可访问。
- 验证结果：`pnpm test` 通过 37 项，`pnpm build` 通过，构建后的 JS 不含 `?.`、`??`、`.at(`。
- 下一步：等待用户预览确认。
