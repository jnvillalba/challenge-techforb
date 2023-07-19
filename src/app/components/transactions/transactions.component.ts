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
}
