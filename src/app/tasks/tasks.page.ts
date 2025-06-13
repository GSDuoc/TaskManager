import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
  standalone: false,
})
export class TasksPage {
  tareas: string[] = ['Tarea 1', 'Tarea 2', 'Tarea 3'];

  constructor() {}
}