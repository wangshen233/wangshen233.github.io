/* ==========================================================================
   Station 233 · Coupled Sea-Train Physics, Parallax, Radio & Live GitHub Sync
   ========================================================================== */

const LOGIN = "wangshen233";

const FALLBACK_NOTES = [
  {
    tag: "小站手记",
    date: "2026.11.26",
    title: "Station 233 · 把个人小站做成一列真正的海上火车",
    summary: "告别千篇一律的从上往下翻卡片——转动滚轮或拖住车厢，整列 233 系海列会沿着晚霞海面一节节驶过。",
    body: `
      <p>如果你是从我的 GitHub 主页点过来的，欢迎登上 <strong>233 系 · 茜色の海列車</strong>。</p>
      <p>不想再做那种一眼到底的常规网格模板，干脆把整座站点做成了一列首尾挂接的海上火车：</p>
      <ul>
        <li><strong>00号車 · 先頭運転室</strong>：内置三套实时 Web Audio 合成声景的黑胶电台（<code>FM 233.0</code>），落下唱针就能边听八音盒与海浪边逛车厢。</li>
        <li><strong>01–04号車 · 特急展望車</strong>：每节车厢都是一扇带视差落日风景的大车窗，对应四座核心开源项目。</li>
        <li><strong>05–07号車 · 荷物車・読書室・最後尾デッキ</strong>：行李架木牌实时同步全部公开仓库，车尾露天甲板与 GitHub 主页共用同一个纸船留言海面。</li>
      </ul>
      <p>车票长期有效，常来吹吹海风。</p>
    `,
  },
  {
    tag: "工程随感",
    date: "2026.11.18",
    title: "为什么做自动化时，我总喜欢死磕纯协议而不是无头浏览器",
    summary: "从 UPI Zero Link 到 Sentinel-rs：少开一个 Chromium 实例，换来的是数量级的并发效率与确定性。",
    body: `
      <p>做过自动化流水线的朋友大概都经历过被无头浏览器支配的夜晚：内存占用动辄几百兆、指纹破绽多、超时重试慢，出了问题还得对着截图猜状态。</p>
      <p>所以在写 <code>upi-zero-link</code> 和 <code>sentinel-rs</code> 的时候，我一直坚持同一个原则：<strong>只要能把状态机和加密挑战在协议层还原清楚，就绝不启动浏览器。</strong></p>
      <ul>
        <li>在 <code>sentinel-rs</code> 里，用 Rust 直接实现了一个 36 条指令的小型字节码解释虚拟机，不装 Node、不跑 <code>sdk.js</code>，产出的令牌与原版逐字节对齐。</li>
        <li>在传输层配合 BoringSSL 对齐真实浏览器的 TLS（JA3 / JA4）与 HTTP/2 帧特征，单机资源消耗几乎可以忽略不计。</li>
      </ul>
      <p>把复杂留在拆解协议的过程里，把干净利落留给最终运行的那一行命令——这就是写这类小工具最让人上瘾的地方。</p>
    `,
  },
  {
    tag: "使用指南",
    date: "2026.11.12",
    title: "如何用 GitHub Issues 直接给 06 号读书车添一本新随笔",
    summary: "不需要本地打包构建：在 wangshen233.github.io 仓库新建带 blog 标签的 Issue，木桌上就会自动多出一册手帖。",
    body: `
      <p>为了省去每次写随笔都要本地编译部署的麻烦，这节「06号車 · 読書サロン」内置了 GitHub Issues 动态拉取支持：</p>
      <ul>
        <li>只要由 <code>@wangshen233</code> 本人在 <code>wangshen233/wangshen233.github.io</code> 仓库发布带有 <code>blog</code> 标签（或标题以 <code>[随笔]</code> 开头）的公开 Issue，页面加载时就会自动抓取并置顶摆上木桌。</li>
        <li>支持常用 Markdown 段落、代码行与列表排版，在手机上也能随时记录灵感。</li>
      </ul>
    `,
  },
];

const FALLBACK_REPOS = [
  { name: "turb-gpt-free-register-oss-20260928", description: "Sanitized open-source release of turb-gpt-free-register", language: "Python", stargazers_count: 95, forks_count: 82, html_url: "https://github.com/wangshen233/turb-gpt-free-register-oss-20260928" },
  { name: "appleservices-family-private", description: "AppleServices workspace with iCloud activation, purchase, region and Family Sharing workflows", language: "Protocol", stargazers_count: 89, forks_count: 130, html_url: "https://github.com/wangshen233/appleservices-family-private" },
  { name: "upi-zero-link", description: "India Rs.0 UPI Autopay mandate link extractor — protocol-level, no browser", language: "Python", stargazers_count: 68, forks_count: 61, html_url: "https://github.com/wangshen233/upi-zero-link" },
  { name: "sentinel-rs", description: "Sentinel token 的 Rust 重实现 + 通用邮箱接口注册流程", language: "Rust", stargazers_count: 13, forks_count: 16, html_url: "https://github.com/wangshen233/sentinel-rs" },
  { name: "turb-register-public", description: "Turb Register public edition: account management, generic IMAP/API OTP, proxy pools and AI workspace", language: "Python", stargazers_count: 12, forks_count: 12, html_url: "https://github.com/wangshen233/turb-register-public" },
  { name: "codex-oauth-helper", description: "Standalone Codex OAuth login, refresh token, and CPA JSON helper", language: "Python", stargazers_count: 5, forks_count: 2, html_url: "https://github.com/wangshen233/codex-oauth-helper" },
];

const FALLBACK_BOATS = [
  { user: "wangshen233", avatar: "./assets/avatar.jpg", msg: "座位 233 常年留空，点左侧折一艘纸船放进晚霞吧～" },
  { user: "station-233", avatar: "./assets/avatar.jpg", msg: "暮色海列全天候供应热美式，祝路过的你今天也没有 bug" },
  { user: "sunset-fm", avatar: "./assets/avatar.jpg", msg: "茜色の海を渡る風のように、好奇心のその先へ。" },
];

/* ==========================================================================
   1. Theme Toggle & Cab Live Clock
   ========================================================================== */
function initThemeAndClock() {
  const saved = localStorage.getItem("station233-theme");
  const initial = saved || "dark";
  applyTheme(initial);

  document.getElementById("theme-toggle").addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("station233-theme", next);
  });

  const clockEl = document.getElementById("cab-clock");
  const tickClock = () => {
    const now = new Date();
    clockEl.textContent = now.toTimeString().slice(0, 8);
  };
  tickClock();
  setInterval(tickClock, 1000);
}

function applyTheme(mode) {
  document.documentElement.setAttribute("data-theme", mode);
  const btn = document.getElementById("theme-toggle");
  if (btn) {
    btn.textContent = mode === "dark" ? "☀️ 樱雪浅色" : "🌙 茜色暮夜";
  }
}

/* ==========================================================================
   2. Horizontal Coupled Sea-Train Physics, Wheel Rotation & Window Parallax
   ========================================================================== */
const trainController = {
  targetX: 0,
  currentX: 0,
  maxX: 0,
  isMobile: false,
  jumpToCar: null,
};

