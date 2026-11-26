/* ==========================================================================
   Station 233 · V5: Uncropped Panoramic Sea-Train + 360° 3D Star-Ring Carousel
   ========================================================================== */

const LOGIN = "wangshen233";

const FALLBACK_NOTES = [
  {
    tag: "小站手记",
    date: "2026.11.26",
    title: "Station 233 · 把个人小站做成一列真正的海上火车",
    summary: "告别千篇一律的从上往下翻卡片——转动滚轮、拖住车厢，或者切入 3D 旋转星环模式，在晚霞海面上环游各站。",
    body: `
      <p>如果你是从我的 GitHub 主页点过来的，欢迎登上 <strong>233 系 · 茜色の海列車</strong>。</p>
      <p>不想再做那种一眼到底的常规网格模板，干脆把整座站点做成了一列首尾挂接的海上火车（点击顶部 <strong>🎡 3D 旋转星环</strong> 还能把整列八节车厢展开成 360° 立体星轨转盘）：</p>
      <ul>
        <li><strong>00号車 · 先頭運転室</strong>：完整全景海列前窗 + 内置三套实时 Web Audio 合成声景的黑胶电台（<code>FM 233.0</code>）。</li>
        <li><strong>01–04号車 · パノラマ展望車</strong>：全宽 2:1 无裁切观景大车窗，完整呈现四座代表开源项目插画。</li>
        <li><strong>05–07号車 · 荷物車・読書室・最後尾デッキ</strong>：行李架木牌同步全部公开仓库，车尾甲板与 GitHub 主页共用纸船留言海面。</li>
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
  applyTheme(saved || "dark");

  document.getElementById("theme-toggle").addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("station233-theme", next);
  });

  const clockEl = document.getElementById("cab-clock");
  const tickClock = () => {
    clockEl.textContent = new Date().toTimeString().slice(0, 8);
  };
  tickClock();
  setInterval(tickClock, 1000);
}

function applyTheme(mode) {
  document.documentElement.setAttribute("data-theme", mode);
  const btn = document.getElementById("theme-toggle");
  if (btn) btn.textContent = mode === "dark" ? "☀️ 樱雪浅色" : "🌙 茜色暮夜";
}

/* ==========================================================================
   2. Sea-Train Linear Drive + 360° 3D Rotating Star-Ring Carousel Mode
   ========================================================================== */
const trainController = {
  targetX: 0,
  currentX: 260, // Gentle arrival glide on initial open!
  maxX: 0,
  isMobile: false,
  ringMode: false,
  ringAngle: 0,
  ringTargetAngle: 0,
  autoSpinRing: true,
  scrollBoostDeg: 0,
  jumpToCar: null,
  toggleRingMode: null,
};

function initTrainJourney() {
  const viewport = document.getElementById("world-viewport");
  const trackWorld = document.getElementById("train-track-world");
  const consist = document.getElementById("train-consist");
  const skyLayer = document.getElementById("sky-layer");
  const viaductLayer = document.getElementById("viaduct-layer");
  const sleepers = document.getElementById("rail-sleepers");
  const progressFill = document.getElementById("route-progress-fill");
  const miniMarker = document.getElementById("mini-train-marker");
  const speedEl = document.getElementById("speed-readout");
  const ringBtn = document.getElementById("ring-mode-toggle");
  const ringLabel = document.getElementById("ring-mode-label");
  const carriages = Array.from(document.querySelectorAll(".carriage"));
  const stopNodes = Array.from(document.querySelectorAll(".station-node"));
  const topNavBtns = Array.from(document.querySelectorAll(".hud-quick-nav button"));

  function recalcBounds() {
    trainController.isMobile = window.innerWidth <= 960;
    if (trainController.isMobile) {
      trackWorld.style.transform = "none";
      trainController.maxX = Math.max(1, viewport.scrollWidth - viewport.clientWidth);
    } else if (!trainController.ringMode) {
      const totalWidth = trackWorld.scrollWidth;
      trainController.maxX = Math.max(0, totalWidth - window.innerWidth);
      trainController.targetX = Math.min(trainController.targetX, trainController.maxX);
    }
  }

  recalcBounds();
  window.addEventListener("resize", recalcBounds);

  // Toggle between Coupled Sea-Train & 360° 3D Star-Ring Carousel!
  function toggleRingMode(forceState) {
    if (trainController.isMobile) return;
    trainController.ringMode = typeof forceState === "boolean" ? forceState : !trainController.ringMode;
    document.body.classList.toggle("ring-mode", trainController.ringMode);
    ringLabel.textContent = trainController.ringMode ? "返回连挂列车" : "3D 旋转星环";

    if (trainController.ringMode) {
      trainController.autoSpinRing = true;
      const radius = 1360;
      carriages.forEach((car, idx) => {
        const theta = idx * 45;
        const w = car.offsetWidth;
        const h = car.offsetHeight;
        car.style.transform = `translate(${-w / 2}px, ${-h / 2}px) rotateY(${theta}deg) translateZ(${radius}px) scale(0.68)`;
      });
    } else {
      consist.style.transform = "none";
      carriages.forEach((car) => {
        car.style.transform = "none";
      });
      recalcBounds();
    }
  }
  trainController.toggleRingMode = toggleRingMode;
  ringBtn.addEventListener("click", () => toggleRingMode());

  function jumpToCar(index) {
    const car = carriages[index];
    if (!car) return;
    if (trainController.ringMode) {
      trainController.autoSpinRing = false;
      trainController.ringTargetAngle = -index * 45;
      return;
    }
    if (trainController.isMobile) {
      car.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      return;
    }
    const carCenter = car.offsetLeft + car.offsetWidth / 2;
    const desired = index === 0 ? 0 : carCenter - window.innerWidth / 2;
    trainController.targetX = Math.max(0, Math.min(trainController.maxX, desired));
  }
  trainController.jumpToCar = jumpToCar;

  document.querySelectorAll("[data-stop]").forEach((btn) => {
    btn.addEventListener("click", () => jumpToCar(Number(btn.getAttribute("data-stop"))));
  });

  // Wheel -> Drive Train OR Spin 360° 3D Ring + Boost Sky Astrolabe!
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
    trainController.scrollBoostDeg += delta * 0.06;

    if (trainController.ringMode) {
      trainController.autoSpinRing = false;
      trainController.ringTargetAngle -= delta * 0.085;
    } else {
      trainController.targetX = Math.max(0, Math.min(trainController.maxX, trainController.targetX + delta * 1.18));
    }
  }, { passive: false });

  // Pointer Drag
  let dragging = false;
  let dragStartX = 0;
  let dragOrigin = 0;

  viewport.addEventListener("pointerdown", (e) => {
    if (trainController.isMobile) return;
    if (e.target.closest("a, button, input, .note-card, .turntable")) return;
    dragging = true;
    dragStartX = e.clientX;
    dragOrigin = trainController.ringMode ? trainController.ringTargetAngle : trainController.targetX;
    if (trainController.ringMode) trainController.autoSpinRing = false;
    viewport.classList.add("dragging");
  });

  window.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    const dx = e.clientX - dragStartX;
    if (trainController.ringMode) {
      trainController.ringTargetAngle = dragOrigin + dx * 0.16;
    } else {
      trainController.targetX = Math.max(0, Math.min(trainController.maxX, dragOrigin - dx * 1.35));
    }
  });

  window.addEventListener("pointerup", () => {
    dragging = false;
    viewport.classList.remove("dragging");
  });

  window.addEventListener("keydown", (e) => {
    if (document.getElementById("note-modal").classList.contains("open")) {
      if (e.key === "Escape") document.getElementById("note-modal").classList.remove("open");
      return;
    }
    if (e.key === "r" || e.key === "R") {
      toggleRingMode();
      return;
    }
    if (trainController.isMobile) return;
    if (e.key === "ArrowRight") {
      if (trainController.ringMode) { trainController.autoSpinRing = false; trainController.ringTargetAngle -= 45; }
      else trainController.targetX = Math.min(trainController.maxX, trainController.targetX + 460);
    } else if (e.key === "ArrowLeft") {
      if (trainController.ringMode) { trainController.autoSpinRing = false; trainController.ringTargetAngle += 45; }
      else trainController.targetX = Math.max(0, trainController.targetX - 460);
    }
  });

  // Main 60fps Loop
  let prevX = 0;
  function animate() {
    if (trainController.ringMode) {
      if (trainController.autoSpinRing) {
        trainController.ringTargetAngle -= 0.18;
      }
      trainController.ringAngle += (trainController.ringTargetAngle - trainController.ringAngle) * 0.085;
      consist.style.transform = `translateZ(-1360px) rotateX(-7deg) rotateY(${trainController.ringAngle.toFixed(2)}deg)`;

      const normDeg = (((-trainController.ringAngle) % 360) + 360) % 360;
      const ratio = normDeg / 360;
      const activeIdx = Math.round(normDeg / 45) % 8;

      trackWorld.style.setProperty("--wheel-deg", `${(normDeg * 4) % 360}deg`);
      document.documentElement.style.setProperty("--compass-deg", `${normDeg}deg`);
      document.documentElement.style.setProperty("--scroll-boost-deg", `${(normDeg * 0.5).toFixed(1)}deg`);

      progressFill.style.width = `calc((100% - 48px) * ${ratio.toFixed(4)})`;
      miniMarker.style.left = `calc(24px + (100% - 48px) * ${ratio.toFixed(4)})`;
      speedEl.textContent = `3D RING · ${Math.round(normDeg)}°`;

      stopNodes.forEach((n, idx) => n.classList.toggle("active", idx === activeIdx));
      topNavBtns.forEach((b) => {
        const stop = Number(b.getAttribute("data-stop"));
        b.classList.toggle("active", stop === 1 ? (activeIdx >= 1 && activeIdx <= 4) : stop === activeIdx);
      });

      requestAnimationFrame(animate);
      return;
    }

    if (trainController.isMobile) {
      trainController.currentX = viewport.scrollLeft;
    } else {
      trainController.currentX += (trainController.targetX - trainController.currentX) * 0.095;
      if (Math.abs(trainController.targetX - trainController.currentX) < 0.12) {
        trainController.currentX = trainController.targetX;
      }
      trackWorld.style.transform = `translate3d(${-trainController.currentX}px, 0, 0)`;
      skyLayer.style.transform = `translate3d(${-trainController.currentX * 0.07}px, 0, 0)`;
      viaductLayer.style.transform = `translate3d(${-trainController.currentX * 0.26}px, 0, 0)`;
      sleepers.style.transform = `translate3d(${-(trainController.currentX % 34)}px, 0, 0)`;
    }

    const wheelDeg = (trainController.currentX * 0.65) % 360;
    trackWorld.style.setProperty("--wheel-deg", `${wheelDeg}deg`);
    document.documentElement.style.setProperty("--compass-deg", `${(25 + trainController.currentX * 0.22) % 360}deg`);
    document.documentElement.style.setProperty("--scroll-boost-deg", `${trainController.scrollBoostDeg.toFixed(1)}deg`);
    window.__trainVelocity = trainController.currentX - prevX;

    const vpCenter = window.innerWidth / 2;
    const ratio = trainController.maxX > 0 ? Math.min(1, Math.max(0, trainController.currentX / trainController.maxX)) : 0;
    progressFill.style.width = `calc((100% - 48px) * ${ratio.toFixed(4)})`;
    miniMarker.style.left = `calc(24px + (100% - 48px) * ${ratio.toFixed(4)})`;

    const velocity = Math.abs(trainController.currentX - prevX);
    prevX = trainController.currentX;
    const kmh = Math.min(82, Math.round(velocity * 2.6));
    const km = (ratio * 23.3).toFixed(1);
    speedEl.textContent = `${String(kmh).padStart(2, "0")} km/h · ${km} km`;

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
      b.classList.toggle("active", stop === 1 ? (activeIdx >= 1 && activeIdx <= 4) : stop === activeIdx);
    });

    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}

/* ==========================================================================
   3. Cursor Counter-Rotating Astrolabe Reticle, 3D Petals & Click Vortex
   ========================================================================== */
function initCanvas() {
  const canvas = document.getElementById("ambient-canvas");
  const ctx = canvas.getContext("2d");
  let w = 0, h = 0;
  const petals = [];
  const bursts = [];

  const pointer = { x: -200, y: -200, tx: -200, ty: -200, angle: 0, active: false };

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const HUES = [
    "255, 126, 168", // Sakura Rose
    "255, 208, 108", // Lantern Gold
    "78, 232, 186",  // Ghibli Spirit Mint-Jade
    "206, 138, 255", // Twilight Wisteria
  ];

  for (let i = 0; i < 42; i++) {
    petals.push({
      x: Math.random() * w,
      y: Math.random() * h,
      size: 3 + Math.random() * 4,
      vx: -0.5 - Math.random() * 0.7,
      vy: 0.2 + Math.random() * 0.45,
      rot: Math.random() * Math.PI * 2,
      vRot: (Math.random() - 0.5) * 0.08,
      flip: Math.random() * Math.PI * 2,
      vFlip: 0.035 + Math.random() * 0.045,
      isPetal: i % 2 === 0,
      hue: HUES[i % HUES.length],
    });
  }

  window.addEventListener("pointermove", (e) => {
    pointer.tx = e.clientX;
    pointer.ty = e.clientY;
    if (!pointer.active) {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
    }
    if (Math.random() < 0.3 && petals.length < 72) {
      petals.push({
        x: e.clientX + (-8 + Math.random() * 16),
        y: e.clientY + (-8 + Math.random() * 16),
        size: 2.6 + Math.random() * 3.2,
        vx: -0.6 - Math.random() * 0.6,
        vy: -0.35 + Math.random() * 0.7,
        rot: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.14,
        flip: 0,
        vFlip: 0.07,
        isPetal: true,
        ttl: 80,
        hue: "255, 152, 178",
      });
    }
  });

  window.addEventListener("click", (e) => {
    const sparks = [];
    for (let k = 0; k < 12; k++) {
      sparks.push({ angle: (Math.PI * 2 * k) / 12, dist: 6, speed: 1.8 + Math.random() * 1.5 });
    }
    bursts.push({ x: e.clientX, y: e.clientY, r: 8, rot: 0, alpha: 0.9, sparks });
  });

  function draw() {
    ctx.clearRect(0, 0, w, h);
    const vel = window.__trainVelocity || 0;

    // 1) Draw 3D Tumbling Sakura Petals & Sunset Fireflies
    for (let i = petals.length - 1; i >= 0; i--) {
      const p = petals[i];
      p.x += p.vx - vel * 0.14;
      p.y += p.vy;
      p.rot += p.vRot + vel * 0.002;
      p.flip += p.vFlip;

      if (p.ttl !== undefined) {
        p.ttl--;
        if (p.ttl <= 0) { petals.splice(i, 1); continue; }
      } else {
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y > h + 20) p.y = -15;
        if (p.y < -20) p.y = h + 15;
      }

      const lifeAlpha = p.ttl ? p.ttl / 80 : 1;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      if (p.isPetal) {
        ctx.scale(1, 0.32 + 0.68 * Math.abs(Math.cos(p.flip)));
        ctx.beginPath();
        ctx.moveTo(0, -p.size);
        ctx.bezierCurveTo(p.size * 0.9, -p.size * 0.5, p.size * 0.8, p.size * 0.8, 0, p.size);
        ctx.bezierCurveTo(-p.size * 0.8, p.size * 0.8, -p.size * 0.9, -p.size * 0.5, 0, -p.size);
        ctx.fillStyle = `rgba(${p.hue}, ${0.55 * lifeAlpha})`;
        ctx.fill();
      } else {
        const pulse = 0.28 + 0.45 * Math.sin(p.flip);
        ctx.beginPath();
        ctx.arc(0, 0, p.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.hue}, ${Math.max(0.1, pulse * lifeAlpha)})`;
        ctx.fill();
      }
      ctx.restore();
    }

    // 2) Draw Real-Time Mouse-Following Dual Counter-Rotating Compass Reticle
    if (pointer.active && w > 960) {
      const dx = pointer.tx - pointer.x;
      const dy = pointer.ty - pointer.y;
      pointer.x += dx * 0.22;
      pointer.y += dy * 0.22;
      const moveSpeed = Math.hypot(dx, dy);
      pointer.angle += 0.032 + Math.min(0.14, moveSpeed * 0.004);

      ctx.save();
      ctx.translate(pointer.x, pointer.y);

      // Outer CW dashed ring
      ctx.save();
      ctx.rotate(pointer.angle);
      ctx.beginPath();
      ctx.setLineDash([6, 6]);
      ctx.arc(0, 0, 20, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255, 196, 134, 0.62)";
      ctx.lineWidth = 1.3;
      ctx.stroke();
      ctx.restore();

      // Inner CCW 4-tick star ring
      ctx.save();
      ctx.rotate(-pointer.angle * 1.5);
      ctx.beginPath();
      ctx.arc(0, 0, 11, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255, 128, 166, 0.55)";
      ctx.lineWidth = 1.1;
      ctx.stroke();
      for (let k = 0; k < 4; k++) {
        ctx.rotate(Math.PI / 2);
        ctx.beginPath();
        ctx.moveTo(9, 0);
        ctx.lineTo(15, 0);
        ctx.strokeStyle = "rgba(255, 206, 142, 0.78)";
        ctx.lineWidth = 1.4;
        ctx.stroke();
      }
      ctx.restore();

      ctx.restore();
    }

    // 3) Draw Click Starburst Vortex
    for (let i = bursts.length - 1; i >= 0; i--) {
      const b = bursts[i];
      b.r += 1.8;
      b.rot += 0.065;
      b.alpha *= 0.94;
      if (b.alpha < 0.025) { bursts.splice(i, 1); continue; }

      ctx.save();
      ctx.translate(b.x, b.y);
      ctx.rotate(b.rot);
      ctx.beginPath();
      ctx.setLineDash([6, 5]);
      ctx.arc(0, 0, b.r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255, 146, 174, ${b.alpha})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.rotate(-b.rot * 2.2);
      ctx.setLineDash([]);
      for (let c = 0; c < 4; c++) {
        ctx.rotate(Math.PI / 2);
        ctx.beginPath();
        ctx.moveTo(b.r * 0.5, 0);
        ctx.lineTo(b.r * 1.22, 0);
        ctx.strokeStyle = `rgba(255, 206, 134, ${b.alpha * 0.95})`;
        ctx.lineWidth = 1.6;
        ctx.stroke();
      }

      b.sparks.forEach((sp) => {
        sp.dist += sp.speed;
        sp.angle += 0.05;
        ctx.beginPath();
        ctx.arc(Math.cos(sp.angle) * sp.dist, Math.sin(sp.angle) * sp.dist, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 192, 148, ${b.alpha})`;
        ctx.fill();
      });
      ctx.restore();
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
      const h = radio.playing ? Math.max(4, Math.min(20, (v / 255) * 22 + 3)) : 4;
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

  document.getElementById("turntable").addEventListener("click", () => { radio.toggle(); syncUI(); });
  playBtn.addEventListener("click", () => { radio.toggle(); syncUI(); });
  stationBtns.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      radio.selectStation(idx);
      if (!radio.playing) radio.start();
      syncUI();
    });
  });
  document.getElementById("radio-vol").addEventListener("input", (e) => radio.setVolume(parseFloat(e.target.value)));
  syncUI();
}

/* ==========================================================================
   5. Live GitHub Repositories & Telemetry
   ========================================================================== */
let allRepos = [...FALLBACK_REPOS];
let currentFilter = "All";

function renderRepos() {
  const grid = document.getElementById("repo-grid");
  const list = allRepos.filter((r) => currentFilter === "All" || (r.language || "Protocol") === currentFilter);

  grid.innerHTML = list.slice(0, 9).map((r, i) => {
    const lang = escapeHtml(r.language || "Protocol");
    return `
    <a class="luggage-tag" data-lang="${lang}" href="${r.html_url}" target="_blank" rel="noopener">
      <div>
        <div class="luggage-top mono">
          <span class="luggage-serial">CARGO #${String(i + 1).padStart(2, "0")}</span>
          <span style="color:var(--tag-accent)">↗</span>
        </div>
        <h4>${escapeHtml(r.name)}</h4>
        <p>${escapeHtml(r.description || "一个小巧安静的实验车厢仓库。")}</p>
      </div>
      <div class="luggage-foot mono">
        <span style="color:var(--tag-accent)">● ${lang}</span>
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

    document.getElementById("stat-stars").textContent = repos.reduce((s, r) => s + (r.stargazers_count || 0), 0);
    document.getElementById("stat-forks").textContent = repos.reduce((s, r) => s + (r.forks_count || 0), 0);
    document.getElementById("stat-followers").textContent = user.followers ?? 55;
    document.getElementById("stat-repos").textContent = user.public_repos ?? repos.length;

    const byName = Object.fromEntries(repos.map((r) => [r.name, r]));
    document.querySelectorAll("[data-repo-metric]").forEach((el) => {
      const repo = byName[el.getAttribute("data-repo-metric")];
      if (repo) el.textContent = `★ ${repo.stargazers_count} · ${repo.forks_count} forks`;
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
   6. Car 06 Manuscripts & Car 07 Paper Boats
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
  document.getElementById("modal-body").innerHTML = `
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
        const plain = (it.body || "").replace(/[#>*`]/g, "").trim();
        return {
          tag: "车窗随笔",
          date: (it.created_at || "").slice(0, 10).replace(/-/g, "."),
          title: it.title.replace(/^\[?(随笔|blog)\]?\s*/i, ""),
          summary: plain.slice(0, 68) + (plain.length > 68 ? "…" : ""),
          body: simpleMarkdown(it.body || ""),
        };
      });
      notesList = [...liveNotes, ...FALLBACK_NOTES];
      renderNotes();
    }
  } catch (_) {}
}

