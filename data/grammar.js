/* ============================================================
   零基础语法示范数据（只讲最核心、最常用的 5 个点）
   ============================================================ */
window.GRAMMAR = [
  {
    id: "be",
    title: "be 动词：am / is / are",
    intro: "英语里表示“是、在、怎么样”，都要用 be 动词。记住一句口诀：<strong>我用 am，你用 are，is 连着他她它，复数全都用 are。</strong>",
    table: {
      head: ["主语", "be 动词", "缩写", "例句"],
      rows: [
        ["I（我）", "am", "I'm", "I am a student. 我是学生。"],
        ["you / we / they（你/我们/他们）", "are", "you're / we're / they're", "You are my friend. 你是我的朋友。"],
        ["he / she / it（他/她/它）", "is", "he's / she's / it's", "She is a teacher. 她是老师。"],
        ["单个人名/单数名词", "is", "—", "Tom is tall. 汤姆很高。"]
      ]
    },
    examples: [
      { en: "I am fine.", cn: "我很好。" },
      { en: "He is at home.", cn: "他在家。" },
      { en: "They are students.", cn: "他们是学生。" }
    ],
    tip: "否定句：be 后面加 not（is not = isn't）。疑问句：把 be 提到最前面（Are you a student?）。"
  },
  {
    id: "have",
    title: "have / has：表示“有”",
    intro: "表示“拥有”时，<strong>I / you / we / they 用 have</strong>，<strong>he / she / it 用 has</strong>。二者意思完全一样，只是跟着主语换形式。",
    table: {
      head: ["主语", "用哪个", "例句"],
      rows: [
        ["I / you / we / they", "have", "I have a bike. 我有一辆自行车。"],
        ["he / she / it / 单数名词", "has", "She has two cats. 她有两只猫。"]
      ]
    },
    examples: [
      { en: "I have a question.", cn: "我有一个问题。" },
      { en: "He has a new phone.", cn: "他有一部新手机。" },
      { en: "Do you have any money?", cn: "你有钱吗？" }
    ],
    tip: "提问时用 Do / Does：Does he have a car?（加 does 后，has 要变回 have）。"
  },
  {
    id: "tense",
    title: "一般现在时：说说日常习惯",
    intro: "描述每天都做的事、经常发生的事，用<strong>一般现在时</strong>。规则很简单：大多数人直接用动词原形；只有<strong>第三人称单数（he/she/it）</strong>要在动词后面加 -s。",
    table: {
      head: ["主语", "动词形式", "例句"],
      rows: [
        ["I / you / we / they", "动词原形", "I like coffee. 我喜欢咖啡。"],
        ["he / she / it", "动词 + s/es", "She likes coffee. 她喜欢咖啡。"],
        ["否定", "don't / doesn't + 原形", "He doesn't like coffee. 他不喜欢咖啡。"],
        ["疑问", "Do / Does + 主语 + 原形？", "Does he like coffee? 他喜欢咖啡吗？"]
      ]
    },
    examples: [
      { en: "I get up at seven every day.", cn: "我每天七点起床。" },
      { en: "My mother goes to work by bus.", cn: "我妈妈坐公交去上班。" },
      { en: "Do you like apples?", cn: "你喜欢苹果吗？" }
    ],
    tip: "第三人称单数加 s 的三种情况：一般直接加 s（likes）；以 s/x/ch/sh/o 结尾加 es（goes, watches）；辅音字母 + y 结尾把 y 变 i 加 es（study → studies）。"
  },
  {
    id: "neg",
    title: "否定和疑问：don't / do / not",
    intro: "普通动词（不是 be 动词）的否定和疑问，都需要“小助手” <strong>do</strong>。否定 = <strong>don't / doesn't + 动词原形</strong>；疑问 = <strong>Do / Does 放到句首</strong>。",
    table: {
      head: ["句型", "结构", "例句"],
      rows: [
        ["肯定句", "主语 + 动词 + 其他", "I like music."],
        ["否定句", "主语 + don't/doesn't + 动词原形", "I don't like music. / He doesn't like music."],
        ["一般疑问句", "Do/Does + 主语 + 动词原形？", "Do you like music? — Yes, I do. / No, I don't."]
      ]
    },
    examples: [
      { en: "I don't have time today.", cn: "我今天没时间。" },
      { en: "She doesn't eat meat.", cn: "她不吃肉。" },
      { en: "Do you speak English?", cn: "你会说英语吗？" }
    ],
    tip: "特别注意：用了 don't / doesn't 之后，<strong>后面的动词一定要回到原形</strong>，不能再加 s。"
  },
  {
    id: "wordorder",
    title: "句子顺序：主语 + 动词 + 宾语",
    intro: "英语句子的骨架和中文很像：<strong>谁 + 做什么 + 什么</strong>。把这三块找准，句子就搭起来了。",
    table: {
      head: ["主语（谁）", "动词（做）", "宾语（什么）", "中文意思"],
      rows: [
        ["I", "eat", "an apple", "我吃一个苹果"],
        ["She", "likes", "music", "她喜欢音乐"],
        ["My father", "drives", "a car", "我爸爸开汽车"],
        ["We", "study", "English", "我们学英语"]
      ]
    },
    examples: [
      { en: "I read books every day.", cn: "我每天读书。" },
      { en: "He buys milk at the shop.", cn: "他在商店买牛奶。" },
      { en: "They play football on Sunday.", cn: "他们周日踢足球。" }
    ],
    tip: "修饰时间、地点的词一般放句尾（I study English at home every day.），先说“做什么”，再说“在哪儿、什么时候”。"
  }
];
