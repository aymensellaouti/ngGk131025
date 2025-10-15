import {  Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';


@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs = [
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

  /**
   * Retourne la liste des cvs
   * @returns Cv[]
   */
  getCvs(): Cv[] {
    return this.cvs;
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findCvById(id: number): Cv | null {
    return null;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): boolean {
    return false;
  }
}
