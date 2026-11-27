/* =========================================================
   THE FOUNDATION // 基石 — Interactive Archive Application
   ========================================================= */

const CHARACTERS = [
  {
    id: "01",
    code: "YOUNG DEATH",
    oxymoron: ["YOUNG", "DEATH"],
    cnTitle: "年轻的死亡 · 芬诺拉（Fionnuala）& 造物「本有」",
    shortCn: "芬诺拉 · 本有",
    stance: "温和哀悼派（被斥“怀柔把戏”）",
    isHawk: false,
    timeWindow: "00:02 - 00:29",
    seekSeconds: 18,
    seekLabel: "00:18",
    portrait: "web/assets/char_01_portrait.jpg",
    sheet: "web/assets/sheets/sheet_01_young_death.png",
    sheetNotes: "包含共生正面、蓝袍背部剪裁与芬诺拉圣女独照、跪祈侧面、铁面与圣女特写、骨骼胸腔坍缩星核「本有（Ereignis）」、双银匕首、白花十字胸针与三重荆棘贯穿徽记。",
    sheetSpecs: ["Codex gpt-6.2-astra", "1672×941 PNG", "4K 多视角拆解", "含个人徽记与双刃武装"],
    visuals: [
      { label: "圣女祈祷立绘", src: "web/assets/char_01_portrait.jpg", title: "01 YOUNG DEATH · 芬诺拉（Fionnuala）" },
      { label: "繁花石棺巨人", src: "web/assets/scene_coffin.jpg", title: "00:14 繁花石棺中的机械骷髅造物「本有」与坍缩恒星" },
      { label: "圣龛与神庙祭坛", src: "web/assets/scene_altar.jpg", title: "00:25 反置《圣母怜子》圣龛构图与圆形神庙" },
      { label: "Codex 设定三视图", src: "web/assets/sheets/sheet_01_young_death.png", title: "01 YOUNG DEATH · Codex 设定三视图 (1672×941)", contain: true }
    ],
    cipherImg: "web/assets/cipher_01.png",
    etymology: "<strong>拉丁-经院式矛盾修辞：</strong><code>YOUNG</code>（年轻/新生）与 <code>DEATH</code>（死亡/终结）构成直接语义冲撞。1:1 单线宽基石文字与 PV 实证字母 <code>Y,O,U,N,G,D,E,A,T,H</code> 逐位吻合。",
    quote: "“我们曾循光而来，又弃之而去……惹人怜爱的恒星啊，愿你安息，愿你再无枯竭……一如祂的愿。”",
    emblemTitle: "三重交叠荆棘圆环 + 贯穿长枪",
    emblemDesc: "左侧白色徽记由三枚纵向嵌套的荆棘圆环组成，核心是一朵被斜向长枪刺穿的七瓣凋零之花，周围伴随飞翔白鸽与枯骨，象征以“仁慈的终结”解脱恒星永世枯竭之苦。",
    roleTitle: "芬诺拉（Fionnuala）& 巨型造物「本有（Ereignis）」",
    roleDesc: "主线与档案确认该少女名为芬诺拉（代号 Death），可召唤名为「本有」（Ereignis）的蓝袍机械骷髅巨人。巨人先卧于繁花石棺怀抱微型恒星核心；02:58 终局群像中巨人敞开斗篷，芬诺拉足蹬银白骑士甲胄直接伫立于其胸腹中空圣龛之内。"
  },
  {
    id: "02",
    code: "NOSTALGIC FRITH",
    oxymoron: ["NOSTALGIC", "FRITH"],
    cnTitle: "怀旧的安宁 · 阿达希尔（Ardashir）",
    shortCn: "阿达希尔",
    stance: "“皈依者” / 宿命故人",
    isHawk: false,
    timeWindow: "00:30 - 00:49",
    seekSeconds: 36,
    seekLabel: "00:36",
    portrait: "web/assets/char_02_portrait.jpg",
    sheet: "web/assets/sheets/sheet_02_nostalgic_faith.png",
    sheetNotes: "包含正面高领蓝黑礼服剪裁、深蓝垂地背袍视图、左侧侧颜与短双角特写、星盘圆牌链饰（12 时辰刻度与罗马数字）、及纵置 8 字日晷双环徽记拆解。（注：早期绘制稿沿用 Faith 译写，页面已据 4K 实证更正为 NOSTALGIC FRITH）",
    sheetSpecs: ["Codex gpt-6.2-astra", "1672×941 PNG", "星盘银牌链特写", "CV: 金弦 / 河西健吾"],
    visuals: [
      { label: "阿达希尔高清立绘", src: "web/assets/char_02_portrait.jpg", title: "02 NOSTALGIC FRITH · 阿达希尔（Ardashir）" },
      { label: "00:08 阿莱克琉斯线稿", src: "web/assets/scene_cosmos_wireframe.jpg", title: "00:08 跨越黑洞吸积盘的线框持枪战士（阿莱克琉斯 Allectus）" },
      { label: "Codex 设定三视图", src: "web/assets/sheets/sheet_02_nostalgic_faith.png", title: "02 NOSTALGIC FRITH · Codex 设定三视图 (1672×941)", contain: true }
    ],
    cipherImg: "web/assets/cipher_02.png",
    etymology: "<strong>4K 实证勘误（R vs A）：</strong><code>NOSTALGIC</code>（怀旧的）+ <code>FRITH</code>（古英语，意为“和平/安宁/庇护”，与 <i>Enigmata / Nascence</i> 同属古词命名脉络）。早期曾被社区误辨为 <i>Faith</i>，现经 4K 切片与萨卡兹文字表核对确认第二词第 2 位为锐角三角形 <code>R</code>。",
    quote: "“阿莱克琉斯死得其所。现在，他们应该也能在虚空之中听见，听见来自这个宇宙的——”",
    emblemTitle: "双环 8 字莫比乌斯轨道 + 日晷时钟",
    emblemDesc: "右侧徽记呈现纵置“8”字双环轨道，核心嵌入一枚布满放射状指针的精密日晷时钟，对应他对旧日故人的执念与向虚空彼端发出的时间脉冲。",
    roleTitle: "信息态重构肉身的“皈依者”（CV：金弦 / 河西健吾）",
    roleDesc: "00:31 自如白树根系与神经突触般的光丝中重构身躯，自幽蓝水池苏醒（CV 中：金弦 / 日：河西健吾 / 英：Griffyn Bellah / 韩：姜声宇）。面具男称其为“皈依者（The Convert）”，其名 Ardashir 源自波斯萨珊王朝开创者，右肩垂挂刻有星盘刻度与罗马数字的银质圆牌链。"
  },
  {
    id: "03",
    code: "LOGICAL ENIGMATA",
    oxymoron: ["LOGICAL", "ENIGMATA"],
    cnTitle: "逻辑之谜 · 全视之眼荆棘冠冕面具男",
    shortCn: "全视冠冕",
    stance: "戏谑观察家（情报与社会学讽喻者）",
    isHawk: false,
    timeWindow: "00:50 - 01:18",
    seekSeconds: 53,
    seekLabel: "00:53",
    portrait: "web/assets/char_03_portrait.jpg",
    sheet: "web/assets/sheets/sheet_03_logical_enigmata.png",
    sheetNotes: "包含黑西装蓝领带正面（左肩银甲与荆棘半面具）、长风衣背面、数字流听筒侧面特写、金属面具细节、数字蓝光无实体电话听筒与鱼鳔形神经网络徽记拆解。",
    sheetSpecs: ["Codex gpt-6.2-astra", "1672×941 PNG", "金属荆棘面具特写", "数字流听筒道具"],
    visuals: [
      { label: "面具男终局特写", src: "web/assets/char_03_portrait.jpg", title: "03 LOGICAL ENIGMATA · 全视冠冕面具男" },
      { label: "红黑故障数字听筒", src: "web/assets/scene_masked_glitch.jpg", title: "00:56 数字流电话与红黑故障美学" },
      { label: "Codex 设定三视图", src: "web/assets/sheets/sheet_03_logical_enigmata.png", title: "03 LOGICAL ENIGMATA · Codex 设定三视图 (1672×941)", contain: true }
    ],
    cipherImg: "web/assets/cipher_03.png",
    etymology: "<strong>古典复数词根：</strong><code>LOGICAL</code>（逻辑的）搭配 <code>ENIGMATA</code>（<i>Enigma</i> 的拉丁/希腊式复数，意为“多重深奥隐谜”）。凸显其用冰冷数理逻辑解构人类社会与神性谜题的观察者气质。",
    quote: "“的确如此，皈依者。让我看看篡逆者的新把戏。城市，经济，还有……‘文明环带’。好吧，他们的文明，就像镶嵌了中子星的玩具车，很可爱，不是么？”",
    emblemTitle: "鱼鳔形全视之眼 + 机械神经网络生命树",
    emblemDesc: "左侧白色徽记主体是一枚纵向尖椭圆“全视之眼（Vesica Piscis）”，上方延展出犹如人类大脑沟回与集成电路板融合的生命之树。",
    roleTitle: "西装暴徒与“中子星玩具车”毒辣判词",
    roleDesc: "现代黑西装、蓝领带、黑皮手套混搭银色机械左肩甲与覆盖上半张脸的金属荆棘面具。登场手握发光数字代码构成的无实体电话听筒，背景闪现人类进化阶梯、《创造亚当》上帝之指与无头西装职员敞视大厅，将塔卫二文明比作强行塞入“中子星（管理员/源石）”的玩具车。"
  },
  {
    id: "04",
    code: "CONSTRUCTIC SERVITUDE",
    oxymoron: ["CONSTRUCTIC", "SERVITUDE"],
    cnTitle: "建构的臣服 · 黄金星盘与镂空眼罩建筑师",
    shortCn: "测绘建筑师",
    stance: "结构法则测绘师（宇宙尺度的绝对理性）",
    isHawk: false,
    timeWindow: "01:19 - 01:42",
    seekSeconds: 85,
    seekLabel: "01:25",
    portrait: "web/assets/char_04_portrait.jpg",
    sheet: "web/assets/sheets/sheet_04_constructic_servitude.png",
    sheetNotes: "包含墨绿长发高开叉礼服正面、蓝里长袍背面视图、3/4 侧面、右眼镂空金属眼罩与 811288 左肩白带特写、全关节黄金机械右手、Louboutin 式红底高跟鞋及双蛇螺旋柱铅垂徽记。",
    sheetSpecs: ["Codex gpt-6.2-astra", "1672×941 PNG", "肩带编号 811288", "黄金机械义手 + 星盘圆规"],
    visuals: [
      { label: "建筑师高清立绘", src: "web/assets/char_04_portrait.jpg", title: "04 CONSTRUCTIC SERVITUDE · 肩带编号 811288 与黄金义手" },
      { label: "黄金星盘圆规蓝图", src: "web/assets/scene_blueprint.jpg", title: "01:35 黄金星盘机械圆规绘制工程蓝图" },
      { label: "Codex 设定三视图", src: "web/assets/sheets/sheet_04_constructic_servitude.png", title: "04 CONSTRUCTIC SERVITUDE · Codex 设定三视图 (1672×941)", contain: true }
    ],
    cipherImg: "web/assets/cipher_04.png",
    etymology: "<strong>双列竖排旋正（4K 已旋正紧裁）：</strong>原片中以顺时针 90° 双行竖排浮现。<code>CONSTRUCTIC</code>（建构/造物的）与 <code>SERVITUDE</code>（奴役/绝对臣服）并置；此外角色左肩白带印有蓝色数字编号 <code>811288</code>，地面蓝图右侧标有 <code>2/ 1234567890</code>。",
    quote: "“可爱？多余的注视。塔卫二和泰拉，不过是宏大结构下的微尘。而管理员与源石，唯此二者，与祂平齐。”",
    emblemTitle: "双蛇螺旋柱体 + 测绘准星与黄金铅垂",
    emblemDesc: "右侧徽记以极窄垂直石柱框定，内部两条波浪曲线如同赫尔墨斯双蛇杖般缠绕中心十字准星，顶端悬挂尖锐建筑铅垂（Plumb-bob）。",
    roleTitle: "红底高跟鞋与爆出世界观核心铁律的测绘师",
    roleDesc: "墨绿长发，右眼佩戴精美镂空金属网纹眼罩，终局特写露出红色左眼与带尖牙的冷笑。身穿高开叉黑裙踩 Louboutin 式红底高跟鞋、右手为全关节黄金机械义手。她完全蔑视凡人星球，却一锤定音“管理员与源石，唯此二者，与祂平齐”。"
  },
  {
    id: "05",
    code: "TIMELESS NASCENCE",
    oxymoron: ["TIMELESS", "NASCENCE"],
    cnTitle: "永恒的新生 · 莫比乌斯银环与星芒瞳少女",
    shortCn: "莫比乌斯少女",
    stance: "跨宇宙轮回观测者（天真而残酷）",
    isHawk: false,
    timeWindow: "01:43 - 02:05",
    seekSeconds: 109,
    seekLabel: "01:49",
    portrait: "web/assets/char_05_portrait.jpg",
    sheet: "web/assets/sheets/sheet_05_timeless_nascence.png",
    sheetNotes: "包含学院风蓝黑短外套与荧光镭射飘带正面、背面与蓝色蝴蝶结剪裁、侧面走姿、右眼金色四角星芒瞳与 21 号领带暗纹特写、液态水银 ∞ 莫比乌斯环与对称双柱盾徽。",
    sheetSpecs: ["Codex gpt-6.2-astra", "1672×941 PNG", "星芒瞳 + 21 暗纹", "液态水银 ∞ 环道具"],
    visuals: [
      { label: "星芒少女立绘", src: "web/assets/char_05_portrait.jpg", title: "05 TIMELESS NASCENCE · 金芒星瞳与 21 号领带暗纹" },
      { label: "盐湖白色方椅对坐", src: "web/assets/scene_two_chairs.jpg", title: "02:01 镜面盐湖对坐奇点黑洞绅士" },
      { label: "奇点绅士特写", src: "web/assets/scene_singularity_host.jpg", title: "01:46 水银莫比乌斯环后的燕尾服奇点绅士" },
      { label: "Codex 设定三视图", src: "web/assets/sheets/sheet_05_timeless_nascence.png", title: "05 TIMELESS NASCENCE · Codex 设定三视图 (1672×941)", contain: true }
    ],
    cipherImg: "web/assets/cipher_05.png",
    etymology: "<strong>连字紧凑排版典范：</strong><code>TIMELESS</code>（超越时间/永恒）+ <code>NASCENCE</code>（初生/降生之始）。其中 <code>NA</code>、<code>SC</code>、<code>NC</code> 存在显著连字压缩。角色白色胸带下露出的深蓝里衣亦印有 <code>21</code> 字样暗纹。",
    quote: "“终于可以离开了吗？太好了！冒险——还要继续下去呢！晚安咯，不知名的宇宙。但愿下一次，你能降生在我身边。”",
    emblemTitle: "对称巨型双柱盾徽 + 四角星芒与双向 ∞",
    emblemDesc: "右侧徽记上下呈厚重白柱包裹结构，中央盾徽内嵌四角星芒与双向箭头的无穷大莫比乌斯闭环，象征无限重启的宇宙周期。",
    roleTitle: "与奇点黑洞绅士对坐告别的跨周期旅人",
    roleDesc: "银白短发、白过膝袜乐福鞋配学院风外套，右眼瞳孔中闪烁耀眼的金色四角星芒，背后衣摆带荧光绿与粉紫镭射故障丝带。她把玩着液态水银般流转的无穷环（∞），在纯白盐湖以孩童般的欣喜向整个“不知名的宇宙”道晚安。"
  },
  {
    id: "06",
    code: "RESTORED JUSTICE",
    oxymoron: ["RESTORED", "JUSTICE"],
    cnTitle: "复归的正义 · 苍蓝日珥光环四翼审判骑士",
    shortCn: "四翼审判骑士",
    stance: "「基石」最高统帅 / 极端鹰派裁决者",
    isHawk: true,
    timeWindow: "02:10 - 03:02",
    seekSeconds: 132,
    seekLabel: "02:12",
    portrait: "web/assets/char_06_portrait.jpg",
    sheet: "web/assets/sheets/sheet_06_restored_justice.png",
    sheetNotes: "包含金发短辫炽天使铠甲正面与四片苍蓝光翼、长披风铠甲背面、战姿侧面、苍蓝火焰光环面部特写、刻字半透明蓝色晶剑（TALOS V 铭文）及哥特双柱巨剑黑日徽记。",
    sheetSpecs: ["Codex gpt-6.2-astra", "1672×941 PNG", "四翼炽天使战甲", "苍蓝日珥 + 刻字晶剑"],
    visuals: [
      { label: "四翼骑士特写", src: "web/assets/char_06_portrait.jpg", title: "06 RESTORED JUSTICE · 拔剑高呼宣战判词" },
      { label: "剑指 TALOS V 日蚀", src: "web/assets/scene_talos_v.jpg", title: "02:24 蓝色晶剑直指天穹浮现 TALOS V" },
      { label: "苍白万手圣殿俯瞰", src: "web/assets/scene_cathedral.jpg", title: "02:48 苍白万手托举阶梯与轨道十字剑" },
      { label: "Codex 设定三视图", src: "web/assets/sheets/sheet_06_restored_justice.png", title: "06 RESTORED JUSTICE · Codex 设定三视图 (1672×941)", contain: true }
    ],
    cipherImg: "web/assets/cipher_06.png",
    etymology: "<strong>裁决者修辞：</strong><code>RESTORED</code>（复归/重建）+ <code>JUSTICE</code>（正义/法度，首尾 <code>RE</code> 与 <code>CE</code> 为连字结构）。其右袖蓝布与蓝色晶剑剑身表面亦清晰蚀刻着基石文字与同心星环铭文。",
    quote: "“够了！正是这些怀柔的把戏才让篡逆者夺得了先机。新生的文明迟早会认清现实——造物，从不具备造主的视野。我们终会成为万灵存在之基石。祂的愿景，必须实现。如果这意味着……可悲的战争还将继续，那就让群星，熄灭殆尽！”",
    emblemTitle: "哥特双柱巨剑图腾 + 燃烧黑洞太阳",
    emblemDesc: "全片体量最磅礴的徽记——垂直耸立宛如哥特教堂正立面与巨剑剑格的合体，剑心镶嵌一轮迸发锯齿烈焰的黑色日蚀（Black Sun）。",
    roleTitle: "一剑斩断怀柔、号令群星熄灭的最高统帅",
    roleDesc: "金色短辫女武神，身着黑蓝战甲与银白雕花重甲，展开四片巨大石雕机械羽翼，头顶燃烧苍蓝日珥火焰光环。伴随黑白半调闪烁登场，统率低阶天使军团并降下三柄轨道蓝光巨剑，居于终局群像最高台阶的绝对统治位。"
  }
];

