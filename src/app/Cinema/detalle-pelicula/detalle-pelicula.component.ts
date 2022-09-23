import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../providers/api.service";
import {retry} from "rxjs";

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  id: number | undefined;
  fun: any;
  pelicula:any = []
  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    this.fun = this.route.params.subscribe(params => {
      this.id = +params['id'];
    })
    const token = localStorage.getItem('token')
    this.api.crearHeaders(token)
    this.api.get(`pelicula/${this.id}`).pipe(retry(3)).subscribe((data: any) => {
      this.pelicula = data
    })
  }

}
