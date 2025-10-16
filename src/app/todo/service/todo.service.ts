import { inject, Injectable } from "@angular/core";
import { Todo } from "../model/todo";
import { LoggerService } from "src/app/services/logger.service";
import { HttpClient } from "@angular/common/http";
import { TodoApi } from "../model/todoApi.dto";
import { APP_API } from "src/app/config/app-api.config";

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];
  loggerService = inject(LoggerService);
  http = inject(HttpClient);
  /**
   * elle retourne la liste des todos
   *
   * @returns Todo[]
   */
  getTodos(): Todo[] {
    return this.todos;
  }

  /**
   *Elle permet d'ajouter un todo
   *
   * @param todo: Todo
   *
   */
  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }

  /**
   * Delete le todo s'il existe
   *
   * @param todo: Todo
   * @returns boolean
   */
  deleteTodo(todo: Todo): boolean {
    const index = this.todos.indexOf(todo);
    if (index != -1) {
      this.todos.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   * Logger la liste des todos
   * @returns void
   */
  logTodos() {
    this.loggerService.logger(this.todos);
  }

  getTodosFromApi() {
    return this.http.get<TodoApi[]>(APP_API.todos);
  }
}
