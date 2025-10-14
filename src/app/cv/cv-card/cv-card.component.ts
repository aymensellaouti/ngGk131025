import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-cv-card',
  templateUrl: './cv-card.component.html',
  styleUrls: ['./cv-card.component.css']
})
export class CvCardComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes});
  }
  ngOnInit(): void {

  }
  @Input()
  cv: Cv | null = null;
}
