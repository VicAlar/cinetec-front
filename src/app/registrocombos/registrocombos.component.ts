import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrocombos',
  templateUrl: './registrocombos.component.html',
  styleUrls: ['./registrocombos.component.css']
})
export class RegistrocombosComponent implements OnInit {

  combos = [
    {'id_combo':2,'cantidad_productos':3,'numero_de_combos':2,'valor_pagado':135000, 'fecha_venta':'11/05/22'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
