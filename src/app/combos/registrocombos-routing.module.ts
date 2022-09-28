import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegistroCombosComponent} from './registrocombos.component';

const routes: Routes = [{ path: '', component: RegistroCombosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroCombosRoutingModule { }
