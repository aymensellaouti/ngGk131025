import { Component, inject, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { CvService } from '../services/cv.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cv } from '../model/cv.model';
import { APP_ROUTES } from 'src/app/config/app.routes';
import { filter } from 'rxjs';
import { APP_CONSTANTES } from 'src/app/config/constantes.config';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css'],
})
export class AddCvComponent implements OnDestroy {
  formBuilder = inject(FormBuilder);
  cvService = inject(CvService);
  router = inject(Router);
  toast = inject(ToastrService);
  form = this.formBuilder.group(
    {
      name: ['', { validators: Validators.required, updateOn: 'change' }],
      firstname: ['', Validators.required],
      path: ['', {nonNullable: false}],
      job: ['', Validators.required],
      cin: [
        '',
        {
          validators: [Validators.required, Validators.pattern('[0-9]{8}')],
        },
      ],
      age: [
        0,
        {
          validators: [Validators.required],
        },
      ],
    },
    {
      validators: [],
      asyncValidators: [],
      updateOn: 'change',
    }
  );
  constructor() {
    // this.name.valueChanges.subscribe({
    //   next:(valeur => console.log(valeur))
    // });
    // this.cin.statusChanges.subscribe({
    //   next: (valeur) => console.log(valeur),
    // });
    this.age.valueChanges.subscribe({
      next: age => {
        if (age <18) {
          this.path?.disable();
          this.path?.setValue('');
        }
        else this.path?.enable();
      }
    });

    // this.form.statusChanges.pipe(
    //   filter(() => this.form.valid)
    // ).subscribe({
    //   next: () => {
    //           localStorage.setItem(
    //             APP_CONSTANTES.addCvForm,
    //             JSON.stringify(this.form.value)
    //           );
    //   }
    // });

    const cv = localStorage.getItem(APP_CONSTANTES.addCvForm);
    if (cv) {
      this.form.patchValue(JSON.parse(cv));
    }
  }
  ngOnDestroy(): void {
    if (this.form.valid) {
      localStorage.setItem(
                  APP_CONSTANTES.addCvForm,
                  JSON.stringify(this.form.value)
                );
    }
  }
  addCv() {
   // console.log({ value: this.form.getRawValue() });

    this.cvService.addCv(this.form.getRawValue() as Cv).subscribe({
      next: (cv) => {
        this.toast.success(
          `Le cv ${cv.firstname} ${cv.name} a été ajouté avec succès`
        );
        localStorage.removeItem(APP_CONSTANTES.addCvForm);
        this.form.reset();
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: (e) => {
        this.toast.error(`Merci de contacter l'admin`);
      },
    });
  }

  get name(): AbstractControl {
    return this.form.get('name')!;
  }
  get firstname() {
    return this.form.get('firstname');
  }
  get age(): AbstractControl {
    return this.form.get('age')!;
  }
  get job() {
    return this.form.get('job');
  }
  get path() {
    return this.form.get('path');
  }
  get cin(): AbstractControl {
    return this.form.get('cin')!;
  }
}
