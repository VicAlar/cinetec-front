import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NuevaBoletaComponent} from './nueva-boleta.component';

const routes: Routes = [{ path: '', component: NuevaBoletaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevaBoletaRoutingModule { }
