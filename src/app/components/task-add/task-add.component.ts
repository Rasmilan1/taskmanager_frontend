import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { TaskService } from '../../task.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-task-add',
  templateUrl: '../../components/task-add/task-add.component.html',
  styleUrl: './task-add.component.css'
})


export class TaskAddComponent  {
  taskform : FormGroup;

  constructor(private fb: FormBuilder, private taskservice: TaskService, private router: Router) {
    let today = new Date().toISOString().slice(0,10);
    this.taskform = this.fb.group({
            title: ['', [Validators.required]],
            description: [''],
            dueDate: [today],
            priority: ['', [Validators.required]]

    })
  }


  
  onSubmit(){
    let task = this.taskform.value;
    this.taskservice.createTasks(task).subscribe(data => {
      this.router.navigate(["/task-list"])
    })
  }

    cancel(){
      this.router.navigate(["/task-list"])
    }



  }