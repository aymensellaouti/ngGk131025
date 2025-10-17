import { AbstractControl, ValidatorFn } from "@angular/forms";

export const ageCinValidator:ValidatorFn = (form: AbstractControl) => {
  const cin = +form.get('cin')?.value.substring(0,2);
  const age = +form.get('age')?.value;
  if (!age || !cin) return null;
  if ((age > 60 && cin > 19) || (age < 60 && cin <= 19)) return {ageCin: `L'age et le cin ne correspondent pas`}
  return null;
}
