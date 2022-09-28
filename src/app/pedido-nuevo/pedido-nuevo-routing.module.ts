import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoNuevoComponent } from './pedido-nuevo.component';

const routes: Routes = [{ path: '', component: PedidoNuevoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoNuevoRoutingModule { }
