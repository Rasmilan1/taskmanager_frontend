import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from '../../task.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  title = 'task_manager';
  tasks: any[] = [];
  searchText: string = ''

  constructor(private taskservice: TaskService ,private router : Router) {

  }

  ngOnInit(): void {
    this.taskservice.getTasks().subscribe((d: any) => {
      this.tasks = d;
    })
  }


  onDelete(taskId: Task) {
    this.taskservice.deleteTask(taskId).subscribe(() => {
      alert("Task_Id "+taskId +" deleted")
      this.loadTask();
    })
  }

  loadTask() {
    this.taskservice.getTasks().subscribe(d => {
      this.tasks = d;
    })
  }

  onEdit(taskId: number) {
    this.router.navigate(['/task-edit', taskId])
  }
}





