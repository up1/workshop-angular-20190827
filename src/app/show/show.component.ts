import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../task';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  @Input() showTasks = [];
  @Output() resetTasks = new EventEmitter<Task[]>();
  reset() {
    const newTasks = [
      new Task(1, 'New Task 1', false)
    ];
    this.resetTasks.emit(newTasks);
  }

  constructor() { }

  ngOnInit() {
  }
}
