import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ApiService} from "../../providers/api.service";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-nueva-pelicula',
  templateUrl: './nueva-pelicula.component.html',
  styleUrls: ['./nueva-pelicula.component.css']
})
export class NuevaPeliculaComponent implements OnInit {
  imgURL: any;
  mostrar: boolean = false;
  pelicula = this.fb.group({
      titulo: [''],
      descripcion: [''],
      imagen: [null],
      duracion: [''],
      reparto: [''],
      director: [''],
      genero: [''],
  })

  constructor(private api: ApiService, private fb: FormBuilder, private router: Router, private messageService: MessageService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
  }

  // Show Image Preview
  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (event: any) => {
        this.imgURL = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
      this.mostrar = true;
      this.cd.markForCheck();
      this.pelicula.get('imagen')?.setValue(event.target.files[0]);
    }
  }

  addPelicula() {

    const formData = new FormData();
    // @ts-ignore
    formData.append('titulo', this.pelicula.get('titulo').value);
    // @ts-ignore
    formData.append('descripcion', this.pelicula.get('descripcion').value);
    // @ts-ignore
    formData.append('imagen', this.pelicula.get('imagen').value);
    // @ts-ignore
    formData.append('duracion', this.pelicula.get('duracion').value);
    // @ts-ignore
    formData.append('reparto', this.pelicula.get('reparto').value);
    // @ts-ignore
    formData.append('director', this.pelicula.get('director').value);
    //@ts-ignore
    formData.append('genero', this.pelicula.get('genero').value);
    this.api.add('pelicula', formData).subscribe(
      (data: any) => {
        if (data != undefined) {
          this.messageService.add({severity:'success', summary:'Éxito', detail:'Película Añadida con éxito'});
          setTimeout(() => {
            this.router.navigate(['/peliculas'])
          } , 3600);
        } else {
          this.messageService.add({severity:'error', summary:'Error', detail:'Error al añadir película, por favor intenta de nuevo'});
        }
      }
    )
  }

}
