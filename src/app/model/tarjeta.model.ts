export class Tarjeta {
  id?: number;
  numero: string;
  fechaVencimiento: Date;
  codigoSeguridad: string;

  constructor(
    
    numero: string,
    fechaVencimiento: Date,
    codigoSeguridad: string
  ) {
    
    this.numero = numero;
    this.fechaVencimiento = fechaVencimiento;
    this.codigoSeguridad = codigoSeguridad;
  }
}
