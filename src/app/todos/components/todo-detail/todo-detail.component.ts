import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TodoDto } from '../../dto/todo-dto';
import { TodosService } from '../../service/todos.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent {

  public todo: TodoDto = new TodoDto;

  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private todoService: TodosService) {}

  ngOnInit(): void {
    
    this.route.params 
    .subscribe((routeParams: Params) => {

      const todoId: number = routeParams['id'];
      console.log(todoId);
      
      this.todoService.getOneTodo(todoId)
      .subscribe((todo: TodoDto) => {
        this.todo = todo;
        console.log(todo);
        
      }
    )})
    }

    public onBackButton(): void {
      this.router.navigate(['']);
    }

  }
  

