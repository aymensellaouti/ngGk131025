import { Component, inject } from "@angular/core";
import { Cv } from "../model/cv.model";
import { ActivatedRoute, Router } from "@angular/router";
import { CvService } from "../services/cv.service";
import { APP_ROUTES } from "src/app/config/app.routes";
import { catchError, EMPTY } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "src/app/auth/service/auth.service";

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent {
  //cv: Cv | null = null;
  cvService = inject(CvService);
  toastr = inject(ToastrService);
  acr = inject(ActivatedRoute);
  cv$ = this.cvService.getCvById(this.acr.snapshot.params['id']).pipe(
    catchError(e => {
      this.router.navigate([APP_ROUTES.cvPrefix]);
      return EMPTY;
    })
  );
  router = inject(Router);
  authService = inject(AuthService);

  constructor() {
    // const id = this.acr.snapshot.params['id'];
    // this.cvService.getCvById(id).subscribe({
    //   next: (cv) => (this.cv = cv),
    //   error: (e) => this.router.navigate([APP_ROUTES.cv]),
    // });
  }

  deleteCv(cv: Cv) {
      this.cvService.deleteCvById(cv.id).subscribe({
        next: () => this.router.navigate([APP_ROUTES.cvPrefix]),
        error: e => {
          console.log({e});
          this.toastr.error('Une erreur est survenu mercie de contacter l admin')
        }
      });
  }
}
