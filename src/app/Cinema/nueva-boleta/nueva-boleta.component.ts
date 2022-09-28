import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../providers/api.service";
import {FormBuilder} from "@angular/forms";
import {forkJoin, retry} from "rxjs";
import {ConfirmationService, MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nueva-boleta',
  templateUrl: './nueva-boleta.component.html',
  styleUrls: ['./nueva-boleta.component.css']
})
export class NuevaBoletaComponent implements OnInit {

  peliculas: any = []
  multiple: boolean = true
  funciones: any = []
  funcionSeleccionada: any;
  asientos: any = []
  asientosReservados: any = []
  total: number = 0
  idBoleta: any;
  boleta = this.fb.group({
    idPelicula: [''],
    funcion: [{}],
    idFuncion: ['' || []],
    nombreCliente: [''],
    fechaCompra: [''],
    idAsiento: [''],
  })

  constructor(private api: ApiService, private fb: FormBuilder, private confirmation: ConfirmationService,  private messageService: MessageService, private router: Router) { }


  ngOnInit(): void {
    this.api.get('pelicula').subscribe(data => {
      this.peliculas = data
    })
  }

  parseTime(time: string) {
    //Add Pm or Am
    let timeArray = time.split(':')
    let hour = parseInt(timeArray[0])
    if (hour > 12) {
      return `${time} PM`
    } else {
      return `${time} AM`
    }
  }

  getFunciones() {
    this.api.get(`funcionesPelicula/${this.boleta.get('idPelicula')?.value}`).pipe(retry(2)).subscribe(data => {
      this.funciones = data
    })
  }

  getAsientos() {
    this.funcionSeleccionada = this.boleta.get('funcion')?.value
    this.boleta.patchValue({
      idFuncion: this.funcionSeleccionada.id
    })
    const res = this.api.get(`asientosReservados/${this.funcionSeleccionada.id}`)
    const res2 = this.api.get(`asientosSala/${this.funcionSeleccionada.sala.id}`)

    forkJoin([res, res2]).subscribe(data => {
      this.asientosReservados = data[0]
      this.asientos = data[1].map((asiento: any) => {
        let asientoReservado = this.asientosReservados.find((asientoReservado: any) => asientoReservado.idAsiento == asiento.id)
        if (asientoReservado != undefined) {
          asiento.reservado = 'true'
        }
        return asiento
      })
    })
  }

  setTotal() {
    // @ts-ignore
    this.total = this.boleta.get('idAsiento')?.value.length * 15000
  }

  parsePrice(price: number) {
    return price.toLocaleString('es-CO', {
      style: 'currency',
      currency: 'COP',
    })
  }

  handleSubmit() {
    this.confirmation.confirm({
      message: '¿Está seguro de realizar la venta?',
      accept: () => {
        let fecha = new Date()
        const boleta = new FormData()
        // @ts-ignore
        boleta.append('idFuncion', this.boleta.get('idFuncion')?.value)
        // @ts-ignore
        boleta.append('nombreCliente', this.boleta.get('nombreCliente')?.value)
        boleta.append('fechaCompra', fecha.toLocaleString('en-CA', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }).replace('/', '-'))
        //Realiza el llamado a la api 'boleta' para crear la boleta
        this.api.addBoleta('boleta', boleta).subscribe(data => {
          this.idBoleta = data.id
          // Por cada asiento que se haya seleccionado se realiza el llamado a la ruta asiento para reservarlos
          // @ts-ignore
          this.boleta.get('idAsiento')?.value.forEach((idAsiento: any) => {
            const detalle = new FormData()
            detalle.append('idBoleta', this.idBoleta)
            // @ts-ignore
            detalle.append('idFuncion', this.boleta.get('idFuncion')?.value)
            detalle.append('idAsiento', idAsiento)
            // @ts-ignore
            detalle.append('reservado', true)
            this.api.addBoleta('asiento' ,detalle).subscribe()
          })
          //Mostrar mensaje de confirmación de venta de boleta
          this.messageService.add({severity:'success', summary: 'Venta realizada', detail: 'La venta se ha realizado con éxito'});
          setTimeout(() => {
            this.router.navigate(['/boletas'])
          }, 3600)
          if (data == undefined) {
            this.messageService.add({severity:'error', summary: 'Error', detail: 'Ha ocurrido un error al realizar la venta'});
          }
        })
      }
    })

  }
}
