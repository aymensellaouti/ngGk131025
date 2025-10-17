import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { APP_ROUTES } from './config/app.routes';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { CardComponent } from './components/card/card.component';
import { SecondComponent } from './components/second/second.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { NF404Component } from './components/nf404/nf404.component';
import { LoginComponent } from './auth/login/login.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { authGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {path: APP_ROUTES.home, component: FirstComponent},
  {path: APP_ROUTES.login, component: LoginComponent},
  {
    path: APP_ROUTES.todo,
    loadChildren: () => import('./todo/todo.module').then(
      m => m.TodoModule
    )
  },
  {path: APP_ROUTES.card, component: CardComponent},
  {path: APP_ROUTES.word, component: MiniWordComponent},
  {path: APP_ROUTES.second, component: SecondComponent},
  {path: '**', component: NF404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
