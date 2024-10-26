import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css'
})
export class UserAddComponent {

  userform : FormGroup;

  constructor(private fb : FormBuilder,private userservice :UserService ,private router : Router){
    this.userform = fb.group({
      name : [''],
      email : [''],
      Phone_num :[''],
      password :['']
    })
  }


  onSubmit(){
    let user =  this.userform.value;
    console.log(user);
    
    this.userservice.createUsers(user).subscribe(data => {
      this.router.navigate(['user-list'])
    })
  }

  cancel(){
    this.router.navigate(["/user-list"])
  }

}






