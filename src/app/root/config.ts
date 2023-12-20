export interface Config {
    starsAvailable: number,
    starsTotal: number,
    features: {
        button: {
            ripple: boolean,
            confetti: number,
            sound: boolean,
            animation: boolean,
        }
        background: number,
        images: number,
        emojis: boolean,
    },
    rewards: Reward[],
    tasks: Task[],
    stats: {
        tasks: any
      }
}

export interface IReward {
    stars: number,
    purchased: number, // how many times was purchased
    maxPurchases: number, // how many times can be purchased
    name: string,
    description?: string,
    image: string,
    gif: string,
    sound: string,
    emoji: string,
    callback(config: Config): void,
}

export class Reward implements IReward {
    stars: number
    purchased: number
    maxPurchases: number
    name: string
    description?: string
    image: string
    gif: string
    sound: string
    emoji: string
    configCallback: (config: Config) => void

    constructor(reward: IReward) {
        this.stars = reward.stars
        this.purchased = reward.purchased
        this.maxPurchases = reward.maxPurchases
        this.name = reward.name
        this.description = reward.description
        this.image = reward.image
        this.gif = reward.gif
        this.sound = reward.sound
        this.emoji = reward.emoji
        this.configCallback = reward.callback
    }

    callback(config: Config): void {
        this.purchased += 1
        config.starsAvailable -= this.stars
        this.configCallback(config)
    }
}

export interface ITask {
  name: string
  description: string
  stars: number
  image: string
  gif: string
  sound: string
  emoji: string
}

export class Task implements ITask {
  name: string
  description: string
  stars: number
  image: string
  gif: string
  sound: string
  emoji: string

  constructor(task: ITask) {
    this.name = task.name
    this.description = task.description
    this.stars = task.stars
    this.image = task.image
    this.gif = task.gif
    this.sound = task.sound
    this.emoji = task.emoji
  }

  callback(config: Config) {
    config.starsAvailable += this.stars
    config.starsTotal += this.stars
    config.stats.tasks[this.name] += 1
  }
}


