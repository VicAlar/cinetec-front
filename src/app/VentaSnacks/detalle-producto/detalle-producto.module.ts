import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleProductoRoutingModule } from './detalle-producto-routing.module';
import { DetalleProductoComponent } from './detalle-producto.component';


@NgModule({
  declarations: [
    DetalleProductoComponent
  ],
  imports: [
    CommonModule,
    DetalleProductoRoutingModule
  ]
})
export class DetalleProductoModule { }
