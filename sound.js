class sound {
    constructor(frequency ,pitch, duration){
      this.frequency = frequency;
      this.duration = duration;
      this.pitch = pitch;
      this.audioCtx = new(window.AudioContext || window.webkitAudioContext)();

    }
    playOscillator(waveType){
      var oscillator = this.audioCtx.createOscillator();
      oscillator.type = waveType;
      oscillator.frequency.value = this.frequency; // value in hertz
      oscillator.frequency.setValueAtTime(this.frequency, this.audioCtx.currentTime); // value in hertz
      oscillator.detune.setValueAtTime(this.pitch, this.audioCtx.currentTime); // value in cents
      oscillator.connect(this.audioCtx.destination);
      oscillator.start();
      oscillator.stop(this.audioCtx.currentTime + (this.duration % 5));

    }

    setFreq(freq){
      this.frequency = freq;
    }

    setDuration(duration){
      this.duration = duration;
    }
    
}
