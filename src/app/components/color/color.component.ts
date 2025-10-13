import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent {
  defaultColor = 'red';
  // State
  color = this.defaultColor;

  // Comportement
  changeColor(newColor: HTMLInputElement) {
    this.color = newColor.value;
    newColor.value = '';
  }

  reset() {
    this.color = this.defaultColor;
  }
}
