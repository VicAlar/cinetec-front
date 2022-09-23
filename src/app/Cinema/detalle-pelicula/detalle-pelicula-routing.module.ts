import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DetallePeliculaComponent} from './detalle-pelicula.component';

const routes: Routes = [{ path: '', component: DetallePeliculaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallePeliculaRoutingModule { }
