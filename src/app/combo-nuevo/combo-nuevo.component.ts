import { Component, OnInit } from '@angular/core';
import {ApiService} from "../providers/api.service";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-combo-nuevo',
  templateUrl: './combo-nuevo.component.html',
  styleUrls: ['./combo-nuevo.component.css']
})
export class ComboNuevoComponent implements OnInit {

  lista1:any = [];
  lista2:any = [];

  combo = this.fb.group({
    nombre: [''],
    descuento:  null,
    Productos: [null],
  })
  constructor(private api: ApiService, private fb: FormBuilder, private router: Router, private messageService: MessageService) { }

  ngOnInit(): void {
    this.api.get('producto').subscribe((data: any) => {
      this.lista1 = data
      this.lista2 = []
    })
  }

  addCombo() {
//  Object.keys(this.lista2).forEach(key => {
//    key.split(',').forEach(elem => arr.push(Number(elem)))
//  });

    // @ts-ignore
    const arr = this.lista2.map(({id}) => id);
    this.combo.patchValue({'Productos': arr})
    console.log(this.combo.get('nombre')?.value, this.combo.get('descuento')?.value, this.combo.get('Productos')?.value)

    this.api.addform('combo', this.combo.value).subscribe(
      (data: any) => {
        if (data != undefined) {
          this.messageService.add({severity:'success', summary:'Éxito', detail:'Combo Añadido con éxito'});
          setTimeout(() => {
            this.router.navigate(['/combos'])
          } , 3600);
        } else {
          this.messageService.add({severity:'error', summary:'Error', detail:'Error al añadir combo, por favor intenta de nuevo'});
        }
      }
    )
  }
}
