import {Component, Input} from '@angular/core';
import {Todo} from '../../todo.model';
import {TodoService} from '../../todo.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {faEdit} from '@fortawesome/free-solid-svg-icons/faEdit';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent  {
  @Input() todo = Todo;
  @Input() index: number;
  faTrash = faTrash;
  faEdit = faEdit;
  constructor(private todoService: TodoService) {}

  removeTodo(id: number) {
    this.todoService.remove(id);
  }

  editTodo(index: number) {
    this.todoService.edit(index);
  }
}
