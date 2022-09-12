import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './components/header/header.component';
import {LayoutComponent} from './layout/layout.component';
import {BarsComponent} from '../assets/svg/bars/bars.component';
import {UserSvgComponent} from '../assets/svg/user/user.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {HomeSvgComponent} from '../assets/svg/home/home.component';
import {MovieSvgComponent} from '../assets/svg/movie/movie.component';
import {FuncionSvgComponent} from '../assets/svg/funcion/funcion.component';
import {BoletaSvgComponent} from '../assets/svg/boleta/boleta.component';
import {SalaSvgComponent} from '../assets/svg/salas/sala.component';
import {InventarioSvgComponent} from '../assets/svg/inventario/inventario.component';
import {ComboSvgComponent} from '../assets/svg/combos/combo.component';
import {VentaSnacksSvgComponent} from '../assets/svg/ventaSnacks/ventaSnacks.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    LayoutComponent,
    BarsComponent,
    UserSvgComponent,
    SidebarComponent,
    HomeSvgComponent,
    MovieSvgComponent,
    FuncionSvgComponent,
    BoletaSvgComponent,
    SalaSvgComponent,
    InventarioSvgComponent,
    ComboSvgComponent,
    VentaSnacksSvgComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
