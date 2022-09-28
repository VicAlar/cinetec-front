import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../providers/api.service";
import {retry} from "rxjs";
import {FormBuilder} from "@angular/forms";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  id: number | undefined;
  fun: any;
  pelicula:any = []
  funciones: any[] = [];
  salas: any[] = []
  modal: boolean = false;
  submit: boolean = false;
  funcion = this.fb.group({
    idPelicula: [0],
    idSala: [0],
    horaEntrada: [''],
    horaSalida: [''],
    fecha: ['']
  })

  constructor(private route: ActivatedRoute, private api: ApiService, private fb: FormBuilder, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.fun = this.route.params.subscribe(params => {
      this.id = +params['id'];
    })
    const token = localStorage.getItem('token')
    this.api.crearHeaders(token)
    this.api.get(`pelicula/${this.id}`).pipe(retry(3)).subscribe((data: any) => {
      this.pelicula = data
    })
    this.api.get(`funcionesPelicula/${this.id}`).pipe(retry(3)).subscribe((data: any) => {
      this.funciones = data
    })
    this.api.get('sala').pipe(retry(3)).subscribe(data => {
      this.salas = data
    })
  }


  openNew() {
    this.submit = false;
    this.modal = true;
  }

  hideDialog() {
    this.modal = false;
    this.submit = false;
  }

  crearFuncion() {
    this.submit = true;
    const formData = new FormData()

    // @ts-ignore
    formData.append('idPelicula', this.id.toString())
    // @ts-ignore
    formData.append('idSala', this.funcion.get('idSala')?.value)
    // @ts-ignore
    formData.append('fecha', this.funcion.get('fecha')?.value.toLocaleString('en-CA', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace('/', '-'))
    // @ts-ignore
    formData.append('horaEntrada', this.funcion.get('horaEntrada')?.value.toLocaleTimeString('es-MX'))
    // @ts-ignore
    formData.append('horaSalida', this.funcion.get('horaSalida')?.value.toLocaleTimeString('es-MX'))

    console.log(this.funcion.value)
    this.api.add('funcion', formData).subscribe(data => {
        if (data != undefined) {
          this.messageService.add({severity:'success', summary: 'Función Creada', detail: 'La función se ha creado con éxito'});
          this.funciones.push(data)
          this.modal = false;
        } else {
          this.messageService.add({severity:'error', summary: 'Error', detail: 'Hubo un error al crear la función'});
        }
      })

    }

    delete(id: number) {
      this.confirmationService.confirm({
        message: '¿Seguro deseas eliminar esta función?',
        accept: () => {
         this.api.delete(`funcion/${id}`).subscribe(data => {
            if (data === null) {
              this.messageService.add({severity:'success', summary: 'Función Eliminada', detail: 'La función se ha eliminado con éxito'});
              this.funciones = this.funciones.filter((val: any) => val.id != id);
            } else {
              this.messageService.add({severity:'error', summary: 'Error', detail: 'Hubo un error al eliminar la función'});
            }
         })
        }
      });
    }

  }

