/* ============================================================
   每日一句（30 句，覆盖问候、生活、学习、鼓励）
   系统按日期自动轮换；每天都是“新的一句”
   ============================================================ */
window.QUOTES = [
  { en: "Good morning! How are you today?", cn: "早上好！你今天怎么样？", words: [["morning", "早上"], ["today", "今天"]] },
  { en: "Nice to meet you. My name is Li Ming.", cn: "很高兴认识你。我叫李明。", words: [["meet", "遇见"], ["name", "名字"]] },
  { en: "Where are you from?", cn: "你来自哪里？", words: [["where", "哪里"], ["from", "从……来"]] },
  { en: "I can speak a little English.", cn: "我会说一点英语。", words: [["little", "一点"], ["speak", "说"]] },
  { en: "Could you say that again, please?", cn: "请你再说一遍好吗？", words: [["again", "再一次"], ["please", "请"]] },
  { en: "I don't understand. Can you help me?", cn: "我不明白。你能帮我吗？", words: [["understand", "明白"], ["help", "帮助"]] },
  { en: "How much is this?", cn: "这个多少钱？", words: [["how much", "多少钱"], ["this", "这个"]] },
  { en: "I would like a cup of water.", cn: "我想要一杯水。", words: [["cup", "杯子"], ["water", "水"]] },
  { en: "Excuse me, where is the bus stop?", cn: "打扰一下，公交车站在哪里？", words: [["bus", "公交车"], ["stop", "站"]] },
  { en: "What time is it now?", cn: "现在几点了？", words: [["time", "时间"], ["now", "现在"]] },
  { en: "I get up at seven every morning.", cn: "我每天早上七点起床。", words: [["get up", "起床"], ["every", "每个"]] },
  { en: "I like drinking tea in the afternoon.", cn: "我喜欢下午喝茶。", words: [["drink", "喝"], ["afternoon", "下午"]] },
  { en: "The weather is nice today.", cn: "今天天气很好。", words: [["weather", "天气"], ["nice", "好的"]] },
  { en: "It is raining. Don't forget your umbrella.", cn: "在下雨。别忘了你的伞。", words: [["rain", "下雨"], ["forget", "忘记"]] },
  { en: "Practice makes perfect.", cn: "熟能生巧。", words: [["practice", "练习"], ["perfect", "完美的"]] },
  { en: "Every day is a new beginning.", cn: "每一天都是新的开始。", words: [["beginning", "开始"], ["new", "新的"]] },
  { en: "Don't be afraid of making mistakes.", cn: "不要害怕犯错。", words: [["afraid", "害怕"], ["mistake", "错误"]] },
  { en: "Learning English takes time and patience.", cn: "学英语需要时间和耐心。", words: [["take", "花费"], ["patience", "耐心"]] },
  { en: "I want to learn English well.", cn: "我想把英语学好。", words: [["learn", "学习"], ["well", "好地"]] },
  { en: "Let's read this book together.", cn: "我们一起读这本书吧。", words: [["read", "读"], ["together", "一起"]] },
  { en: "Can you speak more slowly?", cn: "你能说慢一点吗？", words: [["slowly", "慢慢地"], ["more", "更"]] },
  { en: "What do you like to do in your free time?", cn: "你空闲时间喜欢做什么？", words: [["free time", "空闲时间"], ["like", "喜欢"]] },
  { en: "I am looking forward to seeing you.", cn: "我期待着见到你。", words: [["look forward to", "期待"], ["see", "看见"]] },
  { en: "Thank you very much for your help.", cn: "非常感谢你的帮助。", words: [["thank", "感谢"], ["very much", "非常"]] },
  { en: "See you tomorrow. Have a nice day!", cn: "明天见。祝你今天愉快！", words: [["tomorrow", "明天"], ["nice", "美好的"]] },
  { en: "Small steps every day lead to big changes.", cn: "每天一小步，带来大改变。", words: [["step", "一步"], ["change", "改变"]] },
  { en: "I'm a little tired, but I'm happy.", cn: "我有点累，但我很开心。", words: [["tired", "累的"], ["but", "但是"]] },
  { en: "What are you doing this evening?", cn: "你今晚打算做什么？", words: [["evening", "晚上"], ["doing", "正在做"]] },
  { en: "Could you write your name here?", cn: "你能在这里写下你的名字吗？", words: [["write", "写"], ["here", "这里"]] },
  { en: "Keep going, you are doing great!", cn: "继续加油，你做得很好！", words: [["keep", "保持"], ["going", "前进"]] }
];
