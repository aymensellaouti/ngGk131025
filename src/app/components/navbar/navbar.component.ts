import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { APP_ROUTES } from 'src/app/config/app.routes';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive,
        NgIf,
    ],
})
export class NavbarComponent {
  routes = APP_ROUTES;
  authService = inject(AuthService);
  router = inject(Router);

  logout() {
    this.authService.logout();
    this.router.navigate([APP_ROUTES.login]);
  }
}
