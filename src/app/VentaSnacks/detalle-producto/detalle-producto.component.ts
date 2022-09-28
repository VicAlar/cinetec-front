import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../providers/api.service";
import {retry} from "rxjs";

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  id: number | undefined;
  fun: any;
  producto:any = []
  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    this.fun = this.route.params.subscribe(params => {
      this.id = +params['id'];
    })
    const token = localStorage.getItem('token')
    this.api.crearHeaders(token)
    this.api.get(`producto/${this.id}`).pipe(retry(3)).subscribe((data: any) => {
      this.producto = data
    })
  }

}

