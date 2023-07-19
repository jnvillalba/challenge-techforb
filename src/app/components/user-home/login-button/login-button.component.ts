import { Component, Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {
  @Input() label: string = "";
  isLogged = false;

  constructor(private router: Router,
    private tokenService: TokenService
    ) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true
    }else{
      this.isLogged = false
    }
  }

  onLogOut(): void {
    this.tokenService.logOut()
    window.location.reload()
  }
  
  login(){
    this.router.navigate(['/login']);
  }

}
