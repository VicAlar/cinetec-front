import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../providers/api.service";

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  peliculas:any = []

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token')
    this.api.crearHeaders(token)
    this.api.get('pelicula').subscribe((data: any) => {
      console.log(data)
      this.peliculas = data
    })
  }

}
