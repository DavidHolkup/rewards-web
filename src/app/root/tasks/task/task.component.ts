import { Component, Input } from '@angular/core';
import { Config, Task } from '../../config'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task!: Task
  @Input() config!: Config

}
