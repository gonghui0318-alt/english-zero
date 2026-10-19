/* ============================================================
   字母数据：26 个英文字母
   word 为该字母的例词（都是最基础的单词）
   ============================================================ */
window.LETTERS = [
  { u: "A", l: "a", word: "apple", cn: "苹果", ipa: "/ˈæp.əl/" },
  { u: "B", l: "b", word: "boy", cn: "男孩", ipa: "/bɔɪ/" },
  { u: "C", l: "c", word: "cat", cn: "猫", ipa: "/kæt/" },
  { u: "D", l: "d", word: "dog", cn: "狗", ipa: "/dɒɡ/" },
  { u: "E", l: "e", word: "egg", cn: "鸡蛋", ipa: "/eɡ/" },
  { u: "F", l: "f", word: "fish", cn: "鱼", ipa: "/fɪʃ/" },
  { u: "G", l: "g", word: "girl", cn: "女孩", ipa: "/ɡɜːl/" },
  { u: "H", l: "h", word: "hat", cn: "帽子", ipa: "/hæt/" },
  { u: "I", l: "i", word: "ice", cn: "冰", ipa: "/aɪs/" },
  { u: "J", l: "j", word: "jump", cn: "跳", ipa: "/dʒʌmp/" },
  { u: "K", l: "k", word: "key", cn: "钥匙", ipa: "/kiː/" },
  { u: "L", l: "l", word: "leg", cn: "腿", ipa: "/leɡ/" },
  { u: "M", l: "m", word: "map", cn: "地图", ipa: "/mæp/" },
  { u: "N", l: "n", word: "nose", cn: "鼻子", ipa: "/nəʊz/" },
  { u: "O", l: "o", word: "orange", cn: "橙子", ipa: "/ˈɒr.ɪndʒ/" },
  { u: "P", l: "p", word: "pen", cn: "钢笔", ipa: "/pen/" },
  { u: "Q", l: "q", word: "queen", cn: "女王", ipa: "/kwiːn/" },
  { u: "R", l: "r", word: "red", cn: "红色", ipa: "/red/" },
  { u: "S", l: "s", word: "sun", cn: "太阳", ipa: "/sʌn/" },
  { u: "T", l: "t", word: "tea", cn: "茶", ipa: "/tiː/" },
  { u: "U", l: "u", word: "up", cn: "向上", ipa: "/ʌp/" },
  { u: "V", l: "v", word: "very", cn: "非常", ipa: "/ˈver.i/" },
  { u: "W", l: "w", word: "water", cn: "水", ipa: "/ˈwɔː.tə/" },
  { u: "X", l: "x", word: "box", cn: "盒子", ipa: "/bɒks/" },
  { u: "Y", l: "y", word: "yes", cn: "是的", ipa: "/jes/" },
  { u: "Z", l: "z", word: "zoo", cn: "动物园", ipa: "/zuː/" }
];

/* ============================================================
   元音字母的两种读法
   ============================================================ */
window.VOWEL_RULES = [
  { letter: "A", short: "æ", shortWord: "cat", long: "eɪ", longWord: "cake" },
  { letter: "E", short: "e", shortWord: "bed", long: "iː", longWord: "he" },
  { letter: "I", short: "ɪ", shortWord: "big", long: "aɪ", longWord: "bike" },
  { letter: "O", short: "ɒ", shortWord: "hot", long: "əʊ", longWord: "nose" },
  { letter: "U", short: "ʌ", shortWord: "cup", long: "juː", longWord: "use" }
];

/* ============================================================
   音标数据（48 个国际音标，按中国大陆教学惯例分类）
   ============================================================ */
