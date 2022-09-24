import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NuevaBoletaRoutingModule} from './nueva-boleta-routing.module';
import {NuevaBoletaComponent} from './nueva-boleta.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SelectButtonModule} from "primeng/selectbutton";
import {DropdownModule} from "primeng/dropdown";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ToastModule} from "primeng/toast";


@NgModule({
  declarations: [
    NuevaBoletaComponent
  ],
  imports: [
    CommonModule,
    NuevaBoletaRoutingModule,
    FormsModule,
    SelectButtonModule,
    DropdownModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    ToastModule
  ]
})
export class NuevaBoletaModule { }
