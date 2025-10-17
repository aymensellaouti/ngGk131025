import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { APP_ROUTES } from "../config/app.routes";
import { authGuard } from "../auth/guards/auth.guard";
import { AddCvComponent } from "./add-cv/add-cv.component";
import { CvComponent } from "./cv/cv.component";
import { DetailsCvComponent } from "./details-cv/details-cv.component";
export const CV_ROUTES: Routes = [
  {path: APP_ROUTES.cv, component: CvComponent},
  {path: APP_ROUTES.AddCv, component: AddCvComponent, canActivate: [authGuard]},
  {path: APP_ROUTES.detailsCv, component: DetailsCvComponent},
]
@NgModule({
  imports: [RouterModule.forChild(CV_ROUTES)],
  exports: [RouterModule],
})
export class CVRoutingModule {}
