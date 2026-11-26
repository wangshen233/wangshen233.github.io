/* ==========================================================================
   Station 233 · Interactive Firefly Canvas, Live GitHub Sync & Bunkobon Notes
   ========================================================================== */

const LOGIN = "wangshen233";

const FALLBACK_NOTES = [
  {
    tag: "小站手记",
    date: "2026.11.26",
    title: "Station 233 · 把个人小站重新搭起来",
    summary: "之前 wangshen233.github.io 一直只躺着一行测试 HTML，趁着重做 GitHub 主页，把这座落日晚霞海列小站也正式点亮了。",
    body: `
      <p>如果你是从我的 GitHub 主页点过来的，欢迎来到 <strong>Station 233</strong>。</p>
      <p>以前这个域名下只有一行随手写的 <code>&lt;h1&gt;我的github.io网站&lt;/h1&gt;</code>，甚至连 Pages 开关都没打开。这次干脆把主页上的「千寻落日海列」世界观延伸成了一座真正能交互的小站：</p>
      <ul>
        <li>右上角的 <strong>FM 233.0 黑胶唱机</strong> 不是摆设——点一下唱针或播放键，浏览器会通过 Web Audio 实时合成八音盒圆舞曲、海浪白噪音与夏夜风铃。</li>
        <li>下方的仓库列表与统计数字直接对接 GitHub API，每次我开源新工具都会自动同步过来。</li>
        <li>底部的晚霞海面与 GitHub 主页共用同一个 <strong>纸船留言池</strong>，你在任意一边放飞的纸船，两边都能看见。</li>
      </ul>
      <p>车票长期有效，常来坐坐。</p>
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
    title: "如何用 GitHub Issues 直接给这座小站写新随笔",
    summary: "不需要本地编译构建：在 wangshen233.github.io 仓库新建带 blog 标签的 Issue，前端会自动拉取并排版成文库本文章。",
    body: `
      <p>为了省去每次写随笔都要本地打包部署的麻烦，这个「车窗随笔」栏目内置了 GitHub Issues 动态拉取支持：</p>
      <ul>
        <li>只要由 <code>@wangshen233</code> 本人在 <code>wangshen233/wangshen233.github.io</code> 仓库发布带有 <code>blog</code> 标签（或标题以 <code>[随笔]</code> 开头）的公开 Issue，页面加载时就会自动抓取并置顶展示。</li>
        <li>支持常用 Markdown 段落、代码行与列表排版，在手机上也能随时记录灵感。</li>
      </ul>
    `,
  },
];

const FALLBACK_REPOS = [
  { name: "turb-gpt-free-register-oss-20260928", description: "Sanitized open-source release of turb-gpt-free-register", language: "Python", stargazers_count: 95, forks_count: 82, html_url: "https://github.com/wangshen233/turb-gpt-free-register-oss-20260928" },
  { name: "appleservices-family-private", description: "AppleServices workspace with iCloud activation, purchase, region and Family Sharing workflows", language: "Go", stargazers_count: 89, forks_count: 130, html_url: "https://github.com/wangshen233/appleservices-family-private" },
  { name: "upi-zero-link", description: "India Rs.0 UPI Autopay mandate link extractor — protocol-level, no browser", language: "Python", stargazers_count: 68, forks_count: 61, html_url: "https://github.com/wangshen233/upi-zero-link" },
  { name: "sentinel-rs", description: "Sentinel token 的 Rust 重实现 + 通用邮箱接口注册流程", language: "Rust", stargazers_count: 13, forks_count: 16, html_url: "https://github.com/wangshen233/sentinel-rs" },
  { name: "turb-register-public", description: "Turb Register public edition: account management, generic IMAP/API OTP, proxy pools and AI workspace", language: "Python", stargazers_count: 12, forks_count: 12, html_url: "https://github.com/wangshen233/turb-register-public" },
  { name: "codex-oauth-helper", description: "Standalone Codex OAuth login, refresh token, and CPA JSON helper", language: "Python", stargazers_count: 5, forks_count: 2, html_url: "https://github.com/wangshen233/codex-oauth-helper" },
];

const FALLBACK_BOATS = [
  { user: "wangshen233", avatar: "./assets/avatar.jpg", msg: "座位 233 常年留空，点下方折一艘纸船放进晚霞吧～" },
  { user: "station-233", avatar: "./assets/avatar.jpg", msg: "暮色海列全天候供应热美式，祝路过的你今天也没有 bug" },
  { user: "sunset-fm", avatar: "./assets/avatar.jpg", msg: "茜色の海を渡る風のように、好奇心のその先へ。" },
];

/* 1. Theme Switcher */
function initTheme() {
  const saved = localStorage.getItem("station233-theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const initial = saved || (prefersLight ? "light" : "dark");
  applyTheme(initial);

  document.getElementById("theme-toggle").addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("station233-theme", next);
  });
}

function applyTheme(mode) {
  document.documentElement.setAttribute("data-theme", mode);
  const btn = document.getElementById("theme-toggle");
  if (btn) {
    btn.textContent = mode === "dark" ? "☀️ 樱雪浅色" : "🌙 茜色暮夜";
  }
}

/* 2. Ambient Sunset Fireflies & Click Ripples Canvas */
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

  for (let i = 0; i < 34; i++) {
    motes.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 1.1 + Math.random() * 2.1,
      vx: -0.18 + Math.random() * 0.36,
      vy: -0.25 - Math.random() * 0.35,
      phase: Math.random() * Math.PI * 2,
      hue: Math.random() > 0.45 ? "255, 138, 168" : "255, 186, 130",
    });
  }

  window.addEventListener("pointermove", (e) => {
    if (Math.random() < 0.28 && motes.length < 62) {
      motes.push({
        x: e.clientX + (-8 + Math.random() * 16),
        y: e.clientY + (-8 + Math.random() * 16),
        r: 1.4 + Math.random() * 1.8,
        vx: -0.3 + Math.random() * 0.6,
        vy: -0.5 - Math.random() * 0.4,
        phase: 0,
        ttl: 90,
        hue: "255, 150, 175",
      });
    }
  });

  window.addEventListener("click", (e) => {
    ripples.push({ x: e.clientX, y: e.clientY, r: 4, alpha: 0.55 });
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
        if (m.y < -10) m.y = h + 10;
        if (m.x < -10) m.x = w + 10;
        if (m.x > w + 10) m.x = -10;
      }
      const alpha = (0.25 + 0.45 * Math.sin(m.phase)) * (m.ttl ? m.ttl / 90 : 1);
      ctx.beginPath();
      ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${m.hue}, ${Math.max(0.05, alpha)})`;
      ctx.fill();
    }

    for (let i = ripples.length - 1; i >= 0; i--) {
      const rp = ripples[i];
      rp.r += 1.8;
      rp.alpha *= 0.95;
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

/* 3. Hero Gentle Tilt Parallax */
function initHeroParallax() {
  const stage = document.getElementById("hero-stage");
  if (!stage) return;
  stage.addEventListener("pointermove", (e) => {
    const rect = stage.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    stage.style.transform = `perspective(1200px) rotateY(${nx * 2.4}deg) rotateX(${-ny * 2.4}deg)`;
  });
  stage.addEventListener("pointerleave", () => {
    stage.style.transform = "none";
  });
}

/* 4. FM 233.0 Vinyl Radio Controls */
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
      const h = radio.playing ? Math.max(4, Math.min(24, (v / 255) * 26 + 3)) : 4;
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
    playBtn.textContent = radio.playing ? "⏸ 暂停电台" : "▶ 落下唱针";
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

/* 5. Live GitHub Repositories & Telemetry */
let allRepos = [...FALLBACK_REPOS];
let currentFilter = "All";

function renderRepos() {
  const grid = document.getElementById("repo-grid");
  const list = allRepos.filter((r) => currentFilter === "All" || (r.language || "Protocol") === currentFilter);
  grid.innerHTML = list.map((r) => {
    const lang = escapeHtml(r.language || "Protocol");
    const desc = escapeHtml(r.description || "一个小巧安静的实验仓库。");
    return `
      <a class="repo-mini" href="${r.html_url}" target="_blank" rel="noopener">
        <div>
          <h4><span>${escapeHtml(r.name)}</span><span class="sunset-text">↗</span></h4>
          <p>${desc}</p>
        </div>
        <div class="repo-mini-foot mono">
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
    document.getElementById("stat-followers").textContent = user.followers ?? 53;
    document.getElementById("stat-repos").textContent = user.public_repos ?? repos.length;

    // Update flagship cinema cards
    const byName = Object.fromEntries(repos.map((r) => [r.name, r]));
    document.querySelectorAll("[data-repo-metric]").forEach((el) => {
      const repo = byName[el.getAttribute("data-repo-metric")];
      if (repo) {
        el.textContent = `★ ${repo.stargazers_count} · ${repo.forks_count} forks`;
      }
    });

    const owned = repos
      .filter((r) => !r.fork && r.name !== LOGIN)
      .sort((a, b) => (b.stargazers_count - a.stargazers_count) || (b.forks_count - a.forks_count));
    if (owned.length) {
      allRepos = owned;
      renderRepos();
    }
  } catch (_) {
    // Offline or rate-limited: fallback data already rendered cleanly
  }
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

/* 6. Bunkobon Notes + Live GitHub Issue Blog */
let notesList = [...FALLBACK_NOTES];

function renderNotes() {
  const grid = document.getElementById("notes-grid");
  grid.innerHTML = notesList.map((n, idx) => `
    <article class="note-card" data-note-idx="${idx}">
      <div>
        <div class="note-tag-row mono">
          <span class="sunset-text"># ${escapeHtml(n.tag)}</span>
          <span>${escapeHtml(n.date)}</span>
        </div>
        <h3 class="serif-jp">${escapeHtml(n.title)}</h3>
        <p>${escapeHtml(n.summary)}</p>
      </div>
      <span class="note-read-more sunset-text">展开阅读 →</span>
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
          summary: plain.slice(0, 66) + (plain.length > 66 ? "…" : ""),
          body: simpleMarkdown(it.body || ""),
        };
      });
      notesList = [...liveNotes, ...FALLBACK_NOTES];
      renderNotes();
    }
  } catch (_) {}
}

/* 7. Live Paper Boats Guestbook (Shared with wangshen233/wangshen233 Issues!) */
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
        <ellipse cx="30" cy="23" rx="24" ry="3.2" fill="rgba(255,130,164,0.24)"/>
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
  initTheme();
  initCanvas();
  initHeroParallax();
  initRadio();
  initRepoFilters();
  syncGitHub();
  syncIssueNotes();
  syncPaperBoats();

  const modal = document.getElementById("note-modal");
  document.getElementById("modal-close").addEventListener("click", () => modal.classList.remove("open"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("open");
  });
});
