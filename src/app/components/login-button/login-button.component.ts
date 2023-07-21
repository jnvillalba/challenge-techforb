import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { TokenService } from 'src/app/service/token.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css'],
})
export class LoginButtonComponent implements OnInit {
  user: User = new User('', '', 0, [], [], 0);
  isLogged = false;

  constructor(
    private router: Router,
    private tokenService: TokenService,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.cargarPersona();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  login() {
    this.router.navigate(['/login']);
  }
  
  cargarPersona() {
    this.userService.details(1).subscribe(
      (data) => {
        this.user = data;
      },
      (error) => {
        console.log('Error al cargar el usuario', error);
      }
    );
  }
}
