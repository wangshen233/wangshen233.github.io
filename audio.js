/* ==========================================================================
   FM 233.0 Web Audio Synthesizer & Soundscape Engine (Zero external MP3s)
   3 Channels:
     0: 6番目の駅 · 海列車オルゴール (Nostalgic Music-Box Waltz + Ocean Surf)
     1: 潮騒と夜汽車 · Sea & Rail Lo-Fi (Ocean Waves + Distant Train Clatter + Pad)
     2: 茜色の風鈴 · Sunset Wind Chimes (Japanese In-Sen Pentatonic Furin + Pad)
   ========================================================================== */

class FM233Radio {
  constructor(onTick) {
    this.ctx = null;
    this.master = null;
    this.analyser = null;
    this.playing = false;
    this.channel = 0;
    this.volume = 0.55;
    this.timers = [];
    this.activeNodes = [];
    this.rafId = null;
    this.onTick = onTick;

    this.stations = [
      { freq: "FM 233.0", name: "♪ 海列車オルゴール · 第六站", sub: "八音盒圆舞曲与轻柔海浪" },
      { freq: "FM 233.4", name: "♪ 潮騒と夜汽車 · 深夜车厢", sub: "海浪白噪音与远方铁道节拍" },
      { freq: "FM 233.8", name: "♪ 茜色の風鈴 · 站台晚风", sub: "日式五声音阶风铃与暮色和弦" },
    ];
  }

  ensureContext() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.master.gain.value = this.volume;

      // Stereo echo bus for dreamy warmth
      this.delay = this.ctx.createDelay(1.0);
      this.delay.delayTime.value = 0.36;
      this.feedback = this.ctx.createGain();
      this.feedback.gain.value = 0.28;
      this.delayFilter = this.ctx.createBiquadFilter();
      this.delayFilter.type = "lowpass";
      this.delayFilter.frequency.value = 2100;

      this.delay.connect(this.delayFilter);
      this.delayFilter.connect(this.feedback);
      this.feedback.connect(this.delay);
      this.delay.connect(this.master);

      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 64;
      this.master.connect(this.analyser);
      this.analyser.connect(this.ctx.destination);
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  setVolume(val) {
    this.volume = val;
    if (this.master && this.ctx) {
      this.master.gain.setTargetAtTime(val, this.ctx.currentTime, 0.05);
    }
  }

  toggle() {
    if (this.playing) {
      this.stop();
    } else {
      this.start();
    }
    return this.playing;
  }

  selectStation(idx) {
    this.channel = idx;
    if (this.playing) {
      this.stopVoices();
      this.startVoices();
    }
  }

  start() {
    this.ensureContext();
    this.playing = true;
    this.startVoices();
    this.loopVisualizer();
  }

  stop() {
    this.playing = false;
    this.stopVoices();
    if (this.rafId) cancelAnimationFrame(this.rafId);
    if (this.onTick) this.onTick(new Uint8Array(16));
  }

  stopVoices() {
    this.timers.forEach((id) => clearInterval(id));
    this.timers = [];
    this.activeNodes.forEach((n) => {
      try { n.stop && n.stop(); } catch (_) {}
      try { n.disconnect && n.disconnect(); } catch (_) {}
    });
    this.activeNodes = [];
  }

  createOceanSurf(gainAmount = 0.08) {
    const bufferSize = this.ctx.sampleRate * 3;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.997 * b0 + white * 0.029;
      b1 = 0.985 * b1 + white * 0.032;
      b2 = 0.950 * b2 + white * 0.048;
      data[i] = (b0 + b1 + b2) * 0.35;
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 460;

    // Slow ocean wave swell LFO
    const lfo = this.ctx.createOscillator();
    lfo.frequency.value = 0.12;
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.value = 240;
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);

    const g = this.ctx.createGain();
    g.gain.value = gainAmount;
    noise.connect(filter);
    filter.connect(g);
    g.connect(this.master);

    noise.start();
    lfo.start();
    this.activeNodes.push(noise, lfo, g);
  }

  playBellNote(freq, dur = 1.6, vel = 0.13, delayOffset = 0) {
    if (!this.playing || !this.ctx) return;
    const t0 = this.ctx.currentTime + delayOffset;
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    osc1.type = "sine";
    osc2.type = "triangle";
    osc1.frequency.setValueAtTime(freq, t0);
    osc2.frequency.setValueAtTime(freq * 2, t0);

    const env = this.ctx.createGain();
    env.gain.setValueAtTime(0.0001, t0);
    env.gain.linearRampToValueAtTime(vel, t0 + 0.018);
    env.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);

    const subMix = this.ctx.createGain();
    subMix.gain.value = 0.18;
    osc2.connect(subMix);

    osc1.connect(env);
    subMix.connect(env);
    env.connect(this.master);
    env.connect(this.delay);

    osc1.start(t0);
    osc2.start(t0);
    osc1.stop(t0 + dur + 0.05);
    osc2.stop(t0 + dur + 0.05);
  }

  playWarmPad(freqs, dur = 3.8, vel = 0.045) {
    if (!this.playing || !this.ctx) return;
    const t0 = this.ctx.currentTime;
    freqs.forEach((f) => {
      const osc = this.ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = f;
      const env = this.ctx.createGain();
      env.gain.setValueAtTime(0.0001, t0);
      env.gain.linearRampToValueAtTime(vel, t0 + 0.9);
      env.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      osc.connect(env);
      env.connect(this.master);
      osc.start(t0);
      osc.stop(t0 + dur + 0.1);
    });
  }

  playRailClick() {
    if (!this.playing || !this.ctx) return;
    [0, 0.21].forEach((dt, idx) => {
      const t0 = this.ctx.currentTime + dt;
      const osc = this.ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.setValueAtTime(idx === 0 ? 78 : 64, t0);
      osc.frequency.exponentialRampToValueAtTime(34, t0 + 0.09);
      const g = this.ctx.createGain();
      g.gain.setValueAtTime(0.08, t0);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.1);
      osc.connect(g);
      g.connect(this.master);
      osc.start(t0);
      osc.stop(t0 + 0.12);
    });
  }

  startVoices() {
    if (this.channel === 0) {
      // Nostalgic Sea-Train Music Box (Fmaj7 -> G6 -> Em7 -> Am9)
      this.createOceanSurf(0.055);
      const progression = [
        { bass: 174.61, notes: [349.23, 440.0, 523.25, 659.25, 587.33, 523.25] },
        { bass: 196.00, notes: [392.00, 493.88, 587.33, 659.25, 783.99, 659.25] },
        { bass: 164.81, notes: [329.63, 392.00, 493.88, 587.33, 659.25, 493.88] },
        { bass: 220.00, notes: [440.00, 523.25, 659.25, 783.99, 659.25, 523.25] },
      ];
      let step = 0;
      const runBar = () => {
        if (!this.playing) return;
        const bar = progression[step % progression.length];
        this.playWarmPad([bar.bass, bar.notes[0]], 3.4, 0.04);
        bar.notes.forEach((n, i) => {
          this.playBellNote(n, 1.75, i === 0 ? 0.13 : 0.095, i * 0.52);
        });
        step++;
      };
      runBar();
      this.timers.push(setInterval(runBar, 3150));
    } else if (this.channel === 1) {
      // Ocean Surf + Distant Train Rail Clatter + Ambient Chords
      this.createOceanSurf(0.12);
      const chords = [
        [220.0, 261.63, 329.63, 392.0],
        [174.61, 220.0, 261.63, 329.63],
        [196.0, 246.94, 293.66, 392.0],
      ];
      let idx = 0;
      this.playWarmPad(chords[0], 4.6, 0.045);
      this.timers.push(setInterval(() => this.playRailClick(), 2400));
      this.timers.push(setInterval(() => {
        idx++;
        this.playWarmPad(chords[idx % chords.length], 4.6, 0.045);
      }, 4500));
    } else {
      // Sunset Furin (Japanese Pentatonic Wind Chimes)
      this.createOceanSurf(0.05);
      const scale = [587.33, 659.25, 783.99, 880.0, 1046.5, 1174.66, 1318.51];
      this.playWarmPad([196.0, 293.66, 392.0], 5.0, 0.038);
      this.timers.push(setInterval(() => {
        const count = 1 + Math.floor(Math.random() * 3);
        for (let i = 0; i < count; i++) {
          const f = scale[Math.floor(Math.random() * scale.length)];
          this.playBellNote(f, 2.2, 0.08, i * (0.14 + Math.random() * 0.22));
        }
      }, 1800));
      this.timers.push(setInterval(() => {
        this.playWarmPad([174.61, 261.63, 329.63], 5.0, 0.035);
      }, 5200));
    }
  }

  loopVisualizer() {
    if (!this.playing || !this.analyser) return;
    const bins = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(bins);
    if (this.onTick) this.onTick(bins);
    this.rafId = requestAnimationFrame(() => this.loopVisualizer());
  }
}

window.FM233Radio = FM233Radio;
