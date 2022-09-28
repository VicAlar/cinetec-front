import { Component, OnInit } from '@angular/core';
import {ApiService} from "../providers/api.service";

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidos:any = []
  pedido: any = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.get('pedido').subscribe((data: any) => {
      this.pedidos = data
      this.pedido = data
      console.log(this.pedidos, this.pedido)
    })
  }
}
