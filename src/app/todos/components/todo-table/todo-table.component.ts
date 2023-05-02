import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoDto } from '../../dto/todo-dto';
import { MatTableDataSource } from '@angular/material/table';
import { TodosService } from '../../service/todos.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.scss']
})

export class TodoTableComponent implements OnInit{

  todos!: TodoDto[];
  todo: TodoDto = new TodoDto();
  displayedColumns: string[] = ['title', 'status', 'select'];
  selection = new SelectionModel<TodoDto>(true, []);

  constructor (private todosService: TodosService,
    private router: Router) {}

  ngOnInit(): void {
    this.todosService.getAllTodos().subscribe(data => {
      console.log(data);
      this.todos = data.datas.todos;
    });
  }

  sortToDoListByStatus() {
    this.todos.sort((a, b) => b.statusType.localeCompare(a.statusType));
    console.log(this.todos);
  }

  onTodoClicked(todo: TodoDto) {
    //this.router.navigate(['api/detail/', todo.id]);
    //console.log(this.todo.id);
    
  }

  onTodoToggled(todo : TodoDto) {
    this.selection.toggle(todo);
    const selectedTodo = this.selection.selected;
    selectedTodo.forEach( todo => {
      todo.statusType = "Done";
      this.router.navigate(['api/todos/', todo.id]);
      //todo.title = todo.title.strike();
    }
    )
    console.log(selectedTodo);
  }
}
