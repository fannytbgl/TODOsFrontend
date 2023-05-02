import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TodoDto } from '../dto/todo-dto';

@Injectable({
  providedIn: 'root'
})
                          
export class TodosService {

  constructor(private httpClient: HttpClient) {}

  base_url: String = 'http://localhost:3000/api/';
  tasks_endpoint = 'todos';
  
  getAllTodos(): Observable<any> {
    return this.httpClient.get(this.base_url + this.tasks_endpoint)
    // return this.httpClient.get<TodoDto[]>(this.base_url + this.tasks_endpoint).pipe(
    //   map(response => response.map(todo => new TodoDto(todo)))
    // )
  }

  getOneTodo(id: number): Observable<any> {
    return this.httpClient.get(`${this.base_url + this.tasks_endpoint}/${id}`) 
  }

  updateTodo() {

  }

  addTodo() {

  }

  deleteTodo() {

  }

}



