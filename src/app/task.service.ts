import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:5191/api/TaskItems'



  getTasks() {
    return this.http.get<Task[]>(this.url);
  }
  createTasks(task: Task) {
    return this.http.post(this.url, task)
  }
  deleteTask(taskId: Task) {
    return this.http.delete(this.url + "/"+taskId);
  }
  editTask(task:Task){
    return this.http.put(`${this.url}/${task.id}`, task);
  }
  getTask(taskId: number) {
    return this.http.get<Task>(this.url + "/" + taskId);
  }
  updateTask(task: Task) {
    return this.http.put(this.url + "/" + task.id, task);
  }
}


export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  priority: string;
}