import { Component } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';
import { RainbowDirective } from '../../directives/rainbow.directive';
import { SecondComponent } from '../second/second.component';
import { UpperCasePipe, CurrencyPipe, DatePipe } from '@angular/common';
import { Btc2usdPipe } from '../../pipes/btc2usd.pipe';

@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.css'],
    standalone: true,
    imports: [HighlightDirective, RainbowDirective, SecondComponent, UpperCasePipe, CurrencyPipe, DatePipe, Btc2usdPipe]
})
export class FirstComponent {
  //State
  name = "Angélique";
  isHidden = false;
  date = new Date();
  constructor() {
    setTimeout(() => {
      this.name = 'Fabrice'
    }, 2000);

    // setInterval(() => {
    //   this.isHidden = !this.isHidden;
    // },1000)
  }
  //Comportement
  showHide() {
    this.isHidden = !this.isHidden;
  }
}
