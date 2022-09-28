import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoProductoRoutingModule } from './nuevo-producto-routing.module';
import { NuevoProductoComponent } from './nuevo-producto.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";

@NgModule({
  declarations: [
    NuevoProductoComponent
  ],
  imports: [
    CommonModule,
    NuevoProductoRoutingModule,
    ReactiveFormsModule,
    ToastModule,
  ]
})
export class NuevoProductoModule { }
