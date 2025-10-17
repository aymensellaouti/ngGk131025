import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { CvService } from "../cv/services/cv.service";
import { map, of } from "rxjs";

export const uniqueCinValidator = (cvService: CvService): AsyncValidatorFn => {
  return (control: AbstractControl) => {
    const cin = control.value;
    if (!cin) return of(null);
    return cvService.getCvsByProperty('cin', cin).pipe(
      map(
        cvs => cvs.length ?
        {uniqueCin: `Le cin est déjà utilisé, il doit être unique`}
        : null
      )
    )
  }
}
