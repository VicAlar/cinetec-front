import {Component, OnInit} from '@angular/core';
import {ApiService} from "../providers/api.service";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidos:any = []
  pedido: any = [];

  constructor(private api: ApiService, private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.api.get('pedido').subscribe((data: any) => {
      this.pedidos = data
      this.pedido = data
    })
  }

  delete(pedido:any){
    this.confirmationService.confirm({
      message: '¿Estas seguro que deseas eliminar el pedido ' + pedido.id + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.pedidos = this.pedidos.filter((val: { id: any; }) => val.id !== pedido.id);
        this.messageService.add({severity:'success', summary: 'Exitoso', detail: 'Pedido Eliminado', life: 3000});
      }
    });
  }
}
