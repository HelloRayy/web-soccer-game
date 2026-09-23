/**
 * Goal Clash - Web Audio API Procedural Synthesizer Audio Engine
 * Zero external asset dependency, 100% realtime sound effects & ambient sound synthesis.
 */

class AudioService {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private crowdNode: AudioNode | null = null;
  private crowdGain: GainNode | null = null;
  private menuBGMInterval: number | null = null;
  private isMenuBGMPlaying: boolean = false;

  constructor() {
    // Lazy AudioContext initialization on first user gesture
    if (typeof window !== 'undefined') {
      const handleUserGesture = () => {
        this.initAudioContext();
        window.removeEventListener('click', handleUserGesture);
        window.removeEventListener('keydown', handleUserGesture);
        window.removeEventListener('touchstart', handleUserGesture);
      };
      window.addEventListener('click', handleUserGesture);
      window.addEventListener('keydown', handleUserGesture);
      window.addEventListener('touchstart', handleUserGesture);
    }
  }

  private initAudioContext(): AudioContext | null {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtxClass) {
        this.ctx = new AudioCtxClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  private pinkNoiseBuffer: AudioBuffer | null = null;
  private crowdFilter: BiquadFilterNode | null = null;

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (this.isMuted) {
      this.stopCrowdAmbience();
      this.stopMenuBGM();
    }
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  /**
   * 1. Kick Ball Sound Effect (Pass / Shoot / Chip)
   */
  public playKickSFX(type: 'pass' | 'shoot' | 'chip' = 'pass') {
    if (this.isMuted) return;
    const ctx = this.initAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // Pitch & Energy parameters based on kick type
    const startFreq = type === 'shoot' ? 200 : type === 'chip' ? 240 : 140;
    const endFreq = type === 'shoot' ? 30 : type === 'chip' ? 50 : 35;
    const duration = type === 'shoot' ? 0.18 : 0.12;

    // Low Frequency Oscillator Sweep (Punchy Impact)
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(startFreq, now);
    osc.frequency.exponentialRampToValueAtTime(endFreq, now + duration);

    // Boost volume gain to 0.95 for thick, solid punch
    oscGain.gain.setValueAtTime(0.95, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc.connect(oscGain);
    oscGain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + duration);

    // Punchy 90Hz Thud Transient for shoe-on-ball impact
    const thudOsc = ctx.createOscillator();
    const thudGain = ctx.createGain();
    thudOsc.type = 'sine';
    thudOsc.frequency.setValueAtTime(90, now);
    thudOsc.frequency.exponentialRampToValueAtTime(35, now + 0.08);

    thudGain.gain.setValueAtTime(0.85, now);
    thudGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    thudOsc.connect(thudGain);
    thudGain.connect(ctx.destination);
    thudOsc.start(now);
    thudOsc.stop(now + 0.08);

    // Turf Contact Noise Burst
    const bufferSize = ctx.sampleRate * 0.04; // 40ms noise
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuffer;

    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'lowpass';
    noiseFilter.frequency.setValueAtTime(type === 'shoot' ? 1200 : 900, now);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.4, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(ctx.destination);

    noise.start(now);
  }

  /**
   * 2. Referee Whistle Sound Effect (Dual-Tone Frequency + Trill Modulation)
   */
  public playWhistleSFX(type: 'short' | 'long' | 'double' = 'short') {
    if (this.isMuted) return;
    const ctx = this.initAudioContext();
    if (!ctx) return;

    const playBlast = (startTime: number, blastDuration: number) => {
      // Dual frequencies matching real Pea Whistle (2850Hz & 3120Hz)
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();

      // Trill Vibrato LFO (35 Hz modulation)
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();

      lfo.frequency.setValueAtTime(35, startTime);
      lfoGain.gain.setValueAtTime(140, startTime);
      lfo.connect(osc1.frequency);
      lfo.connect(osc2.frequency);

      osc1.type = 'sine';
      osc2.type = 'triangle';
      osc1.frequency.setValueAtTime(2850, startTime);
      osc2.frequency.setValueAtTime(3120, startTime);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.001, startTime);
      gain.gain.linearRampToValueAtTime(0.45, startTime + 0.02);
      gain.gain.setValueAtTime(0.45, startTime + blastDuration - 0.03);
      gain.gain.linearRampToValueAtTime(0.001, startTime + blastDuration);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      lfo.start(startTime);
      osc1.start(startTime);
      osc2.start(startTime);

      const stopTime = startTime + blastDuration;
      lfo.stop(stopTime);
      osc1.stop(stopTime);
      osc2.stop(stopTime);
    };

    const now = ctx.currentTime;

    if (type === 'short') {
      playBlast(now, 0.25);
    } else if (type === 'long') {
      playBlast(now, 0.75);
    } else if (type === 'double') {
      playBlast(now, 0.35);
      playBlast(now + 0.45, 0.50);
    }
  }


