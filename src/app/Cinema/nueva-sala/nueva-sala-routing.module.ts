import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NuevaSalaComponent} from './nueva-sala.component';

const routes: Routes = [{ path: '', component: NuevaSalaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevaSalaRoutingModule { }
