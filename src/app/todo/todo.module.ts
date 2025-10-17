import { NgModule } from "@angular/core";
import { TodoComponent } from "./todo/todo.component";
import { WeekTodoComponent } from "./week-todo/week-todo.component";
import { RouterModule } from "@angular/router";
import { TodoRoutingModule } from "./todo.routing";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    // Quels sont les modules qui me sont nécessaires
    imports: [
        TodoRoutingModule,
        FormsModule,
        CommonModule,
        TodoComponent,
        WeekTodoComponent
    ],
    // Mes providers
    providers: [],
    // Ce que je veux partager avec les autres
    exports: []
})
export class TodoModule {}
