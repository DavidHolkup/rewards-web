import { Component, OnInit } from '@angular/core';
import { Config, Reward, Task } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  config: Config = {
    features: {
      button: {
        ripple: false,
        confetti: 0,
        sound: false,
        animation: true,
      },
      background: 10,
      images: true,
      emojis: false,
    },
    rewards: [
      new Reward({
        name: "Emotikony",
        description: "Zapne emotikony v uzivatelskem rozhrani.",
        stars: 10,
        emoji: "😆",
        image: "../../assets/images/rewards/emoji.gif",
        sound: "../../assets/sound/correct1.mp3",
        purchased: 0,
        maxPurchases: 1,
        callback: (config: Config) => {
          config.features.emojis = true
        }
      }), new Reward({
        name: "Obrazky",
        description: "Zapne obrazky v uzivatelskem rozhrani.",
        stars: 10,
        emoji: "📷",
        image: "../../assets/images/rewards/image.gif",
        sound: "../../assets/sound/correct1.mp3",
        purchased: 0,
        maxPurchases: 1,
        callback: (config: Config) => {
          config.features.images = true
        }
      }), new Reward({
        name: "Zvuky",
        description: "Zapne zvuky v uzivatelskem rozhrani.",
        stars: 15,
        emoji: "🎺",
        image: "../../assets/images/rewards/sound.gif",
        sound: "../../assets/sound/correct1.mp3",
        purchased: 0,
        maxPurchases: 1,
        callback: (config: Config) => {
          config.features.button.sound = true
        }
      }), new Reward({
        name: "Pozadi",
        description: "Vylepsi pozadi aplikace.",
        stars: 20,
        emoji: "🤠",
        image: "../../assets/images/rewards/pozadi.gif",
        sound: "../../assets/sound/correct1.mp3",
        purchased: 0,
        maxPurchases: 8,
        callback: (config: Config) => {
          config.features.background += 1
        }
      }), new Reward({
        name: "Konfety",
        description: "Vystreli konfety po kliknuti na tlacitko.",
        stars: 20,
        emoji: "🤩",
        image: "../../assets/images/rewards/confetti.gif",
        sound: "../../assets/sound/correct1.mp3",
        purchased: 0,
        maxPurchases: 10,
        callback: (config: Config) => {
          config.features.button.confetti += 1
        }
      }), new Reward({
        name: "Ripple",
        description: "Zobrazi ripple efekt po kliknuti na tlacitko.",
        stars: 2,
        emoji: "😊",
        image: "../../assets/images/rewards/ripple.webp",
        sound: "../../assets/sound/correct1.mp3",
        purchased: 0,
        maxPurchases: 1,
        callback: (config: Config) => {
          config.features.button.ripple = true
        }
      }), new Reward({
        name: "Animace",
        description: "Zobrazi animaci po kliknuti na tlacitko.",
        stars: 10,
        emoji: "💥",
        image: "../../assets/images/rewards/animation.gif",
        sound: "../../assets/sound/correct1.mp3",
        purchased: 0,
        maxPurchases: 1,
        callback: (config: Config) => {
          config.features.button.animation = true
        }
      }),
    ],
    tasks: [
      new Task({
        name: "Naucit se otazku",
        description: "Naucit se uplne novou otazku",
        stars: 2,
        image: "../../assets/images/naucitSeOtazku.jpeg",
        sound: "../../assets/sound/correct1.mp3",
        emoji: "🚀",
      }), new Task({
        name: "Zopakovat otazku",
        description: "Zopakovat si otazku, kterou uz jsi prosla.",
        stars: 1,
        image: "../../assets/images/zopakovatOtazku.jpg",
        sound: "../../assets/sound/correct1.mp3",
        emoji: "🚀",
      }), new Task({
        name: "Zkouska A",
        description: "Dostat ze zkousky Acko.",
        stars: 15,
        image: "../../assets/images/zkouskaA.jpeg",
        sound: "../../assets/sound/correct2.mp3",
        emoji: "🎉",
      }), new Task({
        name: "Zkouska B",
        description: "Dostat ze zkousky Bcko.",
        stars: 12,
        image: "../../assets/images/zkouskaB.jpeg",
        sound: "../../assets/sound/correct2.mp3",
        emoji: "🎉",
      }), new Task({
        name: "Zkouska C",
        description: "Dostat ze zkousky Ccko.",
        stars: 8,
        image: "../../assets/images/zkouskaC.png",
        sound: "../../assets/sound/correct2.mp3",
        emoji: "🎉",
      }), new Task({
        name: "Statnice",
        description: "Udelat statnice.",
        stars: 30,
        image: "../../assets/images/statnice.jpeg",
        sound: "../../assets/sound/correct2.mp3",
        emoji: "🥂"
      }),
    ],
    starsAvailable: 0,
    starsTotal: 0,
    stats: {
      tasks: {
        "Naucit se otazku": 0,
        "Zopakovat otazku": 0,
        "Zkouska A": 0,
        "Zkouska B": 0,
        "Zkouska C": 0,
        "Statnice": 0,
      }
    }
  }

  particlesOptions = {}

  ngOnInit() {
    this.particlesOptions = this.createParticleOptions();
  }

  createTaskCallback(stars: number) {
    return (config: Config) => {
      config.starsAvailable += stars
      config.starsTotal += stars
    }
  }

  createParticleOptions() {
    return {
      fpsLimit: 60,
      interactivity: {
        events: {
          onhover: {
            enable: this.config.features.background > 6,
            mode: "grab"
          },
          onclick: {
            enable: this.config.features.background > 7,
            mode: "push"
          },

        }
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: this.config.features.background > 4,
          opacity: 0.5,
          width: 1,
        },
        move: {
          // direction: MoveDirection.none,
          enable: this.config.features.background > 5,
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 30,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    };
  }
  myParticles = "particles";


}
