/* ==========================================================================
   Station 233 · Horizon Lab (horizon-lab.js)
   1) Schwarzschild Relativistic Gravitational Slingshot Paper-Boat Lab
      (Live curved trajectory predictor + perihelion rosette orbits +
       frame-dragging Δv slingshot boosts + event horizon spaghettification)
   2) Event Horizon Hidden 5D Tesseract Protocol CLI (wangshen233@horizon:~$)
   ========================================================================== */

(function () {
  const BOAT_PALETTE = [
    { name: "翡翠号", stroke: "#46e0b6", fill: "#e4fbf3", glow: "70, 224, 182" },
    { name: "琥珀号", stroke: "#ffd166", fill: "#fff6de", glow: "255, 209, 102" },
    { name: "樱霞号", stroke: "#ff6b9d", fill: "#ffe6ef", glow: "255, 107, 157" },
    { name: "星紫号", stroke: "#cb80ff", fill: "#f5e8ff", glow: "203, 128, 255" },
  ];

  // Normalized Schwarzschild Physics Constants (length unit = Event Horizon Shadow Radius bhR!)
  const GM = 1.65;        // Gravitational parameter in units of bhR^3 / step^2
  const GR_ALPHA = 0.42;  // General-Relativistic 1/r^4 perihelion precession strength
  const DT = 0.085;

  const state = {
    probes: [],
    flares: [],
    banners: [],
    capturedCount: 0,
    maxBoostPct: 0,
    aiming: false,
    aimStartX: 0,
    aimStartY: 0,
    aimCurX: 0,
    aimCurY: 0,
    hoveringBH: false,
    terminalOpen: false,
    cmdHistory: [],
    histIdx: -1,
    colorCursor: 0,
  };

  function stepRelativistic(px, py, vx, vy) {
    const r2 = px * px + py * py;
    const r = Math.sqrt(r2);
    if (r < 0.92) {
      return { px, py, vx, vy, r, captured: true };
    }
    const L = px * vy - py * vx; // Specific angular momentum
    // Schwarzschild effective force: -GM/r^2 - GR_ALPHA * L^2 / r^4
    const accelMag = GM / r2 + (GR_ALPHA * L * L) / (r2 * r2);
    const ax = (-accelMag * px) / r;
    const ay = (-accelMag * py) / r;

    // Subtle Kerr prograde frame-dragging boost near photon sphere (1.0 < r < 2.2)
    let dragX = 0, dragY = 0;
    if (r < 2.3) {
      const frameDrag = 0.018 / (r2 * r);
      dragX = py * frameDrag;
      dragY = -px * frameDrag;
    }

    const nvx = vx + (ax + dragX) * DT;
    const nvy = vy + (ay + dragY) * DT;
    const npx = px + nvx * DT;
    const npy = py + nvy * DT;
    return { px: npx, py: npy, vx: nvx, vy: nvy, r: Math.hypot(npx, npy), captured: false };
  }

  function predictTrajectory(px0, py0, vx0, vy0, steps = 150) {
    const pts = [{ x: px0, y: py0 }];
    let px = px0, py = py0, vx = vx0, vy = vy0;
    let minR = Infinity;
    let captured = false;

    for (let i = 0; i < steps; i++) {
      const res = stepRelativistic(px, py, vx, vy);
      px = res.px; py = res.py; vx = res.vx; vy = res.vy;
      minR = Math.min(minR, res.r);
      pts.push({ x: px, y: py });
      if (res.captured) {
        captured = true;
        break;
      }
      if (res.r > 12) break;
    }

    const vEnd2 = vx * vx + vy * vy;
    const energy = 0.5 * vEnd2 - GM / Math.max(0.5, Math.hypot(px, py));
    let fate = "orbit"; // Bound precessing rosette orbit
    if (captured) fate = "capture";
    else if (energy > 0.02) fate = "slingshot";

    return { pts, fate, minR };
  }

  function spawnProbe(px, py, vx, vy, customPalette) {
    const pal = customPalette || BOAT_PALETTE[state.colorCursor++ % BOAT_PALETTE.length];
    if (state.probes.length >= 14) state.probes.shift();
    state.probes.push({
      px,
      py,
      vx,
      vy,
      v0: Math.max(0.15, Math.hypot(vx, vy)),
      minR: Infinity,
      slingshotAwarded: false,
      trail: [{ x: px, y: py }],
      pal,
      age: 0,
    });
    updateHudStats();
  }

  function launchDemoFleet() {
    // 1) Emerald-Jade: Tight Relativistic Precessing Rosette Flower Orbit!
    spawnProbe(0, -2.25, 0.92, 0.0, BOAT_PALETTE[0]);
    // 2) Honey-Gold: Close Photon-Sphere Hyperbolic Gravitational Slingshot!
    spawnProbe(-3.8, -1.62, 1.18, 0.14, BOAT_PALETTE[1]);
    // 3) Sakura-Pink: Critical Spiral Plunge into the Event Horizon!
    spawnProbe(2.7, 1.5, -0.52, -0.12, BOAT_PALETTE[2]);
    // 4) Wisteria-Orchid: Wide Elliptical Counter-Precessing Orbit!
    spawnProbe(0, 2.75, -0.78, 0.05, BOAT_PALETTE[3]);
  }

  function clearProbes() {
    state.probes = [];
    updateHudStats();
  }

  function updateHudStats() {
    const el = document.getElementById("slingshot-stats");
    if (!el) return;
    el.textContent = `在轨纸船 ${state.probes.length} · 视界吞噬 ${state.capturedCount} · 最高弹弓加速 +${state.maxBoostPct}%`;
  }

  /* ==========================================================================
     Event Horizon Hidden 5D Protocol Terminal
     ========================================================================== */
  function openTerminal() {
    if (state.terminalOpen) return;
    state.terminalOpen = true;
    const modal = document.getElementById("horizon-terminal");
    modal.classList.add("open");
    if (window.bhEngine) window.bhEngine.setDive(true);

    const out = document.getElementById("term-output");
    if (!out.dataset.booted) {
      out.dataset.booted = "1";
      appendTermHtml(`
        <div class="term-banner">
          <span class="c-gold">╔══════════════════════════════════════════════════════════════╗</span><br/>
          <span class="c-gold">║</span>  <span class="c-rose">EVENT HORIZON TESSERACT</span> · <span class="c-jade">Station 233 Pure-Protocol Shell</span>   <span class="c-gold">║</span><br/>
          <span class="c-gold">║</span>  r &lt; 2GM/c² · Zero Headless Browsers · 36-Op Rust VM Ready   <span class="c-gold">║</span><br/>
          <span class="c-gold">╚══════════════════════════════════════════════════════════════╝</span>
        </div>
        <div class="term-line"><span class="c-muted">[SYS]</span> 已穿过史瓦西视界，进入五维协议控制室。点击下方快捷指令或输入 <code>help</code>：</div>
      `);
    }
    setTimeout(() => document.getElementById("term-input")?.focus(), 120);
  }

  function closeTerminal() {
    state.terminalOpen = false;
    document.getElementById("horizon-terminal")?.classList.remove("open");
    if (window.bhEngine) window.bhEngine.setDive(false);
  }

  function appendTermHtml(html) {
    const out = document.getElementById("term-output");
    if (!out) return;
    const wrap = document.createElement("div");
    wrap.className = "term-block";
    wrap.innerHTML = html;
    out.appendChild(wrap);
    out.scrollTop = out.scrollHeight;
  }

  function runCommand(raw) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    state.cmdHistory.push(raw.trim());
    state.histIdx = state.cmdHistory.length;

    appendTermHtml(`<div class="term-prompt-echo"><span class="c-jade">wangshen233@horizon</span>:<span class="c-orchid">~</span>$ ${escapeHtml(raw)}</div>`);

    if (cmd === "help") {
      appendTermHtml(`
        <div class="term-grid">
          <div><code class="c-gold">whoami</code> — 查看驾驶室主人档案与工程信条</div>
          <div><code class="c-gold">sentinel</code> — 实时运行 Sentinel-rs 36 指令字节码虚拟机追踪</div>
          <div><code class="c-gold">repos</code> — 列出当前实时同步的公开仓库与星标</div>
          <div><code class="c-gold">ping</code> — 测试纯协议 TLS 1.3 / JA4 握手延迟</div>
          <div><code class="c-gold">slingshot</code> — 跃迁至「全景黑洞星系」并齐射四艘引力弹弓实验纸船</div>
          <div><code class="c-gold">clear</code> / <code class="c-gold">exit</code> — 清屏 / 点火逃离黑洞事件视界</div>
        </div>
      `);
    } else if (cmd === "whoami") {
      const stars = document.getElementById("stat-stars")?.textContent || "283";
      const forks = document.getElementById("stat-forks")?.textContent || "305";
      appendTermHtml(`
        <div class="term-card">
          <div><span class="c-rose">● OPERATOR:</span> <strong>日天 (@wangshen233)</strong> · Boarding since 2022.09</div>
          <div><span class="c-jade">● ARSENAL :</span> Python · Rust · Go · TypeScript · BoringSSL · Docker · Linux</div>
          <div><span class="c-gold">● METRICS :</span> ★ ${escapeHtml(stars)} Stars · ⑂ ${escapeHtml(forks)} Forks · 0 Chromium Instances</div>
          <div><span class="c-orchid">● CREED   :</span> "只要能把状态机和加密挑战在协议层还原清楚，就绝不启动无头浏览器。"</div>
        </div>
      `);
    } else if (cmd === "repos" || cmd === "ls") {
      const list = (window.allRepos || []).slice(0, 6);
      const rows = list.map((r) =>
        `<div><span class="c-gold">★ ${String(r.stargazers_count || 0).padEnd(3)}</span> <span class="c-jade">[${escapeHtml(r.language || "Protocol")}]</span> <a href="${r.html_url}" target="_blank" rel="noopener">${escapeHtml(r.name)} ↗</a></div>`
      ).join("");
      appendTermHtml(`<div class="term-card">${rows || "正在同步 GitHub 仓库..."}</div>`);
    } else if (cmd === "sentinel" || cmd === "vm") {
      runSentinelVmTrace();
    } else if (cmd === "ping") {
      appendTermHtml(`
        <div class="term-line">
          <span class="c-jade">[TLS 1.3]</span> BoringSSL JA4=<code>t13d1516h2_8daaf6152771_e5627efa2ab1</code> → ALPN <code>h2</code><br/>
          64 bytes from horizon-233.internal: seq=1 time=<span class="c-gold">0.38 ms</span> (pure socket)<br/>
          64 bytes from horizon-233.internal: seq=2 time=<span class="c-gold">0.31 ms</span> (zero DOM overhead)
        </div>
      `);
    } else if (cmd === "slingshot") {
      closeTerminal();
      if (window.trainController?.toggleOverview) {
        window.trainController.toggleOverview(true);
      }
      setTimeout(() => launchDemoFleet(), 450);
    } else if (cmd === "clear") {
      const out = document.getElementById("term-output");
      if (out) out.innerHTML = "";
    } else if (cmd === "exit" || cmd === "quit") {
      closeTerminal();
    } else {
      appendTermHtml(`<div class="term-line c-rose">未知视界指令: <code>${escapeHtml(raw)}</code>（输入 <code>help</code> 查看可用命令）</div>`);
    }
  }

  function runSentinelVmTrace() {
    const steps = [
      `[0x01] <span class="c-gold">OP_INIT_CTX</span>      seed=0x8f23a91c  heap=1.6MB (No Node.js)`,
      `[0x08] <span class="c-orchid">OP_FETCH_NONCE</span>   challenge_len=64 difficulty=0x0003`,
      `[0x13] <span class="c-jade">OP_XOR_ROTATE</span>    r0 ^= rotl64(r1, 17)  cycles=42`,
      `[0x1B] <span class="c-gold">OP_FNV1A_FOLD</span>    digest=0x7c91e044b21a90d3`,
      `[0x21] <span class="c-orchid">OP_TLS_JA4_BIND</span>  cipher=TLS_AES_128_GCM_SHA256`,
      `[0x24] <span class="c-rose">OP_EMIT_TOKEN</span>    ✓ Sentinel Token 逐字节对齐完成 · 耗时 <strong class="c-jade">0.19 ms</strong>！`,
    ];
    const block = document.createElement("div");
    block.className = "term-card mono";
    document.getElementById("term-output")?.appendChild(block);

    steps.forEach((line, idx) => {
      setTimeout(() => {
        const d = document.createElement("div");
        d.innerHTML = line;
        block.appendChild(d);
        const out = document.getElementById("term-output");
        if (out) out.scrollTop = out.scrollHeight;
      }, idx * 130);
    });
  }

  function escapeHtml(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /* ==========================================================================
     Canvas Rendering & Pointer Binding
     ========================================================================== */
  function initHorizonLab() {
    const canvas = document.getElementById("slingshot-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w = 0, h = 0;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    // Bind Terminal UI controls
    document.getElementById("terminal-toggle")?.addEventListener("click", openTerminal);
    document.getElementById("term-exit-btn")?.addEventListener("click", closeTerminal);
    document.getElementById("horizon-terminal")?.addEventListener("click", (e) => {
      if (e.target.id === "horizon-terminal") closeTerminal();
    });

    document.querySelectorAll(".term-chip").forEach((chip) => {
      chip.addEventListener("click", () => runCommand(chip.dataset.cmd || "help"));
    });

    const form = document.getElementById("term-form");
    const input = document.getElementById("term-input");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = input.value;
      input.value = "";
      runCommand(val);
    });

    input?.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp" && state.cmdHistory.length) {
        e.preventDefault();
        state.histIdx = Math.max(0, state.histIdx - 1);
        input.value = state.cmdHistory[state.histIdx] || "";
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        state.histIdx = Math.min(state.cmdHistory.length, state.histIdx + 1);
        input.value = state.cmdHistory[state.histIdx] || "";
      } else if (e.key === "Escape") {
        closeTerminal();
      }
    });

    // Bind Slingshot HUD buttons
    document.getElementById("btn-demo-fleet")?.addEventListener("click", () => {
      launchDemoFleet();
      window.bhEngine?.triggerWarp(0.6);
    });
    document.getElementById("btn-clear-orbit")?.addEventListener("click", clearProbes);
    document.getElementById("btn-dive-horizon")?.addEventListener("click", openTerminal);

    // Pointer Interactions: Black Hole Horizon Click + Slingshot Drag-to-Launch!
    let downX = 0, downY = 0, downOnBH = false;

    window.addEventListener("pointerdown", (e) => {
      if (state.terminalOpen || window.innerWidth <= 960) return;
      if (e.target.closest("a, button, input, .carriage, .slingshot-hud, .modal-sheet, .top-hud, .route-hud")) return;

      const bh = window.bhEngine?.getScreenBlackHole?.();
      if (!bh) return;

      downX = e.clientX;
      downY = e.clientY;
      const distBH = Math.hypot(e.clientX - bh.x, e.clientY - bh.y);
      downOnBH = distBH < bh.r * 0.92;

      // In Full Galaxy Overview Mode, dragging outside the Black Hole aims a Slingshot Paper Boat!
      if (window.trainController?.galaxyMode && window.trainController?.overviewMode && !downOnBH) {
        state.aiming = true;
        state.aimStartX = e.clientX;
        state.aimStartY = e.clientY;
        state.aimCurX = e.clientX;
        state.aimCurY = e.clientY;
      }
    });

    window.addEventListener("pointermove", (e) => {
      const bh = window.bhEngine?.getScreenBlackHole?.();
      if (bh && window.trainController?.galaxyMode && !state.terminalOpen) {
        const overUI = e.target.closest("a, button, input, .carriage, .slingshot-hud, .top-hud, .route-hud");
        state.hoveringBH = !overUI && Math.hypot(e.clientX - bh.x, e.clientY - bh.y) < bh.r * 0.92;
        document.body.style.cursor = state.hoveringBH ? "pointer" : "";
      } else {
        state.hoveringBH = false;
      }

      if (state.aiming) {
        state.aimCurX = e.clientX;
        state.aimCurY = e.clientY;
      }
    });

    window.addEventListener("pointerup", (e) => {
      const bh = window.bhEngine?.getScreenBlackHole?.();
      const dragDist = Math.hypot(e.clientX - downX, e.clientY - downY);

      if (downOnBH && dragDist < 12 && window.trainController?.galaxyMode && !state.terminalOpen) {
        downOnBH = false;
        state.aiming = false;
        openTerminal();
        return;
      }
      downOnBH = false;

      if (state.aiming && bh) {
        state.aiming = false;
        if (dragDist >= 10) {
          const px = (state.aimStartX - bh.x) / bh.r;
          const py = (state.aimStartY - bh.y) / bh.r;
          const vx = ((state.aimStartX - state.aimCurX) / bh.r) * 0.42;
          const vy = ((state.aimStartY - state.aimCurY) / bh.r) * 0.42;
          spawnProbe(px, py, vx, vy);
        }
      }
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "`" && !e.target.closest("input, textarea")) {
        e.preventDefault();
        state.terminalOpen ? closeTerminal() : openTerminal();
      } else if (e.key === "Escape" && state.terminalOpen) {
        closeTerminal();
      }
    });

    // 60fps Render Loop for Slingshot Orbits & Event Horizon Lock-On HUD
    function render() {
      ctx.clearRect(0, 0, w, h);

      const isGalaxy = window.trainController?.galaxyMode && w > 960;
      const isOverview = Boolean(window.trainController?.overviewMode);
      const hud = document.getElementById("slingshot-hud");
      if (hud) hud.classList.toggle("visible", Boolean(isGalaxy && isOverview && !state.terminalOpen));

      const bh = window.bhEngine?.getScreenBlackHole?.();
      if (!isGalaxy || !bh) {
        requestAnimationFrame(render);
        return;
      }

      // 1) Event Horizon Hover Lock-On Reticle ("点击潜入五维终端")
      if (state.hoveringBH && !state.terminalOpen) {
        const pulse = 0.78 + 0.22 * Math.sin(performance.now() * 0.006);
        ctx.save();
        ctx.translate(bh.x, bh.y);
        ctx.rotate(performance.now() * 0.0008);
        ctx.beginPath();
        ctx.setLineDash([10, 8]);
        ctx.arc(0, 0, bh.r * 0.88, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 209, 102, ${0.75 * pulse})`;
        ctx.lineWidth = 1.8;
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.font = "600 12px ui-monospace, SFMono-Regular, Menlo, monospace";
        ctx.textAlign = "center";
        ctx.fillStyle = "rgba(18, 8, 16, 0.82)";
        ctx.strokeStyle = "rgba(255, 209, 102, 0.55)";
        ctx.lineWidth = 1;
        const tagW = 248, tagH = 26;
        ctx.beginPath();
        ctx.roundRect(bh.x - tagW / 2, bh.y - 13, tagW, tagH, 13);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = "#ffd166";
        ctx.fillText("🕳️ EVENT HORIZON · 点击潜入视界终端", bh.x, bh.y + 4);
        ctx.restore();
      }

      // 2) Live Slingshot Aiming Vector & 150-Step Relativistic Predicted Curve!
      if (state.aiming) {
        const px0 = (state.aimStartX - bh.x) / bh.r;
        const py0 = (state.aimStartY - bh.y) / bh.r;
        const vx0 = ((state.aimStartX - state.aimCurX) / bh.r) * 0.42;
        const vy0 = ((state.aimStartY - state.aimCurY) / bh.r) * 0.42;
        const pred = predictTrajectory(px0, py0, vx0, vy0, 155);

        const colorMap = {
          orbit: "#46e0b6",     // Green-Jade: Stable Precessing Rosette Orbit!
          slingshot: "#ffd166", // Gold: Hyperbolic Gravity-Assist Slingshot!
          capture: "#ff5d7a",   // Crimson: Event Horizon Capture!
        };
        const labelMap = {
          orbit: "🟢 预测：相对论玫瑰进动环绕轨道",
          slingshot: "⚡ 预测：引力弹弓加速逃逸轨道",
          capture: "🔴 预测：坠入事件视界吞噬",
        };
        const pCol = colorMap[pred.fate];

        // Pull-back bow string
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(state.aimStartX, state.aimStartY);
        ctx.lineTo(state.aimCurX, state.aimCurY);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.45)";
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.stroke();

        // Curved GR predicted path around Gargantua!
        ctx.beginPath();
        pred.pts.forEach((pt, idx) => {
          const sx = bh.x + pt.x * bh.r;
          const sy = bh.y + pt.y * bh.r;
          if (idx === 0) ctx.moveTo(sx, sy);
          else ctx.lineTo(sx, sy);
        });
        ctx.strokeStyle = pCol;
        ctx.lineWidth = 2.1;
        ctx.setLineDash([6, 5]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Fate label near launch point
        ctx.font = "600 12px -apple-system, BlinkMacSystemFont, sans-serif";
        ctx.fillStyle = pCol;
        ctx.fillText(labelMap[pred.fate], state.aimStartX + 14, state.aimStartY - 12);
        ctx.restore();
      }

      // 3) Step & Render Active Origami Star-Boat Probes
      for (let i = state.probes.length - 1; i >= 0; i--) {
        const pb = state.probes[i];
        // 2 substeps per frame for silky smooth relativistic curvature
        let capturedNow = false;
        for (let s = 0; s < 2; s++) {
          const res = stepRelativistic(pb.px, pb.py, pb.vx, pb.vy);
          pb.px = res.px; pb.py = res.py; pb.vx = res.vx; pb.vy = res.vy;
          pb.minR = Math.min(pb.minR, res.r);
          if (res.captured) {
            capturedNow = true;
            break;
          }
        }
        pb.age++;
        pb.trail.push({ x: pb.px, y: pb.py });
        if (pb.trail.length > 115) pb.trail.shift();

        const sx = bh.x + pb.px * bh.r;
        const sy = bh.y + pb.py * bh.r;
        const curR = Math.hypot(pb.px, pb.py);

        // Check Gravitational Slingshot Δv Award when climbing out of close periapsis!
        if (!pb.slingshotAwarded && pb.minR < 2.35 && curR > 2.8) {
          pb.slingshotAwarded = true;
          const vNow = Math.hypot(pb.vx, pb.vy);
          const boostPct = Math.max(12, Math.round(((vNow / pb.v0) - 1) * 100 + (2.4 - pb.minR) * 38));
          if (boostPct > state.maxBoostPct) state.maxBoostPct = boostPct;
          state.banners.push({ x: sx, y: sy, text: `⚡ +${boostPct}% Δv 引力弹弓!`, color: "#ffd166", alpha: 1.0 });
          updateHudStats();
        }

        if (capturedNow) {
          state.capturedCount++;
          state.flares.push({ x: sx, y: sy, r: 6, alpha: 1.0, color: pb.pal.stroke });
          state.banners.push({ x: sx, y: sy, text: `🕳️ ${pb.pal.name} 被视界吞噬!`, color: "#ff6b9d", alpha: 1.0 });
          window.bhEngine?.triggerWarp(0.7);
          state.probes.splice(i, 1);
          updateHudStats();
          continue;
        }

        // Remove probes that escaped far off-screen
        if (curR > 14) {
          state.probes.splice(i, 1);
          updateHudStats();
          continue;
        }

        // Draw luminous orbital ribbon trail
        if (pb.trail.length > 1) {
          ctx.save();
          for (let k = 1; k < pb.trail.length; k++) {
            const p0 = pb.trail[k - 1];
            const p1 = pb.trail[k];
            const frac = k / pb.trail.length;
            ctx.beginPath();
            ctx.moveTo(bh.x + p0.x * bh.r, bh.y + p0.y * bh.r);
            ctx.lineTo(bh.x + p1.x * bh.r, bh.y + p1.y * bh.r);
            ctx.strokeStyle = `rgba(${pb.pal.glow}, ${(frac * 0.78).toFixed(2)})`;
            ctx.lineWidth = 1.0 + frac * 2.2;
            ctx.stroke();
          }
          ctx.restore();
        }

        // Draw Origami Paper Boat oriented along velocity vector (with spaghettification stretch near horizon!)
        const heading = Math.atan2(pb.vy, pb.vx);
        const stretch = curR < 1.5 ? 1 + (1.5 - curR) * 0.85 : 1;
        ctx.save();
        ctx.translate(sx, sy);
        ctx.rotate(heading);
        ctx.scale(stretch, 1 / Math.sqrt(stretch));

        ctx.shadowColor = pb.pal.stroke;
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.moveTo(11, 0);
        ctx.lineTo(-8, -6.5);
        ctx.lineTo(-4, 0);
        ctx.lineTo(-8, 6.5);
        ctx.closePath();
        ctx.fillStyle = pb.pal.fill;
        ctx.fill();
        ctx.strokeStyle = pb.pal.stroke;
        ctx.lineWidth = 1.4;
        ctx.stroke();
        ctx.restore();
      }

      // 4) Accretion Capture Flares & Slingshot Δv Toasts
      for (let i = state.flares.length - 1; i >= 0; i--) {
        const fl = state.flares[i];
        fl.r += 2.6;
        fl.alpha *= 0.91;
        if (fl.alpha < 0.03) { state.flares.splice(i, 1); continue; }
        ctx.beginPath();
        ctx.arc(fl.x, fl.y, fl.r, 0, Math.PI * 2);
        ctx.strokeStyle = fl.color;
        ctx.globalAlpha = fl.alpha;
        ctx.lineWidth = 2.4;
        ctx.stroke();
        ctx.globalAlpha = 1;
      }

      for (let i = state.banners.length - 1; i >= 0; i--) {
        const bn = state.banners[i];
        bn.y -= 0.7;
        bn.alpha *= 0.982;
        if (bn.alpha < 0.04) { state.banners.splice(i, 1); continue; }
        ctx.save();
        ctx.globalAlpha = bn.alpha;
        ctx.font = "700 12px ui-monospace, SFMono-Regular, sans-serif";
        ctx.fillStyle = bn.color;
        ctx.fillText(bn.text, bn.x - 45, bn.y - 10);
        ctx.restore();
      }

      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  }

  window.HorizonLab = {
    init: initHorizonLab,
    openTerminal,
    closeTerminal,
    launchDemoFleet,
    clearProbes,
    isAiming: () => state.aiming,
    isTerminalOpen: () => state.terminalOpen,
  };

  document.addEventListener("DOMContentLoaded", initHorizonLab);
})();
