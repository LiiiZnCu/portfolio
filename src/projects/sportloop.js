const project = {
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
};

export default project;