function initTrainJourney() {
  const viewport = document.getElementById("world-viewport");
  const trackWorld = document.getElementById("train-track-world");
  const skyLayer = document.getElementById("sky-layer");
  const viaductLayer = document.getElementById("viaduct-layer");
  const sleepers = document.getElementById("rail-sleepers");
  const progressFill = document.getElementById("route-progress-fill");
  const miniMarker = document.getElementById("mini-train-marker");
  const speedEl = document.getElementById("speed-readout");
  const carriages = Array.from(document.querySelectorAll(".carriage"));
  const parallaxImgs = Array.from(document.querySelectorAll("[data-window-parallax]"));
  const stopNodes = Array.from(document.querySelectorAll(".station-node"));
  const topNavBtns = Array.from(document.querySelectorAll(".hud-quick-nav button"));

  function recalcBounds() {
    trainController.isMobile = window.innerWidth <= 960;
    if (trainController.isMobile) {
      trackWorld.style.transform = "none";
      trainController.maxX = Math.max(1, viewport.scrollWidth - viewport.clientWidth);
    } else {
      const totalWidth = trackWorld.scrollWidth;
      trainController.maxX = Math.max(0, totalWidth - window.innerWidth);
      trainController.targetX = Math.min(trainController.targetX, trainController.maxX);
      trainController.currentX = Math.min(trainController.currentX, trainController.maxX);
    }
  }

  recalcBounds();
  window.addEventListener("resize", recalcBounds);

  // Jump cleanly to any carriage index (0..7)
  function jumpToCar(index) {
    const car = carriages[index];
    if (!car) return;
    if (trainController.isMobile) {
      car.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      return;
    }
    const carCenter = car.offsetLeft + car.offsetWidth / 2;
    const desired = index === 0 ? 0 : carCenter - window.innerWidth / 2;
    trainController.targetX = Math.max(0, Math.min(trainController.maxX, desired));
  }
  trainController.jumpToCar = jumpToCar;

  // Bind all [data-stop] buttons (top HUD + bottom route scrubber)
  document.querySelectorAll("[data-stop]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.getAttribute("data-stop"));
      jumpToCar(idx);
    });
  });

  // Wheel -> Horizontal Train Drive (unless modal open or inside overflowing inner box)
  window.addEventListener("wheel", (e) => {
    if (trainController.isMobile) return;
    if (document.getElementById("note-modal").classList.contains("open")) return;

    const scrollableParent = e.target.closest(".luggage-rack");
    if (scrollableParent && scrollableParent.scrollHeight > scrollableParent.clientHeight) {
      const atTop = scrollableParent.scrollTop <= 0 && e.deltaY < 0;
      const atBot = scrollableParent.scrollTop + scrollableParent.clientHeight >= scrollableParent.scrollHeight - 1 && e.deltaY > 0;
      if (!atTop && !atBot) return;
    }

    e.preventDefault();
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    trainController.targetX = Math.max(0, Math.min(trainController.maxX, trainController.targetX + delta * 1.15));
  }, { passive: false });

  // Pointer Drag-to-Pan along the train
  let dragging = false;
  let dragStartX = 0;
  let dragOriginTarget = 0;
  let movedPixels = 0;

  viewport.addEventListener("pointerdown", (e) => {
    if (trainController.isMobile) return;
    if (e.target.closest("a, button, input, .note-card, .turntable")) return;
    dragging = true;
    movedPixels = 0;
    dragStartX = e.clientX;
    dragOriginTarget = trainController.targetX;
    viewport.classList.add("dragging");
  });

  window.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    const dx = e.clientX - dragStartX;
    movedPixels = Math.abs(dx);
    trainController.targetX = Math.max(0, Math.min(trainController.maxX, dragOriginTarget - dx * 1.35));
  });

  window.addEventListener("pointerup", () => {
    if (!dragging) return;
    dragging = false;
    viewport.classList.remove("dragging");
  });

  // Keyboard Arrow Navigation
  window.addEventListener("keydown", (e) => {
    if (document.getElementById("note-modal").classList.contains("open")) {
      if (e.key === "Escape") document.getElementById("note-modal").classList.remove("open");
      return;
    }
    if (trainController.isMobile) return;
    if (e.key === "ArrowRight") {
      trainController.targetX = Math.min(trainController.maxX, trainController.targetX + 420);
    } else if (e.key === "ArrowLeft") {
      trainController.targetX = Math.max(0, trainController.targetX - 420);
    } else if (e.key === "Home") {
      trainController.targetX = 0;
    } else if (e.key === "End") {
      trainController.targetX = trainController.maxX;
    }
  });

  // Main 60fps Animation Loop
  let prevX = 0;
  function animate() {
    if (trainController.isMobile) {
      trainController.currentX = viewport.scrollLeft;
    } else {
      trainController.currentX += (trainController.targetX - trainController.currentX) * 0.095;
      if (Math.abs(trainController.targetX - trainController.currentX) < 0.15) {
        trainController.currentX = trainController.targetX;
      }
      trackWorld.style.transform = `translate3d(${-trainController.currentX}px, 0, 0)`;
      skyLayer.style.transform = `translate3d(${-trainController.currentX * 0.08}px, 0, 0)`;
      viaductLayer.style.transform = `translate3d(${-trainController.currentX * 0.28}px, 0, 0)`;
      sleepers.style.transform = `translate3d(${-(trainController.currentX % 34)}px, 0, 0)`;
    }

    // Rotate bogie wheels proportionally to travel distance
    const wheelDeg = (trainController.currentX * 0.42) % 360;
    trackWorld.style.setProperty("--wheel-deg", `${wheelDeg}deg`);

    // Inner Window Scenic Parallax on Flagship Observation Windows
    const vpCenter = window.innerWidth / 2;
    if (!trainController.isMobile) {
      parallaxImgs.forEach((img) => {
        const car = img.closest(".carriage");
        if (!car) return;
        const carScreenCenter = car.offsetLeft - trainController.currentX + car.offsetWidth / 2;
        const norm = Math.max(-1, Math.min(1, (carScreenCenter - vpCenter) / window.innerWidth));
        const factor = parseFloat(img.dataset.windowParallax || "0.14");
        img.style.transform = `translate3d(${norm * factor * 160}px, 0, 0) scale(1.04)`;
      });
    }

    // Update Route Progress Scrubber, Speedometer & Active Station Highlight
    const ratio = trainController.maxX > 0 ? Math.min(1, Math.max(0, trainController.currentX / trainController.maxX)) : 0;
    progressFill.style.width = `calc((100% - 48px) * ${ratio.toFixed(4)})`;
    miniMarker.style.left = `calc(24px + (100% - 48px) * ${ratio.toFixed(4)})`;

    const velocity = Math.abs(trainController.currentX - prevX);
    prevX = trainController.currentX;
    const kmh = Math.min(78, Math.round(velocity * 2.6));
    const km = (ratio * 23.3).toFixed(1);
    speedEl.textContent = `${String(kmh).padStart(2, "0")} km/h · ${km} km`;

    // Find closest carriage to viewport center
    let activeIdx = 0;
    let bestDist = Infinity;
    carriages.forEach((car, idx) => {
      const center = car.offsetLeft - trainController.currentX + car.offsetWidth / 2;
      const d = Math.abs(center - vpCenter);
      if (d < bestDist) {
        bestDist = d;
        activeIdx = idx;
      }
    });

    stopNodes.forEach((n, idx) => n.classList.toggle("active", idx === activeIdx));
    topNavBtns.forEach((b) => {
      const stop = Number(b.getAttribute("data-stop"));
      const isMatch = stop === 1 ? (activeIdx >= 1 && activeIdx <= 4) : stop === activeIdx;
      b.classList.toggle("active", isMatch);
    });

    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}

