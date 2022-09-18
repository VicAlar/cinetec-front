import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {InventarioComponent} from './inventario/inventario.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {SalaComponent} from './sala/sala.component';
import {RegistropedidosComponent} from './registropedidos/registropedidos.component';
import {RegistrocombosComponent} from './registrocombos/registrocombos.component';
import {RippleModule} from 'primeng/ripple';
import {RegistroComponent} from './registro/registro.component';
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
import {ApiService} from "./providers/api.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {SidebarService} from "./providers/sidebar.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InventarioComponent,
    SalaComponent,
    RegistropedidosComponent,
    RegistrocombosComponent,
    RegistroComponent,
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
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    RippleModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SidebarModule,
  ],
  providers: [
    ApiService,
    SidebarService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
