import { Component } from '@angular/core';
import { User, UserService } from '../../../services/user.service';
import { Route, Router } from '@angular/router';
import { TaskService } from '../../../task.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  name = 'task_manager';
  Users: User[] = [];
  searchText: string = ''

  constructor(private userservice : UserService , private router : Router){}



  ngOnInit(): void {
    this.userservice.getUsers().subscribe((d:any) => {
      this.Users = d;
    });
  }
  
  
onDelete(userid: number) {
  this.userservice.deleteUser(userid).subscribe(() => {
    alert("user_Id "+userid +" deleted")
    this.loadTask();
  })
}

loadTask() {
  this.userservice.getUsers().subscribe(d => {
    this.Users = d;
  })
}
onEdit(userid:number){
  this.router.navigate(['/user-edit' , userid])
}


}