/* ==========================================================================
   3. Ambient Sunset Fireflies & Click Ripples Canvas
   ========================================================================== */
function initCanvas() {
  const canvas = document.getElementById("ambient-canvas");
  const ctx = canvas.getContext("2d");
  let w = 0, h = 0;
  const motes = [];
  const ripples = [];

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  for (let i = 0; i < 32; i++) {
    motes.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 1.1 + Math.random() * 2.0,
      vx: -0.25 - Math.random() * 0.35,
      vy: -0.18 + Math.random() * 0.36,
      phase: Math.random() * Math.PI * 2,
      hue: Math.random() > 0.45 ? "255, 138, 168" : "255, 192, 134",
    });
  }

  window.addEventListener("pointermove", (e) => {
    if (Math.random() < 0.22 && motes.length < 58) {
      motes.push({
        x: e.clientX + (-6 + Math.random() * 12),
        y: e.clientY + (-6 + Math.random() * 12),
        r: 1.3 + Math.random() * 1.7,
        vx: -0.4 - Math.random() * 0.4,
        vy: -0.3 + Math.random() * 0.6,
        phase: 0,
        ttl: 80,
        hue: "255, 152, 176",
      });
    }
  });

  window.addEventListener("click", (e) => {
    ripples.push({ x: e.clientX, y: e.clientY, r: 4, alpha: 0.52 });
  });

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (let i = motes.length - 1; i >= 0; i--) {
      const m = motes[i];
      m.x += m.vx;
      m.y += m.vy;
      m.phase += 0.035;
      if (m.ttl !== undefined) {
        m.ttl--;
        if (m.ttl <= 0) {
          motes.splice(i, 1);
          continue;
        }
      } else {
        if (m.x < -10) m.x = w + 10;
        if (m.y < -10) m.y = h + 10;
        if (m.y > h + 10) m.y = -10;
      }
      const alpha = (0.22 + 0.42 * Math.sin(m.phase)) * (m.ttl ? m.ttl / 80 : 1);
      ctx.beginPath();
      ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${m.hue}, ${Math.max(0.05, alpha)})`;
      ctx.fill();
    }

    for (let i = ripples.length - 1; i >= 0; i--) {
      const rp = ripples[i];
      rp.r += 1.8;
      rp.alpha *= 0.94;
      if (rp.alpha < 0.02) {
        ripples.splice(i, 1);
        continue;
      }
      ctx.beginPath();
      ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255, 146, 172, ${rp.alpha})`;
      ctx.lineWidth = 1.2;
      ctx.stroke();
    }
    requestAnimationFrame(draw);
  }
  draw();
}

