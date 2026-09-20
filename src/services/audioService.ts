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
   * 3. Goal Horn / Celebration Explosion Sound Effect
   */
  public playGoalSound() {
    if (this.isMuted) return;
    const ctx = this.initAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // High-Power Double/Triple Harmony Stadium Foghorn: C4 (261.63), G4 (392.00), C5 (523.25)
    const freqs = [261.63, 392.00, 523.25];
    const hornGain = ctx.createGain();
    hornGain.gain.setValueAtTime(0.001, now);
    hornGain.gain.linearRampToValueAtTime(0.75, now + 0.12);
    hornGain.gain.setValueAtTime(0.75, now + 1.4);
    hornGain.gain.exponentialRampToValueAtTime(0.001, now + 2.2);

    freqs.forEach((freq) => {
      const osc = ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, now);
      osc.connect(hornGain);
      osc.start(now);
      osc.stop(now + 2.2);
    });

    hornGain.connect(ctx.destination);

    // Deep Sub-Bass Explosion Drop (120Hz -> 45Hz sub-drop boom)
    const subOsc = ctx.createOscillator();
    const subGain = ctx.createGain();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(120, now);
    subOsc.frequency.exponentialRampToValueAtTime(45, now + 0.8);

    subGain.gain.setValueAtTime(1.0, now);
    subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

    subOsc.connect(subGain);
    subGain.connect(ctx.destination);

    subOsc.start(now);
    subOsc.stop(now + 0.8);

    // Trigger referee whistle and crowd surge
    this.playWhistleSFX('long');
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
