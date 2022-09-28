import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../providers/api.service";
import {FormBuilder} from "@angular/forms";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nueva-sala',
  templateUrl: './nueva-sala.component.html',
  styleUrls: ['./nueva-sala.component.css']
})
export class NuevaSalaComponent implements OnInit {

  sala = this.fb.group({
    nombre: '',
    capacidad: '',
    ciudad: '',
  })

  constructor(private api: ApiService, private fb: FormBuilder, private messageService: MessageService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.api.addBoleta('sala' , this.sala.value).subscribe(
      (data) => {
        this.messageService.add({severity:'success', summary: 'Sala creada', detail: 'La sala se ha creado con éxito'});
        setTimeout(() => {
          this.router.navigate(['/salas'])
        }, 3600)
        if (data == undefined) {
          this.messageService.add({severity:'error', summary: 'Error', detail: 'Ha ocurrido un error al crear la sala'});
        }
      })
  }

}
