import { Component } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
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
    new Cv(
      2,
      'COUJANDASSAMY',
      'Fabrice',
      'Dev',
      '12457899',
      18,
      'rotating_card_profile2.png'
    ),
  ];

  selectedCv: Cv | null = null;
}
