import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {CarouselModule} from "primeng/carousel";

@NgModule({
  declarations: [DashboardComponent],
    imports: [CommonModule, DashboardRoutingModule, CarouselModule],
})
export class DashboardModule {
}
