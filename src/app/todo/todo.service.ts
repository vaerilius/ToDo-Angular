import {Todo} from './todo.model';
import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  todosChanged = new EventEmitter<Todo[]>();
  private todos: Todo[] = [
    new Todo('test 1'),
    new Todo('test 2'),
    new Todo('test 3'),
  ];

  constructor() {
  }

  getTodos() {
    return this.todos.slice();
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    this.todosChanged.emit(this.todos.slice());
  }

  getTodo(id: number) {
  return this.todos[id];
  }
  changeStatus(id: number) {

  console.log(this.getTodo(id).isDone);
  this.setStatus(this.getTodo(id));
  }
  setStatus(todoStatus: Todo) {
    if (!todoStatus.isDone) {
      todoStatus.isDone = true;
    } else {
      todoStatus.isDone = false;
    }
  }

  remove(id: number) {
    this.todos.splice(id,1);
    this.todosChanged.emit(this.todos.slice());
    console.log(id);
  }
}
