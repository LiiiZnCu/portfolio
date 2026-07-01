const project = {
  id: "mechanical",
  number: "06",
  title: "轨迹与攀爬",
  subtitle: "智能施工物流轨道 / 三叶轮爬楼机器人",
  category: "机械制作",
  summary:
    "两个小课题都围绕机械结构展开：轨道系统验证连续机构联动，爬楼车验证齿轮传动、轮轴和三叶轮抓地。",
  facts: [
    { label: "SCOPE", value: "机械结构与运动验证" },
    { label: "METHOD", value: "草图 / 纸板结构 / 齿轮传动 / 3D 打印" },
    { label: "OUTPUT", value: "循环轨道 / 爬楼整机" },
  ],
  heroMedia: {
    type: "image",
    src: "/media/projects/mechanical.webp",
    alt: "三叶轮爬楼机器人在台阶上进行攀爬测试",
    caption: "真实台阶测试：三叶轮结构挂住台阶边缘并带动机身翻转",
    fit: "cover",
    ratio: "wide",
  },
  subprojects: [
    {
      label: "A / TRACK",
      title: "智能施工物流轨道",
      summary:
        "用红外小车连续触发桥梁、挡板、传送带和入库机构，重点验证触发顺序和机构联动。",
      points: ["路径闭环", "桥梁翻转", "传送入库"],
      media: {
        type: "image",
        src: "/media/projects/mechanical/track-overview.webp",
        alt: "智能施工物流轨道模型全景",
        caption: "智能施工物流轨道模型全景",
      },
    },
    {
      label: "B / CLIMBER",
      title: "三叶轮爬楼机器人",
      summary:
        "用齿轮传动和三叶轮抓地解决台阶攀爬，重点验证轮轴同步、重心转移和台阶尺度。",
      points: ["齿轮传动", "轮轴同步", "三叶轮抓地"],
      media: {
        type: "image",
        src: "/media/projects/mechanical/robot-on-stairs.webp",
        alt: "三叶轮爬楼机器人在台阶上测试",
        caption: "三叶轮爬楼机器人台阶测试",
      },
    },
  ],
  sections: {
    problem:
      "这个项目不是单纯情景搭建，而是用两个小课题验证机械结构：A 轨道系统需要让小车连续触发桥梁、传送、分流和入库机构；B 爬楼车需要用齿轮传动和三叶轮结构完成台阶攀爬。",
    process: [
      {
        phase: "A / 轨道系统",
        title: "用草图规划轨道闭环",
        text:
          "轨道草图同时规划小车路线、装置位置和触发顺序。智能施工物流主题把各机构对应为夜间照明、货物分流、塔桥限行、传送带和仓库闸门。",
        media: {
          type: "image",
          src: "/media/projects/mechanical/design-sketch.webp",
          alt: "智能小车轨道设计草图",
          caption: "重新整理后的轨道路线、感应位置和运动机构草图",
          fit: "contain",
          ratio: "wide",
        },
      },
      {
        phase: "A / 轨道系统",
        title: "用实测视频验证机构联动",
        text:
          "实体测试重点观察小车经过传感点后，桥梁、挡板、传送带和入库结构能否按顺序动作。视频保留完整运行关系，比静态展板更能说明机构联动。",
        media: {
          type: "video",
          src: "/media/projects/mechanical/track-run.mp4",
          poster: "/media/projects/mechanical/track-run-poster.webp",
          alt: "智能施工物流轨道运行测试视频",
          caption: "运行测试：小车沿轨道循环并触发多组机械机构",
          fit: "contain",
          ratio: "wide",
        },
      },
      {
        phase: "B / 爬楼机器人",
        title: "用三叶轮处理台阶边缘",
        text:
          "爬楼车从多足生物的抓附动作获得灵感，把圆轮改为带齿三叶轮。电机驱动主齿轮，通过多组齿轮实现一驱四动；3D 打印框架保证结构精度。",
        media: {
          type: "image",
          src: "/media/projects/mechanical/robot-structure.webp",
          alt: "爬楼梯机器人结构说明",
          caption: "重新整理后的主体框架、齿轮传动和三叶轮抓地结构",
          fit: "contain",
          ratio: "wide",
        },
      },
      {
        phase: "B / 爬楼机器人",
        title: "在真实台阶上验证攀爬",
        text:
          "最终测试把机器人放到实体台阶上，观察三叶轮挂住台阶边缘、带动机身翻转和重心继续前移的连续动作。",
        media: {
          type: "image",
          src: "/media/projects/mechanical/robot-on-stairs.webp",
          alt: "三叶轮爬楼机器人在台阶上测试",
          caption: "实体台阶测试：三叶轮挂住边缘后带动机身继续上爬",
          fit: "contain",
          ratio: "wide",
        },
      },
    ],
    solution:
      "轨道部分把传感点、挡板、桥梁和传送结构串成连续触发链，完成机构联动；爬楼车部分把电机输出分到轮轴，再由三叶轮在台阶边缘形成抓附和翻转。",
    outcome:
      "最终轨道小车能够循环通过并触发多组机构；爬楼机器人完成齿轮传动和三叶轮结构验证，并在真实台阶上完成攀爬。",
  },
  gallery: [
    {
      type: "image",
      src: "/media/projects/mechanical/track-overview.webp",
      alt: "智能施工物流小车轨道全景",
      caption: "轨道全景：循环路线、坡道、桥梁和触发装置",
    },
    {
      type: "image",
      src: "/media/projects/mechanical/track-detail.webp",
      alt: "智能施工物流轨道机构细节",
      caption: "轨道机构：桥梁转轴、挡板和传送结构的实体组合",
    },
    {
      type: "image",
      src: "/media/projects/mechanical/robot-model.webp",
      alt: "三叶轮爬楼梯机器人实体模型",
      caption: "机器人整机：3D 打印框架与四组三叶轮",
    },
    {
      type: "image",
      src: "/media/projects/mechanical/gear-detail.webp",
      alt: "爬楼梯机器人齿轮传动细节",
      caption: "传动细节：电机输出通过齿轮组传到轮轴",
    },
  ],
};

export default project;
