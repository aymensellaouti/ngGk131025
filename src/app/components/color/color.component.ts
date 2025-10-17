import { Component } from '@angular/core';

@Component({
    selector: 'app-color',
    templateUrl: './color.component.html',
    styleUrls: ['./color.component.css'],
    standalone: true,
})
export class ColorComponent {
  // State
  defaultColor = 'red';
  color = this.defaultColor;

  // Comportement
  /**
   * Permet de modifier la couleur du background de la div
   * @param newColor : représente la nouvelle couleur à
   * affecter
   */
  changeColor(newColor: HTMLInputElement) {
    this.color = newColor.value;
    newColor.value = '';
  }

  /**
   * Cette méthode réinitialise la valeur de la couleur
   * avec la valeur par défaut
   */
  reset() {
    this.color = this.defaultColor;
  }
}
