export const projects = [
  {
    id: "sportloop",
    number: "01",
    title: "SportLoop",
    subtitle: "校园体育器材借用与维护体验系统",
    category: "交互设计",
    summary:
      "面向学生、校队和管理员的双端系统，把器材查询、借还、报损与维护连接成持续更新的状态闭环。",
    facts: [
      { label: "SCOPE", value: "双端网页系统" },
      { label: "METHOD", value: "用户研究 / 信息架构 / 原型" },
      { label: "OUTPUT", value: "学生端 / 管理端 / 交互动效" },
    ],
    heroMedia: {
      type: "image",
      src: "/media/projects/sportloop/student-home.webp",
      alt: "SportLoop 学生端首页",
      caption: "学生端首页：借用状态、场馆信息与核心操作入口",
      deviceFrame: "iphone-16-pro-max",
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
          media: {
            type: "test-results",
            alt: "SportLoop 五名用户测试结果，包含异常操作次数、单次借用耗时和等待期心理确定感评分",
            caption: "5 人可用性测试：异常操作、任务耗时与等待期确定感",
            highlight: {
              value: "26%",
              label: "异常操作中的焦虑型重复点击占比",
            },
            users: ["01", "02", "03", "04", "05"],
            metrics: [
              {
                label: "异常操作",
                values: [1, 4, 5, 1, 2],
                unit: "次",
                max: 5,
              },
              {
                label: "借用耗时",
                values: [58, 52, 61, 62, 51],
                unit: "s",
                max: 70,
              },
              {
                label: "确定感",
                values: [4, 2, 3, 2, 3],
                unit: "/5",
                max: 5,
              },
            ],
          },
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
        deviceFrame: "iphone-16-pro-max",
      },
      {
        type: "image",
        src: "/media/projects/sportloop/interactions/page-transition.webp",
        alt: "SportLoop 从首页切换到器材列表的交互动效",
        caption: "页面切换：首页进入器材列表时保持清楚的空间反馈",
        deviceFrame: "iphone-16-pro-max",
      },
      {
        type: "image",
        src: "/media/projects/sportloop/admin-dashboard.webp",
        alt: "SportLoop 最新管理员工作台",
        caption: "管理员工作台：留言、任务、库存与管理功能集中展示",
        deviceFrame: "iphone-16-pro-max",
      },
      {
        type: "image",
        src: "/media/projects/sportloop/interactions/admin-fan-switch.webp",
        alt: "SportLoop 管理员扇形菜单左右切换动效",
        caption: "管理员扇形菜单：左右滑动切换当前管理模块",
        deviceFrame: "iphone-16-pro-max",
      },
      {
        type: "image",
        src: "/media/projects/sportloop/interactions/admin-page-switch.webp",
        alt: "SportLoop 管理员工作台切换到器材档案的交互动效",
        caption: "管理端页面切换：从工作台进入器材档案",
        deviceFrame: "iphone-16-pro-max",
      },
      {
        type: "image",
        src: "/media/projects/sportloop/interactions/period-select.webp",
        alt: "SportLoop 借用时长选择动效",
        caption: "时长选择：按课程节数更新借用时长",
        deviceFrame: "iphone-16-pro-max",
      },
      {
        type: "image",
        src: "/media/projects/sportloop/interactions/equipment-filter.webp",
        alt: "SportLoop 最新器材分类筛选动效",
        caption: "器材筛选：切换类别后直接更新列表内容",
        deviceFrame: "iphone-16-pro-max",
      },
      {
        type: "image",
        src: "/media/projects/sportloop/profile.webp",
        alt: "SportLoop 最新个人借用档案页面",
        caption: "个人档案：借用状态、归还率、快捷操作与提醒",
        deviceFrame: "iphone-16-pro-max",
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
      "面向独居与轻食场景设计的一体化烹饪系统，把空气炸、炖煮、煎烤和清洗收纳整合进可观察、可拆洗的产品结构。",
    facts: [
      { label: "SCOPE", value: "产品结构 / 用户研究 / CMF" },
      { label: "METHOD", value: "桌面调研 / 竞品分析 / 拆解推导" },
      { label: "OUTPUT", value: "概念草图 / 结构建模 / 场景渲染" },
    ],
    heroMedia: {
      type: "image",
      src: "/media/projects/versa/hero-scene.webp",
      alt: "VERSA 多功能可视化智能空气炸锅厨房使用场景",
      caption: "最终方案：一台机器覆盖空气炸、煮炖、煎烤和直接上桌",
    },
    sections: {
      problem:
        "项目从独居饮食和空气炸锅升级需求出发。传统空气炸锅常见功能单一、烹饪过程不可见、参数依赖经验、清洁和收纳麻烦等问题。VERSA 的目标是减少一人食厨房里的多余器具，让用户从准备、烹饪、上桌到清洗都有连续体验。",
      process: [
        {
          title: "从市场和用户定位切入",
          text:
            "桌面调研先确认空气炸锅从网红单品回到厨房工具的趋势，再把用户聚焦到重视健康、效率和品质的独居人群。项目没有直接从造型开始，而是先明确“少器具、看得见、好清洗、少判断”的使用目标。",
          media: {
            type: "image",
            src: "/media/projects/versa/research-profile.webp",
            alt: "VERSA 空气炸锅用户画像与调研结论",
            caption: "用户定位：从独居饮食习惯、购买关注点和使用痛点归纳机会点",
            fit: "contain",
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
            src: "/media/projects/versa/exploded-view.webp",
            alt: "VERSA 产品结构爆炸渲染",
            caption: "结构推导：热风模块、显示旋钮、玻璃内胆和底部加热组件分层",
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
          title: "用同一个旋钮控制两种模式",
          text:
            "空炸和电煮共用旋钮与屏幕反馈，但流程分别处理。空炸模式重点是时间、温度、暂停和完成提醒；电煮模式重点是档位调节、持续加热和恢复运行，降低用户反复查参数的负担。",
          media: {
            type: "image",
            src: "/media/projects/versa/air-fry-flow.webp",
            alt: "VERSA 空炸模式交互流程",
            caption: "空炸模式：选择食材、调整时间温度、暂停恢复和完成提示",
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
        src: "/media/projects/versa/product-closed.webp",
        alt: "VERSA 多功能可视化智能空气炸锅整机渲染",
        caption: "整机形态：空气炸模块与煮炖模块并列展示",
      },
      {
        type: "image",
        src: "/media/projects/versa/product-open.webp",
        alt: "VERSA 多功能可视化智能空气炸锅分体状态",
        caption: "分体结构：上盖、玻璃内胆、底座和炸篮分开使用",
      },
      {
        type: "image",
        src: "/media/projects/versa/structure-system.webp",
        alt: "VERSA 产品爆炸图与结构标注",
        caption: "爆炸标注：显示、风机、发热管、炸篮、玻璃内胆和加热底座",
      },
      {
        type: "image",
        src: "/media/projects/versa/simmer-flow.webp",
        alt: "VERSA 电煮模式交互流程",
        caption: "电煮模式：调节档位、暂停加热、恢复运行和结束提醒",
      },
      {
        type: "image",
        src: "/media/projects/versa/material-glass.webp",
        alt: "VERSA 材料与细节展示",
        caption: "材料细节：高透视窗、耐热玻璃和防烫隔热保护",
      },
      {
        type: "image",
        src: "/media/projects/versa/countertop-simmer.webp",
        alt: "VERSA 空气炸锅台面煮炖使用场景",
        caption: "日常轻食：透明内胆让食材状态保持可见",
      },
      {
        type: "image",
        src: "/media/projects/versa/party-scene.webp",
        alt: "VERSA 空气炸锅朋友聚餐使用场景",
        caption: "聚餐场景：一台设备完成加热、烤制和直接上桌",
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
        type: "image",
        src: "/media/projects/versa/storage-clean.webp",
        alt: "VERSA 玻璃内胆收纳清洁示意图",
        caption: "收纳闭环：烹饪、上桌、冷藏和清洗共用同一内胆",
      },
      {
        type: "video",
        src: "/media/projects/versa/process.mp4",
        poster: "/media/projects/versa/hero-scene.webp",
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
    facts: [
      { label: "SCOPE", value: "三维造型练习" },
      { label: "METHOD", value: "曲面 / 材质 / 灯光" },
      { label: "OUTPUT", value: "两组场景渲染" },
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
  },
  {
    id: "argentina-data",
    number: "05",
    title: "从凝视到亲吻",
    subtitle: "2022 年阿根廷队凝聚力信息可视化",
    category: "信息设计",
    summary:
      "把抽象的团队凝聚力拆解为战术结构、跑动覆盖、球员联系和情绪节点，形成连续双展板。",
    facts: [
      { label: "SCOPE", value: "信息可视化" },
      { label: "METHOD", value: "系统路径 / 信息编码" },
      { label: "OUTPUT", value: "数据对照 / 双展板" },
    ],
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
  },
  {
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
  },
  {
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
  },
];
