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
    },
    rewards: Reward[],
    tasks: Task[],
}

export interface Reward {
    id: string,
    cost: number,
    purchased: number, // how many times was purchased
    title: string,
    description?: string,
    image?: string,     // path to image in assets
    onTime: boolean,
    purchaseCallback(config: Config): void,
}

export interface UiReward extends Reward {
    effect: UiEffect,
    classes: string[],
}

export enum UiEffect {
    Background, Pointer, ClickEffectRewards, ClickEffectTasks, SoundEffectRewards, SoundEffectTask
}

export interface Task {
  name: string
  description: string
  stars: number
  image: string
  sound: string
}
