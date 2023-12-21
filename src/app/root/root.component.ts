import { Component, OnInit } from '@angular/core';
import { Config, ConfigData, Reward, Task } from './config';
import { LocalStorageService } from '../common/localstorage.srvice';
import { animationCallback, backgroundCallback, confettiCallback, emojiCallback, emptyCallback, pictureCallback, rippleCallback, soundCallback } from '../common/callbacks';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  config!: Config
  particlesOptions = {}

  constructor(private storage: LocalStorageService) {
      storage.clearStorage()
  }

  private defaultConfig: Config = {
    features: {
      button: {
        ripple: false,
        confetti: 0,
        sound: false,
        animation: false,
      },
      background: 0,
      images: 0,
      emojis: false,
    },
    rewards: [
      new Reward({
        name: "Emotikony",
        description: "Zapne emotikony v uzivatelskem rozhrani.",
        stars: 10,
        emoji: "😆",
        image: "../../assets/images/rewards/emoji.jpeg",
        gif: "../../assets/images/rewards/emoji.gif",
        sound: "../../assets/sound/correct1.mp3",
        purchased: 0,
        maxPurchases: 1,
        callback: emojiCallback
      }), new Reward({
        name: "Obrazky",
        description: "Zapne obrazky v uzivatelskem rozhrani.",
        stars: 10,
        emoji: "📷",
        image: "../../assets/images/rewards/image.jpeg",
        gif: "../../assets/images/rewards/image.gif",
        sound: "../../assets/sound/correct1.mp3",
        purchased: 0,
        maxPurchases: 2,
        callback: pictureCallback
      }), new Reward({
        name: "Zvuky",
        description: "Zapne zvuky v uzivatelskem rozhrani.",
        stars: 15,
        emoji: "🎺",
        image: "../../assets/images/rewards/sound.png",
        gif: "../../assets/images/rewards/sound.gif",
        sound: "../../assets/sound/correct1.mp3",
        purchased: 0,
        maxPurchases: 1,
        callback: soundCallback
      }), new Reward({
        name: "Pozadi",
        description: "Vylepsi pozadi aplikace.",
        stars: 20,
        emoji: "🤠",
        image: "../../assets/images/rewards/pozadi.png",
        gif: "../../assets/images/rewards/pozadi.gif",
        sound: "../../assets/sound/correct1.mp3",
        purchased: 0,
        maxPurchases: 8,
        callback: backgroundCallback
      }), new Reward({
        name: "Konfety",
        description: "Vystreli konfety po kliknuti na tlacitko.",
        stars: 20,
        emoji: "🤩",
        image: "../../assets/images/rewards/confetti.png",
        gif: "../../assets/images/rewards/confetti.gif",
        sound: "../../assets/sound/correct1.mp3",
        purchased: 0,
        maxPurchases: 10,
        callback: confettiCallback
      }), new Reward({
        name: "Ripple",
        description: "Zobrazi ripple efekt po kliknuti na tlacitko.",
        stars: 2,
        emoji: "😊",
        image: "../../assets/images/rewards/rippleSingle.webp",
        gif: "../../assets/images/rewards/ripple.webp",
        sound: "../../assets/sound/correct1.mp3",
        purchased: 0,
        maxPurchases: 1,
        callback: rippleCallback
      }), new Reward({
        name: "Animace",
        description: "Zobrazi animaci po kliknuti na tlacitko.",
        stars: 10,
        emoji: "💥",
        image: "../../assets/images/rewards/animation.png",
        gif: "../../assets/images/rewards/animation.gif",
        sound: "../../assets/sound/correct1.mp3",
        purchased: 0,
        maxPurchases: 1,
        callback: animationCallback
      }), new Reward({
        name: "Umyti nadobi",
        description: "David za tebe dnes umyje nadobi.",
        stars: 6,
        emoji: "🍽️",
        image: "../../assets/images/rewards/dishes.png",
        gif: "../../assets/images/rewards/dishes.gif",
        sound: "../../assets/sound/correct1.mp3",
        purchased: 0,
        maxPurchases: 100,
        callback: emptyCallback
      }), new Reward({
        name: "Vyluxovani",
        description: "David za tebe dnes vyluxuje.",
        stars: 3,
        emoji: "👨‍🦯",
        image: "../../assets/images/rewards/vacuum.png",
        gif: "../../assets/images/rewards/vacuum.gif",
        sound: "../../assets/sound/correct1.mp3",
        purchased: 0,
        maxPurchases: 100,
        callback: emptyCallback
      }), new Reward({
        name: "Vytreni",
        description: "David za tebe dnes vytre.",
        stars: 8,
        emoji: "🪣",
        image: "../../assets/images/rewards/mop.png",
        gif: "../../assets/images/rewards/mop.gif",
        sound: "../../assets/sound/correct1.mp3",
        purchased: 0,
        maxPurchases: 100,
        callback: emptyCallback,
      }), new Reward({
        name: "Cteni",
        description: "Muzes si precist 1 stranku z nejake pekne knizky. (Ne z ucebnice).",
        stars: 1,
        emoji: "📖",
        image: "../../assets/images/rewards/read.png",
        gif: "../../assets/images/rewards/read.gif",
        sound: "../../assets/sound/correct1.mp3",
        purchased: 0,
        maxPurchases: 1000,
        callback: emptyCallback,
      }), new Reward({
        name: "Film/Serial",
        description: "Muzes se podivat na 5 minut nejakeho pekneho filmu nebo serialu. (Ne prednasky).",
        stars: 1,
        emoji: "📺",
        image: "../../assets/images/rewards/watchingTv.png",
        gif: "../../assets/images/rewards/watchingTv.gif",
        sound: "../../assets/sound/correct1.mp3",
        purchased: 0,
        maxPurchases: 500,
        callback: emptyCallback,
      }), new Reward({
        name: "Instagram",
        description: "Muzes se podivat na 1 minutu na instagram.",
        stars: 1,
        emoji: "📷",
        image: "../../assets/images/rewards/instagram.png",
        gif: "../../assets/images/rewards/instagram.gif",
        sound: "../../assets/sound/correct1.mp3",
        purchased: 0,
        maxPurchases: 200,
        callback: emptyCallback,
      }), new Reward({
        name: "Masaz nohou",
        description: "Jedna deseti minutova masaz nohou.",
        stars: 4,
        emoji: "❤️",
        image: "../../assets/images/rewards/feetMassage.png",
        gif: "../../assets/images/rewards/feetMassage.gif",
        sound: "../../assets/sound/correct1.mp3",
        purchased: 0,
        maxPurchases: 50,
        callback: emptyCallback,
      }), new Reward({
        name: "Masaz hlavy",
        description: "Jedna deseti minutova masaz hlavy.",
        stars: 4,
        emoji: "💆‍♀️",
        image: "../../assets/images/rewards/headMassage.png",
        gif: "../../assets/images/rewards/headMassage.gif",
        sound: "../../assets/sound/correct1.mp3",
        purchased: 0,
        maxPurchases: 50,
        callback: emptyCallback,
      }), new Reward({
        name: "Masaz",
        description: "Jedna deseti minutova masaz.",
        stars: 5,
        emoji: "💝",
        image: "../../assets/images/rewards/massage.png",
        gif: "../../assets/images/rewards/massage.gif",
        sound: "../../assets/sound/correct1.mp3",
        purchased: 0,
        maxPurchases: 50,
        callback: emptyCallback,
      }), new Reward({
        name: "Mala hra",
        description: "Jedna mala hra. Karty, pexeso, domino...",
        stars: 2,
        emoji: "🃏",
        image: "../../assets/images/rewards/cards.png",
        gif: "../../assets/images/rewards/cards.gif",
        sound: "../../assets/sound/correct1.mp3",
        purchased: 0,
        maxPurchases: 100,
        callback: emptyCallback,
      }), new Reward({
        name: "Velka hra",
        description: "Jedna velka hra. Katan, Liska, Vez...",
        stars: 6,
        emoji: "🎮",
        image: "../../assets/images/rewards/boardGames.png",
        gif: "../../assets/images/rewards/boardGames.webp",
        sound: "../../assets/sound/correct1.mp3",
        purchased: 0,
        maxPurchases: 100,
        callback: emptyCallback,
      }), new Reward({
        name: "Zkouseni",
        description: "David te na 5 minut bude zkouset. Maximalne 1 hodina denne.",
        stars: 1,
        emoji: "🤨",
        image: "../../assets/images/rewards/think.png",
        gif: "../../assets/images/rewards/think.gif",
        sound: "../../assets/sound/correct1.mp3",
        purchased: 0,
        maxPurchases: 100,
        callback: emptyCallback,
      }), new Reward({
        name: "Snidane do postele",
        description: "David ti pripravi snidani do postele.",
        stars: 20,
        emoji: "🥞",
        image: "../../assets/images/rewards/breakfast.png",
        gif: "../../assets/images/rewards/breakfast.gif",
        sound: "../../assets/sound/correct1.mp3",
        purchased: 0,
        maxPurchases: 10,
        callback: emptyCallback,
      }),
    ],
    tasks: [
      new Task({
        name: "Naucit se otazku",
        description: "Naucit se uplne novou otazku",
        stars: 2,
        image: "../../assets/images/tasks/learn.png",
        gif: "../../assets/images/tasks/learn.gif",
        sound: "../../assets/sound/correct1.mp3",
        emoji: "🚀",
      }), new Task({
        name: "Zopakovat otazku",
        description: "Zopakovat si otazku, kterou uz jsi prosla.",
        stars: 1,
        image: "../../assets/images/tasks/review.png",
        gif: "../../assets/images/tasks/review.gif",
        sound: "../../assets/sound/correct1.mp3",
        emoji: "🚀",
      }), new Task({
        name: "Zkouska A",
        description: "Dostat ze zkousky Acko.",
        stars: 15,
        image: "../../assets/images/tasks/a.png",
        gif: "../../assets/images/tasks/a.gif",
        sound: "../../assets/sound/correct2.mp3",
        emoji: "🎉",
      }), new Task({
        name: "Zkouska B",
        description: "Dostat ze zkousky Bcko.",
        stars: 12,
        image: "../../assets/images/tasks/b.png",
        gif: "../../assets/images/tasks/b.gif",
        sound: "../../assets/sound/correct2.mp3",
        emoji: "🎉",
      }), new Task({
        name: "Zkouska C",
        description: "Dostat ze zkousky Ccko.",
        stars: 8,
        image: "../../assets/images/tasks/c.png",
        gif: "../../assets/images/tasks/c.gif",
        sound: "../../assets/sound/correct2.mp3",
        emoji: "🎉",
      }), new Task({
        name: "Statnice",
        description: "Udelat statnice.",
        stars: 30,
        image: "../../assets/images/tasks/interview.png",
        gif: "../../assets/images/tasks/interview.gif",
        sound: "../../assets/sound/correct2.mp3",
        emoji: "🥂"
      }),
    ],
    starsAvailable: 0,
    starsTotal: 0,
    stats: {
      tasks: { },
      rewards: { }
    }
  }


  ngOnInit() {
    const data: ConfigData = this.storage.getObject("config")
    if (data != null) {
      const rewards = [
        new Reward({ ...data.rewards[0], callback: emojiCallback }),
        new Reward({ ...data.rewards[1], callback: pictureCallback }),
        new Reward({ ...data.rewards[2], callback: soundCallback }),
        new Reward({ ...data.rewards[3], callback: backgroundCallback }),
        new Reward({ ...data.rewards[4], callback: confettiCallback }),
        new Reward({ ...data.rewards[5], callback: rippleCallback }),
        new Reward({ ...data.rewards[6], callback: animationCallback }),
        new Reward({ ...data.rewards[7], callback: emptyCallback }),
        new Reward({ ...data.rewards[8], callback: emptyCallback }),
        new Reward({ ...data.rewards[9], callback: emptyCallback }),
        new Reward({ ...data.rewards[10], callback: emptyCallback }),
        new Reward({ ...data.rewards[11], callback: emptyCallback }),
        new Reward({ ...data.rewards[12], callback: emptyCallback }),
        new Reward({ ...data.rewards[13], callback: emptyCallback }),
        new Reward({ ...data.rewards[14], callback: emptyCallback }),
        new Reward({ ...data.rewards[15], callback: emptyCallback }),
        new Reward({ ...data.rewards[16], callback: emptyCallback }),
        new Reward({ ...data.rewards[17], callback: emptyCallback }),
        new Reward({ ...data.rewards[18], callback: emptyCallback }),
        new Reward({ ...data.rewards[19], callback: emptyCallback }),
      ]
      const tasks = data.tasks.map(it => new Task(it))
      this.config = {
        ...data,
        rewards,
        tasks,
      }
    }

    this.config ??= this.defaultConfig

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