window.PHONETICS = [
  {
    group: "元音 · 单元音（短元音）",
    tip: "短元音的特点是“短促、不拖长”，发完马上停。",
    items: [
      { symbol: "ɪ", desc: "嘴唇微张，舌头稍向后缩，短促的“衣”", words: ["sit", "big", "this"] },
      { symbol: "e", desc: "嘴半开，类似汉语“诶”的前半段", words: ["bed", "pen", "ten"] },
      { symbol: "æ", desc: "嘴张大，嘴角向两边拉，介于“啊”和“诶”之间", words: ["cat", "bad", "hand"] },
      { symbol: "ʌ", desc: "嘴巴半张，舌放低，短促的“啊”", words: ["cup", "sun", "up"] },
      { symbol: "ɒ", desc: "嘴唇略圆，舌后部抬起，短促的“奥”", words: ["hot", "dog", "box"] },
      { symbol: "ʊ", desc: "嘴唇稍收圆，短促的“乌”", words: ["book", "good", "put"] },
      { symbol: "ə", desc: "最放松的弱读音，像轻轻“呃”一下", words: ["about", "teacher", "sofa"] }
    ]
  },
  {
    group: "元音 · 单元音（长元音）",
    tip: "长元音一定要“拖长”发音，比短元音大约长一倍。",
    items: [
      { symbol: "iː", desc: "嘴角向两边拉开，拉长的“衣”", words: ["see", "tea", "she"] },
      { symbol: "ɜː", desc: "舌平放，嘴唇自然，拉长的“额”", words: ["bird", "girl", "learn"] },
      { symbol: "ɑː", desc: "嘴张大，舌头后缩，拉长的“啊”", words: ["car", "park", "father"] },
      { symbol: "ɔː", desc: "嘴唇收圆前突，拉长的“奥”", words: ["door", "talk", "four"] },
      { symbol: "uː", desc: "嘴唇收圆前突，拉长的“乌”", words: ["food", "blue", "school"] }
    ]
  },
  {
    group: "元音 · 双元音",
    tip: "双元音是两个音“滑”在一起，前重后轻、前长后短。",
    items: [
      { symbol: "eɪ", desc: "从“诶”滑到“衣”", words: ["day", "name", "cake"] },
      { symbol: "aɪ", desc: "从“啊”滑到“衣”，像“爱”", words: ["my", "like", "time"] },
      { symbol: "ɔɪ", desc: "从“奥”滑到“衣”", words: ["boy", "toy", "enjoy"] },
      { symbol: "aʊ", desc: "从“啊”滑到“乌”，像“好”的韵母", words: ["how", "now", "house"] },
      { symbol: "əʊ", desc: "从“呃”滑到“乌”，像“欧”", words: ["go", "no", "home"] },
      { symbol: "ɪə", desc: "从“衣”滑到“呃”", words: ["here", "near", "idea"] },
      { symbol: "eə", desc: "从“诶”滑到“呃”", words: ["hair", "care", "where"] },
      { symbol: "ʊə", desc: "从“乌”滑到“呃”", words: ["tour", "sure", "poor"] }
    ]
  },
  {
    group: "辅音 · 清辅音（声带不振动）",
    tip: "手放在喉咙上发这些音，感觉不到明显振动。",
    items: [
      { symbol: "p", desc: "双唇紧闭后突然放开，送气", words: ["pen", "pig", "map"] },
      { symbol: "t", desc: "舌尖抵上齿龈后放开，送气", words: ["tea", "ten", "cat"] },
      { symbol: "k", desc: "舌根抵软腭后放开，送气", words: ["key", "cat", "book"] },
      { symbol: "f", desc: "上齿轻咬下唇，吹气", words: ["fish", "five", "off"] },
      { symbol: "θ", desc: "舌尖轻放上下齿之间，吹气", words: ["think", "three", "mouth"] },
      { symbol: "s", desc: "舌尖靠近上齿龈，发出“丝”", words: ["sun", "see", "bus"] },
      { symbol: "ʃ", desc: "舌尖卷起，嘴唇前突的“嘘”", words: ["she", "shop", "fish"] },
      { symbol: "h", desc: "气流从喉咙呼出", words: ["hat", "hot", "he"] },
      { symbol: "tʃ", desc: "像“吃”，但不卷舌", words: ["chair", "China", "watch"] },
      { symbol: "tr", desc: "t 和 r 连读，像“戳”", words: ["tree", "train", "try"] },
      { symbol: "ts", desc: "t 和 s 连读，像“次”", words: ["cats", "hats", "its"] }
    ]
  },
  {
    group: "辅音 · 浊辅音（声带振动）",
    tip: "手放在喉咙上，可以明显感到声带在振动。",
    items: [
      { symbol: "b", desc: "双唇紧闭后放开，不送气", words: ["boy", "bag", "job"] },
      { symbol: "d", desc: "舌尖抵上齿龈后放开，不送气", words: ["dog", "day", "red"] },
      { symbol: "g", desc: "舌根抵软腭后放开", words: ["go", "girl", "bag"] },
      { symbol: "v", desc: "上齿轻咬下唇，让声带振动", words: ["very", "five", "love"] },
      { symbol: "ð", desc: "舌尖轻放齿间，声带振动", words: ["this", "there", "mother"] },
      { symbol: "z", desc: "发声的“兹”", words: ["zoo", "zero", "is"] },
      { symbol: "ʒ", desc: "发声的“日”，不卷舌", words: ["measure", "vision", "usual"] },
      { symbol: "r", desc: "舌尖卷起，不碰到上颚", words: ["red", "run", "right"] },
      { symbol: "dʒ", desc: "像“只”，但不卷舌", words: ["job", "age", "orange"] },
      { symbol: "dr", desc: "d 和 r 连读", words: ["drink", "draw", "dream"] },
      { symbol: "dz", desc: "d 和 z 连读，像“兹”", words: ["beds", "needs", "foods"] }
    ]
  },
  {
    group: "辅音 · 鼻音、半元音和边音",
    items: [
      { symbol: "m", desc: "双唇闭合，气流从鼻子出来", words: ["man", "map", "come"] },
      { symbol: "n", desc: "舌尖抵上齿龈，气流从鼻子出来", words: ["no", "name", "sun"] },
      { symbol: "ŋ", desc: "舌根抵软腭，气流从鼻子出来，像“英”的尾音", words: ["sing", "long", "king"] },
      { symbol: "l", desc: "舌尖抵上齿龈，气流从舌头两侧流出", words: ["leg", "like", "girl"] },
      { symbol: "j", desc: "半元音，像“也”的开头", words: ["yes", "you", "year"] },
      { symbol: "w", desc: "半元音，像“我”的开头", words: ["we", "water", "work"] }
    ]
  }
];
