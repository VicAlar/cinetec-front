import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {

  constructor() { }
  salas = [
    {'nombre':'Sala1','ciudad':'Bogotá', 'pelicula':'shrek','sillas':10,'sillas_vendidas':8,'sillas_disponibles':2},
    {'nombre':'Sala2','ciudad':'Bogotá', 'pelicula':'shrek2','sillas':10,'sillas_vendidas':8,'sillas_disponibles':2},
    {'nombre':'Sala3','ciudad':'Medellín', 'pelicula':'shrek3','sillas':11,'sillas_vendidas':9,'sillas_disponibles':2},
  ]

  ngOnInit(): void {
  }

}
