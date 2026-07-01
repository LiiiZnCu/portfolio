const project = {
  id: "versa",
  number: "02",
  title: "VERSA",
  subtitle: "多功能可视化智能空气炸锅设计",
  category: "产品设计",
  summary:
    "面向独居与轻食场景设计的一体化烹饪系统，把空气炸、炖煮、煎烤和清洗收纳整合进可观察、可拆洗的产品结构。",
  facts: [
    { label: "SCOPE", value: "产品结构 / 用户研究 / CMF" },
    { label: "METHOD", value: "桌面调研 / 竞品分析 / 拆解推导" },
    { label: "OUTPUT", value: "概念草图 / 结构建模 / 场景渲染" },
  ],
  heroMedia: {
    type: "image",
    src: "/media/projects/versa/product-closed.webp",
    alt: "VERSA 多功能可视化智能空气炸锅整机渲染",
    caption: "整机形态：空气炸模块与煮炖模块并列展示",
  },
  sections: {
    problem:
      "项目从独居饮食和空气炸锅升级需求出发。传统空气炸锅常见功能单一、烹饪过程不可见、参数依赖经验、清洁和收纳麻烦等问题。VERSA 的目标是减少一人食厨房里的多余器具，让用户从准备、烹饪、上桌到清洗都有连续体验。",
    process: [
      {
        title: "先明确独居轻食用户",
        text:
          "用户定位聚焦在独居、重视健康饮食、希望烹饪简单干净的人群。她们的主要挫折不是不会做饭，而是油烟、清洗、口感不稳定和过程不可见带来的时间负担。",
        media: {
          type: "image",
          src: "/media/projects/versa/user-profile.webp",
          alt: "VERSA 空气炸锅用户画像与调研结论",
          caption: "用户画像：年龄、居住状态、烹饪挫折、动机和需求",
          fit: "contain",
          ratio: "wide",
        },
      },
      {
        title: "把体验拆成完整旅程",
        text:
          "用户旅程把准备、备菜、烹饪、取出、清洁和收纳串起来。负面情绪集中在参数判断、食物状态不可见、配件切换和清洁负担上，因此方案不只解决“怎么炸”，也要解决“怎么用完”。",
        media: {
          type: "image",
          src: "/media/projects/versa/user-journey.webp",
          alt: "VERSA 空气炸锅用户旅程图",
          caption: "用户旅程：从行为、触点、情绪曲线和机会点整理核心需求",
          fit: "contain",
          ratio: "wide",
        },
      },
      {
        title: "由拆解推导结构方案",
        text:
          "产品拆解后，把热风循环、发热盘、玻璃内胆、控制旋钮和外壳分成独立模块。顶部负责空气炸，底部负责持续加热，透明玻璃内胆既承担可视窗口，也承担上桌和清洗容器。",
        media: {
          type: "image",
          src: "/media/projects/versa/structure-system.webp",
          alt: "VERSA 产品爆炸图与结构标注",
          caption: "结构标注：风机、发热管、炸篮、玻璃内胆和底部隔热件分开说明",
          fit: "contain",
          ratio: "wide",
        },
      },
      {
        title: "明确材料、颜色和制造关系",
        text:
          "CMF 围绕耐热、耐污、易观察和长期使用来定。外壳采用浅灰白，内胆使用烟茶色高硼硅玻璃，深灰硅胶和金属件负责隔热、密封和结构支撑，让产品看起来轻，但功能关系清楚。",
        media: {
          type: "image",
          src: "/media/projects/versa/cmf-table.webp",
          alt: "VERSA 产品 CMF 材料表",
          caption: "CMF：按外壳、内胆、密封、加热和控制组件拆分材料与工艺",
          fit: "contain",
          ratio: "wide",
        },
      },
      {
        title: "空炸模式的旋钮流程",
        text:
          "空炸模式围绕食材、时间和温度展开。用户先选择食材类别，再通过旋钮调整时间与温度，过程中可以暂停、恢复，并在完成时得到明确提醒。",
        media: {
          type: "image",
          src: "/media/projects/versa/air-fry-flow.webp",
          alt: "VERSA 空炸模式交互流程",
          caption: "空炸模式：选择食材、调整时间温度、暂停恢复和完成提示",
          fit: "contain",
          ratio: "wide",
        },
      },
      {
        title: "电煮模式的旋钮流程",
        text:
          "电煮模式不再强调温度曲线，而是让用户通过档位控制持续加热。流程单独处理调节档位、暂停加热、恢复运行和结束提醒，避免和空炸逻辑混在一起。",
        media: {
          type: "image",
          src: "/media/projects/versa/simmer-flow.webp",
          alt: "VERSA 电煮模式交互流程",
          caption: "电煮模式：调节档位、暂停加热、恢复运行和结束提醒",
          fit: "contain",
          ratio: "wide",
        },
      },
    ],
    solution:
      "最终方案由上部热风模块、透明玻璃内胆和底部加热底座组成，形成 Air Fry、Simmer、Sear 三类烹饪能力。用户可以观察食物状态，取下内胆直接上桌或放入冰箱，也能通过水洗和洗碗机完成清洁。",
    outcome:
      "项目完成从调研、需求、竞品、拆解、结构原理、交互流程到整机建模、CMF、场景渲染和动态展示的完整闭环。",
  },
  gallery: [
    {
      type: "image",
      src: "/media/projects/versa/product-open.webp",
      alt: "VERSA 多功能可视化智能空气炸锅分体状态",
      caption: "分体结构：上盖、玻璃内胆、底座和炸篮分开使用",
    },
    {
      type: "image",
      src: "/media/projects/versa/exploded-view.webp",
      alt: "VERSA 产品结构爆炸渲染",
      caption: "结构爆炸渲染：上盖、玻璃内胆、底座和加热组件分层展示",
    },
    {
      type: "image",
      src: "/media/projects/versa/material-glass.webp",
      alt: "VERSA 材料与细节展示",
      caption: "材料细节：高透视窗、耐热玻璃和防烫隔热保护",
    },
    {
      type: "image",
      src: "/media/projects/versa/party-scene.webp",
      alt: "VERSA 空气炸锅朋友聚餐使用场景",
      caption: "聚餐场景：一台设备完成加热、烤制和直接上桌",
    },
    {
      type: "image",
      src: "/media/projects/versa/hero-scene.webp",
      alt: "VERSA 多功能可视化智能空气炸锅厨房使用场景",
      caption: "最终场景：一台机器覆盖空气炸、煮炖、煎烤和直接上桌",
    },
    {
      type: "image",
      src: "/media/projects/versa/rinse-clean.webp",
      alt: "VERSA 玻璃内胆水洗清洁场景",
      caption: "清洗方式：玻璃内胆可取下冲洗，减少油污死角",
    },
    {
      type: "image",
      src: "/media/projects/versa/dishwasher-clean.webp",
      alt: "VERSA 玻璃内胆洗碗机清洁场景",
      caption: "清洁验证：内胆和炸篮可进入洗碗机，降低收拾负担",
    },
    {
      type: "video",
      src: "/media/projects/versa/process.mp4",
      poster: "/media/projects/versa/exploded-view.webp",
      alt: "VERSA 空气炸锅使用演示视频",
      caption: "产品动态展示：整机形态、旋钮与透明内胆",
    },
  ],
};

export default project;
