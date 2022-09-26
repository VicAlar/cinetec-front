import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ApiService} from "../../providers/api.service";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {
  imgURL: any;
  mostrar: boolean = false;
  producto = this.fb.group({
    nombre: [''],
    precio: [''],
    imagen: [null],
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
      this.producto.get('imagen')?.setValue(event.target.files[0]);
    }
  }

  addProducto() {

    const formData = new FormData();
    // @ts-ignore
    formData.append('nombre', this.producto.get('nombre').value);
    // @ts-ignore
    formData.append('precio', this.producto.get('precio').value);
    // @ts-ignore
    formData.append('imagen', this.producto.get('imagen').value);
    this.api.add('producto', formData).subscribe(
      (data: any) => {
        if (data != undefined) {
          this.messageService.add({severity:'success', summary:'Éxito', detail:'Producto añadido con éxito'});
          setTimeout(() => {
            this.router.navigate(['/snacks'])
          } , 3600);
        } else {
          this.messageService.add({severity:'error', summary:'Error', detail:'Error al añadir producto, por favor intenta de nuevo'});
        }
      }
    )
  }

}

