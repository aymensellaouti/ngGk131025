import {  inject, Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { APP_API } from 'src/app/config/app-api.config';


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
   * C'est le subject des cvs sélectionnés
   */
  #selectCvSubject$ = new Subject<Cv>();
  http = inject(HttpClient);
  /**
   * Le flux des cvs sélectionnés
   */
  selectCv$ = this.#selectCvSubject$.asObservable();


  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(APP_API.cv);
  }
  getCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(APP_API.cv + id);
  }
  deleteCvById(id: number): Observable<Cv> {
    // Todo: Ajouter le token via un header (Authorization) ou un param (access_token)
    return this.http.delete<Cv>(APP_API.cv + id);
  }

  /**
   * Retourne la liste des cvs
   * @returns Cv[]
   */
  getFakeCvs(): Cv[] {
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
    return this.cvs.find(cv => cv.id == id) ?? null;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): boolean {
        const index = this.cvs.indexOf(cv);
    if (index != -1) {
      this.cvs.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   * Ajoute le cv sélectionné au flux des cvs sélectionnés
   * @param cv : Le cv sélectionné
   */
  selectCv(cv: Cv): void {
    this.#selectCvSubject$.next(cv);
  }
}
