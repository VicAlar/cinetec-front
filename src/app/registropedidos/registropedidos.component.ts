import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registropedidos',
  templateUrl: './registropedidos.component.html',
  styleUrls: ['./registropedidos.component.css']
})
export class RegistropedidosComponent implements OnInit {

  pedidos = [
    {'id_pedido':2,'numero_de_productos':2,'valor_vendido':135000,'fecha_venta':'12/7/22'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