/* ==========================================================================
   4. FM 233.0 Cab Vinyl Radio Controls
   ========================================================================== */
function initRadio() {
  const eqContainer = document.getElementById("eq-bars");
  for (let i = 0; i < 16; i++) {
    const bar = document.createElement("div");
    bar.className = "eq-bar";
    eqContainer.appendChild(bar);
  }
  const bars = Array.from(eqContainer.children);

  const radio = new window.FM233Radio((bins) => {
    bars.forEach((bar, i) => {
      const v = bins[i] || 0;
      const h = radio.playing ? Math.max(4, Math.min(22, (v / 255) * 24 + 3)) : 4;
      bar.style.height = `${h}px`;
    });
  });

  const disc = document.getElementById("vinyl-disc");
  const arm = document.getElementById("tonearm");
  const dot = document.getElementById("on-air-dot");
  const playBtn = document.getElementById("radio-play-btn");
  const freqEl = document.getElementById("radio-freq");
  const titleEl = document.getElementById("radio-track-title");
  const stationBtns = Array.from(document.querySelectorAll(".station-btn"));

  function syncUI() {
    const st = radio.stations[radio.channel];
    disc.classList.toggle("playing", radio.playing);
    arm.classList.toggle("playing", radio.playing);
    dot.classList.toggle("live", radio.playing);
    playBtn.textContent = radio.playing ? "⏸ 暂停车厢电台" : "▶ 落下唱针";
    freqEl.textContent = `${radio.playing ? "ON AIR" : "STANDBY"} · ${st.freq}`;
    titleEl.textContent = st.name;
    stationBtns.forEach((b, idx) => b.classList.toggle("active", idx === radio.channel));
  }

  document.getElementById("turntable").addEventListener("click", () => {
    radio.toggle();
    syncUI();
  });
  playBtn.addEventListener("click", () => {
    radio.toggle();
    syncUI();
  });
  stationBtns.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      radio.selectStation(idx);
      if (!radio.playing) radio.start();
      syncUI();
    });
  });
  document.getElementById("radio-vol").addEventListener("input", (e) => {
    radio.setVolume(parseFloat(e.target.value));
  });
  syncUI();
}

/* ==========================================================================
   5. Live GitHub Repositories (Car 05 Luggage Rack) & Cab Telemetry
   ========================================================================== */
let allRepos = [...FALLBACK_REPOS];
let currentFilter = "All";