  /**
   * 3. Crowd Supporter "GOOOOOL!" Chant
   *    Synthesizes the sound of thousands of supporters screaming "GOOOOOL!"
   *    using layered detuned oscillators, vowel formant shaping, organic
   *    tremolo, and a pink noise crowd texture bed — all via Web Audio API.
   */
  public playGoalSound() {
    if (this.isMuted) return;
    const ctx = this.initAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const TOTAL = 4.0; // 4 seconds of crowd celebration

    // ============================================================
    // MASTER BUS: Compressor/limiter prevents clipping from many voices
    // ============================================================
    const masterComp = ctx.createDynamicsCompressor();
    masterComp.threshold.setValueAtTime(-8, now);
    masterComp.knee.setValueAtTime(4, now);
    masterComp.ratio.setValueAtTime(6, now);
    masterComp.attack.setValueAtTime(0.002, now);
    masterComp.release.setValueAtTime(0.3, now);

    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.80, now);
    masterComp.connect(masterGain);
    masterGain.connect(ctx.destination);

    // ============================================================
    // LAYER 1: CROWD "GOOOOOL!" — 16 detuned human voices
    //
    // Each voice:
    //  • Unique pitch in G3–B3 range (196–256 Hz) with random detune
    //  • "GO!" pitch jump up then long "OOOOL" glide downward
    //  • Slow tremolo LFO (2.5–5.5 Hz) for organic liveliness
    //  • Routed through shared "O" vowel formant filters
    // ============================================================

    // Shared "O" vowel formant — sweeps from AH (800Hz) to OO (400Hz)
    const vowelFormant = ctx.createBiquadFilter();
    vowelFormant.type = 'bandpass';
    vowelFormant.frequency.setValueAtTime(680, now);
    vowelFormant.Q.setValueAtTime(2.2, now);
    vowelFormant.frequency.linearRampToValueAtTime(420, now + TOTAL);

    // Upper resonance formant (nasal body of the chant)
    const vowelFormant2 = ctx.createBiquadFilter();
    vowelFormant2.type = 'bandpass';
    vowelFormant2.frequency.setValueAtTime(1100, now);
    vowelFormant2.Q.setValueAtTime(3, now);
    vowelFormant2.frequency.linearRampToValueAtTime(850, now + TOTAL);

    const crowdVocalGain = ctx.createGain();
    crowdVocalGain.gain.setValueAtTime(0.001, now);
    crowdVocalGain.gain.linearRampToValueAtTime(0.95, now + 0.15);  // crowd erupts!
    crowdVocalGain.gain.setValueAtTime(0.90, now + 1.5);
    crowdVocalGain.gain.linearRampToValueAtTime(0.70, now + 3.2);
    crowdVocalGain.gain.exponentialRampToValueAtTime(0.001, now + TOTAL);

    vowelFormant.connect(crowdVocalGain);
    vowelFormant2.connect(crowdVocalGain);
    crowdVocalGain.connect(masterComp);

