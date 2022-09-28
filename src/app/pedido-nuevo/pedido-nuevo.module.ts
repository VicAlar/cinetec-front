import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PedidoNuevoRoutingModule} from './pedido-nuevo-routing.module';
import {PedidoNuevoComponent} from './pedido-nuevo.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import {ToastModule} from "primeng/toast";
import {OrderListModule} from "primeng/orderlist";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";

@NgModule({
  declarations: [
    PedidoNuevoComponent
  ],
  imports: [
    CommonModule,
    PedidoNuevoRoutingModule,
    ReactiveFormsModule,
    DropdownModule,
    FormsModule,
    ToastModule,
    OrderListModule,
    TableModule,
    ButtonModule,
    RippleModule,

  ]
})
export class PedidoNuevoModule { }
