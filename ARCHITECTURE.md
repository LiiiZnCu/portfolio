# ARCHITECTURE

## 文件职责

- `index.html`：首页语义结构与固定文案。
- `src/projects.js`：8 个项目的完整介绍、关键要点、标签和真实图片/视频清单。
- `src/app.js`：项目索引切换、单项目详情渲染、图库切换、视频展示和移动导航。
- `src/styles.css`：个人档案首屏、项目展厅、彩色图库与响应式布局。
- `public/media/projects/`：按项目整理、压缩的原始图片、个人照片和 VERSA 视频。
- `public/media/tarot-process.mp4`：用户提供的塔罗制作过程视频。
- `public/media/tarot-process-poster.png`：从用户提供的视频提取的首帧封面。
- `tests/homepage.test.js`：首页必需结构、项目真实性与基础可访问性检查。
- `.github/workflows/deploy.yml`：GitHub Pages 自动部署。

## 调用关系

`index.html` 加载 `src/app.js` 与 `src/styles.css`；`src/app.js` 读取 `src/projects.js`，生成项目索引和当前项目详情，并在选择项目或素材时局部更新页面；Vite 构建后由 GitHub Actions 发布。

## 关键决定

- 首版使用原生前端，不引入 React，减少不必要复杂度。
- 首页项目只使用用户提供的原始作品素材，不额外生成图片。
- 项目内容与页面结构分离，后续可直接增加案例页和真实素材。
- 个人档案排在 `PORTFOLIO` 标题前，先回答“我是谁”。
- 8 个项目通过固定索引切换，一次展示一个完整项目，避免连续下滑长卡片。
- 人像与作品保持原始彩色；暗红、金色与蓝色只作为小面积信息点缀。
- 公开展示邮箱，手机号和出生日期不进入网站。
