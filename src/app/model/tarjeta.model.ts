import { User } from "./user.model";

export class Tarjeta {
  id?: number;
  numero: string;
  fechaVencimiento: Date;
  codigoSeguridad: string;
  user: User;

  constructor(
    numero: string,
    fechaVencimiento: Date,
    codigoSeguridad: string,
    user: User
  ) {
    this.numero = numero;
    this.fechaVencimiento = fechaVencimiento;
    this.codigoSeguridad = codigoSeguridad;
    this.user = user;
  }

  getFormattedFechaVencimiento(): string {
    const formattedDate = this.fechaVencimiento.toLocaleDateString('es-ES', {
      month: '2-digit',
      year: 'numeric'
    });

    return formattedDate;
  }
}
