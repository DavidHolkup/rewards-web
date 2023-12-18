import { Component, Input } from '@angular/core';
import { Config } from '../config';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  @Input() config!: Config; 
}
