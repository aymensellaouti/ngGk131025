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

const routes: Routes = [
  {path: APP_ROUTES.home, component: FirstComponent},
  {path: APP_ROUTES.cv, component: CvComponent},
  {path: APP_ROUTES.detailsCv, component: DetailsCvComponent},
  {path: APP_ROUTES.todo, component: TodoComponent},
  {path: APP_ROUTES.card, component: CardComponent},
  {path: APP_ROUTES.word, component: MiniWordComponent},
  {path: APP_ROUTES.second, component: SecondComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
