/* ============================================================
   公共脚本：本地存储、发音朗读、导航、通用组件
   所有页面都引用本文件（放在最后，等页面内容和数据加载后再执行）
   ============================================================ */
(function () {
  "use strict";

  const KEY = "english-zero-progress-v1";

  /* ---------------- 存储 ---------------- */
  function defaults() {
    return {
      lessons: {},        // { id: { done: true, quizScore: 3, quizTotal: 3, ts } }
      letters: {},        // { "A": 1 }
      words: {},          // { word: { lv: 0-2, seen: n, right: n, wrong: n, last } }  lv:0 新学 1 认识 2 已掌握
      streak: { last: null, days: 0, totalDays: 0, history: {} }, // history: { "2026-10-19": 学习记录数 }
      totalDone: 0,       // 累计完成练习数
      quizBest: {},       // { mode: bestPercent }
      quotesRead: {},     // { "2026-10-19": 1 }
      speak: true
    };
  }

  function deepMerge(base, data) {
    if (!data || typeof data !== "object") return base;
    for (const k in data) {
      if (!(k in base)) { base[k] = data[k]; continue; }
      if (base[k] && typeof base[k] === "object" && !Array.isArray(base[k]) &&
          data[k] && typeof data[k] === "object" && !Array.isArray(data[k])) {
        deepMerge(base[k], data[k]);
      } else {
        base[k] = data[k];
      }
    }
    return base;
  }

  function load() {
    const base = defaults();
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) deepMerge(base, JSON.parse(raw));
    } catch (e) { /* 存储不可用时使用内存数据 */ }
    return base;
  }

  let state = load();

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
  }

  function todayKey(d) {
    d = d || new Date();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return d.getFullYear() + "-" + m + "-" + day;
  }

  /* ---------------- 每日打卡 / 连续天数 ---------------- */
  function markActivity(amount) {
    const t = todayKey();
    const s = state.streak;
    s.history[t] = (s.history[t] || 0) + (amount || 1);
    if (s.last !== t) {
      const y = new Date();
      y.setDate(y.getDate() - 1);
      if (s.last === todayKey(y)) {
        s.days = (s.days || 0) + 1;
      } else {
        s.days = 1;
      }
      s.last = t;
      s.totalDays = (s.totalDays || 0) + 1;
    }
    save();
    updateStreakPill();
  }

  function updateStreakPill() {
    const el = document.querySelector(".streak-pill");
    if (el) {
      const n = state.streak.last === todayKey() ? state.streak.days : 0;
      el.innerHTML = "🔥 连续学习 <span>" + n + "</span> 天";
    }
  }

  /* ---------------- 读音朗读（浏览器 TTS） ---------------- */
  let voices = [];
  let enVoice = null;
  let voiceReady = false;
  let pending = null;      // 等待语音列表加载后再播的请求
  let unlockWarned = false;

  function isEnglish(v) { return v && /^en/i.test(v.lang || ""); }

  function pickVoice() {
    if (!("speechSynthesis" in window)) return false;
    const list = window.speechSynthesis.getVoices() || [];
    if (!list.length) return false;
    voices = list;
    voiceReady = true;
    // 优先选择英文语音；用关键词打分，避免选到中文语音
    const score = v => {
      const n = (v.name || "").toLowerCase();
      let s = 0;
      if (/^en[-_]us/i.test(v.lang)) s += 40;
      else if (/^en[-_]gb/i.test(v.lang)) s += 35;
      else if (/^en/i.test(v.lang)) s += 30;
      if (/natural|neural/.test(n)) s += 20;
      if (/google/.test(n)) s += 15;
      if (/samantha|aria|jenny|zira|george|guy|ava|allison|karen|daniel|serena/.test(n)) s += 10;
      if (/^zh/i.test(v.lang)) s -= 100;   // 中文语音读英文会非常怪
      if (!v.localService) s += 1;         // 在线语音通常更自然
      return s;
    };
    const en = list.filter(isEnglish).sort((a, b) => score(b) - score(a));
    enVoice = en[0] || null;
    return !!enVoice;
  }

  function whenVoicesReady(cb) {
    let tries = 15;   // 最多等 1.5 秒
    const tick = () => {
      if (pickVoice() || tries-- <= 0) { cb(); return; }
      setTimeout(tick, 100);
    };
    tick();
  }

  if ("speechSynthesis" in window) {
    pickVoice();
    window.speechSynthesis.onvoiceschanged = () => { pickVoice(); };
    // Chrome 首次 getVoices() 可能是空数组，需要再触发一次
    setTimeout(pickVoice, 300);
    // 离开页面时主动停止朗读，避免语音进程残留影响下一个页面
    window.addEventListener("pagehide", () => {
      try { window.speechSynthesis.cancel(); } catch (e) {}
    });
  }

  function speak(text, opts) {
    if (!state.speak) { toast("朗读已关闭，点击右上角语音按钮打开"); return; }
    if (!("speechSynthesis" in window) || typeof window.SpeechSynthesisUtterance !== "function") {
      toast("当前浏览器不支持语音朗读，建议用 Chrome / Edge");
      return;
    }
    text = String(text == null ? "" : text).trim();
    if (!text) return;
    opts = opts || {};

    // 语音列表还没加载好时，等一下就绪再播；但没有英文语音也不阻塞朗读
    if (!voiceReady && !pending) {
      pending = { text, opts };
      whenVoicesReady(() => {
        const p = pending;
        pending = null;
        if (p) speak(p.text, p.opts);
      });
      return;
    }

    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      if (enVoice) {
        u.voice = enVoice;
        u.lang = enVoice.lang || "en-US";
      } else {
        // 设备没有英文语音时，仍然尝试用默认语音朗读
        u.lang = "en-US";
      }
      u.rate = Math.max(0.5, Math.min(2, opts.rate || 0.85));
      u.pitch = 1;
      u.volume = 1;
      window.speechSynthesis.speak(u);
      // 某些浏览器需要一次 resume 才会真正发声
      if (window.speechSynthesis.paused) window.speechSynthesis.resume();
    } catch (e) {
      console.warn("语音朗读失败：", e);
      toast("语音朗读失败，请检查浏览器的语音设置");
    }
  }

  function initSpeakToggle() {
    const btn = document.querySelector(".speak-toggle");
    if (!btn) return;
    const render = () => {
      btn.textContent = state.speak ? "🔊 语音开" : "🔇 语音关";
    };
    render();
    btn.addEventListener("click", () => {
      state.speak = !state.speak;
      save();
      render();
      if (!state.speak && "speechSynthesis" in window) window.speechSynthesis.cancel();
      toast(state.speak ? "已打开语音朗读" : "已关闭语音朗读");
    });
  }

  /* ---------------- Toast ---------------- */
  let toastEl = null;
  let toastTimer = null;
  function toast(msg) {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "toast";
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 1900);
  }

  /* ---------------- 进度计算 ---------------- */
  function lessonProgress() {
    const total = (window.LESSONS || []).length;
    let done = 0;
    (window.LESSONS || []).forEach(l => { if (state.lessons[l.id] && state.lessons[l.id].done) done++; });
    return { done, total, pct: total ? Math.round(done / total * 100) : 0 };
  }

  function wordProgress() {
    const list = window.VOCAB || [];
    let mastered = 0, learning = 0;
    list.forEach(v => {
      const w = state.words[v.w];
      if (!w) return;
      if (w.lv >= 2) mastered++;
      else if (w.lv >= 1) learning++;
    });
    return { total: list.length, mastered, learning, pct: list.length ? Math.round(mastered / list.length * 100) : 0 };
  }

  function letterProgress() {
    const total = (window.LETTERS || []).length;
    let done = 0;
    (window.LETTERS || []).forEach(l => { if (state.letters[l.u]) done++; });
    return { done, total, pct: total ? Math.round(done / total * 100) : 0 };
  }

  function wordState(w) {
    if (!state.words[w]) state.words[w] = { lv: 0, seen: 0, right: 0, wrong: 0, last: null };
    return state.words[w];
  }

  function setWordLevel(word, lv) {
    const ws = wordState(word);
    ws.lv = lv;
    ws.last = Date.now();
    save();
    markActivity(1);
  }

  /* ---------------- 公共导航渲染 ---------------- */
  function initNav() {
    initSpeakToggle();
    updateStreakPill();
    // 高亮当前页面
    const path = location.pathname.replace(/\\/g, "/");
    document.querySelectorAll(".nav a").forEach(a => {
      const href = (a.getAttribute("href") || "").split("/").pop();
      const cur = path.split("/").pop();
      if (href && href === cur) a.classList.add("active");
    });
    // 所有带 data-say 的元素自动播报（词卡、例句、读音按钮等）
    // 页面自己的按钮若已在内部调用 speak，这里用“短时间内同一内容不重复播”来去重
    let lastSay = { text: "", at: 0 };
    document.addEventListener("click", e => {
      const el = e.target.closest("[data-say]");
      if (!el) return;
      const text = el.getAttribute("data-say");
      if (!text) return;
      const now = Date.now();
      if (lastSay.text === text && now - lastSay.at < 300) return;  // 同一事件被多处处理，跳过重复
      lastSay = { text, at: now };
      // 纯朗读元素（span/div/词卡）不需要阻止默认行为；<a> 需要
      if (el.tagName === "A") e.preventDefault();
      speak(text);
    });
  }

  /* ---------------- 工具函数 ---------------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function sample(arr, n) {
    return shuffle(arr).slice(0, n);
  }

  function dayIndex() {
    // 以 2025-01-01 为起点，让每日内容按天轮换
    const start = new Date(2025, 0, 1).getTime();
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return Math.floor((now.getTime() - start) / 86400000);
  }

  // 朗读按钮 HTML 片段
  function speakBtn(text, cls) {
    return '<button class="btn ghost sm ' + (cls || "") + '" data-say="' + esc(text) + '" title="朗读">🔊 朗读</button>';
  }

  /* ---------------- 暴露全局 ---------------- */
  window.App = {
    get state() { return state; },
    save, toast, speak, esc, shuffle, sample, dayIndex, speakBtn,
    todayKey, markActivity, updateStreakPill,
    lessonProgress, wordProgress, letterProgress,
    wordState, setWordLevel,
    resetAll() {
      state = defaults();
      save();
    }
  };

  // 页面内容与数据脚本排在 app.js 之前，因此可以直接初始化
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNav);
  } else {
    initNav();
  }
})();
