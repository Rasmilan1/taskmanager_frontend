import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent implements OnInit {


  userid : number;
  userform : FormGroup;

 constructor(private route : ActivatedRoute , private userservice :UserService , private fb :FormBuilder , private toastr : ToastrService ,private router :Router){


    const uid =route.snapshot.paramMap.get("id");
    this.userid = Number(uid);

    this.userform = this.fb.group({
      id: [''],
      name: [''],
      email:[''],
      phone:[''],
      password:['']
    })
 }
  ngOnInit(): void {  
    this.userservice.getUser(this.userid).subscribe(data => {
      console.log(data);
  
      this.userform.patchValue({
        id: data.id,
        name: data.name,
        email:data.email,
        Phone_num :data.phone,

      })
    }, error => {
      this.toastr.error("Task is not found");
    });
  }

  cancel() {
    this.router.navigate(["/user-list"])
  }
  onSubmit() {
    const user = this.userform.value;
  
    this.userservice.editUsers(user).subscribe(data => {
      this.toastr.success("Task is updated successfully");
      this.router.navigate(["/user-list"]);
    });
  }
  
  
}










