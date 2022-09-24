import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BoletasRoutingModule} from './boletas-routing.module';
import {BoletasComponent} from './boletas.component';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {FormsModule} from "@angular/forms";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ToolbarModule} from "primeng/toolbar";
import {ToastModule} from "primeng/toast";
import {InputTextModule} from "primeng/inputtext";
import {DialogModule} from "primeng/dialog";


@NgModule({
  declarations: [
    BoletasComponent
  ],
  imports: [
    CommonModule,
    BoletasRoutingModule,
    TableModule,
    ButtonModule,
    RippleModule,
    FormsModule,
    ConfirmDialogModule,
    ToolbarModule,
    ToastModule,
    InputTextModule,
    DialogModule
  ]
})
export class BoletasModule { }
