import { Injectable } from '@angular/core';
import { Config } from '../root/config';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor() { }

  playSound(audioFileSrc: string, config: Config) {
    if (config.features.button.sound) {
      const audio = new Audio();
      audio.src = audioFileSrc
      audio.play()
    }
  }
}
