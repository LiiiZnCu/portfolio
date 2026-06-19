# ARCHITECTURE

## 文件职责

- `index.html`：首页语义结构与固定文案。
- `src/projects.js`：项目清单与分类数据。
- `src/app.js`：项目渲染、分类筛选、视频播放和移动导航。
- `src/styles.css`：灰白黑、暗红、少量金色与蓝色的视觉系统和响应式布局。
- `public/media/tarot-process.mp4`：用户提供的塔罗制作过程视频。
- `public/media/tarot-process-poster.png`：从用户提供的视频提取的首帧封面。
- `tests/homepage.test.js`：首页必需结构、项目真实性与基础可访问性检查。
- `.github/workflows/deploy.yml`：GitHub Pages 自动部署。

## 调用关系

`index.html` 加载 `src/app.js` 与 `src/styles.css`；`src/app.js` 读取 `src/projects.js`，生成项目列表并绑定交互；Vite 构建后由 GitHub Actions 发布。

## 关键决定

- 首版使用原生前端，不引入 React，减少不必要复杂度。
- 没有真实图片的项目采用排版呈现，不使用生成图或占位图。
- 项目内容与页面结构分离，后续可直接增加案例页和真实素材。
