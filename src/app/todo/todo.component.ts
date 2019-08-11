import { Component, OnInit } from '@angular/core';
import {TodoService} from './todo.service';
import {Todo} from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  addTodo(inputTodo: HTMLInputElement) {
    this.todoService.addTodo(new Todo(inputTodo.value));
    inputTodo.value = '';
  }

}
