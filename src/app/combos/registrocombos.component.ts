import {Component, OnInit} from '@angular/core';
import {ApiService} from "../providers/api.service";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-registrocombos',
  templateUrl: './registrocombos.component.html',
  styleUrls: ['./registrocombos.component.css']
})
export class RegistroCombosComponent implements OnInit {

  combos:any = []

  constructor(private api: ApiService, private  confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.api.get('combo').subscribe((data: any) => {
      this.combos = data
    })
  }

  delete(combo: any) {
    this.confirmationService.confirm({
      message: '¿Estas seguro que deseas eliminar el combo ' + combo.nombre + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.combos = this.combos.filter((val: { id: any; }) => val.id !== combo.id);
        this.messageService.add({severity:'success', summary: 'Exitoso', detail: 'Combo Eliminado', life: 3000});
      }
    });
  }
}