function renderBoats(boats) {
  const papers = [
    { hull: "#ffe6ef", sail: "#ffffff", stroke: "#ff6b9d", glow: "rgba(255,107,157,0.32)" },
    { hull: "#e4fbf3", sail: "#f7fffc", stroke: "#3ad6ab", glow: "rgba(70,224,182,0.32)" },
    { hull: "#fff5dc", sail: "#fffdf5", stroke: "#f4a640", glow: "rgba(255,204,102,0.34)" },
  ];
  document.getElementById("boats-row").innerHTML = boats.slice(0, 3).map((b, i) => {
    const p = papers[i % papers.length];
    return `
    <div class="boat-item">
      <div class="boat-bubble" style="border-color:${p.stroke}66">
        <div class="boat-user mono">
          <img src="${escapeHtml(b.avatar)}" alt="" />
          <span style="color:${p.stroke};font-weight:700">@${escapeHtml(b.user)}</span>
        </div>
        <p>${escapeHtml(b.msg)}</p>
      </div>
      <svg class="origami-boat-svg" viewBox="0 0 60 28">
        <ellipse cx="30" cy="23" rx="24" ry="3.4" fill="${p.glow}"/>
        <path d="M9 15L51 15L43 23.5H17Z" fill="${p.hull}" stroke="${p.stroke}" stroke-width="1.25" stroke-linejoin="round"/>
        <path d="M18 15L30 2L42 15Z" fill="${p.sail}" stroke="${p.stroke}" stroke-width="1.15" stroke-linejoin="round"/>
        <line x1="30" y1="2" x2="30" y2="15" stroke="${p.stroke}" stroke-width=".95"/>
      </svg>
    </div>`;
  }).join("");
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
      found.push({ user: item.user?.login || "traveler", avatar: item.user?.avatar_url || "./assets/avatar.jpg", msg });
      if (found.length >= 3) break;
    }
    if (found.length) renderBoats([...found, ...FALLBACK_BOATS].slice(0, 3));
  } catch (_) {}
}

function escapeHtml(str) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function simpleMarkdown(md) {
  return escapeHtml(md).split(/\n{2,}/).map((b) => `<p>${b.replace(/`([^`]+)`/g, "<code>$1</code>").replace(/\n/g, "<br/>")}</p>`).join("");
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
  modal.addEventListener("click", (e) => { if (e.target === modal) modal.classList.remove("open"); });
});
