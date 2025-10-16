import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { APP_API } from "src/app/config/app-api.config";
import { Credentials } from "../dto/credentials.dto";
import { LoginResonse } from "../dto/login-response.dto";
import { Observable, tap } from "rxjs";
import { APP_CONSTANTES } from "src/app/config/constantes.config";

@Injectable({providedIn: 'root'})
export class AuthService {
  http = inject(HttpClient);
  login(credentials: Credentials): Observable<LoginResonse> {
    return this.http.post<LoginResonse>(APP_API.login, credentials).pipe(
      tap(response => {
        localStorage.setItem(APP_CONSTANTES.token, response.id)
      })
    );
  }
  logout() {
    localStorage.removeItem(APP_CONSTANTES.token);
  }
  isAuthenticated(): boolean {
    return !!localStorage.getItem(APP_CONSTANTES.token);
  }
}
