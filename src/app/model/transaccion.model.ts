import { User } from './user.model';

export class Transaccion {
  id?: number;
  monto: number;
  tipo: string;
  fecha: any;
  usuarioRemitente: User;
  usuarioDestinatario: User;
  estado:string;

  constructor(
    monto: number,
    tipo: string,
    fecha: any,
    usuarioRemitente: User,
    usuarioDestinatario: User,
    estado:string
  ) {
    this.monto = monto;
    this.tipo = tipo;
    this.fecha = fecha;
    this.usuarioRemitente = usuarioRemitente;
    this.usuarioDestinatario = usuarioDestinatario;
    this.estado = estado;
  }
}
