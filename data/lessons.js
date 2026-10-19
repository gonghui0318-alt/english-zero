/* ============================================================
   12 节自学课程（零基础，从字母到开口说）
   结构：
     id        课程编号
     title     标题
     subtitle  一句话简介
     minutes   建议学习时长
     blocks    内容块
        { type: "html",  html: "..." }
        { type: "table", head: [...], rows: [[...]] }
        { type: "examples", items: [{en, cn}] }
        { type: "chips", title, words: [[英文, 中文]] }
        { type: "tip", html: "..." }
     quiz      课后练习 [{ q, sub, options: [...], answer: 索引, explain }]
   ============================================================ */
window.LESSONS = [
  {
    id: 1,
    title: "认识字母和读音",
    subtitle: "26 个字母、元音与辅音的区别，打好第一步基础",
    minutes: 15,
    blocks: [
      { type: "html", title: "26 个英文字母", html: "<p>英语一共有 <strong>26 个字母</strong>，其中 <strong>5 个元音字母：A E I O U</strong>，其余 21 个是<strong>辅音字母</strong>。每个字母都有“大写”和“小写”两种写法，发音是一样的。</p><p>你可以到「课程 → 字母表」页面点击每个字母听发音，边听边跟读。</p>" },
      { type: "table", title: "常见易混字母", head: ["字母", "易错点", "记忆小技巧"], rows: [
        ["B / D", "小写 b、d 容易写反、读错", "b 像一个小“棒棒糖”在右（ball 在前面先出现）"],
        ["G / J", "G 是“哥”的开头，J 是“只”的开头", "jump 开头是 J，girl 开头是 G"],
        ["M / N", "连续读容易混", "M 闭双唇，N 舌尖抵上齿龈"],
        ["U / V", "读音相似", "V 要用上齿轻咬下唇"]
      ] },
      { type: "html", title: "哪几个字母读音里有“元音”", html: "<p>元音字母 A、E、I、O、U 在每个单词里几乎都会出现，是发音的“心脏”。先记住它们的名字音：<strong>A /eɪ/、E /iː/、I /aɪ/、O /əʊ/、U /juː/</strong>。</p>" },
      { type: "tip", html: "学字母的时候不要只背写法，一定要<b>边写边读出声</b>。多开口，耳朵和嘴巴会一起记住。" }
    ],
    quiz: [
      { q: "英语一共有多少个字母？", sub: "选择题", options: ["24 个", "26 个", "28 个", "30 个"], answer: 1, explain: "英语共有 26 个字母，从 A 到 Z。" },
      { q: "下面哪个是元音字母？", sub: "选择题", options: ["B", "C", "E", "F"], answer: 2, explain: "元音字母只有 A、E、I、O、U 这 5 个。" },
      { q: "字母 O 的读音是？", sub: "读音题", options: ["/eɪ/", "/iː/", "/əʊ/", "/juː/"], answer: 2, explain: "O 读 /əʊ/，类似汉语“欧”。" }
    ]
  },
  {
    id: 2,
    title: "音标入门：元音",
    subtitle: "元音决定单词的“音色”，先学最常见的几个",
    minutes: 20,
    blocks: [
      { type: "html", title: "元音就像汉语的韵母", html: "<p>英语发音的核心是<strong>元音</strong>。可以粗略理解成汉语里的“韵母”——元音发得对，别人基本就能听懂。</p><p>元音分为<strong>单元音</strong>和<strong>双元音</strong>。单元音又分<strong>短元音</strong>和<strong>长元音</strong>：长元音要拖长，大约是短元音的两倍时长。</p>" },
      { type: "chips", title: "7 个常见短元音", words: [["ɪ", "sit"], ["e", "bed"], ["æ", "cat"], ["ʌ", "cup"], ["ɒ", "hot"], ["ʊ", "book"], ["ə", "about"]] },
      { type: "chips", title: "5 个长元音（记得拖长）", words: [["iː", "see"], ["ɜː", "bird"], ["ɑː", "car"], ["ɔː", "door"], ["uː", "food"]] },
      { type: "html", title: "元音字母的“短读”和“长读”", html: "<p>同一个元音字母在不同单词里可能读不同的音。例如字母 A 在 <strong>cat</strong> 里读短音 /æ/，在 <strong>cake</strong> 里读长音 /eɪ/。你现在不用背规则，<strong>见一个记一个</strong>就好。</p>" },
      { type: "tip", html: "练习方法：对着镜子看<b>嘴型的开合</b>。短元音嘴张得快、收得快；长元音要稳稳地拉长。" }
    ],
    quiz: [
      { q: "单词 cat 中的元音音标是哪一组的典型？", sub: "选择题", options: ["/iː/ 长音", "/æ/ 短元音", "/uː/", "/əʊ/"], answer: 1, explain: "cat 读 /kæt/，中间的 a 是短元音 /æ/。" },
      { q: "长元音和短元音的主要区别是？", sub: "选择题", options: ["长元音要拖长，短元音短促", "长元音写得多一个字母", "没有区别", "长元音都是辅音"], answer: 0, explain: "长短元音最明显的差别是时长：长元音明显拖长。" },
      { q: "下面哪个单词的元音是 /iː/？", sub: "听辨题", options: ["sit", "bed", "see", "cup"], answer: 2, explain: "see 读 /siː/，是长元音 /iː/。" }
    ]
  },
  {
    id: 3,
    title: "音标入门：辅音",
    subtitle: "清辅音和浊辅音，发对这几个“难点音”",
    minutes: 20,
    blocks: [
      { type: "html", title: "清辅音 vs 浊辅音", html: "<p>辅音大部分是<strong>成对</strong>的：<strong>清辅音</strong>声带不振动，<strong>浊辅音</strong>声带振动。比如 p 和 b、t 和 d、k 和 g。</p><p>检验方法：<strong>把手放在喉咙上</strong>发音，感觉到“麻麻的”振动就是浊辅音。</p>" },
      { type: "table", title: "成对辅音对照", head: ["清辅音（不振动）", "浊辅音（振动）", "例词"], rows: [
        ["p", "b", "pen / bed"],
        ["t", "d", "tea / dog"],
        ["k", "g", "cat / girl"],
        ["f", "v", "fish / very"],
        ["s", "z", "sun / zoo"],
        ["θ", "ð", "think / this"],
        ["ʃ", "ʒ", "shop / measure"],
        ["tʃ", "dʒ", "chair / job"]
      ] },
      { type: "html", title: "中国人最容易发错的音", html: "<p><strong>/θ/ 和 /ð/</strong>：舌尖轻轻放在上下牙齿之间，像说“伸舌头”的样子。think、three、this、mother 都有这个音。</p><p><strong>/v/</strong>：上齿要轻轻咬住下唇，别读成汉语的“乌”。very、five、love。</p><p><strong>/r/</strong>：舌尖卷起来，但不要碰到上颚。red、run、right。</p>" },
      { type: "tip", html: "不要怕发得“奇怪”。很多音在中文里没有对应，<b>照着镜子多练 20 遍</b>，肌肉记住了自然就准了。" }
    ],
    quiz: [
      { q: "怎样判断一个辅音是清辅音还是浊辅音？", sub: "选择题", options: ["看它写起来像不像汉字", "摸喉咙感觉声带是否振动", "看它是不是在单词开头", "没有办法判断"], answer: 1, explain: "发声时摸喉咙：振动的是浊辅音，不振动的是清辅音。" },
      { q: "单词 three 开头的辅音是？", sub: "选择题", options: ["/t/", "/θ/", "/s/", "/f/"], answer: 1, explain: "three 读 /θriː/，开头是 /θ/，舌尖要放在上下齿之间。" },
      { q: "下面哪个浊辅音要和 /f/ 成对？", sub: "选择题", options: ["/p/", "/v/", "/s/", "/b/"], answer: 1, explain: "/f/ 和 /v/ 是一对，区别只在于声带是否振动。" }
    ]
  },
  {
    id: 4,
    title: "问候寒暄：Hello!",
    subtitle: "见面、介绍、道别，开口说的第一批句子",
    minutes: 15,
    blocks: [
      { type: "html", title: "最基本的问候", html: "<p>英语寒暄非常简单，先说问候语，再问近况，最后道别。把下面这几句背熟，你就能完成一次完整的招呼。</p>" },
      { type: "examples", title: "问候三连", items: [
        { en: "Hello! Good morning!", cn: "你好！早上好！" },
        { en: "How are you? — I'm fine, thank you. And you?", cn: "你好吗？——我很好，谢谢。你呢？" },
        { en: "Nice to meet you. — Nice to meet you, too.", cn: "很高兴认识你。——我也很高兴认识你。" }
      ] },
      { type: "examples", title: "自我介绍", items: [
        { en: "My name is Wang Fang. I'm from Beijing.", cn: "我叫王芳，我来自北京。" },
        { en: "What's your name?", cn: "你叫什么名字？" },
        { en: "How old are you?", cn: "你多大了？" }
      ] },
      { type: "examples", title: "道别", items: [
        { en: "Goodbye! See you tomorrow.", cn: "再见！明天见。" },
        { en: "Have a nice day!", cn: "祝你今天愉快！" },
        { en: "Good night. Sweet dreams.", cn: "晚安，好梦。" }
      ] },
      { type: "tip", html: "Good morning（早上到中午前）、Good afternoon（中午到傍晚）、Good evening（傍晚以后）。<b>Good night 是道别用的“晚安”</b>，不要在晚上见面时说。" }
    ],
    quiz: [
      { q: "晚上和朋友道别时应该说？", sub: "选择题", options: ["Good morning", "Good evening", "Good night", "Good afternoon"], answer: 2, explain: "Good night 用于晚上的道别（相当于“晚安”）。" },
      { q: "「很高兴认识你」的正确说法是？", sub: "选择题", options: ["Nice to meet you.", "Nice to meeting you.", "Nice meet you.", "Nice met you."], answer: 0, explain: "固定搭配是 Nice to meet you." },
      { q: "别人帮了你忙，最常用的回复对方感谢的话是？", sub: "选择题", options: ["You're welcome.", "How are you?", "Good night.", "Nice to meet you."], answer: 0, explain: "别人说 Thank you，你可以回答 You're welcome.（不客气）。" }
    ]
  },
  {
    id: 5,
    title: "数字和年龄",
    subtitle: "1–10 数一数，说清楚“几岁”“几点”“多少钱”",
    minutes: 15,
    blocks: [
      { type: "chips", title: "1–10 读一读", words: [["one", "一"], ["two", "二"], ["three", "三"], ["four", "四"], ["five", "五"], ["six", "六"], ["seven", "七"], ["eight", "八"], ["nine", "九"], ["ten", "十"]] },
      { type: "html", title: "说年龄", html: "<p>问年龄：<strong>How old are you?</strong>（你多大了？）<br>回答：<strong>I'm twenty.</strong>（我二十岁。）或 <strong>I am twenty years old.</strong></p><p>注意：问别人的年龄在英语文化里有礼貌上要注意，对长辈最好不要直接问。</p>" },
      { type: "examples", title: "常用例子", items: [
        { en: "How old are you? — I'm ten years old.", cn: "你多大了？——我十岁了。" },
        { en: "What time is it? — It's seven o'clock.", cn: "几点了？——七点。" },
        { en: "How much is it? — It's five yuan.", cn: "多少钱？——五块钱。" }
      ] },
      { type: "chips", title: "口头必备数字", words: [["hundred", "一百"], ["thousand", "一千"], ["first", "第一"], ["second", "第二"], ["half", "一半"]] },
      { type: "tip", html: "11 到 19 是 eleven、twelve、thirteen、fourteen、fifteen、sixteen、seventeen、eighteen、nineteen；20、30……90 依次是 twenty、thirty、forty、fifty、sixty、seventy、eighty、ninety。" }
    ],
    quiz: [
      { q: "「七」用英语怎么说？", sub: "选择题", options: ["five", "six", "seven", "nine"], answer: 2, explain: "seven /ˈsev.ən/ 是“七”。" },
      { q: "问别人年龄应该怎么问？", sub: "选择题", options: ["How old are you?", "How much are you?", "What time are you?", "How many are you?"], answer: 0, explain: "How old are you? 是问年龄的固定说法。" },
      { q: "「五点」的正确表达是？", sub: "选择题", options: ["five hour", "five o'clock", "five clock's", "five times"], answer: 1, explain: "整点用 o'clock：five o'clock 五点。" }
    ]
  },
  {
    id: 6,
    title: "颜色和形状",
    subtitle: "描述身边的东西，从颜色开始",
    minutes: 15,
    blocks: [
      { type: "chips", title: "常见颜色", words: [["red", "红色"], ["blue", "蓝色"], ["green", "绿色"], ["yellow", "黄色"], ["black", "黑色"], ["white", "白色"], ["orange", "橙色"], ["pink", "粉色"], ["brown", "棕色"], ["gray", "灰色"]] },
      { type: "html", title: "颜色怎么用在句子里", html: "<p>颜色是形容词，可以直接放在名词前面：<strong>a red apple</strong>（一个红苹果）。也可以放在 be 动词后面描述：<strong>The apple is red.</strong>（苹果是红色的。）</p>" },
      { type: "examples", title: "练习句型", items: [
        { en: "What color is it? — It's blue.", cn: "它是什么颜色？——蓝色。" },
        { en: "I like the green one.", cn: "我喜欢那个绿色的。" },
        { en: "She is wearing a white shirt.", cn: "她穿着一件白衬衫。" }
      ] },
      { type: "tip", html: "注意：英语里形容词<b>先说颜色再说东西</b>，顺序和中文一样（红苹果 = red apple），这一点很好记。" }
    ],
    quiz: [
      { q: "「蓝天」用英语怎么说？", sub: "选择题", options: ["sky blue", "blue sky", "blue's sky", "sky of blue"], answer: 1, explain: "形容词放在名词前面：blue sky。" },
      { q: "What color is the sun?", sub: "常识题", options: ["The sun is blue.", "The sun is yellow.", "The sun is green.", "The sun is black."], answer: 1, explain: "太阳是黄色的：The sun is yellow." },
      { q: "下面哪个不是颜色？", sub: "选择题", options: ["pink", "brown", "chair", "gray"], answer: 2, explain: "chair 是“椅子”，不是颜色。" }
    ]
  },
  {
    id: 7,
    title: "家庭成员",
    subtitle: "介绍“我家有几个人”，用 have 说清楚",
    minutes: 15,
    blocks: [
      { type: "chips", title: "家庭成员", words: [["father", "爸爸"], ["mother", "妈妈"], ["brother", "兄弟"], ["sister", "姐妹"], ["son", "儿子"], ["daughter", "女儿"], ["grandfather", "爷爷"], ["grandmother", "奶奶"], ["family", "家庭"], ["baby", "宝宝"]] },
      { type: "examples", title: "介绍你的家庭", items: [
        { en: "There are four people in my family.", cn: "我家有四口人。" },
        { en: "This is my mother. She is a teacher.", cn: "这是我妈妈。她是老师。" },
        { en: "I have one brother and one sister.", cn: "我有一个兄弟和一个姐妹。" }
      ] },
      { type: "html", title: "注意：有两个易错点", html: "<p>① <strong>“一家人”用 there be 句型</strong>：There are four people in my family.（不是 There have…）</p><p>② 代词要跟性别：<strong>he</strong> 指男性，<strong>she</strong> 指女性，<strong>it</strong> 指物。</p>" },
      { type: "tip", html: "试着用一句话介绍自己家：<b>There are ___ people in my family. My father is a ___, and my mother is a ___.</b>" }
    ],
    quiz: [
      { q: "「我家有四口人」的正确说法是？", sub: "选择题", options: ["There have four people in my family.", "There are four people in my family.", "My family have four people.", "My family are four people."], answer: 1, explain: "表示“某处有某物/某人”用 There be 句型。" },
      { q: "指“我的妈妈”时要用哪个代词？", sub: "选择题", options: ["he", "she", "it", "they"], answer: 1, explain: "妈妈是女性，用 she。" },
      { q: "「女儿」的英语是？", sub: "选择题", options: ["son", "sister", "daughter", "mother"], answer: 2, explain: "daughter 是“女儿”，son 是“儿子”。" }
    ]
  },
  {
    id: 8,
    title: "动物和食物",
    subtitle: "说说你喜欢吃什么、养什么宠物",
    minutes: 18,
    blocks: [
      { type: "chips", title: "常见动物", words: [["dog", "狗"], ["cat", "猫"], ["bird", "鸟"], ["fish", "鱼"], ["panda", "熊猫"], ["rabbit", "兔子"], ["monkey", "猴子"], ["horse", "马"], ["tiger", "老虎"], ["sheep", "绵羊"]] },
      { type: "chips", title: "常见食物", words: [["rice", "米饭"], ["bread", "面包"], ["egg", "鸡蛋"], ["milk", "牛奶"], ["water", "水"], ["apple", "苹果"], ["banana", "香蕉"], ["meat", "肉"], ["noodle", "面条"], ["tea", "茶"]] },
      { type: "examples", title: "说说喜好", items: [
        { en: "I like apples. — I don't like bananas.", cn: "我喜欢苹果。——我不喜欢香蕉。" },
        { en: "Do you have a pet? — Yes, I have a dog.", cn: "你养宠物吗？——是的，我养了一只狗。" },
        { en: "What would you like to eat? — Some rice and eggs, please.", cn: "你想吃什么？——请给我一些米饭和鸡蛋。" }
      ] },
      { type: "html", title: "可数 vs 不可数", html: "<p><strong>可数名词</strong>（能一个个数）：apple → apples，egg → eggs，dog → dogs。<br><strong>不可数名词</strong>（液体的、粉末的、整体的）：water、milk、rice、bread、tea、meat，<strong>不加 s</strong>。</p><p>说“一些”时：<strong>some + 复数/不可数</strong>（some apples, some water）。</p>" },
      { type: "tip", html: "想表达“一点”除了 some，还可以用 <b>a little + 不可数</b>（a little water），<b>a few + 可数复数</b>（a few eggs）。" }
    ],
    quiz: [
      { q: "下面哪个是不可数名词？", sub: "选择题", options: ["apple", "egg", "milk", "dog"], answer: 2, explain: "milk 是液体，不可数，不能加 s 说 milks。" },
      { q: "「一些苹果」的正确说法是？", sub: "选择题", options: ["some apple", "some apples", "a apples", "many apple"], answer: 1, explain: "apple 是可数名词，说“一些”要用复数形式 some apples。" },
      { q: "「我不喜欢香蕉」的正确说法是？", sub: "选择题", options: ["I not like bananas.", "I don't likes bananas.", "I don't like bananas.", "I doesn't like bananas."], answer: 2, explain: "否定句用 don't，后面动词用原形：I don't like bananas." }
    ]
  },
  {
    id: 9,
    title: "常用动词和一般现在时",
    subtitle: "说说你每天做什么，加 s 的规则要牢记",
    minutes: 20,
    blocks: [
      { type: "html", title: "最常用的 10 个动词", html: "<p>go（去）、come（来）、eat（吃）、drink（喝）、see（看见）、look（看）、listen（听）、speak（说）、read（读）、write（写）。这 10 个动词能覆盖大量日常对话。</p>" },
      { type: "html", title: "第三人称单数加 s", html: "<p>说“我每天读书”→ I <strong>read</strong> every day。<br>但说“她每天读书”→ She <strong>reads</strong> every day。</p><p><strong>只有主语是 he / she / it / 单个人名</strong>时，动词才加 s。</p>" },
      { type: "table", title: "加 s 的三种情况", head: ["情况", "规则", "例子"], rows: [
        ["一般动词", "直接加 s", "read → reads, like → likes"],
        ["以 s / x / ch / sh / o 结尾", "加 es", "go → goes, watch → watches, do → does"],
        ["辅音 + y 结尾", "把 y 变 i，加 es", "study → studies, fly → flies"]
      ] },
      { type: "examples", title: "日常活动", items: [
        { en: "I get up at seven and have breakfast.", cn: "我七点起床然后吃早饭。" },
        { en: "My father goes to work by car.", cn: "我爸爸开车去上班。" },
        { en: "She studies English every evening.", cn: "她每天晚上学英语。" }
      ] },
      { type: "tip", html: "记住一个陷阱：<b>用了 does / doesn't 之后，动词要回到原形</b>。Does she <b>go</b>…?（不是 Does she goes）" }
    ],
    quiz: [
      { q: "He ___ to school every day. 应填？", sub: "选择题", options: ["go", "goes", "going", "goed"], answer: 1, explain: "主语 he 是第三人称单数，go 要变成 goes。" },
      { q: "My sister ___ English. 应填？", sub: "选择题", options: ["study", "studys", "studies", "studying"], answer: 2, explain: "study 是“辅音 + y”结尾，要变 y 为 i 加 es → studies。" },
      { q: "下面哪句是正确的？", sub: "选择题", options: ["I don't likes tea.", "She doesn't like tea.", "She doesn't likes tea.", "I doesn't like tea."], answer: 1, explain: "she 用 doesn't，后面动词用原形 like。" }
    ]
  },
  {
    id: 10,
    title: "时间和日期",
    subtitle: "说清楚“几点、哪天、什么时候”",
    minutes: 15,
    blocks: [
      { type: "chips", title: "星期", words: [["Monday", "星期一"], ["Tuesday", "星期二"], ["Wednesday", "星期三"], ["Thursday", "星期四"], ["Friday", "星期五"], ["Saturday", "星期六"], ["Sunday", "星期日"]] },
      { type: "chips", title: "时间段", words: [["morning", "早上"], ["afternoon", "下午"], ["evening", "晚上"], ["night", "夜里"], ["today", "今天"], ["tomorrow", "明天"], ["yesterday", "昨天"], ["week", "周"], ["month", "月"], ["year", "年"]] },
      { type: "table", title: "时间怎么说", head: ["英语", "规则", "例子"], rows: [
        ["整点", "数字 + o'clock", "It's eight o'clock. 八点。"],
        ["半点", "half past + 小时", "half past seven 七点半"],
        ["几点几分", "直接说：小时 + 分钟", "seven fifteen 七点十五"],
        ["上午/下午", "in the morning / in the afternoon", "I run in the morning."],
        ["星期几", "on + 星期", "I have class on Monday."]
      ] },
      { type: "examples", title: "对话练习", items: [
        { en: "What day is it today? — It's Friday.", cn: "今天星期几？——星期五。" },
        { en: "When do you get up? — At seven o'clock.", cn: "你几点起床？——七点。" },
        { en: "See you on Sunday evening.", cn: "星期天晚上见。" }
      ] },
      { type: "tip", html: "小诀窍：<b>年、月、日的前面用 in / on</b>。in 2025（年）、in May（月）、on Monday（星期）。" }
    ],
    quiz: [
      { q: "「星期一」的英语是？", sub: "选择题", options: ["Sunday", "Monday", "Sunday's", "Jan"], answer: 1, explain: "Monday 是星期一。" },
      { q: "「八点整」应该怎么说？", sub: "选择题", options: ["eight hour", "eight time", "eight o'clock", "eight clock"], answer: 2, explain: "整点用 o'clock：eight o'clock。" },
      { q: "「在星期天」应该用哪个介词？", sub: "选择题", options: ["in Sunday", "on Sunday", "at Sunday", "of Sunday"], answer: 1, explain: "具体的某一天用 on：on Sunday。" }
    ]
  },
  {
    id: 11,
    title: "购物和问路",
    subtitle: "问价格、问路，出门也能说两句",
    minutes: 18,
    blocks: [
      { type: "examples", title: "在商店", items: [
        { en: "How much is this? — It's ten yuan.", cn: "这个多少钱？——十块钱。" },
        { en: "I want to buy two apples.", cn: "我想买两个苹果。" },
        { en: "Can I have the bill, please?", cn: "请给我账单（买单）。" }
      ] },
      { type: "examples", title: "问路", items: [
        { en: "Excuse me, where is the hospital?", cn: "打扰一下，医院在哪里？" },
        { en: "Go straight and turn left.", cn: "直走然后左转。" },
        { en: "It's near the park.", cn: "它在公园附近。" }
      ] },
      { type: "chips", title: "必备地点和方向", words: [["street", "街道"], ["shop", "商店"], ["park", "公园"], ["hospital", "医院"], ["school", "学校"], ["left", "左边"], ["right", "右边"], ["near", "附近"], ["far", "远"], ["straight", "直走"]] },
      { type: "tip", html: "向陌生人问路前先说 <b>Excuse me</b>（打扰一下），这在美国、英国都被视为基本礼貌。听不清时可以问：<b>Pardon? Could you say that again?</b>" }
    ],
    quiz: [
      { q: "「这个多少钱？」用英语怎么说？", sub: "选择题", options: ["How many is this?", "How much is this?", "What time is this?", "How old is this?"], answer: 1, explain: "问价格用 How much。" },
      { q: "「直走然后左转」的英语是？", sub: "选择题", options: ["Go straight and turn left.", "Go left and turn straight.", "Turn near and go left.", "Go right and turn left."], answer: 0, explain: "Go straight and turn left. 直走然后左转。" },
      { q: "打断别人或向陌生人搭话前应该说？", sub: "选择题", options: ["Good night.", "Excuse me.", "You're welcome.", "See you."], answer: 1, explain: "Excuse me. 用来礼貌地引起对方注意。" }
    ]
  },
  {
    id: 12,
    title: "发音技巧和开口练习",
    subtitle: "连读、重音、语调，让你的英语更好听",
    minutes: 20,
    blocks: [
      { type: "html", title: "三件让英语“好听”的事", html: "<p><strong>1. 词重音</strong>：多音节单词有一个音节要读得重、长、高。例如 <strong>TA-ble</strong>、<strong>ho-TEL</strong>、<strong>beau-ti-ful</strong>。重音错了，别人可能听不懂。</p><p><strong>2. 连读</strong>：前一个词以辅音结尾，后一个词以元音开头时，连起来读。taro<strong>n_o</strong>f（an apple → a-napple）。</p><p><strong>3. 语调</strong>：陈述句一般<strong>降调</strong>（往下走），一般疑问句一般<strong>升调</strong>（往上扬）。</p>" },
      { type: "table", title: "三个语调小例子", head: ["句子", "语调", "说明"], rows: [
        ["I like English.", "↘ 降调", "陈述句，表示肯定"],
        ["Do you like English?", "↗ 升调", "一般疑问句，表示疑问"],
        ["What's your name?", "↘ 降调", "特殊疑问句，一般用降调"]
      ] },
      { type: "html", title: "每天 10 分钟跟读法", html: "<p>① 听一遍原句（点「🔊」朗读）。<br>② 跟读，尽量模仿语调。<br>③ 录下来或自己再读一遍对照。<br>④ 用「每日一句」和「单词卡」边学边读。</p>" },
      { type: "tip", html: "开口是学英语最重要的一步。<b>说错不丢人，不说才可惜。</b>从今天起，每个新单词都读出声三遍。" }
    ],
    quiz: [
      { q: "一般疑问句 Do you like it? 通常用什么语调？", sub: "选择题", options: ["降调 ↘", "升调 ↗", "平的", "没有语调"], answer: 1, explain: "一般疑问句（是/否问题）一般用升调。" },
      { q: "读多音节单词时最重要的是？", sub: "选择题", options: ["每个音节都一样重", "找准重读音节", "读得越大声越好", "越快越好"], answer: 1, explain: "多音节词要找准重音，重音对了发音才自然。" },
      { q: "下面哪个做法最有助于学好英语？", sub: "选择题", options: ["只看不读", "每天跟读并开口练习", "只背语法规则", "从不听原声"], answer: 1, explain: "每天跟读开口，是最有效的语感训练。" }
    ]
  }
];
