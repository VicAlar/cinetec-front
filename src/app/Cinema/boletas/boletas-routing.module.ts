import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BoletasComponent} from './boletas.component';

const routes: Routes = [{ path: '', component: BoletasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoletasRoutingModule { }
