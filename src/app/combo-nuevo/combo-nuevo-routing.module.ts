import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComboNuevoComponent } from './combo-nuevo.component';

const routes: Routes = [{ path: '', component: ComboNuevoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComboNuevoRoutingModule { }
