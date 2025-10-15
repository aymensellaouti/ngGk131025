import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/sayHello.service';
import { TodoService } from 'src/app/todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  // Pour la meme dépendance je peux avoir +eurs instances
  providers: [],
})
export class CvComponent {
  // State de notre composant
  cvs = [
    new Cv(
      1,
      'Leherice',
      'Angélique',
      'Tech Lead',
      '12457896',
      18,
      'rotating_card_profile.png'
    ),
    new Cv(2, 'COUJANDASSAMY', 'Fabrice', 'Dev', '12457899', 18, '    '),
    new Cv(3, 'Sellaouti', 'Aymen', 'Enseignant', '88778877', 43, ''),
  ];
  selectedCv: Cv | null = null;
  loggerService = inject(LoggerService);
  todoService = inject(TodoService);
  toastr = inject(ToastrService);
  constructor(
    private sayHelloService: SayHelloService
  ) //  private photocopieuse: Photcopieuse
  {
    this.loggerService.logger('je fais expré de bosser :d');
    this.sayHelloService.hello();
    this.toastr.info('Bienvenu dans notre CvTech :D')
  }
}
