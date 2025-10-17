import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/sayHello.service';
import { TodoService } from 'src/app/todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ListComponent } from '../list/list.component';
import { CvCardComponent } from '../cv-card/cv-card.component';
import { EmbaucheComponent } from '../embauche/embauche.component';

@Component({
    selector: 'app-cv',
    templateUrl: './cv.component.html',
    styleUrls: ['./cv.component.css'],
    // Pour la meme dépendance je peux avoir +eurs instances
    providers: [],
    standalone: true,
    imports: [
    ListComponent,
    CvCardComponent,
    EmbaucheComponent,
    AsyncPipe
],
})
export class CvComponent {
  // State de notre composant
  cvService = inject(CvService);
  selectedCv$: Observable<Cv> = this.cvService.selectCv$;
  //selectedCv: Cv | null = null;

  cvs$ = this.cvService.getCvs()
    .pipe(
     catchError((e) => {
       this.toastr.error(
         `Les données sont fictives merci de contacter l'admin`
       );
       return of(this.cvService.getFakeCvs())
    })
  );
  //cvs: Cv[] = [];
  loggerService = inject(LoggerService);
  todoService = inject(TodoService);
  toastr = inject(ToastrService);
  constructor(
    private sayHelloService: SayHelloService
  ) //  private photocopieuse: Photcopieuse
  {
    this.loggerService.logger('je fais expré de bosser :d');
    this.sayHelloService.hello();
    this.toastr.info('Bienvenu dans notre CvTech :D');
    // this.cvService.getCvs().subscribe({
    //   next: (cvs) => this.cvs = cvs,
    //   error: (e) => {
    //     this.cvs = this.cvService.getFakeCvs();
    //     this.toastr.error(`Les données sont fictives merci de contacter l'admin`)
    //   }
    // })
    // this.cvService.selectCv$.subscribe({
    //   next: cv => {
    //     console.log({cv});

    //     this.selectedCv = cv;
    //   }
    // })
  }
}
