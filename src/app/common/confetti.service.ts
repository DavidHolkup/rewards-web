import { Injectable } from '@angular/core';
import { confetti } from 'tsparticles-confetti';
import { Config } from '../root/config';

@Injectable({
  providedIn: 'root'
})
export class ConfettiService {

  constructor() { }

  shootConfetti(event: MouseEvent, config: Config) {
    const x = this.xCord(event.clientX)
    const y = this.yCord(event.clientY)

    if (config.features.button.confetti == 1) {
      this.confetti1(x, y);
    }
    else if (config.features.button.confetti == 2) {
      this.confetti2(x, y);
    }
    else if (config.features.button.confetti == 3) {
      this.confetti3(x, y);
    }
    else if (config.features.button.confetti == 4) {
      this.confetti4(x, y);
    }
    else if (config.features.button.confetti == 5) {
      this.confetti5(x, y);
    }
    else if (config.features.button.confetti == 6) {
      this.confetti6(x, y);
    }
    else if (config.features.button.confetti == 7) {
      this.confetti7(x, y);
    }
    else if (config.features.button.confetti == 8) {
      this.confetti8(x, y);
    }
    else if (config.features.button.confetti == 9) {
      this.confetti9(x, y);
    }
    else if (config.features.button.confetti == 10) {
      this.confetti10(x, y);
    }    
}

private confetti1(x: number, y: number) {
    confetti({
      particleCount: 5,
      spread: 50,
      position: { x, y },
      startVelocity: 8,
    });
  }

  private confetti2(x: number, y: number) {
    confetti({
      particleCount: 10,
      spread: 60,
      position: { x, y },
      startVelocity: 10,
    });
  }

  private confetti3(x: number, y: number) {
    confetti({
      particleCount: 20,
      spread: 70,
      position: { x, y },
      startVelocity: 12,
    });
  }

  private confetti4(x: number, y: number) {
    confetti({
      particleCount: 40,
      spread: 70,
      position: { x, y },
      startVelocity: 14,
    });
  }

  private confetti5(x: number, y: number) {
    confetti({
      particleCount: 80,
      spread: 70,
      position: { x, y },
      startVelocity: 16,
    });
  }

  private confetti6(x: number, y: number) {
    this.confetti5(x, y)
    const defaults = {
      spread: 100,
      ticks: 100,
      gravity: 0,
      decay: 0.94,
      position: { x, y },
      startVelocity: 30,
      shapes: ["heart"],
      colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
    };
    
    confetti({
      ...defaults,
      particleCount: 50,
      scalar: 2,
    });
    
    confetti({
      ...defaults,
      particleCount: 25,
      scalar: 3,
    });
    
    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 4,
    });
  }

  private confetti7(x: number, y: number) {
    this.confetti6(x, y)
    
    const defaults = {
      spread: 360,
      ticks: 50,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      position: {x, y},
      shapes: ["star"],
      colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
    };

    confetti({
      ...defaults,
      particleCount: 40,
      scalar: 1.2,
      shapes: ["star"],
    });
  
    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 0.75,
      shapes: ["circle"],
    });
  }

  private confetti8(x: number, y: number) {
    setTimeout(() => this.confetti7(x, y), 0)
    setTimeout(() => this.confetti7(x, y), 100)
  }

  private confetti9(x: number, y: number) {
    setTimeout(() => this.confetti7(x, y), 0)
    setTimeout(() => this.confetti7(x, y), 100)
    setTimeout(() => this.confetti7(x, y), 200)
  }

  private confetti10(x: number, y: number) {
    setTimeout(() => this.confetti7(x, y), 0)
    setTimeout(() => this.confetti7(x, y), 100)
    setTimeout(() => this.confetti7(x, y), 200)
    setTimeout(() => this.confetti7(x, y), 300)
  }

  private xCord(x: number) {
    return x / window.innerWidth * 100
  }

  private yCord(y: number) {
    return y / window.innerHeight * 100
  }

}
