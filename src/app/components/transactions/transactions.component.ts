import { Transaccion } from './../../model/transaccion.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit {
  @Input() transaccion: any;

  constructor() {}

  ngOnInit(): void {}

  convertirFecha(fecha: number[]): {
    fechaFormateada: string;
    horaFormateada: string;
  } {
    const [anio, mes, dia, horas, minutos, segundos] = fecha;
    const meses = [
      'ene',
      'feb',
      'mar',
      'abr',
      'may',
      'jun',
      'jul',
      'ago',
      'sep',
      'oct',
      'nov',
      'dic',
    ];
    const nombreMes = meses[mes - 1];
    const fechaFormateada = `${dia} ${nombreMes} ${anio}`;
    const horas12 = horas > 12 ? horas - 12 : horas;
    const amPm = horas >= 12 ? 'PM' : 'AM';
    const horaFormateada = `${horas12.toString().padStart(2, '0')}:${minutos
      .toString()
      .padStart(2, '0')}.${segundos.toString().padStart(2, '0')} ${amPm}`;

    return { fechaFormateada, horaFormateada };
  }

  obtenerEstilosYIcono(tipo: string): { clase: string; icono: string } {
    const esSaliente = tipo === 'egreso';
    const clase = esSaliente ? 'saliente-transaction' : 'entrante-transaction';
    const icono = esSaliente ? 'arrow_upward' : 'arrow_downward';

    return { clase, icono };
  }
  getTextColor(estado: string): string {
    switch (estado) {
      case 'completado':
        return '#4BA38D'; 
      case 'cancelado':
        return '#EC595B'; 
      case 'pendiente':
        return 'grey'; 
      default:
        return 'black'; 
    }
  }
}

