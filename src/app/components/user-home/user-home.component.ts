import { UserService } from './../../service/user.service';
import { User } from './../../model/user.model';
import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';
@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css'],
})
export class UserHomeComponent implements OnInit {
  user: User = new User('', '', 0, [], [], [], 0);
  constructor(
    public userService: UserService,
    private tokenService: TokenService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
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
