import { Tarjeta } from './tarjeta.model';
import { Transaccion } from './transaccion.model';

export class User {
  id?: number;
  nombre: string;
  apellido: string;
  nroDocumento: number;
  transacciones: Transaccion[];
  tarjetas: Tarjeta[];
  balance: number;

  constructor(
    nombre: string,
    apellido: string,
    nroDocumento: number,
    transacciones: Transaccion[] = [],
    tarjetas: Tarjeta[] = [],
    balance: number
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.nroDocumento = nroDocumento;
    this.transacciones = transacciones;
    this.tarjetas = tarjetas;
    this.balance = balance;
  }
}
