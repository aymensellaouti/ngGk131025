import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { EmbaucheService } from '../services/embauche.service';
import { NgIf, NgFor } from '@angular/common';
import { ItemComponent } from '../item/item.component';


@Component({
    selector: 'app-embauche',
    templateUrl: './embauche.component.html',
    styleUrls: ['./embauche.component.css'],
    standalone: true,
    imports: [
        NgIf,
        NgFor,
        ItemComponent,
    ],
})
export class EmbaucheComponent {
  embaucheService = inject(EmbaucheService);
  embauchees: Cv[] = this.embaucheService.getEmbauchees();
}
