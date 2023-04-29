import { Component, OnInit } from '@angular/core';
import { TODOS } from '../../datas/mock-todos-list';
import { TodoDto } from '../../dto/todo-dto';
import { TransformPipe } from 'src/app/shared/pipes/transform-pipe';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { TodosService } from '../../service/todos.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.scss']
})

export class TodoTableComponent implements OnInit{

  todos: TodoDto[] = [];
  dataSource: MatTableDataSource<TodoDto> = new MatTableDataSource<TodoDto>();
  displayedColumns: string[] = ['title', 'status'];

  constructor (private todosService: TodosService,
    private router: Router) {}

  ngOnInit(): void {
    this.todosService.getAllTodos().subscribe((todos: TodoDto[]) =>
    this.todos = todos)
    //.subscribe(todos => this.dataSource.data = todos);
    console.log(this.todos);
  }

  getAllTodos(): Observable<TodoDto[]> {
    return this.todosService.getAllTodos();
  }


}
