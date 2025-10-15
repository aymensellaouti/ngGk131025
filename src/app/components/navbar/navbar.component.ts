import { Component } from '@angular/core';
import { APP_ROUTES } from 'src/app/config/app.routes';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  routes = APP_ROUTES;
}
