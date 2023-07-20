import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {
  @Input() tarjeta: any; 
  @Input() balance: any;
  constructor() { }
  

   
  ngOnInit(): void {
  }
  ocultarNumeroTarjeta(numero: string): string {
    const numeroVisible = numero.trim().replace(/\s/g, ''); // Remover espacios en blanco
    const ultimosCuatroDigitos = numeroVisible.slice(-4);
    const gruposAnteriores = numeroVisible.slice(0, -4).replace(/\d/g, '*'); // Reemplazar dígitos por asteriscos
    const gruposOcultos = gruposAnteriores.replace(/(.{4})/g, '$1 '); // Agregar espacio después de cada grupo de 4 caracteres
    return gruposOcultos + ultimosCuatroDigitos;
  }
   convertirFecha(fecha: number[]): string {
    const [anio, mes] = fecha;
    return `${mes.toString().padStart(2, '0')}/${anio}`;
  }
  
  
}
