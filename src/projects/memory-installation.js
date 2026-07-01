const project = {
  id: "memory-installation",
  number: "07",
  title: "生长中的记忆",
  subtitle: "记忆主题空间装置",
  category: "空间装置",
  summary:
    "照片、花材、镜面、石块与灯带共同构成一处在日间和夜间发生变化的记忆场景。",
  facts: [
    { label: "SCOPE", value: "空间装置" },
    { label: "METHOD", value: "材料组织 / 灯光实验" },
    { label: "OUTPUT", value: "日间 / 夜间展示" },
  ],
  heroMedia: {
    type: "image",
    src: "/media/projects/memory/day.webp",
    alt: "生长中的记忆日间状态",
    caption: "日间状态：照片、枝条、花材和镜面的材料关系",
    fit: "cover",
    ratio: "portrait",
  },
  sections: {
    problem:
      "私人照片如果只是平面陈列，很难让观看者产生主动联系。装置需要借助距离、遮挡、反射和光线，让记忆既保持个人性，又成为可以靠近、绕行和重新观看的空间。",
    process: [
      {
        title: "用轻重材料建立生长方向",
        text:
          "石块稳定底部，枝条和花材向上延展，照片穿插在不同高度。镜面把局部空间和观看者带进作品，使记忆不再只属于照片中的过去。",
        media: {
          type: "image",
          src: "/media/projects/memory/material-detail.webp",
          alt: "生长中的记忆材料细节",
          caption: "自然光下观察照片、花材、石块与镜面的层次",
          fit: "cover",
          ratio: "landscape",
        },
      },
    ],
    solution:
      "暖色灯带在暗环境中串联分散的照片和花材，日间强调材料与真实空间，夜间强调反射、轮廓和情绪。两种状态共同构成作品，而不是同一画面的明暗版本。",
    outcome:
      "完成一件可近距离观看的混合媒介装置，并记录自然光与亮灯两种展示状态。",
  },
  gallery: [
    {
      type: "image",
      src: "/media/projects/memory/night.webp",
      alt: "生长中的记忆亮灯状态",
      caption: "夜间状态：暖光把记忆碎片重新连接",
      fit: "cover",
      ratio: "portrait",
    },
  ],
};

export default project;
