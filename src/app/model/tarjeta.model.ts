export class Tarjeta {
  id?: number;
  numero: string;
  fechaVencimiento: any;
  codigoSeguridad: string;
  titular: string;

  constructor(
    numero: string,
    fechaVencimiento: any,
    codigoSeguridad: string,
    titular: string,

  ) {
    this.numero = numero;
    this.fechaVencimiento = fechaVencimiento;
    this.codigoSeguridad = codigoSeguridad;
    this.titular = titular;

  }
}
