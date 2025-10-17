import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
    standalone: true,
    imports: [FormsModule],
})
export class CardComponent {
  firstname = 'aymen';
  name = 'sellaouti';
  job = 'Enseignant';
  path = 'rotating_card_profile3.png';
}
