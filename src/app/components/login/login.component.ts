import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario.model';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail= false;
  loginUsuario!: LoginUsuario;
  tipoDocumento!: string;
  nroDocumento!: string;
  password!: string;
  roles: string[] = [];
  errorMsj!: string;
  /*podria ser obtenido por un service */
  tiposDocumento = ['DNI', 'CEDULA', 'PASAPORTE', 'OTRO']; 
  
  constructor(
    private tokenService: TokenService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities()
    }
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.tipoDocumento,parseInt(this.nroDocumento), this.password)
       this.authService.login(this.loginUsuario).subscribe(data => {
        console.log(data)
          this.isLogged = true
          this.isLogginFail = false
          this.tokenService.setToken(data.token)
          this.tokenService.setUsername(data.nroDocumento)
          this.tokenService.setAuthorities(data.authorities)
          this.roles = data.authorities
          this.router.navigate([''])
      },err => {
          this.isLogged = false
          this.isLogginFail = true
          this.errorMsj =err.error.mensaje
          
          console.log(this.errorMsj)
      })
  }

}