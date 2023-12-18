import { Component, Input } from '@angular/core';
import { Config } from '../config';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss']
})
export class RewardsComponent {
  @Input() config!: Config
}
