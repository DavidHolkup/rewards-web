import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  tasks = [
    {
      name: "Naucit se otazku",
      description: "Naucit se uplne novou otazku",
      stars: 2,
    },{
      name: "Zopakovat otazku",
      description: "Zopakovat si otazku, kterou uz jsi prosla.",
      stars: 1,
    },{
      name: "Zkouska A",
      description: "Dostat ze zkousky Acko.",
      stars: 15,
    },{
      name: "Zkouska B",
      description: "Dostat ze zkousky Bcko.",
      stars: 12,
    },{
      name: "Zkouska C",
      description: "Dostat ze zkousky Ccko.",
      stars: 8,
    },
    ]
}

export interface Task {
  name: string
  description: string
  stars: number
}
