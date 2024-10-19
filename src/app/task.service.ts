import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http : HttpClient) { }
  

 url = 'http://localhost:5191/api/TaskItems'
  gettasks()
{
  return this.http.get<any[]>(this.url);
}}
