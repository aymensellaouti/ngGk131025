import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
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
