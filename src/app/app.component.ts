import { Component } from '@angular/core';
import {Task} from './task';
import {TodosService} from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title = 'kbtg02';
  private tasks: Task[] = [
    new Task(0, 'Todo 1', false),
    new Task(1, 'Todo 2', false)
  ];
  result: any;

  constructor(private todosService: TodosService) {}

  update(value: string) {
    this.title = value;
  }

  update2(value: string) {
    this.title = value;
    this.todosService.getAll()
      .subscribe(todos => this.tasks = todos);
  }

  resetFromShow(newTasks: Task[]) {
    this.tasks = newTasks;
  }
}
