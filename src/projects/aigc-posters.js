const project = {
  id: "aigc-posters",
  number: "08",
  title: "英美松皮炎湿疹海报",
  subtitle: "AIGC 视觉实验",
  category: "视觉实验",
  summary:
    "同一护理产品分别采用写实广告和像素游戏两种视觉语言，比较生成素材如何被转译为商业海报。",
  facts: [
    { label: "SCOPE", value: "AIGC 视觉实验" },
    { label: "METHOD", value: "生成 / 筛选 / 后期版式" },
    { label: "OUTPUT", value: "两种视觉路线" },
  ],
  heroMedia: {
    type: "image",
    src: "/media/projects/aigc/realistic-poster.webp",
    alt: "英美松皮炎湿疹写实广告海报",
    caption: "写实路线：用自然材料、皮肤情境和产品质感建立可信度",
    fit: "contain",
    ratio: "poster",
  },
  sections: {
    problem:
      "护理产品需要清楚、可信和可阅读，但生成图像容易只追求视觉奇观。实验需要让两种风格显著区分，同时保持产品主体、使用情境和信息层级稳定。",
    process: [
      {
        title: "用同一产品测试两种传播语气",
        text:
          "写实路线使用皮肤状态、自然材料和产品质感建立可信度；像素路线把不适与修护转译为游戏关卡和状态变化。现有素材只保留两张完成稿，因此网页聚焦可确认的视觉差异，不补造提示词、生成批次或筛选数据。",
      },
    ],
    solution:
      "两条路线使用不同画面语法，但共享清楚的产品位置、标题层级和功能暗示。后期通过字体、留白和信息顺序把生成素材收束为可比较的成组方案。",
    outcome:
      "完成写实和像素两张成品海报，并建立从视觉方向、生成筛选到后期排版的实验流程。",
  },
  gallery: [
    {
      type: "image",
      src: "/media/projects/aigc/pixel-poster.webp",
      alt: "英美松像素游戏海报",
      caption: "像素路线：以游戏状态表现不适与修护",
      fit: "contain",
      ratio: "poster",
    },
  ],
};

export default project;
