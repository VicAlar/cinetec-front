import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LayoutComponent} from './layout/layout.component';
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
      { path: 'peliculas', loadChildren: () => import('./Cinema/peliculas/peliculas.module').then(m => m.PeliculasModule), canActivate: [AuthGuard], },
      { path: 'nueva-pelicula', loadChildren: () => import('./Cinema/nueva-pelicula/nueva-pelicula.module').then(m => m.NuevaPeliculaModule), canActivate: [AuthGuard], },
      { path: 'pelicula/:id', loadChildren: () => import('./Cinema/detalle-pelicula/detalle-pelicula.module').then(m => m.DetallePeliculaModule) },
      { path: 'combos', loadChildren: () => import('./combos/registrocombos.module').then(m => m.RegistroCombosModule), canActivate: [AuthGuard], },
      { path: 'combo-nuevo', loadChildren: () => import('./combo-nuevo/combo-nuevo.module').then(m => m.ComboNuevoModule), canActivate: [AuthGuard], },
      { path: 'pedidos', loadChildren: () => import('./pedidos/pedidos.module').then(m => m.PedidosModule), canActivate: [AuthGuard], },
      { path: 'pedido-nuevo', loadChildren: () => import('./pedido-nuevo/pedido-nuevo.module').then(m => m.PedidoNuevoModule), canActivate: [AuthGuard], },
      { path: 'snacks', loadChildren: () => import('./VentaSnacks/productos/productos.module').then(m => m.ProductosModule), canActivate: [AuthGuard], },
      { path: 'producto/:id', loadChildren: () => import('./VentaSnacks/detalle-producto/detalle-producto.module').then(m => m.DetalleProductoModule), canActivate: [AuthGuard], },
      { path: 'nuevo-producto', loadChildren: () => import('./VentaSnacks/nuevo-producto/nuevo-producto.module').then(m => m.NuevoProductoModule), canActivate: [AuthGuard], },
      { path: 'boletas', loadChildren: () => import('./Cinema/boletas/boletas.module').then(m => m.BoletasModule), canActivate: [AuthGuard], },
      { path: 'nueva-boleta', loadChildren: () => import('./Cinema/nueva-boleta/nueva-boleta.module').then(m => m.NuevaBoletaModule), canActivate: [AuthGuard], },
      { path: 'salas', loadChildren: () => import('./Cinema/salas/salas.module').then(m => m.SalasModule), canActivate: [AuthGuard], },
      { path: 'nueva-sala', loadChildren: () => import('./Cinema/nueva-sala/nueva-sala.module').then(m => m.NuevaSalaModule), canActivate: [AuthGuard], },
    ],
  },
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
