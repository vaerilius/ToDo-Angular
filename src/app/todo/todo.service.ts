import {Todo} from './todo.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  todosChanged = new Subject<Todo[]>();

  private todosDone: Todo[] = [];

  private todos: Todo[] = [
    new Todo('test 1'),
    new Todo('test 2'),
    new Todo('test 3'),
  ];
  private editTodo: Todo;

  constructor() {
  }

  getTodos() {
    return this.todos.slice();
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    this.todosChanged.next(this.todos.slice());
  }

  getTodo(id: number) {
    return this.todos[id];
  }

  changeStatus(id: number) {
    this.setStatus(this.getTodo(id));
  }

  private setStatus(todoStatus: Todo) {
    if (!todoStatus.isDone) {
      todoStatus.isDone = true;
    } else {
      todoStatus.isDone = false;
    }
  }

  remove(id: number) {
    this.todos.splice(id, 1);
    this.todosChanged.next(this.todos.slice());
  }

  edit(index: number) {

    this.editTodo = this.getTodo(index);
  }
}
