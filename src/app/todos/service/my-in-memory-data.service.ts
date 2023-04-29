import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TODOS } from '../datas/mock-todos-list';

@Injectable({
  providedIn: 'root'
})
export class MyInMemoryDataService implements InMemoryDbService{

  createDb() {
    let tasks = TODOS;
    return { tasks };    
  }
  }

