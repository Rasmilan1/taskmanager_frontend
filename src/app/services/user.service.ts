import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Task, TaskService } from '../task.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:5191/api/Users'
  getUsers() {
    return this.http.get<User[]>(this.url)
  }

  createUsers(user: User) {
    return this.http.post(this.url, user);
  }
  deleteUser(userid: number|User) {
    return this.http.delete(this.url + "/" + userid);
  }
  editUsers(user: User) {
    return this.http.put(this.url +"/" + user.id ,user);
  }
  getUser(userid:number|User){
    return this.http.get<User>(this.url + "/"+userid);
  }


}


export interface User {
  id: number;
  name: string;
  phone : string;
  password: string;
  email:string;

}