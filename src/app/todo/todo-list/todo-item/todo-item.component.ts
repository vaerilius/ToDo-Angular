import {Component, Input} from '@angular/core';
import {Todo} from '../../todo.model';
import {TodoService} from '../../todo.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent  {
  @Input() todo = Todo;
  @Input() index: number;
  faTrash = faTrash;
  constructor(private todoService: TodoService) {}

  removeTodo(id: number) {
    this.todoService.remove(id);
  }
}
