import { User } from "./user.model";

export class Transaccion {
    id?: number;
    monto: number;
    motivo: string;
    fecha: Date;
    usuarioRemitente: User;
    usuarioDestinatario: User;
  
    constructor(
      monto: number,
      motivo: string,
      fecha: Date,
      usuarioRemitente: User,
      usuarioDestinatario: User
    ) {
      
      this.monto = monto;
      this.motivo = motivo;
      this.fecha = fecha;
      this.usuarioRemitente = usuarioRemitente;
      this.usuarioDestinatario = usuarioDestinatario;
    }
  }
  