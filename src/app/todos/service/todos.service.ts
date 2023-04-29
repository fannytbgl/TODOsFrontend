import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { TodoDto } from '../dto/todo-dto';

@Injectable({
  providedIn: 'root'
})
                          
export class TodosService {

  constructor(private httpClient: HttpClient) {}

  base_url: String = 'http://localhost:4200/api/';
  tasks_endpoint = 'tasks'; 
  
  getAllTodos() {
    return this.httpClient.get<TodoDto[]>(this.base_url + this.tasks_endpoint).pipe(
      map(response => response.map(todo => new TodoDto(todo)))
    )
  }

  getOneTodo() {

  }

  updateTodo() {

  }

  addTodo() {

  }

  deleteTodo() {

  }

}
