import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SalasRoutingModule} from './salas-routing.module';
import {SalasComponent} from './salas.component';
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {RippleModule} from "primeng/ripple";
import {ToolbarModule} from "primeng/toolbar";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ToastModule} from "primeng/toast";
import {InputTextModule} from "primeng/inputtext";
import {DialogModule} from "primeng/dialog";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SalasComponent
  ],
  imports: [
    CommonModule,
    SalasRoutingModule,
    ButtonModule,
    TableModule,
    RippleModule,
    ToolbarModule,
    ConfirmDialogModule,
    ToastModule,
    InputTextModule,
    DialogModule,
    FormsModule
  ]
})
export class SalasModule { }
