import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DetallePeliculaRoutingModule} from './detalle-pelicula-routing.module';
import {DetallePeliculaComponent} from './detalle-pelicula.component';
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputNumberModule} from "primeng/inputnumber";
import {DropdownModule} from "primeng/dropdown";
import {CalendarModule} from "primeng/calendar";
import {ToastModule} from "primeng/toast";
import {ConfirmDialogModule} from "primeng/confirmdialog";


@NgModule({
  declarations: [
    DetallePeliculaComponent
  ],
  imports: [
    CommonModule,
    DetallePeliculaRoutingModule,
    DialogModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    FormsModule,
    InputNumberModule,
    DropdownModule,
    ReactiveFormsModule,
    CalendarModule,
    ToastModule,
    ConfirmDialogModule
  ]
})
export class DetallePeliculaModule { }
