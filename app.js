/* ==========================================================================
   Station 233 · V7: 360° Spiral Galaxy Station Ring & Gargantua Black Hole
   - Default Mode: All 8 stations orbit in a 3D tilted Galactic Ring around
     a real-time relativistic gravitational-lensing Black Hole!
   - Toggleable Overview Mode (full cosmic view of Black Hole + 8-station ring)
   - Toggleable Linear Sea-Train Mode
   ========================================================================== */

const LOGIN = "wangshen233";

const FALLBACK_NOTES = [
  {
    tag: "小站手记",
    date: "2026.11.26",
    title: "Station 233 · 驶入黑洞视界边缘的银河海列星环",
    summary: "把八节海上列车车厢升维成环绕引力透镜黑洞公转的 360° 银河星环——滚轮旋转星轨，点击任意卫星车厢即可跃迁停靠。",
    body: `
      <p>欢迎登上 <strong>233 系 · 茜色の銀河列車</strong>。</p>
      <p>整座小站现已进入 <strong>360° 银河黑洞星环轨道</strong>：</p>
      <ul>
        <li><strong>中心天体 · 茜色视界黑洞</strong>：基于广义相对论零测地线光线弯折实时渲染事件视界阴影、光子环、上下引力透镜光拱与多普勒吸积盘。</li>
        <li><strong>八站成环公转</strong>：00–07 号车沿倾斜银河椭圆星轨首尾成环环绕黑洞旋转，点击远景任意车厢或底部星图即可引力弹弓跃迁至前景停靠位。</li>
        <li>点击右上角 <strong>🕳️ 全景黑洞星系</strong> 可拉远镜头俯瞰完整吸积盘与八站星环；点 <strong>🚃 平面海列</strong> 亦可随时切回海面铁道模式。</li>
      </ul>
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
  { user: "wangshen233", avatar: "./assets/avatar.jpg", msg: "座位 233 常年留空，点左侧折一艘纸船放进星海吧～" },
  { user: "station-233", avatar: "./assets/avatar.jpg", msg: "银河海列全天候供应热美式，祝路过的你今天也没有 bug" },
  { user: "sunset-fm", avatar: "./assets/avatar.jpg", msg: "茜色の銀河を渡る風のように、好奇心のその先へ。" },
];

let bhEngine = null;

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
  if (btn) btn.textContent = mode === "dark" ? "☀️ 樱雪浅色" : "🌙 茜色星夜";
}

/* ==========================================================================
   2. 360° Galactic Black Hole Ring Orbit + Linear Sea-Train Controller
   ========================================================================== */
const trainController = {
  galaxyMode: true,
  overviewMode: false,
  orbitAngle: 22,       // Dramatic initial 22° glide into Station 00!
  targetOrbitAngle: 0,
  overviewBlend: 0,
  targetX: 0,
  currentX: 0,
  maxX: 0,
  isMobile: false,
  scrollBoostDeg: 0,
  jumpToCar: null,
  toggleGalaxyMode: null,
  toggleOverview: null,
};

// Expose orbital ellipse geometry so #ambient-canvas draws the glowing ring track!
window.__orbitTrack = { cx: 0, cy: 0, rx: 0, ry: 0, tilt: -0.105, active: true };

function initTrainJourney() {
  const cosmosCanvas = document.getElementById("cosmos-canvas");
  bhEngine = new window.BlackHoleGalaxyEngine(cosmosCanvas);

  const viewport = document.getElementById("world-viewport");
  const trackWorld = document.getElementById("train-track-world");
  const skyLayer = document.getElementById("sky-layer");
  const viaductLayer = document.getElementById("viaduct-layer");
  const sleepers = document.getElementById("rail-sleepers");
  const progressFill = document.getElementById("route-progress-fill");
  const miniMarker = document.getElementById("mini-train-marker");
  const speedEl = document.getElementById("speed-readout");
  const ringBtn = document.getElementById("ring-mode-toggle");
  const ringLabel = document.getElementById("ring-mode-label");
  const overviewBtn = document.getElementById("overview-toggle");
  const overviewLabel = document.getElementById("overview-label");
  const carriages = Array.from(document.querySelectorAll(".carriage"));
  const stopNodes = Array.from(document.querySelectorAll(".station-node"));
  const topNavBtns = Array.from(document.querySelectorAll(".hud-quick-nav button"));

  function recalcBounds() {
    trainController.isMobile = window.innerWidth <= 960;
    if (trainController.isMobile) {
      document.body.classList.remove("galaxy-mode");
      trackWorld.style.transform = "none";
      carriages.forEach((c) => {
        c.style.transform = "none";
        c.style.opacity = "1";
        c.style.zIndex = "";
      });
      trainController.maxX = Math.max(1, viewport.scrollWidth - viewport.clientWidth);
    } else if (trainController.galaxyMode) {
      document.body.classList.add("galaxy-mode");
    } else {
      document.body.classList.remove("galaxy-mode");
      carriages.forEach((c) => {
        c.style.transform = "none";
        c.style.opacity = "1";
        c.style.zIndex = "";
        c.classList.remove("orbit-satellite");
      });
      const totalWidth = trackWorld.scrollWidth;
      trainController.maxX = Math.max(0, totalWidth - window.innerWidth);
      trainController.targetX = Math.min(trainController.targetX, trainController.maxX);
    }
  }

  recalcBounds();
  window.addEventListener("resize", recalcBounds);

  function toggleGalaxyMode(forceState) {
    if (trainController.isMobile) return;
    trainController.galaxyMode = typeof forceState === "boolean" ? forceState : !trainController.galaxyMode;
    ringLabel.textContent = trainController.galaxyMode ? "🚃 平面海列" : "🌌 银河黑洞环";
    overviewBtn.style.display = trainController.galaxyMode ? "inline-flex" : "none";
    if (bhEngine) bhEngine.triggerWarp(1.0);
    recalcBounds();
  }
  trainController.toggleGalaxyMode = toggleGalaxyMode;

  function toggleOverview(forceState) {
    if (!trainController.galaxyMode) toggleGalaxyMode(true);
    trainController.overviewMode = typeof forceState === "boolean" ? forceState : !trainController.overviewMode;
    overviewLabel.textContent = trainController.overviewMode ? "🛸 近景停靠" : "全景黑洞星系";
    if (bhEngine) bhEngine.triggerWarp(0.9);
  }
  trainController.toggleOverview = toggleOverview;

  ringBtn.addEventListener("click", () => toggleGalaxyMode());
  overviewBtn.addEventListener("click", () => toggleOverview());

  // Shortest-path angular jump to station index (0..7) around the 360° ring
  function jumpToCar(index) {
    const car = carriages[index];
    if (!car) return;

    if (trainController.galaxyMode && !trainController.isMobile) {
      const desiredMod = (-index * 45) % 360;
      const curMod = trainController.targetOrbitAngle % 360;
      let diff = ((desiredMod - curMod + 540) % 360) - 180;
      if (diff === -180) diff = 180;
      trainController.targetOrbitAngle += diff;
      if (bhEngine) bhEngine.triggerWarp(1.1);
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
    btn.addEventListener("click", () => {
      if (trainController.overviewMode) toggleOverview(false);
      jumpToCar(Number(btn.getAttribute("data-stop")));
    });
  });

  // Clicking an orbiting background satellite carriage brings it right to front dock!
  carriages.forEach((car, idx) => {
    car.addEventListener("click", (e) => {
      if (!trainController.galaxyMode || trainController.isMobile) return;
      if (car.classList.contains("orbit-satellite")) {
        e.preventDefault();
        e.stopPropagation();
        if (trainController.overviewMode) toggleOverview(false);
        jumpToCar(idx);
      }
    }, true);
  });

  // Wheel -> Orbit the 360° Galaxy Ring around the Black Hole!
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

    if (trainController.galaxyMode) {
      trainController.targetOrbitAngle -= delta * 0.085;
      if (bhEngine && Math.abs(delta) > 25) bhEngine.triggerWarp(Math.min(0.65, Math.abs(delta) * 0.004));
    } else {
      trainController.targetX = Math.max(0, Math.min(trainController.maxX, trainController.targetX + delta * 1.18));
    }
  }, { passive: false });

  // Pointer Drag to Spin Galaxy Ring
  let dragging = false;
  let dragStartX = 0;
  let dragOrigin = 0;

  window.addEventListener("pointerdown", (e) => {
    if (trainController.isMobile) return;
    if (e.target.closest("a, button, input, .note-card, .turntable, .modal-sheet")) return;
    dragging = true;
    dragStartX = e.clientX;
    dragOrigin = trainController.galaxyMode ? trainController.targetOrbitAngle : trainController.targetX;
    viewport.classList.add("dragging");
  });

  window.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    const dx = e.clientX - dragStartX;
    if (trainController.galaxyMode) {
      trainController.targetOrbitAngle = dragOrigin + dx * 0.18;
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
    if (e.key === "v" || e.key === "V") {
      toggleOverview();
      return;
    }
    if (e.key === "r" || e.key === "R") {
      toggleGalaxyMode();
      return;
    }
    if (trainController.isMobile) return;
    if (e.key === "ArrowRight") {
      if (trainController.galaxyMode) { trainController.targetOrbitAngle -= 45; bhEngine?.triggerWarp(0.8); }
      else trainController.targetX = Math.min(trainController.maxX, trainController.targetX + 460);
    } else if (e.key === "ArrowLeft") {
      if (trainController.galaxyMode) { trainController.targetOrbitAngle += 45; bhEngine?.triggerWarp(0.8); }
      else trainController.targetX = Math.max(0, trainController.targetX - 460);
    }
  });

  // Main 60fps Loop
  let prevX = 0;
  function animate() {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";

    if (trainController.galaxyMode && !trainController.isMobile) {
      // Auto-revolve slowly when in Full Galaxy Overview Mode!
      if (trainController.overviewMode && !dragging) {
        trainController.targetOrbitAngle -= 0.16;
      }

      const prevAngle = trainController.orbitAngle;
      trainController.orbitAngle += (trainController.targetOrbitAngle - trainController.orbitAngle) * 0.088;
      trainController.overviewBlend += ((trainController.overviewMode ? 1 : 0) - trainController.overviewBlend) * 0.085;

      const ov = trainController.overviewBlend;
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // Render Relativistic Gargantua Black Hole + 4-Arm Spiral Galaxy
      if (bhEngine) {
        bhEngine.setOrbitState({
          angleDeg: -trainController.orbitAngle,
          warp: Math.min(1.0, Math.abs(trainController.orbitAngle - prevAngle) * 0.09),
          overview: trainController.overviewMode,
          isLight,
        });
        bhEngine.renderFrame();
      }

      // 3D Tilted Elliptical Galactic Ring Coordinates around Gargantua!
      const ringCx = vw * 0.5;
      const ringCy = vh * (0.265 + 0.215 * ov);
      const rx = vw * (0.43 + 0.01 * ov);
      const ry = vh * (0.19 + 0.11 * ov);
      const tilt = -0.12; // Matches Gargantua's -7 deg roll!
      const cosT = Math.cos(tilt), sinT = Math.sin(tilt);

      window.__orbitTrack = { cx: ringCx, cy: ringCy, rx, ry, tilt, active: true, rotDeg: trainController.orbitAngle };

      let activeIdx = 0;
      let maxFront = -Infinity;

      carriages.forEach((car, idx) => {
        const deg = idx * 45 + trainController.orbitAngle;
        const rad = (deg * Math.PI) / 180;
        const sinA = Math.sin(rad);
        const cosA = Math.cos(rad);

        if (cosA > maxFront) {
          maxFront = cosA;
          activeIdx = idx;
        }

        const ex = rx * sinA;
        const ey = ry * cosA;
        let gx = ringCx + (ex * cosT - ey * sinT);
        let gy = ringCy + (ex * sinT + ey * cosT);

        // Front docked carriage settles cleanly at lower-center (y ~ 66.5vh) at 0.76x–0.80x scale,
        // leaving 100% of Gargantua's Pitch-Black Event Horizon & Upper Lensing Halo clear above!
        const frontFocus = Math.pow(Math.max(0, cosA), 5.5) * (1 - ov);
        const dockY = vh * 0.665;
        gx = gx * (1 - frontFocus) + (vw * 0.5) * frontFocus;
        gy = gy * (1 - frontFocus) + dockY * frontFocus;

        const baseRingScale = 0.20 + 0.13 * ((cosA + 1) * 0.5);
        const dockScale = car.classList.contains("locomotive") ? 0.76 : 0.80;
        const scale = baseRingScale * ov + (baseRingScale * (1 - frontFocus) + dockScale * frontFocus) * (1 - ov);

        const bankY = -sinA * 18 * (1 - frontFocus * 0.9);
        const bankZ = (sinA * 3.5 - 6.8 * (1 - frontFocus)) * (ov * 0.6 + 0.4);

        const opacity = ov > 0.5
          ? 0.55 + 0.45 * ((cosA + 1) * 0.5)
          : 0.36 + 0.38 * ((cosA + 1) * 0.5) + 0.26 * frontFocus;

        const isSatellite = ov > 0.5 || frontFocus < 0.55;
        car.classList.toggle("orbit-satellite", isSatellite);
        car.style.zIndex = String(Math.round(10 + (cosA + 1) * 15 + frontFocus * 20));
        car.style.opacity = Math.min(1, opacity).toFixed(3);
        car.style.transform = `translate3d(${(gx - car.offsetWidth / 2).toFixed(1)}px, ${(gy - car.offsetHeight / 2).toFixed(1)}px, 0) perspective(1200px) rotateY(${bankY.toFixed(1)}deg) rotateZ(${bankZ.toFixed(1)}deg) scale(${scale.toFixed(3)})`;
        car.style.left = "0px";
        car.style.top = "0px";
      });

      let normDeg = (((-trainController.orbitAngle) % 360) + 360) % 360;
      if (normDeg > 359.4) normDeg = 0;
      const ratio = activeIdx / 7;
      const wheelDeg = (normDeg * 5) % 360;
      trackWorld.style.setProperty("--wheel-deg", `${wheelDeg}deg`);
      document.documentElement.style.setProperty("--compass-deg", `${normDeg}deg`);
      window.__trainVelocity = (trainController.orbitAngle - prevAngle) * -8;

      progressFill.style.width = `calc((100% - 48px) * ${ratio.toFixed(4)})`;
      miniMarker.style.left = `calc(24px + (100% - 48px) * ${ratio.toFixed(4)})`;
      speedEl.textContent = `GALAXY · ${String(Math.round(normDeg)).padStart(3, "0")}°`;

      stopNodes.forEach((n, idx) => n.classList.toggle("active", idx === activeIdx));
      topNavBtns.forEach((b) => {
        const stop = Number(b.getAttribute("data-stop"));
        b.classList.toggle("active", stop === 1 ? (activeIdx >= 1 && activeIdx <= 4) : stop === activeIdx);
      });

      requestAnimationFrame(animate);
      return;
    }

    // Linear Coupled Sea-Train Mode
    window.__orbitTrack.active = false;
    carriages.forEach((c) => { c.style.left = ""; c.style.top = ""; });

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
   3. Glowing Galactic Ring Track, Infalling Stardust & Cursor Astrolabe
   ========================================================================== */
function initCanvas() {
  const canvas = document.getElementById("ambient-canvas");
  const ctx = canvas.getContext("2d");
  let w = 0, h = 0;
  const petals = [];
  const bursts = [];
  const pointer = { x: -200, y: -200, tx: -200, ty: -200, angle: 0, active: false };

  const HUES = [
    "255, 126, 168",
    "255, 208, 108",
    "78, 232, 186",
    "206, 138, 255",
  ];

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  for (let i = 0; i < 40; i++) {
    petals.push({
      angle: Math.random() * Math.PI * 2,
      radFrac: 0.25 + Math.random() * 0.95,
      speed: 0.003 + Math.random() * 0.005,
      size: 2.0 + Math.random() * 3.0,
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
  });

  window.addEventListener("click", (e) => {
    const sparks = [];
    for (let k = 0; k < 12; k++) {
      sparks.push({ angle: (Math.PI * 2 * k) / 12, dist: 6, speed: 2.0 + Math.random() * 1.5 });
    }
    bursts.push({ x: e.clientX, y: e.clientY, r: 8, rot: 0, alpha: 0.9, sparks });
  });

  function draw() {
    ctx.clearRect(0, 0, w, h);
    const track = window.__orbitTrack;

    // 1) Draw Visible Tilted Galactic Orbital Track Ring connecting all 8 stations!
    if (track && track.active && w > 960) {
      ctx.save();
      ctx.translate(track.cx, track.cy);
      ctx.rotate(track.tilt);

      // Outer golden-rose elliptical railway ring
      ctx.beginPath();
      ctx.setLineDash([10, 8]);
      ctx.lineDashOffset = -(performance.now() * 0.025);
      ctx.ellipse(0, 0, track.rx, track.ry, 0, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255, 198, 132, 0.34)";
      ctx.lineWidth = 1.6;
      ctx.stroke();

      // Inner orchid-jade harmonic ring
      ctx.beginPath();
      ctx.setLineDash([4, 10]);
      ctx.lineDashOffset = performance.now() * 0.03;
      ctx.ellipse(0, 0, track.rx * 0.95, track.ry * 0.92, 0, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(206, 138, 255, 0.24)";
      ctx.lineWidth = 1.2;
      ctx.stroke();
      ctx.setLineDash([]);

      // Spiraling Galactic Stardust Motes orbiting & gently infalling toward Gargantua!
      petals.forEach((p) => {
        p.angle -= p.speed;
        p.radFrac -= 0.0005;
        if (p.radFrac < 0.16) p.radFrac = 1.15;
        const px = Math.sin(p.angle) * track.rx * p.radFrac;
        const py = Math.cos(p.angle) * track.ry * p.radFrac;
        ctx.beginPath();
        ctx.arc(px, py, p.size * Math.min(1.1, p.radFrac), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.hue}, ${0.25 + 0.45 * p.radFrac})`;
        ctx.fill();
      });

      ctx.restore();
    }

    // 2) Mouse-Following Dual Counter-Rotating Astrolabe Reticle
    if (pointer.active && w > 960) {
      const dx = pointer.tx - pointer.x;
      const dy = pointer.ty - pointer.y;
      pointer.x += dx * 0.22;
      pointer.y += dy * 0.22;
      pointer.angle += 0.035 + Math.min(0.14, Math.hypot(dx, dy) * 0.004);

      ctx.save();
      ctx.translate(pointer.x, pointer.y);
      ctx.save();
      ctx.rotate(pointer.angle);
      ctx.beginPath();
      ctx.setLineDash([6, 6]);
      ctx.arc(0, 0, 20, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255, 202, 132, 0.65)";
      ctx.lineWidth = 1.3;
      ctx.stroke();
      ctx.restore();

      ctx.save();
      ctx.rotate(-pointer.angle * 1.6);
      for (let k = 0; k < 4; k++) {
        ctx.rotate(Math.PI / 2);
        ctx.beginPath();
        ctx.moveTo(8, 0);
        ctx.lineTo(14, 0);
        ctx.strokeStyle = "rgba(255, 126, 168, 0.75)";
        ctx.lineWidth = 1.4;
        ctx.stroke();
      }
      ctx.restore();
      ctx.restore();
    }

    // 3) Click Gravitational Lensing Burst
    for (let i = bursts.length - 1; i >= 0; i--) {
      const b = bursts[i];
      b.r += 1.9;
      b.rot += 0.07;
      b.alpha *= 0.94;
      if (b.alpha < 0.025) { bursts.splice(i, 1); continue; }

      ctx.save();
      ctx.translate(b.x, b.y);
      ctx.rotate(b.rot);
      ctx.beginPath();
      ctx.setLineDash([6, 5]);
      ctx.arc(0, 0, b.r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255, 198, 128, ${b.alpha})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.setLineDash([]);

      b.sparks.forEach((sp) => {
        sp.dist += sp.speed;
        sp.angle += 0.055;
        ctx.beginPath();
        ctx.arc(Math.cos(sp.angle) * sp.dist, Math.sin(sp.angle) * sp.dist, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 138, 178, ${b.alpha})`;
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
