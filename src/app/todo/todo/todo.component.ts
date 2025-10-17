import { Component, inject } from "@angular/core";
import { TodoService } from "../service/todo.service";
import { Todo } from "../model/todo";
import { AsyncPipe, JsonPipe } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css'],
    providers: [TodoService],
    standalone: true,
    imports: [FormsModule, AsyncPipe, JsonPipe]
})
export class TodoComponent {
  todoService = inject(TodoService);
  todos = this.todoService.getTodos();
  todosApi$ = this.todoService.getTodosFromApi();
  todo = new Todo();
  constructor() {
    this.todoService.getTodosFromApi().subscribe({
      next:(todos) => {
        console.log(todos);
      }
    });
  }
  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }
  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }


}
