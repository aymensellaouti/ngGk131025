import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-fils',
    templateUrl: './fils.component.html',
    styleUrls: ['./fils.component.css'],
    standalone: true
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

  @Output() dadResponse = new EventEmitter<string>();

  sendMessage() {
    this.dadResponse.emit("ok je le ferai si je peux garder la monnaie :D");
  }
}