    const numVoices = 16;
    for (let v = 0; v < numVoices; v++) {
      const detuneCents = (Math.random() - 0.5) * 100; // ±50 cents random
      const basePitch = 196 + Math.random() * 60;       // 196–256 Hz (G3–B3)
      const startDelay = Math.random() * 0.09;          // staggered 0–90ms

      const voiceOsc = ctx.createOscillator();
      voiceOsc.type = 'sawtooth';
      // "GO!" jump up → long "OOOOL" glide down
      voiceOsc.frequency.setValueAtTime(basePitch * 1.08, now + startDelay);
      voiceOsc.frequency.linearRampToValueAtTime(basePitch * 1.15, now + startDelay + 0.08);
      voiceOsc.frequency.linearRampToValueAtTime(basePitch * 0.95, now + startDelay + 2.5);
      voiceOsc.frequency.linearRampToValueAtTime(basePitch * 0.88, now + TOTAL - 0.2);
      voiceOsc.detune.setValueAtTime(detuneCents, now);

      // Per-voice tremolo LFO — makes crowd feel alive, not robotic
      const tremoloLFO = ctx.createOscillator();
      const tremoloGain = ctx.createGain();
      tremoloLFO.type = 'sine';
      tremoloLFO.frequency.setValueAtTime(2.5 + Math.random() * 3.0, now);
      tremoloGain.gain.setValueAtTime(3.5, now); // ±3.5 Hz pitch wobble
      tremoloLFO.connect(tremoloGain);
      tremoloGain.connect(voiceOsc.frequency);
      tremoloLFO.start(now + startDelay);
      tremoloLFO.stop(now + TOTAL);

      // Per-voice amplitude
      const voiceAmpGain = ctx.createGain();
      voiceAmpGain.gain.setValueAtTime(0.001, now + startDelay);
      voiceAmpGain.gain.linearRampToValueAtTime(1.0 / numVoices, now + startDelay + 0.12);
      voiceAmpGain.gain.setValueAtTime(1.0 / numVoices, now + startDelay + 2.0);
      voiceAmpGain.gain.exponentialRampToValueAtTime(0.001, now + TOTAL);

      voiceOsc.connect(voiceAmpGain);
      voiceAmpGain.connect(vowelFormant);
      voiceAmpGain.connect(vowelFormant2);
      voiceOsc.start(now + startDelay);
      voiceOsc.stop(now + TOTAL);
    }

    // ============================================================
    // LAYER 2: PINK NOISE CROWD TEXTURE
    // Simulates the unintelligible roar of thousands of people;
    // band-passed around the human vocal range for realism
    // ============================================================
    const crowdNoiseSize = Math.floor(ctx.sampleRate * TOTAL);
    const crowdNoiseBuf = ctx.createBuffer(2, crowdNoiseSize, ctx.sampleRate);

