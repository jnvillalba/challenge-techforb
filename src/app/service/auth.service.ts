import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NuevoUsuario } from '../model/nuevo-usuario.model';
import { LoginUsuario } from '../model/login-usuario.model';
import { JwtDto } from '../model/jwt-dto.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //authURL = environment.URL + 'auth/';

  authURL = 'http://localhost:8080/auth/';
  constructor(private httpClient: HttpClient) {}

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'register', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<any> {
    
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario);
  }
}