function renderRepos() {
  const grid = document.getElementById("repo-grid");
  const list = allRepos.filter((r) => {
    const lang = r.language || "Protocol";
    return currentFilter === "All" || lang === currentFilter;
  });

  grid.innerHTML = list.slice(0, 9).map((r, i) => {
    const lang = escapeHtml(r.language || "Protocol");
    const desc = escapeHtml(r.description || "一个小巧安静的实验车厢仓库。");
    const code = `CARGO #${String(i + 1).padStart(2, "0")}`;
    return `
      <a class="luggage-tag" href="${r.html_url}" target="_blank" rel="noopener">
        <div>
          <div class="luggage-top mono">
            <span class="luggage-serial">${code}</span>
            <span class="sunset-text">↗</span>
          </div>
          <h4>${escapeHtml(r.name)}</h4>
          <p>${desc}</p>
        </div>
        <div class="luggage-foot mono">
          <span>● ${lang}</span>
          <span>★ ${r.stargazers_count || 0}</span>
          <span>⑂ ${r.forks_count || 0}</span>
        </div>
      </a>`;
  }).join("");
}

async function syncGitHub() {
  renderRepos();
  try {
    const [uRes, rRes] = await Promise.all([
      fetch(`https://api.github.com/users/${LOGIN}`),
      fetch(`https://api.github.com/users/${LOGIN}/repos?per_page=100&type=owner&sort=updated`),
    ]);
    if (!uRes.ok || !rRes.ok) return;
    const user = await uRes.json();
    const repos = await rRes.json();

    const totalStars = repos.reduce((s, r) => s + (r.stargazers_count || 0), 0);
    const totalForks = repos.reduce((s, r) => s + (r.forks_count || 0), 0);

    document.getElementById("stat-stars").textContent = totalStars;
    document.getElementById("stat-forks").textContent = totalForks;
    document.getElementById("stat-followers").textContent = user.followers ?? 55;
    document.getElementById("stat-repos").textContent = user.public_repos ?? repos.length;

    const byName = Object.fromEntries(repos.map((r) => [r.name, r]));
    document.querySelectorAll("[data-repo-metric]").forEach((el) => {
      const repo = byName[el.getAttribute("data-repo-metric")];
      if (repo) {
        el.textContent = `★ ${repo.stargazers_count} · ${repo.forks_count} forks`;
      }
    });

    const owned = repos
      .filter((r) => !r.fork && r.name !== LOGIN && r.name !== `${LOGIN}.github.io`)
      .sort((a, b) => (b.stargazers_count - a.stargazers_count) || (b.forks_count - a.forks_count));
    if (owned.length) {
      allRepos = owned;
      renderRepos();
    }
  } catch (_) {}
}

function initRepoFilters() {
  document.querySelectorAll(".filter-chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentFilter = btn.dataset.lang;
      document.querySelectorAll(".filter-chip").forEach((b) => b.classList.toggle("active", b === btn));
      renderRepos();
    });
  });
}

/* ==========================================================================
   6. Car 06 Reading Salon Manuscripts + Live GitHub Issue Blog
   ========================================================================== */
let notesList = [...FALLBACK_NOTES];

function renderNotes() {
  const grid = document.getElementById("notes-grid");
  grid.innerHTML = notesList.slice(0, 3).map((n, idx) => `
    <article class="note-card" data-note-idx="${idx}">
      <div>
        <div class="postmark mono">
          <span class="sunset-text"># ${escapeHtml(n.tag)}</span>
          <span>${escapeHtml(n.date)}</span>
        </div>
        <h4 class="serif-jp">${escapeHtml(n.title)}</h4>
        <p>${escapeHtml(n.summary)}</p>
      </div>
      <div class="note-open-cta sunset-text mono">翻开手帖 →</div>
    </article>
  `).join("");

  grid.querySelectorAll(".note-card").forEach((card) => {
    card.addEventListener("click", () => openNoteModal(notesList[Number(card.dataset.noteIdx)]));
  });
}

function openNoteModal(note) {
  const modal = document.getElementById("note-modal");
  const content = document.getElementById("modal-body");
  content.innerHTML = `
    <p class="mono" style="font-size:12px;margin-bottom:6px;"><span class="sunset-text"># ${escapeHtml(note.tag)}</span> · ${escapeHtml(note.date)}</p>
    <h2 class="serif-jp">${escapeHtml(note.title)}</h2>
    <div>${note.body}</div>
  `;
  modal.classList.add("open");
}

