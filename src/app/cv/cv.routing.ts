import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { APP_ROUTES } from "../config/app.routes";
import { authGuard } from "../auth/guards/auth.guard";

import { CvComponent } from "./cv/cv.component";

export const CV_ROUTES: Routes = [
  {path: APP_ROUTES.cv, loadComponent: () => import('./add-cv/add-cv.component').then(m => m.CvComponent)},
  {path: APP_ROUTES.AddCv, loadComponent: () => import('./add-cv/add-cv.component').then(m => m.AddCvComponent), canActivate: [authGuard]},
  {path: APP_ROUTES.detailsCv, loadComponent: () => import('./details-cv/details-cv.component').then(m => m.DetailsCvComponent)},
]
@NgModule({
  imports: [RouterModule.forChild(CV_ROUTES)],
  exports: [RouterModule],
})
export class CVRoutingModule {}
