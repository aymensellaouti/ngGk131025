import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { APP_ROUTES } from './config/app.routes';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';



import { DetailsCvComponent } from './cv/details-cv/details-cv.component';


import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { authGuard } from './auth/guards/auth.guard';
import { CustomPreloadingStrategy } from './preloading strategies/custom.preloading-strategy';

export const routes: Routes = [
  {path: APP_ROUTES.home, loadComponent: () => import('./components/first/first.component').then(m => m.FirstComponent)},
  {path: APP_ROUTES.login, loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent)},
  {
    path: APP_ROUTES.todo,
    loadChildren: () => import('./todo/todo.module').then(
      m => m.TodoModule
    )
  },
  {
    data: {
      preload: true
    },
    path: APP_ROUTES.cvPrefix,
    loadChildren: () => import('./cv/cv.module').then(
      m => m.CvModule
    )
  },
  {path: APP_ROUTES.card, loadComponent: () => import('./components/card/card.component').then(m => m.CardComponent)},
  {path: APP_ROUTES.word, loadComponent: () => import('./directives/mini-word/mini-word.component').then(m => m.MiniWordComponent)},
  {path: APP_ROUTES.second, loadComponent: () => import('./components/second/second.component').then(m => m.SecondComponent)},
  {path: '**', loadComponent: () => import('./components/nf404/nf404.component').then(m => m.NF404Component)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloadingStrategy
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
