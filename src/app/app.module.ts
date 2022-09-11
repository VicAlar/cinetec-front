import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventarioComponent } from './inventario/inventario.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { SalaComponent } from './sala/sala.component';
import { RegistropedidosComponent } from './registropedidos/registropedidos.component';
import { RegistrocombosComponent } from './registrocombos/registrocombos.component';
import {RippleModule} from "primeng/ripple";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    InventarioComponent,
    SalaComponent,
    RegistropedidosComponent,
    RegistrocombosComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        TableModule,
        ButtonModule,
        RippleModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
