import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent {

  @Input({
    alias: 'message',
    required: true,
    transform: (value: string) => {
      return "Mon père a dit : " + value
    }
  })
  messageDePapa = "je n'ai encore rien reçu";
}
