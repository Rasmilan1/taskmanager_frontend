import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'task_manager';
  tasks: any[] = [];

  constructor(private taskservice: TaskService) {

  }

  ngOnInit(): void {
    this.taskservice.getTasks().subscribe((d: any) => {
      this.tasks = d;
    })
  }
}
