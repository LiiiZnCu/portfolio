# ARCHITECTURE

## 文件职责

- `index.html`：首页语义结构与固定文案。
- `src/projects.js`：8 个项目的摘要、事实、问题、过程、方案、结果和真实媒体清单。
- `src/project-explorer.js`：项目目录、深链接、手机菜单、项目章节渲染、成果媒体切换和前后项目切换。
- `src/app.js`：初始化项目展厅、顶部导航和年份。
- `src/styles.css`：个人简介首屏、编辑式三栏展厅、过程章节与响应式布局。
- `public/media/projects/`：按项目整理、压缩的原始图片、个人照片、项目视频。
- `public/media/tarot-process.mp4`：压缩后的塔罗制作过程视频。
- `public/media/tarot-process-poster.png`：从用户提供的视频提取的首帧封面。
- `tests/homepage.test.js`：首页必需结构、项目真实性与基础可访问性检查。
- `.github/workflows/deploy.yml`：GitHub Pages 自动部署。

## 调用关系

`index.html` 加载 `src/app.js` 与 `src/styles.css`；`src/app.js` 把项目数据交给 `src/project-explorer.js`，后者生成项目目录、当前项目主图和“问题—过程—方案—结果”章节；Vite 构建后由 GitHub Actions 发布。

## 关键决定

- 首版使用原生前端，不引入 React，减少不必要复杂度。
- 首页项目只使用用户提供的原始作品素材，不额外生成图片。
- 项目内容与页面结构分离，后续可直接增加案例页和真实素材。
- 个人档案排在 `PORTFOLIO` 标题前，先回答“我是谁”。
- 8 个项目通过固定索引切换，一次展示一个完整项目，避免连续下滑长卡片。
- 项目过程图从 PPT/PDF 中独立提取；不把完整展板或重复角度当作过程图库。
- 人像与作品保持原始彩色；暗红只作为当前项目、编号和过程线索。
- 公开展示邮箱和手机号，出生日期不进入网站。
- 视频保留真实 MP4，并在 `mediaDimensions` 中登记视频自身宽高；缺尺寸直接报错，不借用封面图尺寸。
