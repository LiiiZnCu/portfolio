export const projects = [
  {
    id: "sportloop",
    number: "01",
    title: "SportLoop",
    subtitle: "校园体育器材借用与维护体验系统",
    category: "交互设计",
    overview:
      "从校园器材借用“跑空”、人工登记低效和损耗反馈无门出发，设计学生端与管理员端协同的借用维护系统。项目不只记录库存数量，而是把查询、预约、扫码借还、异常反馈、维修和盘点连接成持续更新的器材状态。",
    challenge:
      "学生需要在到场前知道器材是否可借，校队需要批量预约，管理员则需要追踪借出、逾期、损坏和维修状态。原有线下流程的信息断点，让等待、追责和维护都变得被动。",
    response:
      "以“一物一码”为基础建立双端信息架构：学生端聚焦查找、预约、借还与报损，管理端聚合核销、库存、工单和预警。状态在借用与维护环节同步更新，减少坏器材被再次借出。",
    highlights: [
      "学生端与管理员端双端协同",
      "库存、质量与维修状态可视化",
      "扫码借还、批量预约与异常反馈",
      "报修—派单—维修—验收闭环",
    ],
    labels: ["SYSTEM", "SERVICE", "USER FLOW", "PROTOTYPE"],
    gallery: [
      {
        type: "image",
        src: "/media/projects/sportloop.webp",
        alt: "SportLoop 学生端、管理员端与体育器材主视觉",
        caption: "双端系统与校园器材使用场景",
      },
      {
        type: "image",
        src: "/media/projects/sportloop/student-home.webp",
        alt: "SportLoop 学生端首页",
        caption: "学生端：首页聚合库存、快捷借用与常用器材",
      },
      {
        type: "image",
        src: "/media/projects/sportloop/equipment-list.webp",
        alt: "SportLoop 器材列表页面",
        caption: "按分类、状态与关键词查找器材",
      },
      {
        type: "image",
        src: "/media/projects/sportloop/equipment-detail.webp",
        alt: "SportLoop 器材详情与借用页面",
        caption: "器材详情、可借状态与借用入口",
      },
      {
        type: "image",
        src: "/media/projects/sportloop/admin-dashboard.webp",
        alt: "SportLoop 管理员工作台",
        caption: "管理员端：库存、任务与维护信息集中处理",
      },
    ],
  },
  {
    id: "versa",
    number: "02",
    title: "VERSA",
    subtitle: "多功能可视化智能空气炸锅设计",
    category: "产品设计",
    overview:
      "VERSA 取意于 versatile，面向独居青年的一人食场景，将空气炸、炖煮与煎烤能力整合进一套可视化烹饪系统。设计从传统空气炸锅功能单一、过程不可见、参数依赖经验和清洁不便等问题展开。",
    challenge:
      "不透明炸篮让用户只能靠时间和经验判断熟度，频繁抽出查看会损失热量；单一加热方式又提高了闲置率。产品还需要兼顾台面占用、拆洗效率、材质安全和操作门槛。",
    response:
      "通过顶部热风循环与底部持续加热形成双模式结构，以透明高硼硅玻璃内胆提供全过程观察。旋钮、TFT 屏幕、语音提示和 AI 食谱建议共同降低参数设置负担，分体结构便于直接上桌、收纳与清洁。",
    highlights: [
      "空气炸、炖煮与煎烤多模式融合",
      "透明玻璃内胆与上下加热结构",
      "旋钮、屏幕、语音与食谱辅助",
      "整机建模、结构爆炸与 CMF 方案",
    ],
    labels: ["OBJECT", "STRUCTURE", "CMF", "INTERACTION"],
    gallery: [
      {
        type: "image",
        src: "/media/projects/versa.webp",
        alt: "VERSA 多功能可视化智能空气炸锅渲染图",
        caption: "整机与分体状态",
      },
      {
        type: "image",
        src: "/media/projects/versa/product-open.webp",
        alt: "VERSA 空气炸锅打开状态渲染",
        caption: "透明内胆与分体使用方式",
      },
      {
        type: "image",
        src: "/media/projects/versa/product-closed.webp",
        alt: "VERSA 空气炸锅闭合状态渲染",
        caption: "闭合状态与台面尺度",
      },
      {
        type: "image",
        src: "/media/projects/versa/exploded-view.webp",
        alt: "VERSA 空气炸锅结构爆炸图",
        caption: "顶部热风、底部加热与内胆结构",
      },
      {
        type: "image",
        src: "/media/projects/versa/material-glass.webp",
        alt: "VERSA 玻璃内胆材质展示",
        caption: "烟茶色高硼硅玻璃材质方案",
      },
      {
        type: "video",
        src: "/media/projects/versa/process.mp4",
        poster: "/media/projects/versa.webp",
        alt: "VERSA 空气炸锅使用演示视频",
        caption: "使用演示；倒水与沸腾片段使用 AI 辅助生成",
      },
    ],
  },
  {
    id: "arc-blade",
    number: "03",
    title: "弧刃",
    subtitle: "小刀三维建模与场景渲染练习",
    category: "三维设计",
    overview:
      "以弧形刀身与连续握柄为造型核心，完成从基础曲面、零件比例到材质灯光的三维练习。项目通过工作室静物与岩石环境两组场景，比较产品在干净展示和叙事氛围中的视觉表现。",
    challenge:
      "小尺寸产品的形态变化集中在轮廓、刃面和握持转折，轻微的比例偏差都会削弱整体力量感；金属、木质与粗粝环境也需要建立清楚的材质区分。",
    response:
      "先以轮廓控制整体张力，再细化刃面、握柄和连接关系。渲染阶段分别使用中性棚拍光和低角度环境光，让金属反射、边缘高光与岩石纹理共同强化弧形语言。",
    highlights: [
      "弧形轮廓与握持比例推敲",
      "金属、木质与岩石材质对比",
      "工作室与环境化双场景渲染",
    ],
    labels: ["MODELING", "MATERIAL", "LIGHTING", "RENDER"],
    gallery: [
      {
        type: "image",
        src: "/media/projects/arc-blade.webp",
        alt: "弧刃小刀三维建模与岩石场景渲染",
        caption: "产品造型与环境渲染组合",
      },
      {
        type: "image",
        src: "/media/projects/arc-blade/rock-scene.webp",
        alt: "弧刃小刀岩石场景渲染",
        caption: "岩石环境中的材质与边缘光",
      },
      {
        type: "image",
        src: "/media/projects/arc-blade/detail.webp",
        alt: "弧刃小刀材质细节渲染",
        caption: "刀身、握柄与连接细节",
      },
      {
        type: "image",
        src: "/media/projects/arc-blade/studio.webp",
        alt: "弧刃小刀工作室静物渲染",
        caption: "中性背景下的完整轮廓",
      },
    ],
  },
  {
    id: "opera-tarot",
    number: "04",
    title: "一袭戏服，一种人生",
    subtitle: "中国戏曲元素塔罗牌设计",
    category: "视觉设计",
    overview:
      "把戏曲人物、戏服、手持道具与西方塔罗的象征系统重新对应，探索跨文化视觉叙事。大阿卡那对应人物命运与性格，小阿卡那吸收戏曲道具和动作，最终形成卡面、卡背与包装的统一系列。",
    challenge:
      "项目既要保留戏曲角色的身份辨识，又要让牌面具备塔罗所需的象征关系；大量卡牌还要求边框、色彩、像素精度与包装结构能够稳定扩展。",
    response:
      "先梳理角色与牌义的映射，再用 ComfyUI 辅助建立人物参考，经过手绘重构完成最终卡面。暗红、金色、蓝绿色与像素语言贯穿人物、边框、卡背和盒装，使传统戏曲形成当代收藏物的视觉秩序。",
    highlights: [
      "戏曲人物、道具与塔罗牌义映射",
      "AI 参考生成与手绘重构结合",
      "像素卡面、卡背和包装系统",
      "从线稿到完成稿的过程记录",
    ],
    labels: ["VISUAL", "CULTURE", "PIXEL", "PROCESS"],
    gallery: [
      {
        type: "image",
        src: "/media/projects/opera-tarot.webp",
        alt: "中国戏曲元素塔罗牌与包装展示",
        caption: "完整卡组、卡盒与展示场景",
      },
      {
        type: "image",
        src: "/media/projects/opera-tarot/cards-spread.webp",
        alt: "中国戏曲元素塔罗牌卡牌展开",
        caption: "人物牌与象征元素展开",
      },
      {
        type: "image",
        src: "/media/projects/opera-tarot/packaging.webp",
        alt: "中国戏曲元素塔罗牌包装",
        caption: "卡盒与系列包装",
      },
      {
        type: "image",
        src: "/media/projects/opera-tarot/card-layout.webp",
        alt: "中国戏曲元素塔罗牌版式展示",
        caption: "卡面、卡背与边框规则",
      },
      {
        type: "image",
        src: "/media/projects/opera-tarot/process-board.webp",
        alt: "中国戏曲元素塔罗牌过程展板",
        caption: "角色参考与绘制过程",
      },
      {
        type: "video",
        src: "/media/tarot-process.mp4",
        poster: "/media/tarot-process-poster.png",
        alt: "中国戏曲元素塔罗牌制作过程视频",
        caption: "角色从线稿到完成稿的制作过程",
      },
    ],
  },
  {
    id: "argentina-data",
    number: "05",
    title: "从凝视到亲吻",
    subtitle: "2022 年阿根廷队凝聚力信息可视化",
    category: "信息设计",
    overview:
      "以 2022 年阿根廷队为观察对象，把“凝聚力”这一抽象感受拆解为战术结构、跑动覆盖、球员联系与共同庆祝等可阅读线索。两张长幅展板从赛场凝视推进到夺冠亲吻，形成连续叙事。",
    challenge:
      "凝聚力难以被单一指标直接说明，比赛数据、人物关系和情绪瞬间又属于不同信息层级。项目需要在保留足球节奏的同时，避免图表与叙事互相争抢。",
    response:
      "以比赛进程建立阅读主线，将阵型、传递、跑动与人物节点分层编码，再用蓝白国家色、金色冠军线索和红色强调建立视觉路径，让数据证据与情绪高潮在双展板中逐步汇合。",
    highlights: [
      "抽象团队关系转译为多层信息",
      "战术、跑动与人物叙事并置",
      "双展板连续阅读结构",
    ],
    labels: ["DATA", "RELATION", "TACTICS", "EDITORIAL"],
    gallery: [
      {
        type: "image",
        src: "/media/projects/argentina-data.webp",
        alt: "从凝视到亲吻阿根廷队信息可视化双展板",
        caption: "双展板完整叙事",
      },
      {
        type: "image",
        src: "/media/projects/argentina/board-one.webp",
        alt: "从凝视到亲吻信息可视化第一张展板",
        caption: "第一部分：结构、联系与赛场凝视",
      },
      {
        type: "image",
        src: "/media/projects/argentina/board-two.webp",
        alt: "从凝视到亲吻信息可视化第二张展板",
        caption: "第二部分：协作推进与夺冠时刻",
      },
    ],
  },
  {
    id: "mechanical",
    number: "06",
    title: "控制理论与结构原理",
    subtitle: "智能施工物流轨道 / 爬楼梯机器人",
    category: "机械制作",
    overview:
      "课程项目由两部分组成：一套模拟智能工地物流的循环轨道，以及一台以三叶轮和齿轮传动完成楼梯攀爬的机器人。设计从感应、运动机构、实体制作到反复测试，建立对控制与结构关系的直观理解。",
    challenge:
      "轨道需要让红外小车在无人干预下完成照明、分流、桥梁、传送和入库等连续动作；爬楼机器人则要在不用履带和跳跃的条件下，解决抓地、重心、动力与台阶尺度的配合。",
    response:
      "轨道以瓦楞纸和雪弗板搭建智能施工物流场景，通过舵机、电机、灯带和传感装置触发连续机构。机器人从仿生抓附出发，把圆轮改为带齿三叶轮，并以一驱四动齿轮组配合 3D 打印框架完成攀爬。",
    highlights: [
      "循环轨道与多组感应运动机构",
      "智能施工物流主题场景",
      "三叶轮抓地与一驱四动齿轮结构",
      "草模、测试、调整与 3D 打印成型",
    ],
    labels: ["MECHANISM", "TRACK", "FABRICATION", "TESTING"],
    gallery: [
      {
        type: "image",
        src: "/media/projects/mechanical.webp",
        alt: "智能小车轨道和爬楼梯机器人实体原型",
        caption: "两个课程课题的实体成果",
      },
      {
        type: "image",
        src: "/media/projects/mechanical/track-overview.webp",
        alt: "智能施工物流小车轨道全景",
        caption: "循环轨道全景",
      },
      {
        type: "image",
        src: "/media/projects/mechanical/track-detail.webp",
        alt: "智能施工物流轨道结构细节",
        caption: "桥梁、传送与分流机构细节",
      },
      {
        type: "image",
        src: "/media/projects/mechanical/build-process.webp",
        alt: "智能小车轨道制作过程",
        caption: "瓦楞纸结构搭建与测试",
      },
      {
        type: "image",
        src: "/media/projects/mechanical/robot-model.webp",
        alt: "爬楼梯机器人模型",
        caption: "三叶轮机器人整机",
      },
      {
        type: "image",
        src: "/media/projects/mechanical/robot-on-stairs.webp",
        alt: "爬楼梯机器人在台阶上测试",
        caption: "实体台阶攀爬场景",
      },
      {
        type: "image",
        src: "/media/projects/mechanical/gear-detail.webp",
        alt: "爬楼梯机器人齿轮传动细节",
        caption: "一驱四动齿轮传动细节",
      },
    ],
  },
  {
    id: "memory-installation",
    number: "07",
    title: "生长中的记忆",
    subtitle: "记忆主题空间装置",
    category: "空间装置",
    overview:
      "以照片、花材、镜面、石块和灯带构成一处可以靠近观看的记忆场景。材料像从地面向上生长，旧照片被光线重新照亮；日间与夜间两种状态，让同一组个人片段在真实与想象之间切换。",
    challenge:
      "私人记忆容易停留在直接陈列，空间装置需要让观看者通过距离、反射、遮挡和光线主动建立联系，同时保持材料之间的轻重与疏密节奏。",
    response:
      "以石块稳定底部，以枝条和花材向上延展，照片穿插在不同高度；镜面把局部空间和观看者带入作品，暖色灯带在暗环境中串联碎片，使记忆从静态物件变成持续生长的现场。",
    highlights: [
      "照片、花材、镜面与石块混合媒介",
      "观看距离与反射关系设计",
      "日间和亮灯双重空间状态",
    ],
    labels: ["SPACE", "MATERIAL", "MEMORY", "LIGHT"],
    gallery: [
      {
        type: "image",
        src: "/media/projects/memory-installation.webp",
        alt: "生长中的记忆空间装置亮灯状态",
        caption: "装置整体与暖光状态",
      },
      {
        type: "image",
        src: "/media/projects/memory/day.webp",
        alt: "生长中的记忆空间装置日间状态",
        caption: "日间：材料、照片与反射关系",
      },
      {
        type: "image",
        src: "/media/projects/memory/night.webp",
        alt: "生长中的记忆空间装置夜间状态",
        caption: "夜间：灯带串联记忆碎片",
      },
    ],
  },
  {
    id: "aigc-posters",
    number: "08",
    title: "英美松皮炎湿疹海报",
    subtitle: "AIGC 视觉实验",
    category: "视觉实验",
    overview:
      "围绕同一款皮炎湿疹产品，分别建立写实商业广告与像素游戏两条视觉路线。实验关注的不是单张生成结果，而是如何让产品卖点、使用情境、字体和画面风格形成一致的传播语气。",
    challenge:
      "医疗护理产品需要清楚、可信和可阅读，但生成图像容易只追求视觉奇观。两条路线既要显著区分，又必须让产品主体、功能暗示与信息层级保持稳定。",
    response:
      "写实方案以皮肤状态、自然材料和产品质感建立可信度；像素方案把不适与修护转译为游戏关卡和状态变化。通过后期版式整理，把生成素材收束为可比较的成组海报。",
    highlights: [
      "同一产品的双视觉路线对照",
      "写实广告与像素游戏语法",
      "生成素材筛选与后期版式整合",
    ],
    labels: ["AIGC", "POSTER", "ART DIRECTION", "LAYOUT"],
    gallery: [
      {
        type: "image",
        src: "/media/projects/aigc-posters.webp",
        alt: "英美松皮炎湿疹海报写实与像素两种方案",
        caption: "两条视觉路线并置",
      },
      {
        type: "image",
        src: "/media/projects/aigc/realistic-poster.webp",
        alt: "英美松皮炎湿疹写实广告海报",
        caption: "写实商业广告方向",
      },
      {
        type: "image",
        src: "/media/projects/aigc/pixel-poster.webp",
        alt: "英美松皮炎湿疹像素游戏海报",
        caption: "像素游戏化传播方向",
      },
    ],
  },
];
