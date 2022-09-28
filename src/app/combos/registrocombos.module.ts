import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RegistroCombosRoutingModule} from './registrocombos-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import {RegistroCombosComponent} from "./registrocombos.component";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {ToolbarModule} from "primeng/toolbar";
import {StyleClassModule} from "primeng/styleclass";
import {RippleModule} from "primeng/ripple";
import {ConfirmDialogModule} from "primeng/confirmdialog";


@NgModule({
  declarations: [
    RegistroCombosComponent
  ],
  imports: [
    CommonModule,
    RegistroCombosRoutingModule,
    ReactiveFormsModule,
    ToastModule,
    TableModule,
    ButtonModule,
    ToolbarModule,
    StyleClassModule,
    RippleModule,
    ConfirmDialogModule,
  ]
})
export class RegistroCombosModule { }
