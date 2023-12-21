import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Config, Reward } from '../../config';
import { AudioService } from 'src/app/common/audio.service';
import { ConfettiService } from 'src/app/common/confetti.service';
import { tadaAnimation } from 'angular-animations';
import { LocalStorageService } from 'src/app/common/localstorage.srvice';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.scss'],
  animations: [tadaAnimation()]
})
export class RewardComponent {

  @Input() reward!: Reward
  @Input() config!: Config
  
  disabled = true
  animateButton = false

  constructor(private audioService: AudioService, private confettiService: ConfettiService, private storage: LocalStorageService) {}

  onClick(event: MouseEvent) {
    setTimeout(() => this.animateButton = this.config.features.button.animation)

    this.reward.callback(this.config)
    this.storage.saveObject("config", this.config)

    this.confettiService.shootConfetti(event, this.config)
    this.audioService.playSound(this.reward.sound, this.config)
  }

}
