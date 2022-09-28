import {Component, OnInit} from '@angular/core';
import {SidebarService} from "../../providers/sidebar.service";
import {HomeSvgComponent} from "../../../assets/svg/home/home.component";
import {MovieSvgComponent} from "../../../assets/svg/movie/movie.component";
import {SalaSvgComponent} from "../../../assets/svg/salas/sala.component";
import {BoletaSvgComponent} from "../../../assets/svg/boleta/boleta.component";
import {InventarioSvgComponent} from "../../../assets/svg/inventario/inventario.component";
import {ComboSvgComponent} from "../../../assets/svg/combos/combo.component";
import {VentaSnacksSvgComponent} from "../../../assets/svg/ventaSnacks/ventaSnacks.component";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {

  routes: any[] = [];

  constructor(public sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.routes = [
      {
        name: 'Inicio',
        items: [
          {
            label: 'Dashboard',
            icon: HomeSvgComponent,
            routerLink: '/dashboard',
          },
        ],
      },
      {
        name: 'Cine',
        items: [
          {
            label: 'Películas',
            icon: MovieSvgComponent,
            routerLink: '/peliculas',
          },
          {
            label: 'Salas',
            icon: SalaSvgComponent,
            routerLink: '/salas',
          },
          {
            label: 'Venta de boletas',
            icon: BoletaSvgComponent,
            routerLink: '/boletas',
          },
        ],
      },
      {
        name: 'Snacks',
        items: [
          {
            label: 'Snacks',
            icon: InventarioSvgComponent,
            routerLink: '/snacks',
          },
          {
            label: 'Combos',
            icon: ComboSvgComponent,
            routerLink: '/combos',
          },
          {
            label: 'Venta de snacks',
            icon: VentaSnacksSvgComponent,
            routerLink: '/ventaSnacks',
          },
        ],
      },
    ];
  }
}
