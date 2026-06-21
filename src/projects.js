export const projects = [
  {
    id: "sportloop",
    number: "01",
    title: "SportLoop",
    subtitle: "校园体育器材借用与维护体验系统",
    category: "交互设计",
    summary:
      "面向学生、校队和管理员的双端系统，把器材查询、借还、报损与维护连接成持续更新的状态闭环。",
    facts: ["双端网页系统", "用户研究 / 信息架构 / 原型", "校园公共服务"],
    heroMedia: {
      type: "image",
      src: "/media/projects/sportloop/student-home.webp",
      alt: "SportLoop 学生端首页",
      caption: "学生端首页：借用状态、场馆信息与核心操作入口",
    },
    sections: {
      problem:
        "校园器材借用存在三个相互关联的问题：普通学生容易到场后才发现器材被借空，校队批量借用需要逐件登记，管理员依赖纸质台账处理库存与损耗。项目目标因此不是增加一个预约入口，而是让使用状态、异常反馈和维护记录在整个借用周期中持续可见。",
      process: [
        {
          title: "三类用户，三种压力",
          text:
            "访谈与实地观察把用户分为临时借用的学生、需要批量预约的球队负责人，以及负责盘点和维护的管理员。三类人的任务不同，但都受到信息不同步影响，这决定了系统必须同时设计学生端和管理端。",
          media: {
            type: "image",
            src: "/media/projects/sportloop/research-users.webp",
            alt: "SportLoop 普通学生、校队负责人和管理员三类用户画像",
            caption: "用户研究：临时借用、批量预约和库存维护对应三种不同压力",
            fit: "contain",
            ratio: "wide",
          },
        },
        {
          title: "从借出记录到维护闭环",
          text:
            "信息架构以“一物一码”为基础，把器材档案、库存状态、扫码借还、报修、盘点和预警串成同一条路径。学生端负责查询与反馈，管理端负责核销、派单和更新状态。",
          media: {
            type: "image",
            src: "/media/projects/sportloop/information-architecture.webp",
            alt: "SportLoop 体育器材借用与维护信息架构",
            caption: "信息架构：建档识别 → 状态查询 → 借还 → 报修 → 盘点 → 预警",
            fit: "contain",
            ratio: "wide",
          },
        },
        {
          title: "让异常在归还时被看见",
          text:
            "核心任务流程覆盖运动前查询、到场扫码、使用、归还检测、异常同步和维护处理。坏器材一旦被反馈便进入维护状态，避免再次被借出。",
          media: {
            type: "image",
            src: "/media/projects/sportloop/task-flow.webp",
            alt: "SportLoop 核心任务流程",
            caption: "学生、系统和管理员在六个阶段中的状态交接",
            fit: "contain",
            ratio: "wide",
          },
        },
        {
          title: "用测试结果校正反馈强度",
          text:
            "5 名用户完成借用任务后，焦虑导致的重复点击占异常操作的 26%，单次任务约需 51—62 秒，操作确定感评分集中在 2—4 分。迭代因此加强按钮反馈、状态提示与页面切换，并补充缓存、设备适配、账号保存、NFC 批量录入和报修反馈。",
        },
      ],
      solution:
        "最终方案提供库存与质量状态、预约和扫码借还、批量器材申请、归还前检测、快速报修和管理端工单。学生端以白底与酒红强调主要操作；管理端使用深色工作台集中展示库存、任务和维护信息。",
      outcome:
        "项目完成了学生端、管理员端、关键状态与核心交互原型，并建立从借用可感知、异常可反馈到维护可追踪的服务逻辑。",
    },
    gallery: [
      {
        type: "image",
        src: "/media/projects/sportloop/equipment-detail.webp",
        alt: "SportLoop 器材详情与借用时长选择",
        caption: "器材详情：借用规则、时长选择与 NFC 入库状态",
      },
      {
        type: "image",
        src: "/media/projects/sportloop/interactions/button-feedback.webp",
        alt: "SportLoop 按钮点击与操作反馈动效",
        caption: "点击反馈：主要操作在触发后立即给出明确响应",
      },
      {
        type: "image",
        src: "/media/projects/sportloop/interactions/admin-carousel.webp",
        alt: "SportLoop 管理端环形功能切换动效",
        caption: "管理端环形切换：在有限空间内快速进入常用任务",
      },
      {
        type: "image",
        src: "/media/projects/sportloop/interactions/pull-refresh.webp",
        alt: "SportLoop 管理端下拉刷新动效",
        caption: "下拉刷新：及时同步器材库存和维护任务状态",
      },
      {
        type: "image",
        src: "/media/projects/sportloop/interactions/equipment-filter.webp",
        alt: "SportLoop 器材分类筛选动效",
        caption: "器材筛选：按类别缩小范围并保持可借状态清晰可见",
      },
      {
        type: "image",
        src: "/media/projects/sportloop/interactions/borrow-flow.webp",
        alt: "SportLoop 器材借用流程动效",
        caption: "借用流程：从列表进入任务，并在操作后获得结果反馈",
      },
      {
        type: "image",
        src: "/media/projects/sportloop/interactions/loan-status.webp",
        alt: "SportLoop 当前借用状态动效",
        caption: "借用状态：集中查看当前任务、期限和归还进度",
      },
    ],
  },
  {
    id: "versa",
    number: "02",
    title: "VERSA",
    subtitle: "多功能可视化智能空气炸锅设计",
    category: "产品设计",
    summary:
      "为一人食场景设计的多功能烹饪系统，把空气炸、炖煮与煎烤整合进可观察、可拆洗的产品结构。",
    facts: ["产品结构与制造", "Rhino / KeyShot / CMF", "小组课程项目"],
    heroMedia: {
      type: "image",
      src: "/media/projects/versa/product-closed.webp",
      alt: "VERSA 多功能可视化智能空气炸锅分体状态",
      caption: "整机模块：上部热风模块、透明玻璃内胆与底部加热底座",
    },
    sections: {
      problem:
        "传统空气炸锅常见功能单一、烹饪过程不可视、参数依赖经验和清洁不便等问题。对独居用户而言，产品还需要减少占用空间和配件数量，并能同时支持快速空气炸与日常煮炖。",
      process: [
        {
          title: "从准备到收纳的用户旅程",
          text:
            "用户旅程把体验拆成准备、备菜、使用和收拾四个阶段。食材处理负担、烹饪过程不可见、参数判断困难和清洁繁琐是负面情绪最集中的节点，因此可视内胆、易清洁与低门槛控制被设为核心需求。",
          media: {
            type: "image",
            src: "/media/projects/versa/user-journey.webp",
            alt: "VERSA 空气炸锅用户旅程图",
            caption: "用户旅程：观察各阶段的行为、触点、情绪和机会点",
            fit: "contain",
            ratio: "wide",
          },
        },
        {
          title: "一套结构，两种加热方式",
          text:
            "顶部发热管与风机负责高速热风循环，底部陶瓷加热结构负责持续煎煮。透明高硼硅玻璃内胆既提供烹饪观察窗口，也可以拆下直接上桌和清洗。",
          media: {
            type: "image",
            src: "/media/projects/versa/structure-system.webp",
            alt: "VERSA 产品爆炸图与 CMF",
            caption: "结构与 CMF：发热、风机、显示、玻璃内胆、隔热和底部加热组件",
            fit: "contain",
            ratio: "wide",
          },
        },
        {
          title: "旋钮控制两种模式",
          text:
            "空炸和电煮共享旋钮与屏幕反馈，但保留不同的参数逻辑。旋转用于查看或调节，短按暂停与恢复，长按取消；语音提示和食谱建议作为辅助层降低设置负担。",
          media: {
            type: "image",
            src: "/media/projects/versa/interaction-flow.webp",
            alt: "VERSA 空炸模式交互流程",
            caption: "空炸模式的选择、调整、暂停和完成流程",
            fit: "contain",
            ratio: "wide",
          },
        },
      ],
      solution:
        "产品以紧凑的上下模块形成 Air Fry、Simmer、Sear 三类烹饪能力，采用旋钮、TFT 屏幕、语音提醒和食谱辅助。CMF 使用浅灰白外壳、烟茶色玻璃、深灰硅胶和金属结构，强调耐用、可观察和易清洁。",
      outcome:
        "项目完成用户研究、结构原理、交互流程、整机建模、结构爆炸、CMF 和产品动态展示。",
    },
    gallery: [
      {
        type: "image",
        src: "/media/projects/versa/product-open.webp",
        alt: "VERSA 打开状态",
        caption: "透明内胆与分体使用方式",
      },
      {
        type: "image",
        src: "/media/projects/versa/exploded-view.webp",
        alt: "VERSA 产品结构爆炸渲染",
        caption: "结构爆炸渲染：热风、显示、加热与玻璃内胆组件",
      },
      {
        type: "image",
        src: "/media/projects/versa/material-glass.webp",
        alt: "VERSA 高硼硅玻璃内胆材质细节",
        caption: "材料细节：可观察、可拆洗的高硼硅玻璃内胆",
      },
      {
        type: "video",
        src: "/media/projects/versa/process.mp4",
        poster: "/media/projects/versa/product-closed.webp",
        alt: "VERSA 空气炸锅使用演示视频",
        caption: "产品动态展示：整机形态、旋钮与透明内胆",
      },
    ],
  },
  {
    id: "arc-blade",
    number: "03",
    title: "弧刃",
    subtitle: "小刀三维建模与场景渲染练习",
    category: "三维设计",
    summary:
      "围绕弧形轮廓、金属刃面和握柄转折，练习产品曲面、材质、灯光与环境叙事。",
    facts: ["三维建模与渲染", "产品造型练习", "材质 / 灯光 / 场景"],
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
        "最终使用两套光线：中性棚拍用于确认比例和轮廓，低角度环境光用于突出金属反射与岩石纹理。产品始终保持弧形主线，不依赖复杂装饰。",
      outcome:
        "完成产品建模、材质调整与工作室/环境化两组渲染，形成从形态验证到氛围表达的完整练习。",
    },
    gallery: [],
  },
  {
    id: "opera-tarot",
    number: "04",
    title: "一袭戏服，一种人生",
    subtitle: "中国戏曲元素塔罗牌设计",
    category: "视觉设计",
    summary:
      "把戏曲人物、戏服与道具映射到塔罗牌义，形成像素卡面、卡背和包装系统。",
    facts: ["文化视觉设计", "ComfyUI 参考 / 手绘重构", "卡牌与包装"],
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
  },
  {
    id: "argentina-data",
    number: "05",
    title: "从凝视到亲吻",
    subtitle: "2022 年阿根廷队凝聚力信息可视化",
    category: "信息设计",
    summary:
      "把抽象的团队凝聚力拆解为战术结构、跑动覆盖、球员联系和情绪节点，形成连续双展板。",
    facts: ["信息可视化", "足球数据与叙事", "双展板"],
    heroMedia: {
      type: "image",
      src: "/media/projects/argentina/system-path.webp",
      alt: "阿根廷队凝聚力战术系统拆解",
      caption: "把凝聚力拆解为可观察的任务、承接、推进与覆盖模块",
      fit: "contain",
      ratio: "portrait",
    },
    sections: {
      problem:
        "凝聚力无法由单一指标直接说明，比赛数据、球员关系和情绪瞬间又属于不同信息层级。项目需要找到一条能让数据证据和叙事情绪共同推进的阅读路径。",
      process: [
        {
          title: "用位置、连线和节奏编码关系",
          text:
            "以比赛进程作为主线，把阵型、传递、跑动覆盖和人物节点分层编码。蓝白用于建立国家队身份，金色标记冠军线索，红色只强调关键情绪和关系变化。",
          media: {
            type: "image",
            src: "/media/projects/argentina/information-encoding.webp",
            alt: "阿根廷队信息可视化编码局部",
            caption: "信息编码：球员任务、空间位置与团队输出的关系",
            fit: "contain",
            ratio: "wide",
          },
        },
      ],
      solution:
        "双展板采用连续叙事而非独立海报：第一部分建立球队结构和联系，第二部分让协作、庆祝与夺冠时刻逐步汇合。图表、人物与文字共享同一条视觉路径。",
      outcome:
        "项目最终形成连续双展板。网页不直接堆放整张展板，而是拆出中场热区、角色关系、协同对照和比赛趋势等局部，让结论仍能在屏幕上被清楚阅读。",
    },
    gallery: [
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
        ratio: "portrait",
      },
    ],
  },
  {
    id: "mechanical",
    number: "06",
    title: "控制理论与结构原理",
    subtitle: "智能施工物流轨道 / 爬楼梯机器人",
    category: "机械制作",
    summary:
      "用循环轨道和三叶轮爬楼机器人理解传感、运动机构、动力与实体测试之间的关系。",
    facts: ["控制与结构课程", "实体模型 / 3D 打印", "传感与机械结构"],
    heroMedia: {
      type: "image",
      src: "/media/projects/mechanical/track-overview.webp",
      alt: "智能施工物流小车轨道全景",
      caption: "模拟现代工地内部物流的循环轨道",
      fit: "cover",
      ratio: "wide",
    },
    sections: {
      problem:
        "轨道需要让红外小车在无人干预下连续触发照明、分流、桥梁、传送和入库等机构；爬楼机器人则要在不用履带和跳跃的条件下，协调抓地、重心、动力与台阶尺度。",
      process: [
        {
          title: "先用草图安排路线与机构",
          text:
            "轨道草图同时规划小车路线、装置位置和触发顺序。智能施工物流主题把各机构对应为夜间照明、货物分流、塔桥限行、传送带和仓库闸门。",
          media: {
            type: "image",
            src: "/media/projects/mechanical/design-sketch.webp",
            alt: "智能小车轨道设计草图",
            caption: "轨道路径、感应装置和运动机构的初步推演",
            fit: "contain",
            ratio: "wide",
          },
        },
        {
          title: "实体制作暴露结构问题",
          text:
            "瓦楞纸与雪弗板用于快速搭建，测试中不断调整桥梁、支架、传送和传感位置，直到小车能完成多个装置的连续循环。",
          media: {
            type: "image",
            src: "/media/projects/mechanical/process-track.webp",
            alt: "智能小车轨道模型制作过程",
            caption: "从设计、搭建、调整到循环测试的四个阶段",
            fit: "contain",
            ratio: "wide",
          },
        },
        {
          title: "三叶轮抓住台阶边缘",
          text:
            "爬楼车从多足生物的抓附动作获得灵感，把圆轮改为带齿三叶轮。电机驱动主齿轮，通过多组齿轮实现一驱四动；3D 打印框架保证结构精度。",
          media: {
            type: "image",
            src: "/media/projects/mechanical/robot-structure.webp",
            alt: "爬楼梯机器人结构说明",
            caption: "主体框架、齿轮传动和三叶轮抓地结构",
            fit: "contain",
            ratio: "wide",
          },
        },
      ],
      solution:
        "两个课题都以“先假设、再制作、靠测试修正”为方法。轨道把传感与机构隐藏在场景中，机器人则通过齿轮、三叶轮和重心配合完成台阶攀爬。",
      outcome:
        "最终小车能够循环通过多组感应机构；爬楼机器人完成小模型验证和 3D 打印大模型，并在真实台阶上完成攀爬。",
    },
    gallery: [
      {
        type: "image",
        src: "/media/projects/mechanical/track-detail.webp",
        alt: "智能施工物流轨道机构细节",
        caption: "轨道机构：桥梁、传送与感应装置的实体组合",
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
        caption: "传动细节：电机、齿轮组与轮轴连接",
      },
      {
        type: "image",
        src: "/media/projects/mechanical/robot-on-stairs.webp",
        alt: "爬楼梯机器人在台阶上测试",
        caption: "三叶轮机器人在实体台阶上的攀爬结果",
      },
    ],
  },
  {
    id: "memory-installation",
    number: "07",
    title: "生长中的记忆",
    subtitle: "记忆主题空间装置",
    category: "空间装置",
    summary:
      "照片、花材、镜面、石块与灯带共同构成一处在日间和夜间发生变化的记忆场景。",
    facts: ["空间装置", "混合媒介", "材料与灯光"],
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
  },
  {
    id: "aigc-posters",
    number: "08",
    title: "英美松皮炎湿疹海报",
    subtitle: "AIGC 视觉实验",
    category: "视觉实验",
    summary:
      "同一护理产品分别采用写实广告和像素游戏两种视觉语言，比较生成素材如何被转译为商业海报。",
    facts: ["AIGC 海报", "双视觉路线", "生成与后期版式"],
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
  },
];
