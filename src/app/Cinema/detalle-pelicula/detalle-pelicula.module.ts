import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DetallePeliculaRoutingModule} from './detalle-pelicula-routing.module';
import {DetallePeliculaComponent} from './detalle-pelicula.component';


@NgModule({
  declarations: [
    DetallePeliculaComponent
  ],
  imports: [
    CommonModule,
    DetallePeliculaRoutingModule
  ]
})
export class DetallePeliculaModule { }
