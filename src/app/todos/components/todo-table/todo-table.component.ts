import { Component, OnInit } from '@angular/core';
import { TODOS } from '../../datas/mock-todos-list';
import { TodoDto } from '../../dto/todo-dto';
@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.scss']
})
export class TodoTableComponent implements OnInit{
  
  todoList : TodoDto[] = TODOS;
 
  ngOnInit(): void {
    console.table(this.todoList)
  }

  selectTodo(todo : TodoDto) {
    console.log(`Vous avez cliqué sur la tâche ${todo.title}`)
  }
}
