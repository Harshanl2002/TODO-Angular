import { Injectable } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  constructor(private fb:FormBuilder,private http:HttpClient) {};
  readonly BaseURL="http://localhost:3000/Tasks/";
  TaskForm=this.fb.group({
    _id:[''],
    Taskname:['',Validators.required],
    date:['',Validators.required],
    done:[false],
  });
  postTasks()
  {
    return this.http.post(this.BaseURL,this.TaskForm.value);
  }
  getTasks(done:boolean)
  {
    return this.http.get(this.BaseURL+done);
  }
  putTasks()
  {
    return this.http.put(this.BaseURL+this.TaskForm.get('_id')?.value,this.TaskForm.value)
  }
  deleteTask(_id:string)
  {
    return this.http.delete(this.BaseURL+_id);
  }
}
