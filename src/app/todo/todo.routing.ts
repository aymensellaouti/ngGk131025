import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { APP_ROUTES } from "../config/app.routes";
import { TodoComponent } from "./todo/todo.component";
export const TODO_ROUTES: Routes = [
    {path: APP_ROUTES.todo, component: TodoComponent},
]
@NgModule({
  imports: [RouterModule.forChild(TODO_ROUTES)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
