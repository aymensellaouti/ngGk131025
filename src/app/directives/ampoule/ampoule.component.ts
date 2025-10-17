import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-ampoule',
    templateUrl: './ampoule.component.html',
    styleUrls: ['./ampoule.component.css'],
    standalone: true,
    imports: [NgClass]
})
export class AmpouleComponent {
  isOn = false;
}
