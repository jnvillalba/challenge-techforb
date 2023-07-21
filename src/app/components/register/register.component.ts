import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  nuevoUsuario: NuevoUsuario = new NuevoUsuario();
  tiposDocumento = ['DNI', 'CEDULA', 'PASAPORTE', 'OTRO'];
  errorMsj = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.authService.nuevo(this.nuevoUsuario).subscribe(
      (response) => {
       
        this.router.navigate(['/login']); 
      },
      (error) => {
        this.errorMsj = error.mensaje
        console.error('Error en el registro:', this.errorMsj);
        
        
      }
    );
  }
}
