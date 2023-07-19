import { UserService } from './../../service/user.service';
import { User } from './../../model/user.model';
import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/model/transaccion.model';
import { TokenService } from 'src/app/service/token.service';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

/** Based on the screen size, switch from standard to one column per row */
cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  map(({ matches }) => {
    if (matches) {
      return {
        columns: 1,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 1, rows: 2 },
        table: { cols: 1, rows: 4 },
      };
    }

   return {
      columns: 4,
      miniCard: { cols: 1, rows: 1 },
      chart: { cols: 2, rows: 2 },
      table: { cols: 4, rows: 4 },
    };
  })
);

  user: User = new User("", "", 0, [], [],[],0);
  constructor(
    public userService: UserService,
    private tokenService: TokenService,
    private breakpointObserver: BreakpointObserver
  ) { }

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
