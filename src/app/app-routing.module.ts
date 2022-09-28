import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LayoutComponent} from './layout/layout.component';
import {SalaComponent} from './sala/sala.component';
import {InventarioComponent} from './inventario/inventario.component';
import {RegistropedidosComponent} from './registropedidos/registropedidos.component';
import {RegistroComponent} from './registro/registro.component';
import {AuthGuard} from "./providers/auth.guard";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
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
      { path: 'nueva-pelicula', loadChildren: () => import('./Cinema/nueva-pelicula/nueva-pelicula.module').then(m => m.NuevaPeliculaModule) },
      { path: 'pelicula/:id', loadChildren: () => import('./Cinema/detalle-pelicula/detalle-pelicula.module').then(m => m.DetallePeliculaModule) },
      { path: 'combos', loadChildren: () => import('./combos/registrocombos.module').then(m => m.RegistroCombosModule) },
      { path: 'combo-nuevo', loadChildren: () => import('./combo-nuevo/combo-nuevo.module').then(m => m.ComboNuevoModule) },
      { path: 'pedidos', loadChildren: () => import('./pedidos/pedidos.module').then(m => m.PedidosModule) },
      { path: 'pedido-nuevo', loadChildren: () => import('./pedido-nuevo/pedido-nuevo.module').then(m => m.PedidoNuevoModule) },
      { path: 'snacks', loadChildren: () => import('./VentaSnacks/productos/productos.module').then(m => m.ProductosModule) },
      { path: 'producto/:id', loadChildren: () => import('./VentaSnacks/detalle-producto/detalle-producto.module').then(m => m.DetalleProductoModule) },
      { path: 'nuevo-producto', loadChildren: () => import('./VentaSnacks/nuevo-producto/nuevo-producto.module').then(m => m.NuevoProductoModule) },
      { path: 'boletas', loadChildren: () => import('./Cinema/boletas/boletas.module').then(m => m.BoletasModule) },
      { path: 'nueva-boleta', loadChildren: () => import('./Cinema/nueva-boleta/nueva-boleta.module').then(m => m.NuevaBoletaModule) },
    ],

  },
  {path: 'inventario', component: InventarioComponent},
  {path: 'sala', component: SalaComponent},
  {path: 'registropedidos', component: RegistropedidosComponent},
  {path: 'registro', component: RegistroComponent},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
