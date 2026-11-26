/* ==========================================================================
   Gargantua Relativistic Black Hole & 4-Arm Spiral Galaxy Engine (galaxy-bh.js)
   - True Pitch-Black Event Horizon Shadow + Blazing Photon Ring
   - Relativistic Upper & Lower Gravitationally Lensed Light Arches
   - Swirling Doppler Accretion Disk + Smooth Pinpoint 4-Arm Spiral Galaxy
   - STRICTLY 0% DARK BLUE! Deep Velvet-Obsidian × Gold × Coral-Rose × Orchid
   ========================================================================== */

class BlackHoleGalaxyEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.rot = 0;
    this.warp = 0;
    this.overview = 0;
    this.targetOverview = 0;
    this.dive = 0;
    this.targetDive = 0;
    this.isLight = false;
    this.mouseX = 0.5;
    this.mouseY = 0.5;
    this.startTime = performance.now();

    this.gl = null;
    this.initWebGL();
    if (!this.gl) {
      this.initFallback2D();
    }

    this.resize();
    window.addEventListener("resize", () => this.resize());
    window.addEventListener("pointermove", (e) => {
      this.mouseX = e.clientX / Math.max(1, window.innerWidth);
      this.mouseY = 1.0 - e.clientY / Math.max(1, window.innerHeight);
    });
  }

  setOrbitState({ angleDeg = 0, warp = 0, overview = false, isLight = false }) {
    this.rot = (angleDeg * Math.PI) / 180;
    this.warp = Math.max(this.warp, warp);
    this.targetOverview = overview ? 1.0 : 0.0;
    this.isLight = isLight;
  }

  triggerWarp(strength = 1.0) {
    this.warp = Math.min(1.6, Math.max(this.warp, strength));
  }

  setDive(active) {
    this.targetDive = active ? 1.0 : 0.0;
    this.triggerWarp(1.3);
  }

  getScreenBlackHole() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const ov = this.overview;
    const cx = vw * (0.5 + (this.mouseX - 0.5) * 0.02);
    const cy = vh * (1.0 - ((0.725 * (1 - ov) + 0.52 * ov) + (this.mouseY - 0.5) * 0.015));
    const zoom = 1.55 * (1 - ov) + 1.22 * ov;
    const shadowR = (Math.min(vw, vh) / zoom) * 0.255;
    return { x: cx, y: cy, r: shadowR };
  }

  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.4);
    this.w = this.canvas.width = Math.max(1, Math.floor(window.innerWidth * dpr));
    this.h = this.canvas.height = Math.max(1, Math.floor(window.innerHeight * dpr));
    if (this.gl) {
      this.gl.viewport(0, 0, this.w, this.h);
    }
  }

  initWebGL() {
    const gl = this.canvas.getContext("webgl", {
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: "high-performance",
    });
    if (!gl) return;

    const vsSrc = `
      attribute vec2 a_pos;
      void main() {
        gl_Position = vec4(a_pos, 0.0, 1.0);
      }
    `;

    const fsSrc = `
      precision highp float;
      uniform vec2 u_res;
      uniform float u_time;
      uniform float u_rot;
      uniform float u_warp;
      uniform float u_overview;
      uniform float u_dive;
      uniform float u_light;
      uniform vec2 u_mouse;

      float hash(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
      }

      vec2 hash2(vec2 p) {
        return vec2(hash(p), hash(p + vec2(37.2, 19.8)));
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
          mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
          f.y
        );
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        mat2 m = mat2(0.8, 0.6, -0.6, 0.8);
        for (int i = 0; i < 4; i++) {
          v += a * noise(p);
          p = m * p * 2.05 + vec2(1.9, 7.3);
          a *= 0.5;
        }
        return v;
      }

      // Smooth circular pinpoint star layer (ZERO blocky grid squares!)
      float starLayer(vec2 p, float density) {
        vec2 gp = p * density;
        vec2 id = floor(gp);
        vec2 gv = fract(gp) - 0.5;
        vec2 rnd = hash2(id) - 0.5;
        float d = length(gv - rnd * 0.72);
        float bright = step(0.86, hash(id + vec2(11.3, 5.7)));
        return bright * smoothstep(0.11, 0.0, d);
      }

      void main() {
        // High-center in Dock View (y=0.73 -> 27vh from top), Dead-center in Overview (y=0.52)
        vec2 bhCenter = vec2(
          0.5 + (u_mouse.x - 0.5) * 0.02,
          mix(mix(0.725, 0.52, u_overview), 0.5, u_dive) + (u_mouse.y - 0.5) * 0.015
        );
        float zoom = mix(mix(1.55, 1.22, u_overview), 0.38, u_dive);
        vec2 uv = (gl_FragCoord.xy - u_res * bhCenter) / min(u_res.x, u_res.y) * zoom;

        // Cinematic Gargantua -7 deg roll
        float ca = cos(-0.12), sa = sin(-0.12);
        uv = mat2(ca, -sa, sa, ca) * uv;

        // Camera inclined 10 deg above equatorial plane for iconic Gargantua upper & lower lensing arches!
        float camPitch = mix(0.165, 0.195, u_overview);
        vec3 ro = vec3(0.0, sin(camPitch) * 3.1, -cos(camPitch) * 3.1);
        vec3 fwd = normalize(-ro);
        vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), fwd));
        vec3 up = cross(fwd, right);
        vec3 rd = normalize(uv.x * right + uv.y * up + 1.75 * fwd);

        // Exact Schwarzschild Null-Geodesic Raymarch: acc = -1.5 * ehR * h^2 * pos / r^5
        vec3 pos = ro;
        vec3 vel = rd;
        vec3 hVec = cross(pos, vel);
        float h2 = dot(hVec, hVec);

        float ehR = 0.165;
        float ehR2 = ehR * ehR;
        float grCoeff = 1.5 * ehR; // Exact GR photon-sphere coefficient (r_ph = 1.5 * r_s)!
        bool hitHorizon = false;
        float minR = 100.0;

        vec3 diskAccum = vec3(0.0);
        float diskTrans = 1.0;

        for (int i = 0; i < 76; i++) {
          vec3 prevPos = pos;
          float r2 = dot(pos, pos);
          float r = sqrt(r2);
          minR = min(minR, r);

          if (r2 < ehR2) {
            hitHorizon = true;
            break;
          }

          float dt = clamp(0.022 + 0.068 * (r - ehR), 0.016, 0.16);
          vec3 acc = -grCoeff * h2 * pos / (r2 * r2 * r + 1e-5);
          vel = normalize(vel + acc * dt);
          pos += vel * dt;

          // Equatorial Plane Crossing (y = 0): produces Front Disk + Upper Lensed Arch + Lower Lensed Ring!
          if (prevPos.y * pos.y <= 0.0) {
            float frac = abs(prevPos.y) / (abs(prevPos.y) + abs(pos.y) + 1e-5);
            vec3 hit = mix(prevPos, pos, frac);
            float dR = length(hit.xz);
            float phi = atan(hit.z, hit.x);

            // A) Inner Relativistic Gargantua Accretion Disk (0.26 < dR < 1.18)
            if (dR > 0.26 && dR < 1.18) {
              float normR = (dR - 0.26) / (1.18 - 0.26);
              float radialEnv = smoothstep(0.0, 0.08, normR) * pow(1.0 - normR, 1.45);

              float spin = u_time * (2.6 + u_warp * 3.2) + u_rot * 1.6;
              float shear = phi * 2.0 + 14.5 / sqrt(dR) - spin;
              float rings = 0.52 + 0.48 * sin(dR * 58.0 - u_time * 3.8 + fbm(vec2(dR * 10.0, phi * 2.0)) * 3.5);
              float plasma = fbm(vec2(dR * 12.0, shear * 0.7));
              float emit = radialEnv * (0.42 + 0.92 * plasma) * (0.58 + 0.52 * rings);

              // Relativistic Doppler Beaming (approaching left blazes white-gold, receding right glows crimson-rose)
              float doppler = clamp(1.0 - 0.54 * (hit.x / (dR + 0.001)), 0.38, 1.72);
              emit *= doppler * doppler * (1.38 + u_warp * 0.6);

              vec3 cHot = vec3(1.0, 0.97, 0.88);
              vec3 cGold = vec3(1.0, 0.72, 0.26);
              vec3 cCoral = vec3(0.98, 0.32, 0.44);
              vec3 cOrchid = vec3(0.72, 0.22, 0.78);

              vec3 dCol = mix(cHot, cGold, smoothstep(0.0, 0.30, normR));
              dCol = mix(dCol, cCoral, smoothstep(0.28, 0.70, normR));
              dCol = mix(dCol, cOrchid, smoothstep(0.66, 1.0, normR));
              dCol = mix(dCol, cHot, clamp((doppler - 1.12) * 0.75, 0.0, 0.7));

              float alpha = clamp(emit * 0.78, 0.0, 0.96);
              diskAccum += dCol * emit * diskTrans;
              diskTrans *= (1.0 - alpha * 0.72);
            }

            // B) Outer 4-Arm Swirling Spiral Galaxy (1.05 < dR < 3.4)
            if (dR > 1.02 && dR < 3.45) {
              float gNorm = (dR - 1.02) / (3.45 - 1.02);
              float galEnv = smoothstep(0.0, 0.14, gNorm) * smoothstep(1.0, 0.18, gNorm);

              float armPhase = phi * 4.0 + 6.8 * log(dR + 0.12) - u_time * 0.34 - u_rot * 2.0;
              float arm = pow(0.5 + 0.5 * cos(armPhase), 2.4);
              float dust = fbm(hit.xz * 2.4 + vec2(cos(u_rot * 0.2), sin(u_rot * 0.2)));
              float galStars = starLayer(hit.xz + vec2(u_time * 0.01), 15.0) * (0.45 + 0.95 * arm);

              float galEmit = galEnv * (arm * (0.42 + 0.92 * dust) + 0.14 * dust + galStars * 1.45);

              vec3 armRose = vec3(0.98, 0.36, 0.58);
              vec3 armGold = vec3(1.0, 0.78, 0.36);
              vec3 armOrchid = vec3(0.76, 0.36, 0.98);
              vec3 armJade = vec3(0.25, 0.90, 0.72);

              float hMix = 0.5 + 0.5 * sin(phi * 2.0 - dR * 2.1 + u_time * 0.22);
              vec3 gCol = mix(armRose, armOrchid, hMix);
              gCol = mix(gCol, armGold, arm * 0.55);
              gCol += armJade * pow(dust, 3.0) * 0.45;

              diskAccum += gCol * galEmit * 0.82 * diskTrans;
            }
          }

          if (r > 3.8) break;
        }

        // Deep Space Background (Rich Dark Velvet-Obsidian — high contrast for glowing Black Hole, 0% Dark Blue!)
        vec3 bgDark = mix(vec3(0.018, 0.008, 0.018), vec3(0.055, 0.018, 0.045), clamp(vel.y * 0.5 + 0.5, 0.0, 1.0));
        vec3 bgLight = mix(vec3(0.99, 0.95, 0.97), vec3(0.97, 0.87, 0.91), clamp(vel.y * 0.5 + 0.5, 0.0, 1.0));
        vec3 col = mix(bgDark, bgLight, u_light);

        if (!hitHorizon) {
          // Lensed cosmic nebula & crisp pinpoint stars ONLY outside the Event Horizon!
          vec2 skyUV = vec2(atan(vel.z, vel.x), asin(clamp(vel.y, -1.0, 1.0)));
          float neb = fbm(skyUV * 2.8 + vec2(u_rot * 0.12, 0.0));
          vec3 nebCol = mix(vec3(0.48, 0.12, 0.32), vec3(0.82, 0.38, 0.22), neb);
          col += nebCol * pow(neb, 2.5) * (u_light > 0.5 ? 0.08 : 0.22) * diskTrans;

          float st1 = starLayer(skyUV, 26.0);
          float st2 = starLayer(skyUV + vec2(4.2, 1.7), 48.0) * 0.65;
          float twinkle = 0.7 + 0.3 * sin(u_time * 3.2 + skyUV.x * 30.0);
          col += vec3(1.0, 0.92, 0.84) * (st1 + st2) * twinkle * (u_light > 0.5 ? 0.2 : 0.9) * diskTrans;

          // Blazing Relativistic Photon Ring right at the Photon Sphere (r_ph = 1.5 * ehR)!
          float photonDist = abs(minR - ehR * 1.52);
          float photonRing = exp(-photonDist * 75.0) * (1.35 + u_warp * 0.8);
          float outerCorona = exp(-max(0.0, minR - ehR * 1.5) * 9.0) * 0.28;
          col += vec3(1.0, 0.92, 0.72) * photonRing;
          col += vec3(0.96, 0.38, 0.54) * outerCorona;
        } else {
          // PURE PITCH-BLACK EVENT HORIZON SHADOW! (Only front-side diskAccum in front of BH can cross over it!)
          col = mix(vec3(0.004, 0.001, 0.005), vec3(0.08, 0.025, 0.065), u_light);
        }

        // Composite Front/Lensed Accretion Disk & Galaxy Arms
        col += diskAccum;

        // Subtle Warp Streak Flash when jumping stations
        if (u_warp > 0.01) {
          float ang = atan(uv.y, uv.x);
          float streak = pow(hash(vec2(floor(ang * 48.0), 2.0)), 7.0);
          col += vec3(1.0, 0.82, 0.60) * streak * u_warp * smoothstep(0.22, 0.9, length(uv)) * 0.4;
        }

        // 5D Tesseract Light-Chords when plunged inside the Event Horizon (u_dive > 0)!
        if (u_dive > 0.02) {
          vec2 tUV = (gl_FragCoord.xy - 0.5 * u_res) / min(u_res.x, u_res.y);
          float gx = pow(abs(sin(tUV.x * 26.0 + u_time * 0.6)), 24.0);
          float gy = pow(abs(sin(tUV.y * 26.0 - u_time * 0.4)), 24.0);
          float diag = pow(abs(sin((tUV.x + tUV.y) * 18.0 + u_time * 0.8)), 30.0);
          vec3 tessCol = vec3(1.0, 0.78, 0.38) * gx + vec3(0.98, 0.40, 0.60) * gy + vec3(0.28, 0.88, 0.70) * diag;
          col = mix(col, col * 0.35 + tessCol * 0.55, u_dive * 0.85);
        }

        // Smooth Filmic Tone Mapping
        col = col / (1.0 + col * 0.28);
        col = pow(max(col, 0.0), vec3(0.95));

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    const compile = (type, src) => {
      const sh = gl.createShader(type);
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        console.warn("Shader error:", gl.getShaderInfoLog(sh));
        gl.deleteShader(sh);
        return null;
      }
      return sh;
    };

    const vs = compile(gl.VERTEX_SHADER, vsSrc);
    const fs = compile(gl.FRAGMENT_SHADER, fsSrc);
    if (!vs || !fs) return;

    const prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;

    gl.useProgram(prog);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);

    const loc = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    this.gl = gl;
    this.prog = prog;
    this.u = {
      res: gl.getUniformLocation(prog, "u_res"),
      time: gl.getUniformLocation(prog, "u_time"),
      rot: gl.getUniformLocation(prog, "u_rot"),
      warp: gl.getUniformLocation(prog, "u_warp"),
      overview: gl.getUniformLocation(prog, "u_overview"),
      dive: gl.getUniformLocation(prog, "u_dive"),
      light: gl.getUniformLocation(prog, "u_light"),
      mouse: gl.getUniformLocation(prog, "u_mouse"),
    };
  }

  initFallback2D() {
    this.ctx2d = this.canvas.getContext("2d");
  }

  renderFrame() {
    const t = (performance.now() - this.startTime) * 0.001;
    this.overview += (this.targetOverview - this.overview) * 0.085;
    this.dive += (this.targetDive - this.dive) * 0.085;
    this.warp *= 0.93;

    if (this.gl) {
      const gl = this.gl;
      gl.uniform2f(this.u.res, this.w, this.h);
      gl.uniform1f(this.u.time, t);
      gl.uniform1f(this.u.rot, this.rot);
      gl.uniform1f(this.u.warp, this.warp);
      gl.uniform1f(this.u.overview, this.overview);
      gl.uniform1f(this.u.dive, this.dive);
      gl.uniform1f(this.u.light, this.isLight ? 1.0 : 0.0);
      gl.uniform2f(this.u.mouse, this.mouseX, this.mouseY);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    }
  }
}

window.BlackHoleGalaxyEngine = BlackHoleGalaxyEngine;
