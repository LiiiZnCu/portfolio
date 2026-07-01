const project = {
  id: "opera-tarot",
  number: "04",
  title: "一袭戏服，一种人生",
  subtitle: "中国戏曲元素塔罗牌设计",
  category: "视觉设计",
  summary:
    "把戏曲人物、戏服与道具映射到塔罗牌义，形成像素卡面、卡背和包装系统。",
  facts: [
    { label: "SCOPE", value: "文化视觉系统" },
    { label: "METHOD", value: "原型研究 / 手绘重构" },
    { label: "OUTPUT", value: "卡组 / 包装 / 制作动画" },
  ],
  heroMedia: {
    type: "image",
    src: "/media/projects/opera-tarot/cards-spread.webp",
    alt: "中国戏曲元素塔罗牌卡牌展开",
    caption: "戏曲人物、动作和象征元素被组织为统一卡牌系列",
    fit: "cover",
    ratio: "wide",
  },
  sections: {
    problem:
      "项目需要同时保留戏曲角色的身份辨识与塔罗牌的象征关系。大量卡牌还要求人物、边框、色彩、像素精度和包装能够遵循统一规则，而不是每张牌各自成立。",
    process: [
      {
        title: "从文化映射到人物语言",
        text:
          "大阿卡那用于承载人物命运和性格，小阿卡那吸收戏曲手持道具和动作，宫廷牌以不同人物身份建立层级。PPT 中保留的戏曲原型、人物参考与卡面样例，说明视觉语言如何从舞台形象逐步转向像素卡牌。",
        media: {
          type: "image",
          src: "/media/projects/opera-tarot/reference-mapping.webp",
          alt: "戏曲原型、人物参考与塔罗卡面样例对照",
          caption: "过程对照：戏曲原型、人物参考与卡面重构的三层视觉素材",
          fit: "contain",
          ratio: "wide",
        },
      },
      {
        title: "把参考收束为统一规则",
        text:
          "卡背的天体装饰、像素化山水和统一边框被拆成可复用模块。暗红、金色与蓝绿色贯穿卡面、卡背和盒装，避免每张牌各自发展成不同风格。",
        media: {
          type: "image",
          src: "/media/projects/opera-tarot/border-system.webp",
          alt: "塔罗牌卡背参考、像素图形与边框规则",
          caption: "系统构成：卡背参考、像素图形和统一边框",
          fit: "contain",
          ratio: "wide",
        },
      },
      {
        title: "AI 参考之后重新绘制",
        text:
          "ComfyUI 用于探索人物姿态和服饰参考，之后重新手绘轮廓、像素细节、边框和象征元素。制作视频记录了角色从线稿到完成稿的变化。",
        media: {
          type: "video",
          src: "/media/tarot-process.mp4",
          poster: "/media/tarot-process-poster.png",
          alt: "中国戏曲元素塔罗牌制作过程视频",
          caption: "角色从线稿到完成稿的制作过程",
          ratio: "wide",
        },
      },
    ],
    solution:
      "最终视觉系统以黑底、暗红与金色建立戏台氛围，像素语言将传统人物转译为当代收藏卡。卡面、卡背和包装使用同一套边框、标题和装饰规则。",
    outcome:
      "完成多张人物牌、卡背、卡盒和展示场景，并记录角色从参考、线稿到完成稿的制作过程。",
  },
  gallery: [
    {
      type: "image",
      src: "/media/projects/opera-tarot/card-layout.webp",
      alt: "中国戏曲元素塔罗牌卡面与包装陈列",
      caption: "卡面系统：人物牌、卡背与包装形成统一视觉",
    },
    {
      type: "image",
      src: "/media/projects/opera-tarot/detail-board.webp",
      alt: "中国戏曲元素塔罗牌完整系列实物排布",
      caption: "系列实物：不同人物与牌义在完整卡组中的关系",
    },
    {
      type: "image",
      src: "/media/projects/opera-tarot/packaging.webp",
      alt: "中国戏曲元素塔罗牌包装",
      caption: "卡盒与系列包装",
    },
  ],
};

export default project;
