import { Config } from "../root/config";

export const emojiCallback = (config: Config) => {
    config.features.emojis = true
}

export const pictureCallback = (config: Config) => {
    config.features.images += 1
}

export const soundCallback = (config: Config) => {
    config.features.button.sound = true
}

export const backgroundCallback = (config: Config) => {
    config.features.background += 1
}

export const confettiCallback = (config: Config) => {
    config.features.button.confetti += 1
}

export const rippleCallback = (config: Config) => {
    config.features.button.ripple = true
}

export const animationCallback = (config: Config) => {
    config.features.button.animation = true
}

export const emptyCallback = (config: Config) => { }
