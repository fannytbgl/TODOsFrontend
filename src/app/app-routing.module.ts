import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoTableComponent } from './todos/components/todo-table/todo-table.component';

const routes: Routes = [
  { 
  path: 'api', 
  component: TodoTableComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
