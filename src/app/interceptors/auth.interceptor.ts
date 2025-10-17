import { inject, Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_CONSTANTES } from '../config/constantes.config';
import { AuthService } from '../auth/service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  authService = inject(AuthService);
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // vérifie qu'on est authentifié ou pas
    // si oui
    // console.log('In Interceptor');
    if (this.authService.isAuthenticated()) {
      // const headers = new HttpHeaders().set(
      //   APP_CONSTANTES.authHeaders,
      //   localStorage.getItem(APP_CONSTANTES.token) ?? ''
      // );
      // on clone la requéte
      // on y injecte le token
      const cloneReq = request.clone({
        setHeaders: {
          [APP_CONSTANTES.authHeaders]:
            localStorage.getItem(APP_CONSTANTES.token) ?? '',
        },
      });
      // on renvoi le clone
      return next.handle(cloneReq);
    }
    // si non
    return next.handle(request);
  }
}

export const AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}