const CIPHER_MATRIX = [
  { num: "01", left: "YOUNG", right: "DEATH", cn: "年轻的死亡 · 芬诺拉 & 本有", img: "web/assets/cipher_01.png", note: "新生与死寂的合题：替恒星咏唱免于枯竭的挽歌。" },
  { num: "02", left: "NOSTALGIC", right: "FRITH", cn: "怀旧的安宁 · 阿达希尔", img: "web/assets/cipher_02.png", note: "4K 逐帧与萨卡兹文字核对确认为 FRITH（古英语：安宁/庇护）。" },
  { num: "03", left: "LOGICAL", right: "ENIGMATA", cn: "逻辑之谜 · 全视冠冕", img: "web/assets/cipher_03.png", note: "Enigmata 为拉丁复数，象征理性计算背后深不可测的隐谜。" },
  { num: "04", left: "CONSTRUCTIC", right: "SERVITUDE", cn: "建构的臣服 · 测绘建筑师", img: "web/assets/cipher_04.png", note: "90°竖排转正 + 肩牌 811288 + 蓝图 2/ 1234567890。" },
  { num: "05", left: "TIMELESS", right: "NASCENCE", cn: "永恒的新生 · 莫比乌斯少女", img: "web/assets/cipher_05.png", note: "NA/SC/NC 连字：以无尽宇宙重启超越线性时间。" },
  { num: "06", left: "RESTORED", right: "JUSTICE", cn: "复归的正义 · 四翼审判骑士", img: "web/assets/cipher_06.png", note: "RE/CE 连字：重申造主秩序至高无上，不惜重燃星海圣战。" }
];

const PALETTES = {
  foundation: {
    manifesto: "<strong>「基石」绝对零度蓝白谱：</strong>灵感源于伊夫·克莱因（Yves Klein）追求非物质精神空间的克莱因蓝，搭配雪花石膏白与极夜黑，营造超越凡人温度的绝对理智与神殿圣洁感；仅在红底高跟鞋、故障屏闪与天体星盘中克制渗入猩红与黄铜金作为危险/神性破色。",
    isYellow: false,
    swatches: [
      { hex: "#002FA7", name: "YVES KLEIN BLUE", role: "超域法则 · 黑洞吸积盘与全员斗篷" },
      { hex: "#F0F4FA", name: "ALABASTER WHITE", role: "古典雕塑 · 神庙柱廊与万手祭坛" },
      { hex: "#05070D", name: "ABYSSAL BLACK", role: "深空宇宙 · 肃穆正装与绝对暗影" },
      { hex: "#CDB272", name: "ASTROLABE GOLD", role: "测绘神性 · 黄铜圆规、铅垂与星芒瞳" },
      { hex: "#BC1C26", name: "LOUBOUTIN CRIMSON", role: "危险警示 · 红底高跟鞋与故障噪点" }
    ]
  },
  endfield: {
    manifesto: "<strong>「终末地工业」安全黄重工业谱（对照）：</strong>代表塔卫二文明环带与开拓者的实用主义视觉系统——以高可见度警示黄（Hazard Yellow）与工业灰白象征协议基建、工程安全线、机械实用性与人类挣扎求生的人间烟火，在「基石」PV 中被彻底剥除。",
    isYellow: true,
    swatches: [
      { hex: "#F2C900", name: "HAZARD YELLOW", role: "工业安全 · 警戒标线与工程机甲主色" },
      { hex: "#D6DCE5", name: "INDUSTRIAL TITANIUM", role: "合金外壳 · 协议核心与基建结构" },
      { hex: "#1B1F26", name: "CARBON CHASSIS", role: "重工涂装 · 战术护甲与机械骨架" },
      { hex: "#5C687A", name: "CONCRETE SLATE", role: "荒野开拓 · 文明环带与前哨站建材" },
      { hex: "#E5532D", name: "SIGNAL ORANGE", role: "作业预警 · 能源输送与热能指示" }
    ]
  }
};

const ART_HISTORY_CARDS = [
  {
    act: "ACT 01 // 00:14 - 00:29",
    cat: "sculpture",
    ref: "MICHELANGELO PIETÀ × MEDIEVAL RELIQUARY",
    title: "反置《圣母怜子》与中世纪活体圣物匣",
    img: "web/assets/scene_altar.jpg",
    desc: "颠覆圣母怀抱垂死基督的古典构图，改为祈祷圣女跪伏于高大铁面机械骷髅“圣像”双膝之间，并在片尾直接立于巨人敞开的胸腹空腔圣龛中，呼应镶嵌圣骨的机械圣物匣。"
  },
  {
    act: "ACT 01 // 00:14",
    cat: "sculpture",
    ref: "GOTHIC SARCOPHAGUS × COLLAPSING STAR",
    title: "繁花石棺中的恒星收殓仪式",
    img: "web/assets/scene_coffin.jpg",
    desc: "机械骷髅巨人仰卧在白花簇拥的古老石棺内，金属镂空肋骨之间双手轻捧一颗正在坍缩的蓝白恒星黑洞，将宇宙天体物理学转化为中世纪圣徒葬礼。"
  },
  {
    act: "ACT 03 // 00:56 - 01:02",
    cat: "architecture",
    ref: "FOUCAULT PANOPTICON × CREATION OF ADAM",
    title: "敞视监狱办公厅与《创造亚当》拼贴",
    img: "web/assets/scene_masked_glitch.jpg",
    desc: "红黑故障屏闪中并置人类进化阶梯与米开朗基罗《创造亚当》上帝指尖；随后切入百名无头西装职员在中心黑洞凝视下整齐端坐的环形大厅，直指现代经济规训的荒诞。"
  },
  {
    act: "ACT 04 // 01:30 - 01:41",
    cat: "architecture",
    ref: "BRUTALISM × RENAISSANCE ASTROLABE",
    title: "粗野主义十字巨构与黄铜星盘圆规",
    img: "web/assets/scene_blueprint.jpg",
    desc: "巨型冰冷混凝土十字架天桥与精密刻字的黄铜星盘机械圆规形成跨世纪空间对撞，将行星、塔卫二与源石全部简化为图纸上可被丈量、受铅垂约束的工程构件。"
  },
  {
    act: "ACT 05 // 01:59 - 02:04",
    cat: "cosmos",
    ref: "MAGRITTE SURREALISM × KERR BLACK HOLE",
    title: "镜面盐湖对坐与相对论克尔黑洞",
    img: "web/assets/scene_two_chairs.jpg",
    desc: "天水一色的纯白镜面盐湖之上两把极简白色方椅遥相对峙，头顶高悬带有引力透镜效应的蓝紫克尔黑洞；超现实主义的静谧感包裹着宇宙重启前的温柔告别。"
  },
  {
    act: "ACT 06 // 02:32 & 02:48",
    cat: "sculpture",
    ref: "TRAJAN'S COLUMN × RODIN GATES OF HELL",
    title: "古罗马蒙眼刺矛浮雕与万手巴洛克圣坛",
    img: "web/assets/scene_roman_relief.jpg",
    desc: "石雕浮雕中罗马士兵用左手死死捂住双眼却仍刺出长矛，直观诠释“造物从不具备造主的视野”；而终局殿堂底端挣扎伸出的万千苍白手掌，则致敬罗丹《地狱之门》的痛苦雕塑基座。"
  }
];

const MONTAGE_ACTS = [
  { id: "ch1", time: 2, label: "00:02 - 00:29", title: "01. 恒星挽歌", audio: "空灵钢琴圣咏 + 钟鸣", intensity: 28 },
  { id: "ch2", time: 30, label: "00:30 - 00:49", title: "02. 虚空回响", audio: "深沉弦乐与水滴脉冲", intensity: 44 },
  { id: "ch3", time: 50, label: "00:50 - 01:18", title: "03. 逻辑戏谑", audio: "电子 Glitch 与时钟节拍", intensity: 58 },
  { id: "ch4", time: 79, label: "01:19 - 01:42", title: "04. 星盘测绘", audio: "冷冽机械音墙渐强", intensity: 72 },
  { id: "ch5", time: 103, label: "01:43 - 02:09", title: "05. 宇宙告别", audio: "清脆八音盒与合成器跃动", intensity: 64 },
  { id: "ch6", time: 130, label: "02:10 - 03:11", title: "06. 群星熄灭", audio: "宏大管弦交响 × 重拍摇滚爆发", intensity: 100 }
];

