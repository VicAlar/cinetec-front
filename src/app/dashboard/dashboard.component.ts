import {Component, OnInit} from '@angular/core';
import {ApiService} from "../providers/api.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  peliculas: any[] = []
  responsiveOptions: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.get('pelicula').subscribe((data:any) => {
      this.peliculas = data
    })
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

}
