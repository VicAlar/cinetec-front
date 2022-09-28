import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../providers/api.service";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:any = []

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.get('producto').subscribe((data: any) => {
      this.productos = data
    })
  }

}
