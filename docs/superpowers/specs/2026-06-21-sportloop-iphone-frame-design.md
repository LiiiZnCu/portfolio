# SportLoop iPhone 16 Pro Max 展示规范

## 目标

将作品集内 SportLoop 的 2 张界面截图和 6 组交互动图统一展示为 iPhone 16 Pro Max 设备样式。

## 设计

- 屏幕比例固定为 `440 / 956`。
- 使用 3px 深色边框、大圆角和统一灵动岛，不添加黑色内垫或额外 padding。
- 首页与器材详情从网页源代码按 440×956 重新截图。
- 6 组动画重新输出为 440×956 动画画布，保留全部帧。
- 媒体与外框比例一致，使用 `object-fit: cover` 时不发生二次裁切。
- 只给 SportLoop 的界面成果媒体增加设备外框；用户研究、信息架构和任务流程图保持普通图表展示。
- 设备框尺寸继续服从现有电脑端和手机端“一屏可看完整”的高度限制。

## 实现

- 在 `src/projects.js` 的 8 个 SportLoop 界面媒体上增加 `deviceFrame: "iphone-16-pro-max"`。
- `src/project-explorer.js` 将该字段输出为 `data-device-frame`。
- `src/styles.css` 根据属性绘制设备框和灵动岛。
- `tests/homepage.test.js` 检查 8 个媒体均有设备标记，并检查比例、圆角和完整显示规则。
