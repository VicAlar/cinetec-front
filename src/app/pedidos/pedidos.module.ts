import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PedidosRoutingModule} from './pedidos-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import {PedidosComponent} from './pedidos.component';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {CheckboxModule} from "primeng/checkbox";
import {ToolbarModule} from "primeng/toolbar";


@NgModule({
  declarations: [
    PedidosComponent
  ],
  imports: [
    CommonModule,
    PedidosRoutingModule,
    ReactiveFormsModule,
    ToastModule,
    TableModule,
    ButtonModule,
    CheckboxModule,
    FormsModule,
    ToolbarModule,
  ]
})
export class PedidosModule { }
