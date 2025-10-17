import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../model/cv.model';
import { NgFor, NgClass } from '@angular/common';
import { ItemComponent } from '../item/item.component';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
    standalone: true,
    imports: [NgFor, NgClass, ItemComponent]
})
export class ListComponent {
  @Input()
  cvs: Cv[] = [];

  // @Output()
  // forwardCv = new EventEmitter<Cv>();
}
