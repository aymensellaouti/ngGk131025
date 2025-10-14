import { Component, Input } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  cvs: Cv[] = [];
}
