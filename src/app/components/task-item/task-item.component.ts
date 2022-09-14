import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/Task';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!:Task;
  faTimes = faTimes;
  @Output() delete:EventEmitter<Task> = new EventEmitter<Task>();
  @Output() onToggle:EventEmitter<Task> = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task:Task){
    this.delete.emit(task)
  }

  toggleReminder(task:Task){

    this.onToggle.emit(task)
  }

}
