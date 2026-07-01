const project = {
  id: "argentina-data",
  number: "05",
  title: "从凝视到亲吻",
  subtitle: "2022 年阿根廷队凝聚力信息可视化",
  category: "信息设计",
  summary:
    "围绕梅西与三名中场的协作，把阿根廷队凝聚力拆成站位、跑动、传球和攻防贡献。",
  facts: [
    { label: "SCOPE", value: "足球数据 / 信息可视化" },
    { label: "METHOD", value: "站位热区 / 跑动传球 / 表现对照" },
    { label: "OUTPUT", value: "数据叙事 / 双展板 / 局部图表" },
  ],
  heroMedia: {
    type: "image",
    src: "/media/projects/argentina/midfield-zone-impact.webp",
    alt: "阿根廷三名中场在核心区域的夺回球权和突破防线贡献",
    caption: "三名中场在核心区域承担夺回球权、突破防线和向前推进的共同任务",
    fit: "contain",
    ratio: "wide",
  },
  sections: {
    problem:
      "2018 到 2022 之间，阿根廷中场从松散支撑变成更稳定的协作核心。项目要说明这种变化不是口号，而是能在位置、能力、跑动和传球数据里被看到。",
    process: [
      {
        title: "先看三名中场的位置变化",
        text:
          "先比较 2018 与 2022 的热区分布。2022 年三名中场更集中地覆盖中路和肋部，让梅西身边形成更稳定的接应区。",
        media: {
          type: "image",
          src: "/media/projects/argentina/midfield-position.webp",
          alt: "阿根廷三名中场 2018 与 2022 位置热区对比",
          caption: "位置变化：中场活动区域从分散走向更清晰的中路支撑",
          fit: "contain",
          ratio: "wide",
        },
      },
      {
        title: "用 2018 能力图找到旧结构的断点",
        text:
          "2018 年的六维能力图显示，部分角色在防守贡献、推进和威胁制造之间不够均衡，球队很难把中场压力稳定转化为进攻支援。",
        media: {
          type: "image",
          src: "/media/projects/argentina/ability-2018.webp",
          alt: "2018 年阿根廷三名中场能力六维图",
          caption: "2018：中场能力分布不均，结构稳定性不足",
          fit: "contain",
          ratio: "square",
        },
      },
      {
        title: "再用 2022 能力图说明补位关系",
        text:
          "2022 年的能力图转向互补：德保罗提供跑动和防守，恩佐负责传球与推进，麦卡利斯特补足前场连接，中场因此形成更稳的协作面。",
        media: {
          type: "image",
          src: "/media/projects/argentina/ability-2022.webp",
          alt: "2022 年阿根廷三名中场能力六维图",
          caption: "2022：能力分工互补，三名中场共同托住核心区域",
          fit: "contain",
          ratio: "square",
        },
      },
      {
        title: "用跑动强度解释覆盖范围",
        text:
          "跑动距离与高强度跑距离把体能贡献具体化。三名中场用覆盖范围补上梅西身后的空间，让球队能持续压迫、回收和二次组织。",
        media: {
          type: "image",
          src: "/media/projects/argentina/running-comparison.webp",
          alt: "阿根廷三名中场与其他知名中场跑动对比",
          caption: "跑动对比：总跑动与高强度跑动解释中场覆盖能力",
          fit: "contain",
          ratio: "square",
        },
      },
      {
        title: "把梅西的主要球源拆开",
        text:
          "传球统计把关系变成路径。德保罗总参与传球 1101 次，恩佐 905 次，麦卡利斯特 573 次，他们共同构成梅西最稳定的接球和出球来源。",
        media: {
          type: "image",
          src: "/media/projects/argentina/messi-pass-supply.webp",
          alt: "德保罗、恩佐和麦卡利斯特为梅西供球的传球统计",
          caption: "传球来源：三名中场把梅西连接进球队循环",
          fit: "contain",
          ratio: "square",
        },
      },
      {
        title: "比较俱乐部与世界杯表现",
        text:
          "俱乐部数据与世界杯数据放在同一个半圆图里比较，能看出他们在国家队承担了更多团队任务，不只是复制俱乐部角色。",
        media: {
          type: "image",
          src: "/media/projects/argentina/club-worldcup-comparison.webp",
          alt: "阿根廷三名中场俱乐部与世界杯表现对比",
          caption: "表现对比：俱乐部与世界杯任务权重的变化",
          fit: "contain",
          ratio: "portrait",
        },
      },
      {
        title: "把攻势节奏和传球次数叠合",
        text:
          "比赛攻势与三名中场每 5 分钟传球次数叠合后，可以看到法国反扑时中场传递如何参与稳住节奏，再把球队重新推回前场。",
        media: {
          type: "image",
          src: "/media/projects/argentina/match-momentum-passes.webp",
          alt: "比赛攻势与三名中场传球次数对比",
          caption: "比赛节奏：攻势波动与中场传球频次的关系",
          fit: "contain",
          ratio: "wide",
        },
      },
    ],
    solution:
      "网页按站位、能力、跑动、传球、俱乐部表现和比赛攻势组织资料图，让观众先看结构，再看数据证据，最后回到三名中场如何服务梅西和整支球队。",
    outcome:
      "最终结论落到可读的数据上：三名中场合计贡献 30.27% 的夺回球权，并贡献 33.29% 的成功突破防线。他们不是背景角色，而是阿根廷推进、保护和凝聚的支点。",
  },
  gallery: [
    {
      type: "image",
      src: "/media/projects/argentina/messi-attack-index.webp",
      alt: "梅西在 2022 年世界杯中的进攻贡献指标",
      caption: "结果局部：梅西进攻贡献与中场支撑关系",
      fit: "contain",
      ratio: "portrait",
    },
    {
      type: "image",
      src: "/media/projects/argentina/team-structure.webp",
      alt: "阿根廷队中场热区与角色分工图",
      caption: "结果局部：中场热区、角色分工与结构化协同",
      fit: "contain",
      ratio: "square",
    },
    {
      type: "image",
      src: "/media/projects/argentina/comparison-evidence.webp",
      alt: "阿根廷队协同对照与比赛趋势图",
      caption: "结果局部：功能对照、球员关系和比赛趋势共同验证结论",
      fit: "contain",
      ratio: "wide",
    },
  ],
};

export default project;
