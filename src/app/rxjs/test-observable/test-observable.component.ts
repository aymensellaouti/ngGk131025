import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { filter, map, Observable, timer } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-test-observable',
    templateUrl: './test-observable.component.html',
    styleUrls: ['./test-observable.component.css'],
    standalone: true,
    imports: [AsyncPipe],
})
export class TestObservableComponent {
  myObservable$: Observable<number>;
  myObservableX3$: Observable<number>;
  toastr = inject(ToastrService);
  setTimeout$ = timer(1000);
  setInterval$ = timer(0,1000);
  // counter = 5;
  constructor() {
    // Je défini mon flux
    this.myObservable$ = new Observable((observer) => {
      let i = 5;
      const intervalIndex = setInterval(() => {
        if (!i) {
          observer.complete();
          clearInterval(intervalIndex);
        }
        observer.next(i--);
      }, 1000);
    });
    this.myObservableX3$ = this.myObservable$
      // 5 4 3 2 1
      .pipe(
        map((valeur) => valeur * 3)
        // 15 12 9 6 3
      );
    //Inscription
    this.myObservable$
    .subscribe({
      next: (val) => {
        console.log(val);
      },
    });
    // setTimeout(() => {
      this.myObservable$
        // 5 4 3 2 1
        .pipe(
          map( valeur  => valeur * 3),
          // 15 12 9 6 3
          filter(valeur => (valeur % 2) == 0)
          // 12 6
        )
        .subscribe({
          next: (data) => this.toastr.info('' + data),
          complete: () => this.toastr.error('Fin du compte à rebours'),
        });
    // }, 3000)
    // this.myObservable$.subscribe({
    //   next: valeur => this.counter = valeur
    // })
  }
}
