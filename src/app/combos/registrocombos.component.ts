import { Component, OnInit } from '@angular/core';
import {ApiService} from "../providers/api.service";

@Component({
  selector: 'app-registrocombos',
  templateUrl: './registrocombos.component.html',
  styleUrls: ['./registrocombos.component.css']
})
export class RegistroCombosComponent implements OnInit {

  combos:any = []

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.get('combo').subscribe((data: any) => {
      this.combos = data
      console.log(this.combos)
    })
  }
}
