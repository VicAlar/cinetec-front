import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidoNuevoRoutingModule } from './pedido-nuevo-routing.module';
import { PedidoNuevoComponent } from './pedido-nuevo.component';


@NgModule({
  declarations: [
    PedidoNuevoComponent
  ],
  imports: [
    CommonModule,
    PedidoNuevoRoutingModule
  ]
})
export class PedidoNuevoModule { }
