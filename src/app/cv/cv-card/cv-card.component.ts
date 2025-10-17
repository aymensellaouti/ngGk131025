import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Cv } from '../model/cv.model';
import { EmbaucheService } from '../services/embauche.service';
import { ToastrService } from 'ngx-toastr';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DefaultImagePipe } from '../pipes/default-image.pipe';

@Component({
    selector: 'app-cv-card',
    templateUrl: './cv-card.component.html',
    styleUrls: ['./cv-card.component.css'],
    standalone: true,
    imports: [NgIf, RouterLink, DefaultImagePipe]
})
export class CvCardComponent implements OnInit, OnChanges {
  @Input()
  cv: Cv | null = null;
  embaucheService = inject(EmbaucheService);
  toastr = inject(ToastrService);
  embaucher() {
    if (this.cv) {
      if (this.embaucheService.embaucher(this.cv)) {
        this.toastr.success(`Le cv de ${this.cv.firstname} ${this.cv.name} a été prés sélectionné avec succès`)
      } else {
        this.toastr.warning(
          `Le cv de ${this.cv.firstname} ${this.cv.name} est déjà prés sélectionné`
        );
      }
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes});
  }
  ngOnInit(): void {
  }
}
