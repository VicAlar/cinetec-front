import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LayoutComponent} from './layout/layout.component';
import {SalaComponent} from './sala/sala.component';
import {InventarioComponent} from './inventario/inventario.component';
import {RegistrocombosComponent} from './registrocombos/registrocombos.component';
import {RegistropedidosComponent} from './registropedidos/registropedidos.component';
import {RegistroComponent} from './registro/registro.component';
import {AuthGuard} from "./providers/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
        canActivate: [AuthGuard],
      },
      { path: 'peliculas', loadChildren: () => import('./Cinema/peliculas/peliculas.module').then(m => m.PeliculasModule) },
    ],

  },
  {path: 'inventario', component: InventarioComponent},
  {path: 'sala', component: SalaComponent},
  {path: 'registrocombos', component: RegistrocombosComponent},
  {path: 'registropedidos', component: RegistropedidosComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
