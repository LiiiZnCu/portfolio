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
      "这个项目先问一个问题：为什么 2018 年围着梅西踢的阿根廷显得支撑不足，而 2022 年能形成更稳定的团队？所以叙事从旧结构的断点开始，再用能力、站位、跑动、传球和比赛节奏逐步说明中场如何把个人核心变成团队协作。",
    process: [
      {
        title: "用 2018 能力图找到旧结构的断点",
        text:
          "先看 2018，是为了说明旧结构的问题在哪里。六维能力图显示中场在防守、推进和威胁制造之间不够均衡，梅西身边缺少稳定的承接点，所以球队很难把后场压力连续转化为进攻支援。",
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
          "再看 2022，是为了和前一张形成对照。德保罗承担跑动和防守，恩佐负责传球与推进，麦卡利斯特补上前场连接，三个人不是单点变强，而是把旧结构里缺失的角色互相补齐。",
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
        title: "对照三名中场的位置变化",
        text:
          "能力互补之后，需要看它有没有落到空间里。热区对比显示，2022 年三名中场更集中地覆盖中路和肋部，梅西拿球时附近有更多接应点，球队也能更快从防守过渡到前场组织。",
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
        title: "用跑动强度解释覆盖范围",
        text:
          "位置更稳定还不够，还要有人不断补空位。跑动距离和高强度跑距离把这种体能贡献具体化：三名中场用覆盖范围填补梅西身后的空间，让球队能持续压迫、回收球权并完成二次组织。",
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
          "有覆盖之后，还要看球怎么到梅西脚下。传球统计把协作关系变成路径：德保罗总参与传球 1101 次，恩佐 905 次，麦卡利斯特 573 次，他们共同构成梅西最稳定的接球和出球来源。",
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
          "接着比较俱乐部和世界杯，是为了说明他们在国家队不是照搬原本角色。半圆图把两种环境放在一起看，可以看出三名中场在世界杯里承担了更多保护、串联和推进任务，这也解释了为什么传球关系会更集中地围绕梅西展开。",
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
          "最后回到比赛现场，把前面的能力、站位和传球放进时间线里验证。攻势变化与每 5 分钟传球次数叠合后，可以看到法国反扑时中场如何稳住节奏，最终把球队重新推回前场，让数据结论落回真实比赛过程。",
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
      showcase: false,
    },
    {
      type: "image",
      src: "/media/projects/argentina/comparison-evidence.webp",
      alt: "阿根廷队协同对照与比赛趋势图",
      caption: "结果局部：功能对照、球员关系和比赛趋势共同验证结论",
      fit: "contain",
      ratio: "wide",
      showcase: false,
    },
  ],
};

export default project;
