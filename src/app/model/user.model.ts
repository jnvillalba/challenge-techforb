import { Tarjeta } from './tarjeta.model';
import { Transaccion } from './transaccion.model';

export class User {
  id?: number;
  nombre: string;
  apellido: string;
  nroDocumento: number;
  transaccionesSalientes: Transaccion[];
  transaccionesEntrantes: Transaccion[];
  tarjetas: Tarjeta[];
  balance: number;

  constructor(
    nombre: string,
    apellido: string,
    nroDocumento: number,
    transaccionesSalientes: Transaccion[] = [],
    transaccionesEntrantes: Transaccion[] = [],
    tarjetas: Tarjeta[] = [],
    balance: number
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.nroDocumento = nroDocumento;
    this.transaccionesSalientes = transaccionesSalientes;
    this.transaccionesEntrantes = transaccionesEntrantes;
    this.tarjetas = tarjetas;
    this.balance = balance;
  }
}
