import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ComboNuevoRoutingModule} from './combo-nuevo-routing.module';
import {ComboNuevoComponent} from './combo-nuevo.component';
import {ReactiveFormsModule} from "@angular/forms";
import {PickListModule} from "primeng/picklist";
import {AutoFocusModule} from "primeng/autofocus";
import {ToastModule} from "primeng/toast";


@NgModule({
  declarations: [
    ComboNuevoComponent
  ],
  imports: [
    CommonModule,
    ComboNuevoRoutingModule,
    ReactiveFormsModule,
    PickListModule,
    AutoFocusModule,
    ToastModule
  ]
})
export class ComboNuevoModule { }
