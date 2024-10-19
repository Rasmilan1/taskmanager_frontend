import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  title = 'task_manager';
  tasks:any[] = [];

  constructor (private taskservice :TaskService){
    
  }

  ngOnInit(): void {
    this.taskservice.gettasks().subscribe((d:any)=>{
      this.tasks = d;
    })
  }}