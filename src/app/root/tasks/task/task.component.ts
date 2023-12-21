import { Component, Input } from '@angular/core';
import { Config, Task } from '../../config'
import { confetti } from 'tsparticles-confetti';
import { rubberBandAnimation, tadaAnimation } from 'angular-animations';
import { AudioService } from 'src/app/common/audio.service';
import { ConfettiService } from 'src/app/common/confetti.service';
import { LocalStorageService } from 'src/app/common/localstorage.srvice';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  animations: [tadaAnimation()]
})
export class TaskComponent {

  @Input() task!: Task
  @Input() config!: Config

  animateButton = false

  constructor(private audioService: AudioService, private confettiService: ConfettiService, private storage: LocalStorageService) {}

  onClick(event: MouseEvent) {
    setTimeout(() => this.animateButton = this.config.features.button.animation)

    this.task.callback(this.config)
    this.storage.saveObject("config", this.config)

    this.confettiService.shootConfetti(event, this.config)
    this.audioService.playSound(this.task.sound, this.config)
  }

}


