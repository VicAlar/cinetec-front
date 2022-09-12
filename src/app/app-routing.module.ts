import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {InventarioComponent} from "./inventario/inventario.component";
import {SalaComponent} from "./sala/sala.component";
import {RegistrocombosComponent} from "./registrocombos/registrocombos.component";
import {RegistropedidosComponent} from "./registropedidos/registropedidos.component";
import {RegistroComponent} from "./registro/registro.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'inventario', component: InventarioComponent},
  {path: 'sala', component: SalaComponent},
  {path: 'registrocombos', component: RegistrocombosComponent},
  {path: 'registropedidos', component: RegistropedidosComponent},
  {path: 'registro', component: RegistroComponent},
  {path: '**', redirectTo: '/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
