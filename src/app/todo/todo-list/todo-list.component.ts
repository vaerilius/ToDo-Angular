import {Component, OnInit} from '@angular/core';
import {TodoService} from '../todo.service';
import {Todo} from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos = this.todoService.getTodos();
    this.todoService.todosChanged.subscribe((todo: Todo[]) => {
      this.todos = todo;
    });
  }

  changeStatus(index: number) {
    this.todoService.changeStatus(index);
  }
}
