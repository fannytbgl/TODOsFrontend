import { Component, OnInit } from '@angular/core';
import { TodoDto } from '../../dto/todo-dto';
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

  todos!: TodoDto[];
  todo: TodoDto = new TodoDto();
  displayedColumns: string[] = ['title', 'status'];

  constructor (private todosService: TodosService,
    private router: Router) {}

  ngOnInit(): void {
    this.todosService.getAllTodos().subscribe(data => {
      console.log(data);
      this.todos = data.datas.todos;
    });
  }
}
