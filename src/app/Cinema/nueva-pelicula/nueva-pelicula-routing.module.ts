import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NuevaPeliculaComponent} from './nueva-pelicula.component';

const routes: Routes = [{ path: '', component: NuevaPeliculaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevaPeliculaRoutingModule { }
