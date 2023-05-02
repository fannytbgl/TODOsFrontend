import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoTableComponent } from './todos/components/todo-table/todo-table.component';
import { TodoDetailComponent } from './todos/components/todo-detail/todo-detail.component';

const routes: Routes = [
  {
  path: 'api/todos/:id',
  component: TodoDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