const VIDEO_CHAPTERS = [
  {
    id: 0, start: 0, end: 29.9, btnLabel: "00:02 序幕 · Young Death",
    tag: "CHAPTER 01 // 00:02 - 00:29",
    title: "YOUNG DEATH · 恒星挽歌与共生圣龛",
    quote: "“我们曾循光而来，又弃之而去……惹人怜爱的恒星啊，愿你安息，愿你再无枯竭……一如祂的愿。”",
    analysis: "全片以跨越黑洞的线框持枪骷髅战士开场，切入繁花石棺中捧着坍缩恒星核心的铁面巨人与祈祷黑发圣女。结尾圆形神庙被二维克莱因蓝界面撕裂，奠定信息态重构物质的基调。",
    meta: "CIPHER: YOUNG DEATH  |  MOTIF: INVERTED PIETÀ & RELIQUARY"
  },
  {
    id: 1, start: 30, end: 49.9, btnLabel: "00:30 皈依者 · 阿达希尔",
    tag: "CHAPTER 02 // 00:30 - 00:49",
    title: "NOSTALGIC FRITH · 阿达希尔苏醒",
    quote: "“阿莱克琉斯死得其所。现在，他们应该也能在虚空之中听见，听见来自这个宇宙的——”",
    analysis: "白树根系般的超域光丝聚合为阿达希尔肉身，他披上蓝白斗篷仰望天际黑洞，将千夫长阿莱克琉斯（Allectus）的战死视作向虚空传递坐标的共鸣信标。",
    meta: "CIPHER: NOSTALGIC FRITH  |  IDENTITY: THE CONVERT (皈依者)"
  },
  {
    id: 2, start: 50, end: 78.9, btnLabel: "00:50 逻辑之谜 · 面具男",
    tag: "CHAPTER 03 // 00:50 - 01:18",
    title: "LOGICAL ENIGMATA · 玩具车与敞视大厅",
    quote: "“让我看看篡逆者的新把戏……他们的文明，就像镶嵌了中子星的玩具车，很可爱，不是么？”",
    analysis: "红黑故障特效中，全视之眼面具男凭空握持发光 ASCII 代码电话，在无头职员环形办公厅与人体雕塑展台间，一针见血地道破管理员（中子星）与塔卫二文明（玩具车）的位格差距。",
    meta: "CIPHER: LOGICAL ENIGMATA  |  METAPHOR: NEUTRON STAR IN A TOY CAR"
  },
  {
    id: 3, start: 79, end: 102.9, btnLabel: "01:19 宏大结构 · 建筑师",
    tag: "CHAPTER 04 // 01:19 - 01:42",
    title: "CONSTRUCTIC SERVITUDE · 管理员与源石",
    quote: "“可爱？多余的注视。塔卫二和泰拉，不过是宏大结构下的微尘。而管理员与源石，唯此二者，与祂平齐。”",
    analysis: "红底高跟鞋踏过星盘地砖，无数黄金铅垂自苍穹悬落。戴镂空金属眼罩的墨绿发建筑师操纵黄金星盘圆规测绘蓝图（肩带 811288），确认了管理员与源石同造主平齐的最高位格。",
    meta: "CIPHER: CONSTRUCTIC SERVITUDE  |  ID: 811288  |  SCALE: 2/ 1234567890"
  },
  {
    id: 4, start: 103, end: 129.9, btnLabel: "01:43 镜面告别 · 少女",
    tag: "CHAPTER 05 // 01:43 - 02:09",
    title: "TIMELESS NASCENCE · 莫比乌斯环与盐湖",
    quote: "“终于可以离开了吗？太好了！冒险——还要继续下去呢！晚安咯，不知名的宇宙。但愿下一次，你能降生在我身边。”",
    analysis: "液态水银般流转的无穷大符号（∞）环绕瞳含金色四角星芒的白发少女。在纯白镜面盐湖对坐的奇点黑洞头颅燕尾服绅士随她的“晚安”化作星尘消散。",
    meta: "CIPHER: TIMELESS NASCENCE  |  MOTIF: INFINITY LOOP & SINGULARITY HOST"
  },
  {
    id: 5, start: 130, end: 175.9, btnLabel: "02:10 神圣裁决 · 骑士",
    tag: "CHAPTER 06 // 02:10 - 02:55",
    title: "RESTORED JUSTICE · 那就让群星熄灭殆尽",
    quote: "“够了！正是这些怀柔的把戏才让篡逆者夺得了先机。新生的文明迟早会认清现实——造物，从不具备造主的视野……那就让群星，熄灭殆尽！”",
    analysis: "黑白半调网点炸裂，四翼炽天使女武神拔出刻字晶剑直指天穹浮现 TALOS V。古罗马蒙眼士兵刺矛浮雕与天降三柄蓝光十字巨剑，宣告全面圣战的降临。",
    meta: "CIPHER: RESTORED JUSTICE  |  COORDINATE: TALOS V (塔卫五)"
  },
  {
    id: 6, start: 176, end: 192, btnLabel: "02:56 终局圣殿 · 全员同框",
    tag: "FINALE // 02:56 - 03:11",
    title: "THE PANTHEON · 万灵存在之基石",
    quote: "“我们终会成为万灵存在之基石。祂的愿景，必须实现。”",
    analysis: "六大基石最终全员降临于万手托举的苍白大理石圣殿阶梯之上：左起面具男、建筑师、高阶裁决骑士、阿达希尔、莫比乌斯少女、敞开胸腔纳圣女入龛的铁面巨人。",
    meta: "ENDFIELD SPECIAL VIDEO  |  6 CONSTRUCTS ASSEMBLED"
  }
];

/* -----------------------------
   STATE & DOM REFERENCES
   ----------------------------- */
let activeCharIdx = 0;
let sealRotated = false;
let sealGridVisible = false;
let sealUseSVG = true;
let charCipherMode = "svg";
let matrixCipherMode = "svg";
let activeSheetIdx = 0;
let wbEngine = "svg";
let wbTransform = "normal";
let wbStroke = 8.4;
let activePalette = "foundation";
let activeArtCat = "all";
let pendingSeekTarget = null;

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

/* -----------------------------
   TOAST HELPER
   ----------------------------- */
let toastTimer = null;
function showToast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2400);
}

/* -----------------------------
   COPY TO CLIPBOARD HELPER
   ----------------------------- */
function copyText(text, labelPrefix = "已复制色值") {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(
      () => showToast(`${labelPrefix}: ${text}`),
      () => fallbackCopy(text, labelPrefix)
    );
  } else {
    fallbackCopy(text, labelPrefix);
  }
}

function fallbackCopy(text, labelPrefix = "已复制色值") {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
    showToast(`${labelPrefix}: ${text}`);
  } catch {
    showToast(`${labelPrefix}: ${text}`);
  }
  document.body.removeChild(ta);
}

/* -----------------------------
   LIGHTBOX MODAL
   ----------------------------- */
function openLightbox(src, title) {
  const lb = $("#lightbox");
  $("#lightbox-img").src = src;
  $("#lightbox-img").alt = title || "图像预览";
  $("#lightbox-caption").textContent = title || "图像预览";
  const dl = $("#lightbox-download");
  dl.href = src;
  dl.setAttribute("download", src.split("/").pop());
  lb.classList.add("open");
  lb.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lb = $("#lightbox");
  lb.classList.remove("open");
  lb.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function initLightbox() {
  $("#lightbox-close").addEventListener("click", closeLightbox);
  $("#lightbox-backdrop").addEventListener("click", closeLightbox);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && $("#lightbox").classList.contains("open")) {
      closeLightbox();
    }
  });
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-lightbox-src], .js-open-lb");
    if (!trigger) return;
    const src = trigger.dataset.lightboxSrc || trigger.dataset.src;
    const title = trigger.dataset.lightboxTitle || trigger.dataset.title;
    if (src) openLightbox(src, title);
  });
}

/* -----------------------------
   01. CANVAS COSMOS ORBITS & SCROLL TELEMETRY
   ----------------------------- */