async function syncIssueNotes() {
  renderNotes();
  try {
    const res = await fetch(`https://api.github.com/repos/${LOGIN}/${LOGIN}.github.io/issues?state=open&per_page=10`);
    if (!res.ok) return;
    const issues = await res.json();
    const authored = issues.filter((it) =>
      !it.pull_request &&
      it.user?.login === LOGIN &&
      (it.labels?.some((l) => l.name.toLowerCase() === "blog") || /^\[?(随笔|blog)\]?/i.test(it.title))
    );
    if (authored.length) {
      const liveNotes = authored.map((it) => {
        const cleanTitle = it.title.replace(/^\[?(随笔|blog)\]?\s*/i, "");
        const plain = (it.body || "").replace(/[#>*`]/g, "").trim();
        return {
          tag: "车窗随笔",
          date: (it.created_at || "").slice(0, 10).replace(/-/g, "."),
          title: cleanTitle,
          summary: plain.slice(0, 68) + (plain.length > 68 ? "…" : ""),
          body: simpleMarkdown(it.body || ""),
        };
      });
      notesList = [...liveNotes, ...FALLBACK_NOTES];
      renderNotes();
    }
  } catch (_) {}
}

/* ==========================================================================
   7. Car 07 Tail Wake — Shared Live Paper Boats Guestbook
   ========================================================================== */
function renderBoats(boats) {
  const row = document.getElementById("boats-row");
  row.innerHTML = boats.slice(0, 3).map((b) => `
    <div class="boat-item">
      <div class="boat-bubble">
        <div class="boat-user mono">
          <img src="${escapeHtml(b.avatar)}" alt="" />
          <span class="sunset-text">@${escapeHtml(b.user)}</span>
        </div>
        <p>${escapeHtml(b.msg)}</p>
      </div>
      <svg class="origami-boat-svg" viewBox="0 0 60 28">
        <ellipse cx="30" cy="23" rx="24" ry="3.2" fill="rgba(255,130,164,0.28)"/>
        <path d="M9 15L51 15L43 23.5H17Z" fill="#ffeaf0" stroke="#f07e98" stroke-width="1.2" stroke-linejoin="round"/>
        <path d="M18 15L30 2L42 15Z" fill="#ffffff" stroke="#f07e98" stroke-width="1.1" stroke-linejoin="round"/>
        <line x1="30" y1="2" x2="30" y2="15" stroke="#f07e98" stroke-width=".9"/>
      </svg>
    </div>
  `).join("");
}

async function syncPaperBoats() {
  renderBoats(FALLBACK_BOATS);
  try {
    const res = await fetch(`https://api.github.com/repos/${LOGIN}/${LOGIN}/issues?state=all&per_page=25&sort=created&direction=desc`);
    if (!res.ok) return;
    const issues = await res.json();
    const found = [];
    for (const item of issues) {
      if (item.pull_request || item.state_reason === "not_planned") continue;
      const t = item.title || "";
      if (!/纸鹤|漂流瓶|纸船|🕊/.test(t)) continue;
      const lines = (item.body || "").split(/\r?\n/).map((s) => s.trim()).filter((s) => s && !s.startsWith(">") && !s.startsWith("写下一句"));
      const msg = (lines[0] || t.replace(/^[\s🕊️✉️🌊·:：-]+/, "") || "乘着晚霞路过此地～").slice(0, 34);
      found.push({
        user: item.user?.login || "traveler",
        avatar: item.user?.avatar_url || "./assets/avatar.jpg",
        msg,
      });
      if (found.length >= 3) break;
    }
    if (found.length) {
      renderBoats([...found, ...FALLBACK_BOATS].slice(0, 3));
    }
  } catch (_) {}
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function simpleMarkdown(md) {
  return escapeHtml(md)
    .split(/\n{2,}/)
    .map((block) => `<p>${block.replace(/`([^`]+)`/g, "<code>$1</code>").replace(/\n/g, "<br/>")}</p>`)
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  initThemeAndClock();
  initCanvas();
  initRadio();
  initRepoFilters();
  syncGitHub();
  syncIssueNotes();
  syncPaperBoats();
  initTrainJourney();

  const modal = document.getElementById("note-modal");
  document.getElementById("modal-close").addEventListener("click", () => modal.classList.remove("open"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("open");
  });
});
