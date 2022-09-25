import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComboNuevoRoutingModule } from './combo-nuevo-routing.module';
import { ComboNuevoComponent } from './combo-nuevo.component';
import {ReactiveFormsModule} from "@angular/forms";
import {PickListModule} from "primeng/picklist";


@NgModule({
  declarations: [
    ComboNuevoComponent
  ],
    imports: [
        CommonModule,
        ComboNuevoRoutingModule,
        ReactiveFormsModule,
        PickListModule
    ]
})
export class ComboNuevoModule { }
