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
        images: boolean,
        emojis: boolean,
    },
    rewards: Reward[],
    tasks: Task[],
    stats: {
        tasks: any
      }
}

export interface Reward {
    id: string,
    cost: number,
    purchased: number, // how many times was purchased
    title: string,
    description?: string,
    image: string,     // path to image in assets
    sound: string,
    onTime: boolean,
    callback(config: Config): void,
}

export interface UiReward extends Reward {
    effect: UiEffect,
    classes: string[],
}

export enum UiEffect {
    Background, Pointer, ClickEffectRewards, ClickEffectTasks, SoundEffectRewards, SoundEffectTask
}

export interface ITask {
  name: string
  description: string
  stars: number
  image: string
  sound: string
  emoji: string
}

export class Task implements ITask {
  name: string
  description: string
  stars: number
  image: string
  sound: string
  emoji: string

  constructor(task: ITask) {
    this.name = task.name
    this.description = task.description
    this.stars = task.stars
    this.image = task.image
    this.sound = task.sound
    this.emoji = task.emoji
  }

  callback(config: Config) {
    config.starsAvailable += this.stars
    config.starsTotal += this.stars
    config.stats.tasks[this.name] += 1
  }
}


