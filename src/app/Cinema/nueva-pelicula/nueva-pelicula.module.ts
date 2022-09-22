import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NuevaPeliculaRoutingModule} from './nueva-pelicula-routing.module';
import {NuevaPeliculaComponent} from './nueva-pelicula.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";

@NgModule({
  declarations: [
    NuevaPeliculaComponent
  ],
  imports: [
    CommonModule,
    NuevaPeliculaRoutingModule,
    ReactiveFormsModule,
    ToastModule,
  ]
})
export class NuevaPeliculaModule { }