function initCosmosCanvas() {
  const canvas = $("#cosmos-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let w = 0, h = 0, t = 0;

  const stars = Array.from({ length: 75 }, () => ({
    x: Math.random(),
    y: Math.random(),
    r: Math.random() * 1.4 + 0.4,
    sp: Math.random() * 0.00025 + 0.00008,
    a: Math.random() * 0.6 + 0.2
  }));

  function resize() {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  function frame() {
    t += 0.004;
    ctx.clearRect(0, 0, w, h);

    // Subtle astrolabe concentric orbits centered around top-center angel/eclipse
    const cx = w * 0.5;
    const cy = h * 0.32;
    const radii = [Math.min(w, h) * 0.22, Math.min(w, h) * 0.34, Math.min(w, h) * 0.48];
    radii.forEach((rad, i) => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, rad, 0, Math.PI * 2);
      ctx.strokeStyle = i === 1 ? "rgba(38, 103, 255, 0.28)" : "rgba(240, 244, 250, 0.12)";
      ctx.lineWidth = 1;
      if (i !== 1) ctx.setLineDash([6, 10]);
      ctx.stroke();

      // Orbiting satellite node
      const ang = t * (i % 2 === 0 ? 1 : -0.7) + i * 2.1;
      const sx = cx + Math.cos(ang) * rad;
      const sy = cy + Math.sin(ang) * rad;
      ctx.beginPath();
      ctx.arc(sx, sy, 3.2, 0, Math.PI * 2);
      ctx.fillStyle = i === 1 ? "#2667ff" : "#f0f4fa";
      ctx.fill();
      ctx.restore();
    });

    // Floating stardust
    stars.forEach((s) => {
      s.y -= s.sp;
      if (s.y < 0) s.y = 1;
      ctx.fillStyle = `rgba(240, 244, 250, ${s.a * (0.65 + 0.35 * Math.sin(t * 6 + s.x * 10))})`;
      ctx.fillRect(s.x * w, s.y * h, s.r, s.r);
    });

    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

function initScrollTelemetry() {
  const navLinks = $$(".nav-link");
  const sections = navLinks.map((a) => document.getElementById(a.dataset.section)).filter(Boolean);
  const progressBar = $("#scroll-progress");
  const readout = $("#scroll-readout");
  const heroBg = $("#hero-bg-img");

  function onScroll() {
    const sy = window.scrollY;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const pct = Math.min(100, Math.max(0, Math.round((sy / maxScroll) * 100)));
    progressBar.style.width = `${pct}%`;
    readout.textContent = `${String(pct).padStart(3, "0")}%`;

    // Subtle parallax on hero background
    if (heroBg && sy < window.innerHeight * 1.2) {
      heroBg.style.transform = `scale(${1.03 + sy * 0.00008}) translateY(${sy * 0.14}px)`;
    }

    // Active nav tracking
    let curId = "hero";
    for (const sec of sections) {
      if (sec.getBoundingClientRect().top <= 160) {
        curId = sec.id;
      }
    }
    navLinks.forEach((l) => l.classList.toggle("active", l.dataset.section === curId));
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* -----------------------------
   02. CHARACTER DOSSIER MODULE
   ----------------------------- */
function renderCharTabs() {
  const bar = $("#char-selector-bar");
  bar.innerHTML = CHARACTERS.map((c, idx) => `
    <button type="button" class="char-tab ${c.isHawk ? "hawk" : ""} ${idx === activeCharIdx ? "active" : ""}" data-idx="${idx}" role="tab" aria-selected="${idx === activeCharIdx}">
      <div class="ct-top">
        <span class="ct-num">${c.id}</span>
        <span class="ct-stance-dot" title="${c.stance}"></span>
      </div>
      <div class="ct-en">${c.code}</div>
      <div class="ct-cn">${c.shortCn}</div>
    </button>
  `).join("");
}

function selectCharacter(idx, animate = true) {
  activeCharIdx = (idx + CHARACTERS.length) % CHARACTERS.length;
  const c = CHARACTERS[activeCharIdx];

  // Update tab state
  $$(".char-tab").forEach((b, i) => {
    b.classList.toggle("active", i === activeCharIdx);
    b.setAttribute("aria-selected", i === activeCharIdx ? "true" : "false");
  });

  if (animate) {
    const stage = $("#char-stage");
    stage.classList.remove("glitch-flash");
    void stage.offsetWidth;
    stage.classList.add("glitch-flash");
  }

  // Left visual column
  const mainImg = $("#char-main-img");
  mainImg.src = c.visuals[0].src;
  mainImg.alt = c.visuals[0].title;
  mainImg.classList.toggle("contain-mode", Boolean(c.visuals[0].contain));
  $("#char-badge-num").textContent = c.id;
  $("#char-badge-time").textContent = c.timeWindow;

  const zoomBtn = $("#char-zoom-btn");
  zoomBtn.dataset.lightboxSrc = c.visuals[0].src;
  zoomBtn.dataset.lightboxTitle = c.visuals[0].title;

  const swStrip = $("#char-visual-switches");
  swStrip.innerHTML = c.visuals.map((v, vi) => `
    <button type="button" class="vswitch-btn ${vi === 0 ? "active" : ""}" data-vidx="${vi}">${v.label}</button>
  `).join("");

  swStrip.querySelectorAll(".vswitch-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const v = c.visuals[Number(btn.dataset.vidx)];
      swStrip.querySelectorAll(".vswitch-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      mainImg.src = v.src;
      mainImg.alt = v.title;
      mainImg.classList.toggle("contain-mode", Boolean(v.contain));
      zoomBtn.dataset.lightboxSrc = v.src;
      zoomBtn.dataset.lightboxTitle = v.title;
    });
  });

  // Right info column
  const stanceBadge = $("#char-stance-badge");
  stanceBadge.textContent = c.stance;
  stanceBadge.classList.toggle("hawk", c.isHawk);

  $("#char-code-en").textContent = c.code;
  $("#char-name-cn").textContent = c.cnTitle;

  const svgPane = $("#char-cipher-svg");
  if (svgPane && window.FoundationCipherSVG) {
    svgPane.innerHTML = window.FoundationCipherSVG.renderCipherSVG(c.code, {
      height: 50,
      strokeWidth: 8.4,
      interactive: true
    });
  }
  const fontPane = $("#char-cipher-font");
  if (fontPane) {
    fontPane.textContent = c.code;
  }
  $("#char-cipher-img").src = c.cipherImg;
  syncCharCipherMode();

  $("#char-etymology-drawer").innerHTML = c.etymology;
  $("#char-quote-text").textContent = c.quote;
  $("#char-emblem-title").textContent = c.emblemTitle;
  $("#char-emblem-desc").textContent = c.emblemDesc;
  $("#char-role-title").textContent = c.roleTitle;
  $("#char-role-desc").textContent = c.roleDesc;
  $("#btn-jump-char-label").textContent = `跳转至 PV [${c.seekLabel}] 观看该角色登场片段`;
  $("#btn-jump-char-pv").dataset.seek = String(c.seekSeconds);
}

function syncCharCipherMode() {
  const c = CHARACTERS[activeCharIdx];
  const tabs = $$("#char-cipher-mode-tabs .cm-tab");
  tabs.forEach((b) => b.classList.toggle("active", b.dataset.mode === charCipherMode));

  const svgPane = $("#char-cipher-svg");
  const fontPane = $("#char-cipher-font");
  const rawPane = $("#char-cipher-raw");
  const hoverBar = $("#char-cipher-hover");
  if (!svgPane || !fontPane || !rawPane) return;

  svgPane.classList.toggle("active", charCipherMode === "svg");
  fontPane.classList.toggle("active", charCipherMode === "font-pv" || charCipherMode === "font-solid");
  rawPane.classList.toggle("active", charCipherMode === "raw");

  fontPane.classList.toggle("cipher-font-pv", charCipherMode === "font-pv");
  fontPane.classList.toggle("cipher-font-solid", charCipherMode === "font-solid");

  if (hoverBar) {
    if (charCipherMode === "svg") {
      hoverBar.textContent = `SVG 矢量引擎 // 悬停上方字符核对「${c.code}」逐位字母映射`;
    } else if (charCipherMode === "font-pv") {
      hoverBar.textContent = `内嵌字体：FoundationPVStroke.woff2 // 1:1 PV 细线重构（${c.code}）`;
    } else if (charCipherMode === "font-solid") {
      hoverBar.textContent = `内嵌字体：EndfieldByButan.ttf // 社区萨卡兹古文字体对照（${c.code}）`;
    } else {
      hoverBar.textContent = `RAW 4K CAPTURE // PV 原片无修密码切片（${c.cipherImg.split("/").pop()}）`;
    }
  }
}

function initCharacters() {
  renderCharTabs();
  selectCharacter(0, false);

  $("#char-selector-bar").addEventListener("click", (e) => {
    const tab = e.target.closest(".char-tab");
    if (!tab) return;
    selectCharacter(Number(tab.dataset.idx), true);
  });

  const charModeTabs = $("#char-cipher-mode-tabs");
  if (charModeTabs) {
    charModeTabs.addEventListener("click", (e) => {
      const btn = e.target.closest(".cm-tab");
      if (!btn) return;
      charCipherMode = btn.dataset.mode;
      syncCharCipherMode();
    });
  }

  const charSvgPane = $("#char-cipher-svg");
  if (charSvgPane) {
    const reportGlyph = (e) => {
      const g = e.target.closest(".fg-glyph");
      if (!g || charCipherMode !== "svg") return;
      const ch = g.dataset.char;
      const att = g.dataset.attested === "true";
      $("#char-cipher-hover").textContent = `DECODED GLYPH // 当前指向字母：[${ch}]（${att ? "PV 4K 实证" : "萨卡兹文补完"}）· 源自 ${CHARACTERS[activeCharIdx].code}`;
    };
    charSvgPane.addEventListener("mouseover", reportGlyph);
    charSvgPane.addEventListener("focusin", reportGlyph);
    charSvgPane.addEventListener("mouseleave", () => {
      if (charCipherMode === "svg") syncCharCipherMode();
    });
  }

  $("#btn-toggle-etymology").addEventListener("click", (e) => {
    const drawer = $("#char-etymology-drawer");
    drawer.classList.toggle("open");
    e.currentTarget.classList.toggle("active");
  });

  $("#btn-jump-char-pv").addEventListener("click", (e) => {
    const sec = Number(e.currentTarget.dataset.seek || 0);
    jumpToVideoTime(sec);
  });

  const btnSheet = $("#btn-view-char-sheet");
  if (btnSheet) {
    btnSheet.addEventListener("click", () => {
      selectSheet(activeCharIdx);
      $("#sheets")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  // Keyboard navigation when characters section is in viewport
  document.addEventListener("keydown", (e) => {
    if ($("#lightbox").classList.contains("open")) return;
    const tag = document.activeElement?.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA") return;
    const rect = $("#characters").getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8 && rect.bottom > 100) {
      if (e.key === "ArrowRight") selectCharacter(activeCharIdx + 1, true);
      if (e.key === "ArrowLeft") selectCharacter(activeCharIdx - 1, true);
    }
  });
}

/* -----------------------------
   03. ROSETTA CIPHER LAB & WORKBENCH
   ----------------------------- */
function renderCipherMatrix() {
  const listEl = $("#cipher-matrix-list");
  if (!listEl) return;

  listEl.innerHTML = CIPHER_MATRIX.map((item, idx) => {
    const code = `${item.left} ${item.right}`;
    let visualHTML = "";
    if (matrixCipherMode === "svg" && window.FoundationCipherSVG) {
      visualHTML = `<div class="cr-render-svg">${window.FoundationCipherSVG.renderCipherSVG(code, { height: 28, strokeWidth: 8.6, interactive: false })}</div>`;
    } else if (matrixCipherMode === "font-pv") {
      visualHTML = `<div class="cr-render-font cipher-font-pv">${code}</div>`;
    } else if (matrixCipherMode === "font-solid") {
      visualHTML = `<div class="cr-render-font cipher-font-solid">${code}</div>`;
    } else {
      visualHTML = `<img src="${item.img}" alt="${code}" loading="lazy" />`;
    }
    return `
      <div class="cipher-row ${idx === activeCharIdx ? "active" : ""}" data-idx="${idx}">
        <div class="cr-num">${item.num}</div>
        <div class="cr-img">${visualHTML}</div>
        <div class="cr-text">
          <div class="cr-oxymoron">
            <span>${item.left}</span>
            <span class="oxy-arrow">↔</span>
            <span>${item.right}</span>
          </div>
          <div class="cr-cn">${item.cn} — ${item.note}</div>
        </div>
      </div>
    `;
  }).join("");
}

function initCipherLab() {
  // Hero & TALOS V vector inscriptions
  if (window.FoundationCipherSVG) {
    const heroFrieze = $("#hero-cipher-frieze");
    if (heroFrieze) {
      heroFrieze.innerHTML = window.FoundationCipherSVG.renderCipherSVG("THE FOUNDATION", {
        height: 24,
        strokeWidth: 8.4,
        interactive: true
      });
    }
    const talosSvg = $("#talos-cipher-svg");
    if (talosSvg) {
      talosSvg.innerHTML = window.FoundationCipherSVG.renderCipherSVG("TALOS V", {
        height: 28,
        strokeWidth: 8.8,
        interactive: true
      });
    }
  }

  const sealSvgLayer = $("#seal-svg-layer");
  const sealImg = $("#seal-img");
  const sealGrid = $("#seal-grid-overlay");
  const btnRot = $("#btn-rotate-seal");
  const btnGrid = $("#btn-toggle-grid");
  const btnSealMode = $("#btn-seal-mode");

  if (sealSvgLayer && window.FoundationCipherSVG) {
    sealSvgLayer.innerHTML = window.FoundationCipherSVG.renderFoundationSealSVG();
  }

  function syncSealUI() {
    sealImg.classList.toggle("rotated", sealRotated);
    sealSvgLayer?.classList.toggle("rotated", sealRotated);
    sealSvgLayer?.classList.toggle("active", sealUseSVG);
    sealImg.classList.toggle("active", !sealUseSVG);

    btnRot.classList.toggle("active", sealRotated);
    sealGrid.classList.toggle("visible", sealGridVisible);
    btnGrid.classList.toggle("active", sealGridVisible);
    if (btnSealMode) {
      btnSealMode.classList.toggle("active", sealUseSVG);
      btnSealMode.textContent = sealUseSVG ? "✦ 当前：SVG 矢量印章（点此切 4K 原片）" : "✦ 当前：4K 原片印章（点此切 SVG 矢量）";
    }
  }

  btnRot.addEventListener("click", () => {
    sealRotated = !sealRotated;
    if (!sealRotated && sealGridVisible) {
      sealGridVisible = false;
    }
    syncSealUI();
  });

  btnGrid.addEventListener("click", () => {
    sealGridVisible = !sealGridVisible;
    if (sealGridVisible && !sealRotated) {
      sealRotated = true;
    }
    syncSealUI();
  });

  if (btnSealMode) {
    btnSealMode.addEventListener("click", () => {
      sealUseSVG = !sealUseSVG;
      syncSealUI();
    });
  }
  syncSealUI();

  // Matrix panel mode tabs + list
  renderCipherMatrix();
  const matrixTabs = $("#matrix-mode-tabs");
  if (matrixTabs) {
    matrixTabs.addEventListener("click", (e) => {
      const btn = e.target.closest(".cm-tab");
      if (!btn) return;
      matrixCipherMode = btn.dataset.mode;
      matrixTabs.querySelectorAll(".cm-tab").forEach((b) => b.classList.toggle("active", b === btn));
      renderCipherMatrix();
    });
  }

  const listEl = $("#cipher-matrix-list");
  listEl.addEventListener("click", (e) => {
    const row = e.target.closest(".cipher-row");
    if (!row) return;
    listEl.querySelectorAll(".cipher-row").forEach((r) => r.classList.remove("active"));
    row.classList.add("active");
    const idx = Number(row.dataset.idx);
    const code = `${CIPHER_MATRIX[idx].left} ${CIPHER_MATRIX[idx].right}`;
    selectCharacter(idx, false);
    const inputEl = $("#cipher-live-input");
    if (inputEl) {
      inputEl.value = code;
      inputEl.dispatchEvent(new Event("input"));
    }
    showToast(`已锁定解码项 ${CIPHER_MATRIX[idx].num}: ${code}`);
  });

  initCipherWorkbench();
}

function initCipherWorkbench() {
  const input = $("#cipher-live-input");
  const target = $("#wb-render-target");
  const statusBar = $("#wb-decode-status");
  const presetBox = $("#wb-presets");
  const alphabetGrid = $("#wb-alphabet-grid");
  const strokeSlider = $("#wb-stroke-slider");
  const strokeVal = $("#wb-stroke-val");
  const strokeWrap = $("#wb-stroke-wrap");
  if (!input || !target || !window.FoundationCipherSVG) return;

  const PRESETS = [
    "THE FOUNDATION",
    "YOUNG DEATH",
    "NOSTALGIC FRITH",
    "LOGICAL ENIGMATA",
    "CONSTRUCTIC SERVITUDE",
    "TIMELESS NASCENCE",
    "RESTORED JUSTICE",
    "TALOS V",
    "ENDFIELD",
    "ARDASHIR",
    "FIONNUALA",
    "ALLECTUS",
    "ADMINISTRATOR",
    "811288"
  ];

  function renderWorkbenchOutput() {
    const rawText = (input.value || " ").toUpperCase();
    const stage = $("#wb-output-stage");
    target.classList.remove("tf-rot90", "tf-rot180", "tf-mirror");
    if (wbTransform !== "normal") {
      target.classList.add(`tf-${wbTransform}`);
    }

    if (wbEngine === "svg") {
      target.innerHTML = window.FoundationCipherSVG.renderCipherSVG(rawText, {
        height: 76,
        strokeWidth: wbStroke,
        interactive: true
      });
      strokeWrap?.classList.remove("disabled");
      statusBar.textContent = `SVG RENDER // 原文："${rawText.trim() || "(SPACE)"}"（悬停字符高亮反查拉丁映射）`;
    } else if (wbEngine === "font-pv") {
      target.innerHTML = `<div class="wb-font-sample cipher-font-pv">${rawText}</div>`;
      strokeWrap?.classList.add("disabled");
      statusBar.textContent = `FONT-FACE // FoundationPVStroke.woff2 — 原文："${rawText.trim() || "(SPACE)"}"`;
    } else {
      target.innerHTML = `<div class="wb-font-sample cipher-font-solid">${rawText}</div>`;
      strokeWrap?.classList.add("disabled");
      statusBar.textContent = `FONT-FACE // EndfieldByButan.ttf — 原文："${rawText.trim() || "(SPACE)"}"`;
    }

    if (stage) {
      if (wbTransform === "rot90") {
        requestAnimationFrame(() => {
          const span = Math.max(target.scrollWidth, target.offsetWidth, 180);
          stage.style.minHeight = `${Math.min(720, span + 56)}px`;
        });
      } else {
        stage.style.minHeight = "";
      }
    }

    if (presetBox) {
      presetBox.querySelectorAll(".wb-preset-btn").forEach((b) => {
        b.classList.toggle("active", b.dataset.preset === rawText.trim());
      });
    }
  }

  if (presetBox) {
    presetBox.innerHTML = PRESETS.map((p) => `<button type="button" class="wb-preset-btn" data-preset="${p}">${p}</button>`).join("");
    presetBox.addEventListener("click", (e) => {
      const btn = e.target.closest(".wb-preset-btn");
      if (!btn) return;
      input.value = btn.dataset.preset;
      renderWorkbenchOutput();
    });
  }

  input.addEventListener("input", renderWorkbenchOutput);

  $("#wb-engine-tabs")?.addEventListener("click", (e) => {
    const btn = e.target.closest(".cm-tab");
    if (!btn) return;
    wbEngine = btn.dataset.engine;
    $$("#wb-engine-tabs .cm-tab").forEach((b) => b.classList.toggle("active", b === btn));
    renderWorkbenchOutput();
  });

  $("#wb-transform-tabs")?.addEventListener("click", (e) => {
    const btn = e.target.closest(".cm-tab");
    if (!btn) return;
    wbTransform = btn.dataset.tf;
    $$("#wb-transform-tabs .cm-tab").forEach((b) => b.classList.toggle("active", b === btn));
    renderWorkbenchOutput();
  });

  if (strokeSlider) {
    strokeSlider.addEventListener("input", () => {
      wbStroke = Number(strokeSlider.value);
      if (strokeVal) strokeVal.textContent = wbStroke.toFixed(1);
      renderWorkbenchOutput();
    });
  }

  const updateHover = (e) => {
    const g = e.target.closest(".fg-glyph");
    if (!g || wbEngine !== "svg") return;
    const ch = g.dataset.char;
    const att = g.dataset.attested === "true";
    statusBar.textContent = `DECODED // 当前指向字母：[${ch}] — ${att ? "PV 2.0 4K 实证字符" : "萨卡兹古文字通用表补完字符"}`;
  };
  target.addEventListener("mouseover", updateHover);
  target.addEventListener("focusin", updateHover);
  target.addEventListener("mouseleave", () => {
    if (wbEngine === "svg") {
      statusBar.textContent = `SVG RENDER // 原文："${(input.value || "").toUpperCase().trim()}"（悬停字符高亮反查拉丁映射）`;
    }
  });

  $("#btn-wb-export-svg")?.addEventListener("click", () => {
    const txt = (input.value || "THE FOUNDATION").toUpperCase();
    const xml = window.FoundationCipherSVG.buildStandaloneSVGString(txt, {
      strokeWidth: wbStroke,
      color: "#F0F4FA",
      background: "#05070D"
    });
    const blob = new Blob([xml], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `foundation_${txt.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "") || "cipher"}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast("已生成并下载当前 SVG 矢量铭文文件");
  });

  if (alphabetGrid) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
    alphabetGrid.innerHTML = chars.map((ch) => {
      const g = window.FoundationCipherSVG.GLYPHS[ch];
      const att = Boolean(g?.attested);
      return `
        <button type="button" class="alpha-tile ${att ? "is-attested" : "is-sarkaz"}" data-ch="${ch}" title="点击追加字母 ${ch}">
          <div class="alpha-svg-box">${window.FoundationCipherSVG.renderCipherSVG(ch, { height: 30, strokeWidth: 8.4, interactive: false })}</div>
          <div class="alpha-meta">
            <span class="alpha-latin">${ch}</span>
            <span class="alpha-badge">${att ? "4K PV" : "萨卡兹"}</span>
          </div>
        </button>`;
    }).join("");

    alphabetGrid.addEventListener("click", (e) => {
      const tile = e.target.closest(".alpha-tile");
      if (!tile) return;
      input.value = (input.value + tile.dataset.ch).slice(0, 48);
      renderWorkbenchOutput();
    });
  }

  renderWorkbenchOutput();
}

/* -----------------------------
   04. AESTHETICS CURATION
   ----------------------------- */
function renderPalette(key) {
  activePalette = key;
  const data = PALETTES[key];
  $$(".fswitch-btn").forEach((b) => b.classList.toggle("active", b.dataset.palette === key));

  const row = $("#swatch-row");
  row.innerHTML = data.swatches.map((sw) => `
    <div class="swatch-card" data-hex="${sw.hex}" title="点击复制 ${sw.hex}">
      <div class="swatch-color" style="background:${sw.hex}; border-bottom: 1px solid rgba(255,255,255,0.12);">
        <span class="swatch-copy-hint">COPY</span>
      </div>
      <div class="swatch-meta">
        <div class="swatch-hex">${sw.hex}</div>
        <div class="swatch-name">${sw.name}</div>
        <div class="swatch-role">${sw.role}</div>
      </div>
    </div>
  `).join("");

  const manifesto = $("#palette-manifesto");
  manifesto.innerHTML = data.manifesto;
  manifesto.classList.toggle("yellow-mode", data.isYellow);
}

function renderArtHistory() {
  const grid = $("#art-history-grid");
  grid.innerHTML = ART_HISTORY_CARDS.map((card) => `
    <article class="art-card" data-cat="${card.cat}">
      <div class="art-img-box" data-lightbox-src="${card.img}" data-lightbox-title="${card.act} · ${card.title}">
        <img src="${card.img}" alt="${card.title}" loading="lazy" />
        <span class="art-act-badge">${card.act}</span>
      </div>
      <div class="art-body">
        <span class="art-ref">${card.ref}</span>
        <h4>${card.title}</h4>
        <p>${card.desc}</p>
      </div>
    </article>
  `).join("");
}

function renderMontage() {
  const track = $("#montage-track");
  track.innerHTML = MONTAGE_ACTS.map((m) => `
    <button type="button" class="montage-node" data-seek="${m.time}">
      <span class="mn-time">${m.label}</span>
      <span class="mn-title">${m.title}</span>
      <span class="mn-audio">${m.audio}</span>
      <div class="mn-bar"><div class="mn-fill" style="width:${m.intensity}%"></div></div>
    </button>
  `).join("");

  track.addEventListener("click", (e) => {
    const node = e.target.closest(".montage-node");
    if (!node) return;
    jumpToVideoTime(Number(node.dataset.seek));
  });
}

function initAesthetics() {
  renderPalette("foundation");
  renderArtHistory();
  renderMontage();

  $$(".fswitch-btn").forEach((btn) => {
    btn.addEventListener("click", () => renderPalette(btn.dataset.palette));
  });

  $("#swatch-row").addEventListener("click", (e) => {
    const card = e.target.closest(".swatch-card");
    if (card) copyText(card.dataset.hex);
  });

  $("#ah-filters").addEventListener("click", (e) => {
    const pill = e.target.closest(".filter-pill");
    if (!pill) return;
    activeArtCat = pill.dataset.cat;
    $$(".filter-pill").forEach((p) => p.classList.toggle("active", p === pill));
    $$(".art-card").forEach((card) => {
      card.classList.toggle("hidden", activeArtCat !== "all" && card.dataset.cat !== activeArtCat);
    });
  });
}

/* -----------------------------
   05. VIDEO THEATER & LIVE SYNC
   ----------------------------- */
function formatMMSS(sec) {
  const s = Math.max(0, Math.floor(sec));
  const mm = String(Math.floor(s / 60)).padStart(2, "0");
  const ss = String(s % 60).padStart(2, "0");
  return `${mm}:${ss}`;
}

function jumpToVideoTime(seconds) {
  const theaterEl = $("#theater");
  const video = $("#pv-video");
  theaterEl.scrollIntoView({ behavior: "smooth", block: "start" });

  pendingSeekTarget = seconds;
  updateLiveCommentary(seconds);
  const dur = Number.isFinite(video.duration) && video.duration > 0 ? video.duration : 191;
  $("#lc-clock").textContent = `${formatMMSS(seconds)} / ${formatMMSS(dur)}`;

  const applySeek = () => {
    try {
      video.currentTime = seconds;
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {
          showToast(`已精准定位至 ${formatMMSS(seconds)}，点击播放器即可播放`);
        });
      }
    } catch {
      pendingSeekTarget = null;
      showToast(`已定位至 ${formatMMSS(seconds)}`);
    }
  };

  if (video.readyState >= 1) {
    applySeek();
  } else {
    video.addEventListener("loadedmetadata", applySeek, { once: true });
    video.load();
  }
}

function updateLiveCommentary(t) {
  let active = VIDEO_CHAPTERS[0];
  for (const ch of VIDEO_CHAPTERS) {
    if (t >= ch.start && t <= ch.end) {
      active = ch;
      break;
    }
  }
  $$(".chap-pill").forEach((p) => p.classList.toggle("active", Number(p.dataset.cid) === active.id));
  $("#lc-chapter-tag").textContent = active.tag;
  $("#lc-title").textContent = active.title;
  $("#lc-quote").textContent = active.quote;
  $("#lc-analysis").textContent = active.analysis;
  $("#lc-meta").textContent = active.meta;
}

const VIDEO_SOURCES = {
  "4k": "web/media/pv_local_4k.mp4",
  web: "web/media/pv_web.mp4"
};
let activeVideoQuality = "web";
let local4kAvailable = false;

function isLocalHost() {
  const h = window.location.hostname;
  return (
    h === "localhost" ||
    h === "127.0.0.1" ||
    h === "::1" ||
    h === "[::1]" ||
    h.endsWith(".local") ||
    h.startsWith("192.168.") ||
    h.startsWith("10.") ||
    /^172\.(1[6-9]|2\d|3[01])\./.test(h)
  );
}

function updateVideoSourceUI(mode) {
  const badge = $("#theater-source-badge");
  const btn4k = $("#btn-src-4k");
  const btnWeb = $("#btn-src-web");
  if (badge) {
    if (mode === "4k") {
      badge.textContent = "LOCAL 4K · 4096×1716 H.264 (+faststart)";
      badge.classList.add("is-4k");
    } else {
      badge.textContent = "CLOUD STREAM · 1280×536 H.264 (20MB)";
      badge.classList.remove("is-4k");
    }
  }
  btn4k?.classList.toggle("active", mode === "4k");
  btnWeb?.classList.toggle("active", mode === "web");
}

function switchVideoQuality(mode, preserveState = true, notify = false) {
  const video = $("#pv-video");
  const srcUrl = VIDEO_SOURCES[mode];
  if (!video || !srcUrl) return;
  if (activeVideoQuality === mode && video.currentSrc.includes(srcUrl)) {
    updateVideoSourceUI(mode);
    return;
  }

  const prevTime = preserveState ? video.currentTime || 0 : 0;
  const wasPlaying = preserveState && !video.paused && !video.ended;
  activeVideoQuality = mode;
  updateVideoSourceUI(mode);

  const sourceEl = video.querySelector("source");
  if (sourceEl) sourceEl.src = srcUrl;
  video.src = srcUrl;

  const restoreState = () => {
    if (prevTime > 0) {
      try {
        video.currentTime = prevTime;
      } catch {
        // Ignore seek errors before ready
      }
    }
    if (wasPlaying) {
      const p = video.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    }
  };

  video.addEventListener("loadedmetadata", restoreState, { once: true });
  video.load();

  if (notify) {
    showToast(mode === "4k" ? "已切换至本地原生 4K 画质 (4096×1716)" : "已切换至云端流畅流媒体 (1280×536)");
  }
}

function initTheater() {
  const video = $("#pv-video");
  const chContainer = $("#theater-chapters");
  const btn4k = $("#btn-src-4k");
  const btnWeb = $("#btn-src-web");

  chContainer.innerHTML = VIDEO_CHAPTERS.map((ch) => `
    <button type="button" class="chap-pill ${ch.id === 0 ? "active" : ""}" data-cid="${ch.id}" data-seek="${ch.start === 0 ? 2 : ch.start}">
      ${ch.btnLabel}
    </button>
  `).join("");

  chContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".chap-pill");
    if (!btn) return;
    jumpToVideoTime(Number(btn.dataset.seek));
  });

  $("#hero-play-pv").addEventListener("click", () => jumpToVideoTime(2));

  btn4k?.addEventListener("click", () => {
    if (!local4kAvailable) return;
    switchVideoQuality("4k", true, true);
  });

  btnWeb?.addEventListener("click", () => {
    switchVideoQuality("web", true, true);
  });

  updateVideoSourceUI("web");
  if (isLocalHost()) {
    fetch(VIDEO_SOURCES["4k"], { method: "HEAD" })
      .then((res) => {
        if (res.ok) {
          local4kAvailable = true;
          if (btn4k) btn4k.disabled = false;
          switchVideoQuality("4k", true, false);
        } else if (btn4k) {
          btn4k.disabled = true;
          btn4k.title = "未检测到本地 4K 文件 web/media/pv_local_4k.mp4";
        }
      })
      .catch(() => {
        if (btn4k) {
          btn4k.disabled = true;
          btn4k.title = "未检测到本地 4K 文件 web/media/pv_local_4k.mp4";
        }
      });
  } else if (btn4k) {
    btn4k.disabled = true;
    btn4k.title = "仅本地 / 局域网部署环境可用（云端使用 20MB 流媒体）";
  }

  video.addEventListener("seeked", () => {
    pendingSeekTarget = null;
    const cur = video.currentTime || 0;
    const dur = Number.isFinite(video.duration) && video.duration > 0 ? video.duration : 191;
    $("#lc-clock").textContent = `${formatMMSS(cur)} / ${formatMMSS(dur)}`;
    updateLiveCommentary(cur);
  });

  video.addEventListener("timeupdate", () => {
    if (pendingSeekTarget !== null) return;
    const cur = video.currentTime || 0;
    const dur = Number.isFinite(video.duration) && video.duration > 0 ? video.duration : 191;
    $("#lc-clock").textContent = `${formatMMSS(cur)} / ${formatMMSS(dur)}`;
    updateLiveCommentary(cur);
  });

  updateLiveCommentary(0);
}

/* -----------------------------
   06. CODEX CHARACTER SHEETS
   ----------------------------- */
function selectSheet(idx) {
  activeSheetIdx = (idx + CHARACTERS.length) % CHARACTERS.length;
  const c = CHARACTERS[activeSheetIdx];

  const img = $("#sheet-stage-img");
  if (img) {
    img.src = c.sheet;
    img.alt = `${c.code} · Codex 设定三视图`;
  }
  const codeTag = $("#sheet-code-tag");
  if (codeTag) codeTag.textContent = `${c.id} // ${c.code}`;

  const cipherBadge = $("#sheet-cipher-badge");
  if (cipherBadge && window.FoundationCipherSVG) {
    cipherBadge.innerHTML = `
      ${window.FoundationCipherSVG.renderCipherSVG(c.code, { height: 26, strokeWidth: 8.6, interactive: true })}
      <span class="sheet-cipher-font">${c.code}</span>
    `;
  }

  const titleCn = $("#sheet-title-cn");
  if (titleCn) titleCn.textContent = c.cnTitle;

  const notes = $("#sheet-notes");
  if (notes) notes.textContent = c.sheetNotes;

  const specsEl = $("#sheet-spec-tags");
  if (specsEl) {
    specsEl.innerHTML = (c.sheetSpecs || []).map((s) => `<span>${s}</span>`).join("");
  }

  const refsRow = $("#sheet-refs-row");
  if (refsRow && typeof ORIGINAL_REFERENCES !== "undefined") {
    const catKey = `c${c.id}`;
    const charRefs = ORIGINAL_REFERENCES.filter((r) => r.cat === catKey);
    refsRow.innerHTML = charRefs.map((r) => `
      <div class="sheet-ref-chip">
        <div class="sheet-ref-preview" data-lightbox-src="${r.src}" data-lightbox-title="${r.catLabel} · ${r.title} (${r.note})">
          <img src="${r.src}" alt="${r.title}" loading="lazy" />
        </div>
        <div class="sheet-ref-foot">
          <span class="sheet-ref-title" title="${r.title}">${r.title}</span>
          ${r.rawSrc ? `<button type="button" class="sheet-raw-btn js-open-lb" data-src="${r.rawSrc}" data-title="RAW 4K (4096×1716 PNG) · ${r.catLabel} · ${r.title} [${r.rawTime}]">RAW 4K</button>` : ""}
        </div>
      </div>
    `).join("");
  }

  const dl = $("#btn-sheet-download");
  if (dl) {
    dl.href = c.sheet;
    dl.setAttribute("download", c.sheet.split("/").pop());
  }

  $$(".sheet-thumb-btn").forEach((b, i) => {
    b.classList.toggle("active", i === activeSheetIdx);
    b.setAttribute("aria-selected", i === activeSheetIdx ? "true" : "false");
  });
}

function initCharacterSheets() {
  const thumbGrid = $("#sheet-thumb-grid");
  if (!thumbGrid) return;

  thumbGrid.innerHTML = CHARACTERS.map((c, idx) => `
    <button type="button" class="sheet-thumb-btn ${idx === 0 ? "active" : ""}" data-sidx="${idx}" role="tab" aria-selected="${idx === 0}">
      <img src="${c.sheet}" alt="${c.shortCn} 设定三视图" loading="lazy" />
      <div class="st-meta">
        <span class="st-num">${c.id} // ${c.oxymoron[1]}</span>
        <span class="st-name">${c.shortCn}</span>
      </div>
    </button>
  `).join("");

  thumbGrid.addEventListener("click", (e) => {
    const btn = e.target.closest(".sheet-thumb-btn");
    if (!btn) return;
    selectSheet(Number(btn.dataset.sidx));
  });

  const openActiveSheetLB = () => {
    const c = CHARACTERS[activeSheetIdx];
    openLightbox(c.sheet, `${c.id} ${c.code} · Codex 设定三视图 (1672×941)`);
  };
  $("#sheet-stage-frame")?.addEventListener("click", openActiveSheetLB);
  $("#btn-sheet-lightbox")?.addEventListener("click", openActiveSheetLB);
  $("#btn-sheet-goto-dossier")?.addEventListener("click", () => {
    selectCharacter(activeSheetIdx, true);
    $("#characters")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  selectSheet(0);
}

/* -----------------------------
   07. COMPLETE ORIGINAL REFERENCE ARCHIVE (58 REFS + 53 RAW 4K PNGS)
   ----------------------------- */
const ORIGINAL_REFERENCES = [
  // c01 (4)
  { cat: "c01", catLabel: "01 芬诺拉 · 本有", title: "圣女祈祷近景原帧", src: "web/assets/refs/c01/ref_praying.png", rawSrc: "web/assets/refs/c01/raw/raw_praying_00202.png", rawTime: "00:20.2", note: "黑发尖耳圣女闭目祈祷与蓝袍细节" },
  { cat: "c01", catLabel: "01 芬诺拉 · 本有", title: "共生体全身与圣龛结构", src: "web/assets/refs/c01/ref_fullbody.png", rawSrc: "web/assets/refs/c01/raw/raw_fullbody_02588.png", rawTime: "02:58.8", note: "铁面巨人怀抱与圣龛站姿 4K 参考" },
  { cat: "c01", catLabel: "01 芬诺拉 · 本有", title: "圆形神庙祭坛全景", src: "web/assets/refs/c01/ref_altar.png", rawSrc: "web/assets/refs/c01/raw/raw_altar_00252.png", rawTime: "00:25.2", note: "反置《圣母怜子》跪祈构图与神庙列柱" },
  { cat: "c01", catLabel: "01 芬诺拉 · 本有", title: "三重荆棘圆环个人徽记", src: "web/assets/refs/c01/ref_emblem.png", rawSrc: "web/assets/refs/c01/raw/raw_emblem_00235.png", rawTime: "00:23.5", note: "长枪贯穿七瓣白花与枯骨飞鸽徽记原裁片" },
  // c02 (4)
  { cat: "c02", catLabel: "02 阿达希尔", title: "阿达希尔高清半身立绘", src: "web/assets/refs/c02/ref_upperbody.png", rawSrc: "web/assets/refs/c02/raw/raw_upperbody_02524.png", rawTime: "02:52.4", note: "白发高领蓝黑礼服与星盘圆牌链" },
  { cat: "c02", catLabel: "02 阿达希尔", title: "侧颜与短双角光影特写", src: "web/assets/refs/c02/ref_profile.png", rawSrc: "web/assets/refs/c02/raw/raw_profile_00475.png", rawTime: "00:47.5", note: "轮廓双角剪影与冷峻侧脸参考" },
  { cat: "c02", catLabel: "02 阿达希尔", title: "终局大殿全身站姿参考", src: "web/assets/refs/c02/ref_fullbody.png", rawSrc: "web/assets/refs/c02/raw/raw_fullbody_02588.png", rawTime: "02:58.8", note: "垂地深蓝长袍与银白靴履全身剪裁" },
  { cat: "c02", catLabel: "02 阿达希尔", title: "纵置 8 字日晷徽记切片", src: "web/assets/refs/c02/ref_face_emblem.png", rawSrc: "web/assets/refs/c02/raw/raw_face_emblem_00445.png", rawTime: "00:44.5", note: "莫比乌斯双环与放射状日晷指针徽记" },
  // c03 (4)
  { cat: "c03", catLabel: "03 面具男", title: "荆棘冠冕面具正面特写", src: "web/assets/refs/c03/ref_upperbody.png", rawSrc: "web/assets/refs/c03/raw/raw_upperbody_02538.png", rawTime: "02:53.8", note: "半覆盖银黑金属荆棘面具与蓝领带" },
  { cat: "c03", catLabel: "03 面具男", title: "数字流无实体电话立姿", src: "web/assets/refs/c03/ref_phone_pose.png", rawSrc: "web/assets/refs/c03/raw/raw_phone_pose_00560.png", rawTime: "00:56.0", note: "手持青蓝数字代码听筒半身镜头" },
  { cat: "c03", catLabel: "03 面具男", title: "黑西装长风衣全身站姿", src: "web/assets/refs/c03/ref_fullbody.png", rawSrc: "web/assets/refs/c03/raw/raw_fullbody_02588.png", rawTime: "02:58.8", note: "左肩机械银甲与长风衣垂坠比例" },
  { cat: "c03", catLabel: "03 面具男", title: "全视之眼神经网络徽记", src: "web/assets/refs/c03/ref_emblem.png", rawSrc: "web/assets/refs/c03/raw/raw_emblem_01170.png", rawTime: "01:17.0", note: "鱼鳔形全视之眼与大脑电路树徽记" },
  // c04 (5)
  { cat: "c04", catLabel: "04 测绘建筑师", title: "黄金义手与 811288 肩带", src: "web/assets/refs/c04/ref_goldhand_811288.png", rawSrc: "web/assets/refs/c04/raw/raw_goldhand_811288_01252.png", rawTime: "01:25.2", note: "全关节黄金右手与左肩白带 811288 编号" },
  { cat: "c04", catLabel: "04 测绘建筑师", title: "镂空金属眼罩面部特写", src: "web/assets/refs/c04/ref_eyepatch_face.png", rawSrc: "web/assets/refs/c04/raw/raw_eyepatch_face_02508.png", rawTime: "02:50.8", note: "墨绿长发与红眼尖牙冷笑 4K 特写" },
  { cat: "c04", catLabel: "04 测绘建筑师", title: "高开叉礼服全身站姿", src: "web/assets/refs/c04/ref_fullbody.png", rawSrc: "web/assets/refs/c04/raw/raw_fullbody_02588.png", rawTime: "02:58.8", note: "外披蓝里长袍与不对称裙摆比例" },
  { cat: "c04", catLabel: "04 测绘建筑师", title: "红底高跟鞋与黄金铅垂", src: "web/assets/refs/c04/ref_heels_plumb.png", rawSrc: "web/assets/refs/c04/raw/raw_heels_plumb_01200.png", rawTime: "01:20.0", note: "Louboutin 红底高跟与悬垂测量铅垂" },
  { cat: "c04", catLabel: "04 测绘建筑师", title: "双蛇螺旋柱准星徽记", src: "web/assets/refs/c04/ref_emblem.png", rawSrc: "web/assets/refs/c04/raw/raw_emblem_01285.png", rawTime: "01:28.5", note: "双蛇杖纹路与铅垂石柱徽记切片" },
  // c05 (4)
  { cat: "c05", catLabel: "05 莫比乌斯少女", title: "金色四角星芒瞳特写", src: "web/assets/refs/c05/ref_eye_closeup.png", rawSrc: "web/assets/refs/c05/raw/raw_eye_closeup_01560.png", rawTime: "01:56.0", note: "银白短发与右眼金色星芒瞳孔细节" },
  { cat: "c05", catLabel: "05 莫比乌斯少女", title: "学院短外套与 21 号领带", src: "web/assets/refs/c05/ref_upperbody.png", rawSrc: "web/assets/refs/c05/raw/raw_upperbody_02520.png", rawTime: "02:52.0", note: "白色胸带下方深蓝里衣 21 暗纹" },
  { cat: "c05", catLabel: "05 莫比乌斯少女", title: "把玩液态水银莫比乌斯环", src: "web/assets/refs/c05/ref_mobius_pose.png", rawSrc: "web/assets/refs/c05/raw/raw_mobius_pose_01530.png", rawTime: "01:53.0", note: "荧光绿粉紫镭射丝带与水银 ∞ 环" },
  { cat: "c05", catLabel: "05 莫比乌斯少女", title: "白过膝袜乐福鞋全身参考", src: "web/assets/refs/c05/ref_fullbody.png", rawSrc: "web/assets/refs/c05/raw/raw_fullbody_02588.png", rawTime: "02:58.8", note: "三视图全身着装与双柱 ∞ 盾徽比例" },
  // c06 (6)
  { cat: "c06", catLabel: "06 四翼审判骑士", title: "苍蓝日珥光环面部特写", src: "web/assets/refs/c06/ref_closeup.png", rawSrc: "web/assets/refs/c06/raw/raw_closeup_02165.png", rawTime: "02:16.5", note: "金发短辫炽天使与熊熊燃烧蓝珥光环" },
  { cat: "c06", catLabel: "06 四翼审判骑士", title: "银白雕花胸甲正面细节", src: "web/assets/refs/c06/ref_front_armor.png", rawSrc: "web/assets/refs/c06/raw/raw_front_armor_02555.png", rawTime: "02:55.5", note: "黑蓝内甲、银白浮雕甲胄与袖口基石文字" },
  { cat: "c06", catLabel: "06 四翼审判骑士", title: "四片石雕机械羽翼站姿", src: "web/assets/refs/c06/ref_stand.png", rawSrc: "web/assets/refs/c06/raw/raw_stand_02588.png", rawTime: "02:58.8", note: "四翼展开广角构图与披风结构" },
  { cat: "c06", catLabel: "06 四翼审判骑士", title: "圣殿最高台阶全身立绘", src: "web/assets/refs/c06/ref_fullbody.png", rawSrc: "web/assets/refs/c06/raw/raw_fullbody_02295.png", rawTime: "02:29.5", note: "终局大殿核心统治站位全身参考" },
  { cat: "c06", catLabel: "06 四翼审判骑士", title: "刻字蓝色晶剑特写", src: "web/assets/refs/c06/ref_sword.png", rawSrc: "web/assets/refs/c06/raw/raw_sword_02502.png", rawTime: "02:50.2", note: "半透明蓝色晶体长剑剑身蚀刻基石文字" },
  { cat: "c06", catLabel: "06 四翼审判骑士", title: "哥特巨剑燃烧黑日徽记", src: "web/assets/refs/c06/ref_emblem.png", rawSrc: "web/assets/refs/c06/raw/raw_emblem_02135.png", rawTime: "02:13.5", note: "双柱哥特立面与锯齿黑日蚀图腾" },
  // frames (18)
  { cat: "frames", catLabel: "4K 分镜帧", title: "01 线框千夫长阿莱克琉斯 (00:08)", src: "web/assets/refs/frames/01_cosmos_wireframe.jpg", rawSrc: "web/assets/refs/frames/raw/01_cosmos_wireframe_raw.png", rawTime: "00:08.5", note: "跨越黑洞吸积盘的蓝白几何线框战士" },
  { cat: "frames", catLabel: "4K 分镜帧", title: "02 繁花石棺与坍缩恒星 (00:14)", src: "web/assets/refs/frames/02_coffin_skeleton.jpg", rawSrc: "web/assets/refs/frames/raw/02_coffin_skeleton_raw.png", rawTime: "00:14.0", note: "机械骷髅巨人怀抱坍缩星核" },
  { cat: "frames", catLabel: "4K 分镜帧", title: "03 黑发祈祷圣女芬诺拉 (00:18)", src: "web/assets/refs/frames/03_char1_praying_girl.jpg", rawSrc: "web/assets/refs/frames/raw/03_char1_praying_girl_raw.png", rawTime: "00:23.5", note: "第一章 01 YOUNG DEATH 圣女特写" },
  { cat: "frames", catLabel: "4K 分镜帧", title: "04 反置《圣母怜子》神庙 (00:25)", src: "web/assets/refs/frames/04_char1_statue_altar.jpg", rawSrc: "web/assets/refs/frames/raw/04_char1_statue_altar_raw.png", rawTime: "00:28.0", note: "圣女跪于机械巨人膝前祭坛镜头" },
  { cat: "frames", catLabel: "4K 分镜帧", title: "05 阿达希尔苏醒重构 (00:36)", src: "web/assets/refs/frames/05_char2_ardashir.jpg", rawSrc: "web/assets/refs/frames/raw/05_char2_ardashir_raw.png", rawTime: "00:44.5", note: "幽蓝水池与光丝重构“皈依者”" },
  { cat: "frames", catLabel: "4K 分镜帧", title: "06 面具男与数字电话 (00:53)", src: "web/assets/refs/frames/06_char3_masked_close.jpg", rawSrc: "web/assets/refs/frames/raw/06_char3_masked_close_raw.png", rawTime: "00:56.0", note: "红黑故障数字听筒登场镜头" },
  { cat: "frames", catLabel: "4K 分镜帧", title: "07 面具男与全视之眼暗号 (01:02)", src: "web/assets/refs/frames/07_char3_masked_cipher.jpg", rawSrc: "web/assets/refs/frames/raw/07_char3_masked_cipher_raw.png", rawTime: "01:17.0", note: "LOGICAL ENIGMATA 字幕帧" },
  { cat: "frames", catLabel: "4K 分镜帧", title: "08 建筑师与黄金铅垂雨 (01:25)", src: "web/assets/refs/frames/08_char4_architect_cipher.jpg", rawSrc: "web/assets/refs/frames/raw/08_char4_architect_cipher_raw.png", rawTime: "01:28.5", note: "苍穹垂落铅垂与斜向加密文字" },
  { cat: "frames", catLabel: "4K 分镜帧", title: "09 黄金星盘圆规工程蓝图 (01:35)", src: "web/assets/refs/frames/09_char4_compass_blueprint.jpg", rawSrc: "web/assets/refs/frames/raw/09_char4_compass_blueprint_raw.png", rawTime: "01:35.0", note: "含 2/ 1234567890 标尺的蓝图帧" },
  { cat: "frames", catLabel: "4K 分镜帧", title: "10 奇点黑洞头颅绅士 (01:45)", src: "web/assets/refs/frames/10_char5_singularity_host.jpg", rawSrc: "web/assets/refs/frames/raw/10_char5_singularity_host_raw.png", rawTime: "01:46.5", note: "水银 ∞ 环与燕尾服奇点投影" },
  { cat: "frames", catLabel: "4K 分镜帧", title: "11 莫比乌斯少女星瞳帧 (01:49)", src: "web/assets/refs/frames/11_char5_girl_cipher.jpg", rawSrc: "web/assets/refs/frames/raw/11_char5_girl_cipher_raw.png", rawTime: "01:53.0", note: "TIMELESS NASCENCE 与星芒瞳" },
  { cat: "frames", catLabel: "4K 分镜帧", title: "12 镜面盐湖白色双椅对坐 (02:01)", src: "web/assets/refs/frames/12_char5_two_chairs.jpg", rawSrc: "web/assets/refs/frames/raw/12_char5_two_chairs_raw.png", rawTime: "02:01.0", note: "相对论克尔黑洞下的超现实告别" },
  { cat: "frames", catLabel: "4K 分镜帧", title: "13 四翼审判骑士拔剑帧 (02:12)", src: "web/assets/refs/frames/13_char6_angel_cipher.jpg", rawSrc: "web/assets/refs/frames/raw/13_char6_angel_cipher_raw.png", rawTime: "02:13.5", note: "RESTORED JUSTICE 黑白半调闪烁" },
  { cat: "frames", catLabel: "4K 分镜帧", title: "14 剑指日蚀 TALOS V 坐标 (02:24)", src: "web/assets/refs/frames/14_talos_v_sword.jpg", rawSrc: "web/assets/refs/frames/raw/14_talos_v_sword_raw.png", rawTime: "02:24.0", note: "浮现 TALOS V 铭文的关键坐标帧" },
  { cat: "frames", catLabel: "4K 分镜帧", title: "15 审判骑士全副武装宣战 (02:28)", src: "web/assets/refs/frames/15_char6_angel_pose.jpg", rawSrc: "web/assets/refs/frames/raw/15_char6_angel_pose_raw.png", rawTime: "02:29.5", note: "展开四翼高呼群星熄灭的统帅" },
  { cat: "frames", catLabel: "4K 分镜帧", title: "16 古罗马蒙眼士兵刺矛浮雕 (02:32)", src: "web/assets/refs/frames/16_roman_relief.jpg", rawSrc: "web/assets/refs/frames/raw/16_roman_relief_raw.png", rawTime: "02:33.5", note: "直观呼应“造物从不具备造主的视野”" },
  { cat: "frames", catLabel: "4K 分镜帧", title: "17 苍白万手托举圣殿俯瞰 (02:48)", src: "web/assets/refs/frames/17_cathedral_overhead.jpg", rawSrc: "web/assets/refs/frames/raw/17_cathedral_overhead_raw.png", rawTime: "02:48.0", note: "罗丹《地狱之门》意象与三柄轨道巨剑" },
  { cat: "frames", catLabel: "4K 分镜帧", title: "18 六大基石终局大殿同框 (02:59)", src: "web/assets/refs/frames/18_final_group_shot.jpg", rawSrc: "web/assets/refs/frames/raw/18_final_group_shot_raw.png", rawTime: "03:00.0", note: "全片 6 人完整列阵 4K 无水印帧" },
  // cipher (13)
  { cat: "cipher", catLabel: "密码与字体考据", title: "01 YOUNG DEATH 4K 原片切条", src: "web/assets/refs/cipher/cipher1.png", rawSrc: "web/assets/refs/cipher/raw/raw_cipher1_00235.png", rawTime: "00:23.5", note: "01 号 4K 无损提取与像素描摹基准" },
  { cat: "cipher", catLabel: "密码与字体考据", title: "02 NOSTALGIC FRITH 4K 原片切条", src: "web/assets/refs/cipher/cipher2_ardashir.png", rawSrc: "web/assets/refs/cipher/raw/raw_cipher2_00445.png", rawTime: "00:44.5", note: "实证第 2 词第 2 位为 R（FRITH）而非 A" },
  { cat: "cipher", catLabel: "密码与字体考据", title: "03 LOGICAL ENIGMATA 4K 原片切条", src: "web/assets/refs/cipher/cipher3_masked.png", rawSrc: "web/assets/refs/cipher/raw/raw_cipher3_01170.png", rawTime: "01:17.0", note: "L/O/G/I/C/A/E/N/M/T 标准单线基准帧" },
  { cat: "cipher", catLabel: "密码与字体考据", title: "04 CONSTRUCTIC 原片斜向原帧", src: "web/assets/refs/cipher/cipher4_architect.png", rawSrc: "web/assets/refs/cipher/raw/raw_cipher4_and_shoulder_01285.png", rawTime: "01:28.5", note: "片中顺时针旋转 90° 竖排双行原始态" },
  { cat: "cipher", catLabel: "密码与字体考据", title: "04 逆时针 90° 旋正校对图", src: "web/assets/refs/cipher/cipher4_rotated_ccw.png", rawSrc: "web/assets/refs/cipher/raw/raw_cipher4_and_shoulder_01285.png", rawTime: "01:28.5", note: "旋正阅读 CONSTRUCTIC SERVITUDE" },
  { cat: "cipher", catLabel: "密码与字体考据", title: "04 顺时针 90° 对照切片", src: "web/assets/refs/cipher/cipher4_rotated_cw.png", rawSrc: "web/assets/refs/cipher/raw/raw_cipher4_and_shoulder_01285.png", rawTime: "01:28.5", note: "双方向旋转排查对照组" },
  { cat: "cipher", catLabel: "密码与字体考据", title: "05 TIMELESS NASCENCE 原片切条", src: "web/assets/refs/cipher/cipher5_girl.png", rawSrc: "web/assets/refs/cipher/raw/raw_cipher5_01530.png", rawTime: "01:53.0", note: "呈现 NA/SC/NC 连字压缩规则" },
  { cat: "cipher", catLabel: "密码与字体考据", title: "06 RESTORED JUSTICE 原片切条", src: "web/assets/refs/cipher/cipher6_angel.png", rawSrc: "web/assets/refs/cipher/raw/raw_cipher6_02135.png", rawTime: "02:13.5", note: "呈现 RE/CE 连字结构与加粗轮廓" },
  { cat: "cipher", catLabel: "密码与字体考据", title: "FOUNDATION 方形负片印章原片", src: "web/assets/refs/cipher/stamp_foundation.png", rawSrc: "web/assets/refs/cipher/raw/raw_stamp_foundation_00280.png", rawTime: "00:28.0", note: "双列 5 字 F-O-U-N-D / A-T-I-O-N 罗塞塔印章" },
  { cat: "cipher", catLabel: "密码与字体考据", title: "工程蓝图右侧测绘铭文放大", src: "web/assets/refs/cipher/blueprint_right.png", rawSrc: "web/assets/refs/cipher/raw/raw_blueprint_right_01350.png", rawTime: "01:35.0", note: "2/ 1234567890 与基石长句原始高清裁剪" },
  { cat: "cipher", catLabel: "密码与字体考据", title: "04 号左肩白带 811288 局部", src: "web/assets/refs/cipher/char4_shoulder.png", rawSrc: "web/assets/refs/cipher/raw/raw_cipher4_and_shoulder_01285.png", rawTime: "01:28.5", note: "确认数字 1/2/8 笔划形态的关键实证图" },
  { cat: "cipher", catLabel: "密码与字体考据", title: "EndfieldByButan 社区字形全览", src: "web/assets/refs/cipher/butan_font_overview.png", rawSrc: null, rawTime: null, note: "lhclbt 开源萨卡兹字表（含 7 个补完字母参照）" },
  { cat: "cipher", catLabel: "密码与字体考据", title: "本站自编译字体全量 4K 比对图", src: "web/assets/refs/cipher/glyph_verification_sheet.png", rawSrc: null, rawTime: null, note: "FoundationPVStroke.ttf × 原片 × EndfieldByButan" }
];

let activeRefCat = "all";
let activeRefRawOnly = false;

function applyReferenceFilters(grid) {
  grid.querySelectorAll(".ref-card").forEach((card) => {
    const matchCat = activeRefCat === "all" || card.dataset.cat === activeRefCat;
    const matchRaw = !activeRefRawOnly || card.dataset.hasRaw === "true";
    card.classList.toggle("hidden", !(matchCat && matchRaw));
  });
}

function initReferenceArchive() {
  const filterBar = $("#ref-filter-bar");
  const viewToggle = $("#ref-view-toggle");
  const grid = $("#ref-gallery-grid");
  if (!filterBar || !grid) return;

  const FILTERS = [
    { key: "all", label: "全部素材 (58+53 RAW)" },
    { key: "c01", label: "01 芬诺拉 (4+4 RAW)" },
    { key: "c02", label: "02 阿达希尔 (4+4 RAW)" },
    { key: "c03", label: "03 面具男 (4+4 RAW)" },
    { key: "c04", label: "04 建筑师 (5+5 RAW)" },
    { key: "c05", label: "05 莫比乌斯 (4+4 RAW)" },
    { key: "c06", label: "06 骑士 (6+6 RAW)" },
    { key: "frames", label: "4K 分镜 (18+18 RAW)" },
    { key: "cipher", label: "密码考据 (13+8 RAW)" }
  ];

  filterBar.innerHTML = FILTERS.map((f) => `
    <button type="button" class="ref-filter-btn ${f.key === "all" ? "active" : ""}" data-cat="${f.key}" role="tab" aria-selected="${f.key === "all"}">${f.label}</button>
  `).join("");

  grid.innerHTML = ORIGINAL_REFERENCES.map((r) => {
    const fn = r.src.split("/").pop();
    const hasRaw = Boolean(r.rawSrc);
    const rawFn = hasRaw ? r.rawSrc.split("/").pop() : "";
    return `
      <article class="ref-card" data-cat="${r.cat}" data-has-raw="${hasRaw}">
        <div class="ref-thumb-box" data-lightbox-src="${r.src}" data-lightbox-title="${r.catLabel} · ${r.title}">
          <img src="${r.src}" alt="${r.title}" loading="lazy" />
          <span class="ref-cat-badge">${r.catLabel}</span>
          ${hasRaw ? `<span class="ref-raw-badge">RAW 4K · ${r.rawTime}</span>` : ""}
        </div>
        <div class="ref-meta">
          <h4 class="ref-title">${r.title}</h4>
          <p class="ref-note">${r.note}</p>
          <div class="ref-path">${r.src}</div>
          ${hasRaw ? `<div class="ref-raw-path">RAW: ${r.rawSrc}</div>` : ""}
          ${hasRaw ? `
          <div class="ref-actions-grid">
            <button type="button" class="btn-outline-sm js-open-lb" data-src="${r.src}" data-title="${r.catLabel} · ${r.title}">裁切预览</button>
            <button type="button" class="btn-outline-sm btn-raw-sm js-open-lb" data-src="${r.rawSrc}" data-title="RAW 4K (4096×1716 PNG) · ${r.catLabel} · ${r.title} [${r.rawTime}]">RAW 4K 预览</button>
            <a href="${r.src}" download="${fn}" class="btn-outline-sm">↓ 裁切图</a>
            <a href="${r.rawSrc}" download="${rawFn}" class="btn-blue-sm">↓ RAW 4K</a>
          </div>` : `
          <div class="ref-actions">
            <button type="button" class="btn-outline-sm js-open-lb" data-src="${r.src}" data-title="${r.catLabel} · ${r.title}">灯箱放大</button>
            <a href="${r.src}" download="${fn}" class="btn-blue-sm">下载原图</a>
          </div>`}
        </div>
      </article>`;
  }).join("");

  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".ref-filter-btn");
    if (!btn) return;
    activeRefCat = btn.dataset.cat;
    filterBar.querySelectorAll(".ref-filter-btn").forEach((b) => {
      const isAct = b === btn;
      b.classList.toggle("active", isAct);
      b.setAttribute("aria-selected", isAct ? "true" : "false");
    });
    applyReferenceFilters(grid);
  });

  viewToggle?.addEventListener("click", (e) => {
    const btn = e.target.closest(".ref-filter-btn");
    if (!btn) return;
    activeRefRawOnly = btn.dataset.mode === "has-raw";
    viewToggle.querySelectorAll(".ref-filter-btn").forEach((b) => {
      b.classList.toggle("active", b === btn);
    });
    applyReferenceFilters(grid);
  });
}

/* -----------------------------
   09. EPILOGUE SUMMARY SECTION
   ----------------------------- */
function initSummarySection() {
  const tbody = $("#summary-roster-tbody");
  if (tbody) {
    const rowsHTML = CHARACTERS.map((c, idx) => `
      <tr>
        <td><span class="st-id">${c.id}</span></td>
        <td>
          <div class="st-cipher-glyph">${c.code}</div>
          <div class="st-code">${c.code}</div>
          <div class="st-cn">${c.cnTitle}</div>
        </td>
        <td><code>${c.timeWindow}</code></td>
        <td>${c.emblemTitle}；${c.roleTitle}</td>
        <td>${c.stance}</td>
        <td>${c.quote}</td>
        <td>
          <div class="st-actions">
            <button type="button" class="sum-mini-btn js-sum-sheet" data-idx="${idx}">设定三视图</button>
            <button type="button" class="sum-mini-btn js-sum-pv" data-seek="${c.seekSeconds}">跳转 PV [${c.seekLabel}]</button>
          </div>
        </td>
      </tr>
    `).join("");

    const echoesHTML = `
      <tr>
        <td><span class="st-id">E1</span></td>
        <td>
          <div class="st-cipher-glyph">ALLECTUS</div>
          <div class="st-code">ALLECTUS</div>
          <div class="st-cn">线框持枪骷髅千夫长 · 阿莱克琉斯</div>
        </td>
        <td><code>00:08</code></td>
        <td>蓝白几何线框盔甲长枪；跨越黑洞吸积盘</td>
        <td>V1.4《向渊行》「造裔」Boss / 基石前锋</td>
        <td>（战死归寂传回塔卫二坐标，与 02 号台词“阿莱克琉斯死得其所”互文）</td>
        <td>
          <div class="st-actions">
            <button type="button" class="sum-mini-btn js-open-lb" data-src="web/assets/scene_cosmos_wireframe.jpg" data-title="00:08 阿莱克琉斯 Allectus 线框特写">查看 4K 画面</button>
            <button type="button" class="sum-mini-btn js-sum-pv" data-seek="6">跳转 PV [00:06]</button>
          </div>
        </td>
      </tr>
      <tr>
        <td><span class="st-id">E2</span></td>
        <td>
          <div class="st-cipher-glyph">SINGULARITY</div>
          <div class="st-code">SINGULARITY HOST</div>
          <div class="st-cn">奇点黑洞头颅燕尾服绅士（造主投影）</div>
        </td>
        <td><code>01:45 / 02:00</code></td>
        <td>黑燕尾服白马甲 + 旋转坍缩奇点黑洞头颅 + 白方背板</td>
        <td>造主 / 旧宇宙管理员对位象征</td>
        <td>（随 05 号“晚安咯，不知名的宇宙……”化作方格星尘消散）</td>
        <td>
          <div class="st-actions">
            <button type="button" class="sum-mini-btn js-open-lb" data-src="web/assets/scene_singularity_host.jpg" data-title="01:45 奇点黑洞绅士 4K 特写">查看 4K 画面</button>
            <button type="button" class="sum-mini-btn js-sum-pv" data-seek="105">跳转 PV [01:45]</button>
          </div>
        </td>
      </tr>
    `;

    tbody.innerHTML = rowsHTML + echoesHTML;
    tbody.addEventListener("click", (e) => {
      const sheetBtn = e.target.closest(".js-sum-sheet");
      if (sheetBtn) {
        selectSheet(Number(sheetBtn.dataset.idx));
        $("#sheets")?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      const pvBtn = e.target.closest(".js-sum-pv");
      if (pvBtn) {
        jumpToVideoTime(Number(pvBtn.dataset.seek));
      }
    });
  }

  const delivGrid = $("#deliverables-grid");
  if (delivGrid) {
    const analysisFile = "《明日方舟：终末地》特别映像「基石」深度角色分析与美学考究.md";
    const DELIVERABLES = [
      { kind: "CODEX SHEET 01", title: "01 YOUNG DEATH 设定三视图", path: "web/assets/sheets/sheet_01_young_death.png", spec: "1672×941 · 2.1MB", action: "lightbox" },
      { kind: "CODEX SHEET 02", title: "02 NOSTALGIC FRITH (阿达希尔) 三视图", path: "web/assets/sheets/sheet_02_nostalgic_faith.png", spec: "1672×941 · 2.2MB", action: "lightbox" },
      { kind: "CODEX SHEET 03", title: "03 LOGICAL ENIGMATA (面具男) 三视图", path: "web/assets/sheets/sheet_03_logical_enigmata.png", spec: "1672×941 · 2.0MB", action: "lightbox" },
      { kind: "CODEX SHEET 04", title: "04 CONSTRUCTIC SERVITUDE (建筑师) 三视图", path: "web/assets/sheets/sheet_04_constructic_servitude.png", spec: "1672×941 · 2.3MB", action: "lightbox" },
      { kind: "CODEX SHEET 05", title: "05 TIMELESS NASCENCE (莫比乌斯少女) 三视图", path: "web/assets/sheets/sheet_05_timeless_nascence.png", spec: "1672×941 · 2.3MB", action: "lightbox" },
      { kind: "CODEX SHEET 06", title: "06 RESTORED JUSTICE (审判骑士) 三视图", path: "web/assets/sheets/sheet_06_restored_justice.png", spec: "1672×941 · 2.5MB", action: "lightbox" },
      { kind: "KEY VISUAL B", title: "4K 原画级「六大基石」群像宣传横幅", path: "promo_poster_pantheon_4k.png", spec: "3840×2160 · PNG", action: "lightbox" },
      { kind: "KEY VISUAL C", title: "六大基石档案与密码破译全览图鉴卡", path: "promo_character_dossier_grid.png", spec: "2400×3200 · PNG", action: "lightbox" },
      { kind: "REPORT .MD", title: "《基石》4K 逐帧考据与美学研究报告", path: analysisFile, href: encodeURI(analysisFile), spec: "Markdown · 17KB", action: "link" },
      { kind: "VIDEO STREAM", title: "2.39:1 原片剧场视频（本地 4K / 云端流）", path: "web/media/pv_web.mp4", spec: "本地 4K (4096×1716) / 云端 20MB", action: "theater" },
      { kind: "WEBFONT .WOFF2", title: "基石 PV 细线重构字体（WOFF2 Web 嵌入）", path: "web/fonts/FoundationPVStroke.woff2", spec: "3.4KB · A-Z & 0-9", action: "font" },
      { kind: "FONT .TTF", title: "基石 PV 细线重构字体（TTF 桌面安装）", path: "web/fonts/FoundationPVStroke.ttf", spec: "8.3KB · TrueType", action: "font" },
      { kind: "COMMUNITY .TTF", title: "萨卡兹/终末地实心体（@罗醭坦 CC BY-NC）", path: "web/fonts/EndfieldByButan.ttf", spec: "14KB · + SVG cipher-svg.js", action: "font" },
      { kind: "4K REF ARCHIVE", title: "全部参考图包（58 裁切 + 53 RAW 4K PNG）", path: "web/assets/refs/", spec: "58 张裁切 + 53 份 RAW 4K PNG", action: "refs" },
      { kind: "CLOUDFLARE × GH", title: "Cloudflare Worker 与 GitHub 源码仓库", path: "https://endfield-the-foundation.sfwh0208.workers.dev", href: "https://github.com/moyx782/endfield-the-foundation", spec: "Workers Edge + Pages", action: "cloud" }
    ];

    delivGrid.innerHTML = DELIVERABLES.map((d) => {
      const href = d.href || d.path;
      const dlName = d.path.split("/").pop();
      let previewBtn = "";
      let rightBtn = `<a href="${href}" download="${dlName}" class="btn-blue-sm">下载文件</a>`;
      if (d.action === "lightbox") {
        previewBtn = `<button type="button" class="btn-outline-sm js-open-lb" data-src="${d.path}" data-title="${d.title}">灯箱预览</button>`;
      } else if (d.action === "theater") {
        previewBtn = `<button type="button" class="btn-outline-sm" onclick="jumpToVideoTime(2)">进入剧场</button>`;
      } else if (d.action === "font") {
        previewBtn = `<a href="#cipher-workbench" class="btn-outline-sm">进入工作台试用</a>`;
      } else if (d.action === "refs") {
        previewBtn = `<a href="#references" class="btn-outline-sm">浏览全部 58 张图</a>`;
        rightBtn = `<a href="#sheets" class="btn-blue-sm">三视图对照</a>`;
      } else if (d.action === "cloud") {
        previewBtn = `<a href="${d.path}" target="_blank" rel="noopener" class="btn-outline-sm">Workers 访问</a>`;
        rightBtn = `<a href="${href}" target="_blank" rel="noopener" class="btn-blue-sm">GitHub 仓库</a>`;
      } else {
        previewBtn = `<a href="${href}" target="_blank" rel="noopener" class="btn-outline-sm">在线阅读</a>`;
      }
      return `
        <article class="deliv-card">
          <div>
            <div class="deliv-top">
              <span class="deliv-kind">${d.kind}</span>
              <span class="deliv-spec">${d.spec}</span>
            </div>
            <h4 style="margin-top:8px;">${d.title}</h4>
            <div class="deliv-path">${d.path}</div>
          </div>
          <div class="deliv-actions">
            ${previewBtn}
            ${rightBtn}
          </div>
        </article>`;
    }).join("");
  }
}

/* -----------------------------
   BOOT SEQUENCE
   ----------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initLightbox();
  initCosmosCanvas();
  initScrollTelemetry();
  initCharacters();
  initCharacterSheets();
  initReferenceArchive();
  initCipherLab();
  initAesthetics();
  initTheater();
  initSummarySection();
  const lanBtn = $("#btn-copy-lan");
  if (lanBtn) {
    const host = window.location.hostname;
    let shareUrl = window.location.href.split("#")[0];
    if (host.endsWith("workers.dev")) {
      lanBtn.textContent = "CF EDGE // Workers 在线";
    } else if (host.endsWith("netlify.app")) {
      lanBtn.textContent = "NETLIFY // CDN 在线";
    } else if (host.endsWith("github.io")) {
      lanBtn.textContent = "GH PAGES // moyx782";
    } else if (host === "localhost" || host === "127.0.0.1") {
      shareUrl = "http://192.168.1.9:8765";
      lanBtn.textContent = "LAN // 192.168.1.9:8765";
    } else {
      lanBtn.textContent = `LIVE // ${host}`;
    }
    lanBtn.addEventListener("click", () => {
      copyText(shareUrl, "已复制访问链接");
    });
  }
});
