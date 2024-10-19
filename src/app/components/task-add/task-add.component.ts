import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css'
})
export class TaskAddComponent {
  // taskform: FormGroup

  // constructor(private fb: FormBuilder, taskservice: TaskService) {
  //   this.taskform = fb.group(
  //     {
  //       Title: ['', [Validators]],
  //       Duedate: [''],
  //       Describe: [''],
  //       Priority: ['']
  //     }
  //   )
  // }
}
