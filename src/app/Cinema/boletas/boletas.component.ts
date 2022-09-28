import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../providers/api.service";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-boletas',
  templateUrl: './boletas.component.html',
  styleUrls: ['./boletas.component.css']
})
export class BoletasComponent implements OnInit {

  boletas: any = []
  boleta: any = {}
  dialogBoleta: boolean = false

  constructor(private api: ApiService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.api.get('boleta').subscribe((data: any) => {
      this.boletas = data
    })
  }

  edit(boleta: any) {
    this.boleta = {...boleta};
    this.dialogBoleta = true;
  }

  delete(boleta: any) {
    this.confirmationService.confirm({
      message: 'Estas seguro que deseas eliminar la boleta de ' + boleta.nombreCliente + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.boletas = this.boletas.filter((val: { id: any; }) => val.id !== boleta.id);
        this.boleta = {};
        this.messageService.add({severity:'success', summary: 'Exitoso', detail: 'Boleta Eliminada', life: 3000});
      }
    });
  }

}
