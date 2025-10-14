import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'input[appRainbow][type=text]',
})
export class RainbowDirective {
  // Quelle apparence je veux gérer
  @HostBinding('style.color') color = 'black';
  @HostBinding('style.borderColor') bc = 'black';
  constructor() {
    console.log('Je construit une nouvelle instance');
  }

  // Comportement
  @HostListener('keyup') onKeyup() {
    this.color = this.bc = this.getRandomColor();
  }

  getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
