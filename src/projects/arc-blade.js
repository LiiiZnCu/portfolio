const project = {
  id: "arc-blade",
  number: "03",
  title: "弧刃",
  subtitle: "小刀三维建模与场景渲染练习",
  category: "三维设计",
  summary:
    "围绕弧形轮廓、金属刃面和握柄转折，练习产品曲面、材质、灯光与环境叙事。",
  facts: [
    { label: "SCOPE", value: "三维造型练习" },
    { label: "METHOD", value: "曲面 / 材质 / 灯光" },
    { label: "OUTPUT", value: "建模 / 材质 / 场景渲染" },
  ],
  heroMedia: {
    type: "image",
    src: "/media/projects/arc-blade/studio.webp",
    alt: "弧刃小刀岩石场景渲染",
    caption: "低角度环境光突出弧形轮廓、金属反射与握柄转折",
    fit: "cover",
    ratio: "wide",
  },
  sections: {
    problem:
      "小尺寸刀具的视觉张力主要来自轮廓、刃面比例和握持转折，细微偏差都会让造型显得笨重或失去方向感。练习目标是用一条连续弧线统一刀身和握柄，并让材质与环境强化而不是遮盖形态。",
    process: [
      {
        title: "从轮廓到材质",
        text:
          "先控制整体弧线和厚度，再细化刃面、握柄及连接关系。材质阶段比较金属高光、深色握柄和粗粝岩石的差异，使产品边缘在低照度场景中仍然清楚。",
        media: {
          type: "image",
          src: "/media/projects/arc-blade/rock-scene.webp",
          alt: "弧刃小刀材质细节",
          caption: "平放视角用于检查刃面、握柄、指环和整体比例",
          fit: "cover",
          ratio: "wide",
        },
      },
    ],
    solution:
      "最终使用低角度环境光突出金属反射、深色握柄和岩石纹理。产品始终保持弧形主线，不依赖复杂装饰。",
    outcome:
      "完成产品建模、材质调整和两组场景渲染，形成从形态验证到氛围表达的完整练习。",
  },
  gallery: [],
};

export default project;
