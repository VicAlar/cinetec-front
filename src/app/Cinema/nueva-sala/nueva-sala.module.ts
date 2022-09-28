import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NuevaSalaRoutingModule} from './nueva-sala-routing.module';
import {NuevaSalaComponent} from './nueva-sala.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";


@NgModule({
  declarations: [
    NuevaSalaComponent
  ],
  imports: [
    CommonModule,
    NuevaSalaRoutingModule,
    ReactiveFormsModule,
    ToastModule
  ]
})
export class NuevaSalaModule { }