    for (let ch = 0; ch < 2; ch++) {
      const data = crowdNoiseBuf.getChannelData(ch);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0;
      for (let i = 0; i < crowdNoiseSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555;
        b1 = 0.99332 * b1 + white * 0.0751;
        b2 = 0.96900 * b2 + white * 0.1539;
        b3 = 0.86650 * b3 + white * 0.3105;
        b4 = 0.55000 * b4 + white * 0.5330;
        b5 = -0.7616 * b5 - white * 0.0169;
        data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + white * 0.536) * 0.10;
      }
    }

    const crowdNoiseSrc = ctx.createBufferSource();
    crowdNoiseSrc.buffer = crowdNoiseBuf;

    const noiseBP = ctx.createBiquadFilter();
    noiseBP.type = 'bandpass';
    noiseBP.frequency.setValueAtTime(900, now);
    noiseBP.Q.setValueAtTime(0.5, now);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.001, now);
    noiseGain.gain.linearRampToValueAtTime(0.50, now + 0.20);
    noiseGain.gain.setValueAtTime(0.50, now + 1.5);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + TOTAL);

    crowdNoiseSrc.connect(noiseBP);
    noiseBP.connect(noiseGain);
    noiseGain.connect(masterComp);
    crowdNoiseSrc.start(now);

    // ============================================================
    // LAYER 3: SUB-BASS IMPACT — ball hitting the net at t=0
    // ============================================================
    const impactOsc = ctx.createOscillator();
    const impactGain = ctx.createGain();
    impactOsc.type = 'sine';
    impactOsc.frequency.setValueAtTime(120, now);
    impactOsc.frequency.exponentialRampToValueAtTime(30, now + 0.3);
    impactGain.gain.setValueAtTime(0.7, now);
    impactGain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
    impactOsc.connect(impactGain);
    impactGain.connect(masterComp);
    impactOsc.start(now);
    impactOsc.stop(now + 0.35);

    // Boost ambient crowd during celebration
    this.triggerCrowdCheer();
  }

  /**
   * 4. Crowd Stadium Ambient Sound (Pink Noise Rumble with Cached Buffer)
   */
  public startCrowdAmbience() {
    if (this.isMuted || this.crowdNode) return;
    const ctx = this.initAudioContext();
    if (!ctx) return;

    if (!this.pinkNoiseBuffer) {
      const sampleRate = ctx.sampleRate;
      const bufferSize = sampleRate * 3.0; // 3 sec loop
      this.pinkNoiseBuffer = ctx.createBuffer(1, bufferSize, sampleRate);
      const output = this.pinkNoiseBuffer.getChannelData(0);

      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
        output[i] *= 0.11;
        b6 = white * 0.115926;
      }
    }

    const noiseSrc = ctx.createBufferSource();
    noiseSrc.buffer = this.pinkNoiseBuffer;
    noiseSrc.loop = true;

    this.crowdFilter = ctx.createBiquadFilter();
    this.crowdFilter.type = 'bandpass';
    this.crowdFilter.frequency.setValueAtTime(450, ctx.currentTime);
    this.crowdFilter.Q.setValueAtTime(0.8, ctx.currentTime);

    this.crowdGain = ctx.createGain();
    this.crowdGain.gain.setValueAtTime(0.12, ctx.currentTime);

    noiseSrc.connect(this.crowdFilter);
    this.crowdFilter.connect(this.crowdGain);
    this.crowdGain.connect(ctx.destination);

    noiseSrc.start();
    this.crowdNode = noiseSrc;
  }

  public stopCrowdAmbience() {
    if (this.crowdNode) {
      try {
        (this.crowdNode as any).stop();
        this.crowdNode.disconnect();
      } catch (e) {}
      this.crowdNode = null;
    }
    if (this.crowdFilter) {
      try { this.crowdFilter.disconnect(); } catch (e) {}
      this.crowdFilter = null;
    }
    if (this.crowdGain) {
      try { this.crowdGain.disconnect(); } catch (e) {}
      this.crowdGain = null;
    }
  }

  /**
   * 5. Crowd Cheer Surge (Goal or Big Chance Moment)
   */
  public triggerCrowdCheer() {
    if (this.isMuted) return;
    const ctx = this.initAudioContext();
    if (!ctx) return;

    if (this.crowdGain) {
      const now = ctx.currentTime;
      this.crowdGain.gain.cancelScheduledValues(now);
      this.crowdGain.gain.setValueAtTime(this.crowdGain.gain.value, now);
      this.crowdGain.gain.linearRampToValueAtTime(0.70, now + 0.3);
      this.crowdGain.gain.exponentialRampToValueAtTime(0.12, now + 3.0);
    }
  }

  /**
   * 6. Tackle / Collision Impact Sound Effect
   */
  public playTackleSFX() {
    if (this.isMuted) return;
    const ctx = this.initAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(110, now);
    osc.frequency.exponentialRampToValueAtTime(35, now + 0.12);

    gain.gain.setValueAtTime(0.7, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.12);
  }

  /**
   * 7. Menu BGM Synth Loop (Upbeat Chiptune / Modern Stadium Beats)
   */
  public startMenuBGM() {
    if (this.isMuted || this.isMenuBGMPlaying) return;
    const ctx = this.initAudioContext();
    if (!ctx) return;

    this.isMenuBGMPlaying = true;
    const notes = [261.63, 329.63, 392.00, 523.25, 392.00, 329.63]; // C4, E4, G4, C5 arpeggio
    let step = 0;

    this.menuBGMInterval = window.setInterval(() => {
      if (this.isMuted || !this.isMenuBGMPlaying) return;
      const curCtx = this.initAudioContext();
      if (!curCtx) return;

      const now = curCtx.currentTime;
      const osc = curCtx.createOscillator();
      const gain = curCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(notes[step % notes.length], now);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

      osc.connect(gain);
      gain.connect(curCtx.destination);

      osc.start(now);
      osc.stop(now + 0.22);

      step++;
    }, 280);
  }

  public stopMenuBGM() {
    this.isMenuBGMPlaying = false;
    if (this.menuBGMInterval !== null) {
      clearInterval(this.menuBGMInterval);
      this.menuBGMInterval = null;
    }
  }
}

export const audioService = new AudioService();
