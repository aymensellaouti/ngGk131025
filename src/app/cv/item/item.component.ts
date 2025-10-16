import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Cv } from '../model/cv.model';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input({ required: true })
  cv!: Cv;
  @Input()
  size = 50;
  cvService = inject(CvService);
  // @Output() selectCv = new EventEmitter<Cv>()
  onSelectCv() {
    this.cvService.selectCv(this.cv);
    // this.selectCv.emit(this.cv);
  }
}
