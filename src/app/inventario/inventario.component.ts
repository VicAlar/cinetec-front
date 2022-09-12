import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  inventarios = [
    {'nombre':'Maiz','cantidad':10,'ventas':100000,'ultima_fecha':'12/06/22'},
    {'nombre':'Coca Cola','cantidad':1,'ventas':400000,'ultima_fecha':'12/05/22'},
    {'nombre':'Sandwich','cantidad':0,'ventas':104000,'ultima_fecha':'12/07/22'},
    {'nombre':'Helado','cantidad':100,'ventas':1003000,'ultima_fecha':'11/07/22'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
