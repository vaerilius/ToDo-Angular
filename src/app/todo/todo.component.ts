import {Component, OnInit} from '@angular/core';
import {TodoService} from './todo.service';
import {Todo} from './todo.model';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  form: FormGroup;
  editTodo = false;
  id: number;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.initForm();
  }

  addTodo(inputTodo: { name: string, isDone: boolean }) {
    this.todoService.addTodo(new Todo(inputTodo.name));
    this.form.reset();
    this.editTodo = false;
  }

  private initForm() {
    let todoInput = '';
    let todoStatus = false;

    if (this.editTodo) {
      const todo = this.todoService.getTodo(this.id);
      todoInput = todo.name;
      todoStatus = todo.isDone;
    }
    this.form = new FormGroup({
      'name': new FormControl(todoInput),
      isDone: new FormControl(todoStatus)
    });

  }

  onSubmit() {
    console.log(this.form.value);
    this.addTodo(this.form.value);

  }
}
