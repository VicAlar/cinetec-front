import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../providers/api.service";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})
export class SalasComponent implements OnInit {

  salas: any[] = []
  sala: any = {
    id: '',
    nombre: '',
    ciudad: '',
  }
  submitted: boolean = false;
  modal: boolean = false;

  constructor(private api: ApiService, private confirmationService: ConfirmationService, private  messageService: MessageService) { }

  ngOnInit(): void {
    this.api.get('sala').subscribe((data: any) => {
      this.salas = data;
    })
  }

  edit(sala: any) {
    this.sala = sala;
    this.modal = true;

  }

  delete(sala: any) {
    this.confirmationService.confirm({
      message: '¿Estas seguro que deseas eliminar la sala ' + sala.nombre + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.salas = this.salas.filter((val: { id: any; }) => val.id !== sala.id);
        this.messageService.add({severity:'success', summary: 'Exitoso', detail: 'Sala Eliminada', life: 3000});
      }
    });
  }

  hideDialog() {
    this.modal = false;
    this.submitted = false;
  }

  editarSala() {
    if (this.sala.nombre.trim()) {
      this.api.put('sala/' + this.sala.id, this.sala).subscribe((data: any) => {
        if (data != undefined) {
          this.messageService.add({severity:'success', summary: 'Exitoso', detail: 'Sala Editada', life: 3000});
          this.hideDialog();

        }
      })
    }
  }
}
