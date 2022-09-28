import { Component, OnInit } from '@angular/core';
import {ApiService} from "../providers/api.service";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-pedido-nuevo',
  templateUrl: './pedido-nuevo.component.html',
  styleUrls: ['./pedido-nuevo.component.css']
})

export class PedidoNuevoComponent implements OnInit {
  productos:any = [];
  combos:any = [];
  listaprod:any = [];
  valortotal:number = 0;
  lista1:any = [];
  lista2:any = [];
  pedido = this.fb.group({
    productos: [{}||[]],
    combos: [{}],
    pagado: true,
    total: [0],
  })

  constructor(private api: ApiService, private fb: FormBuilder, private router: Router, private messageService: MessageService) { }

  ngOnInit(): void {
    this.api.get('producto').subscribe((data: any) => {
      this.productos = data
    })
    this.api.get('combo').subscribe((data: any) => {
      this.combos = data
    })
  }


  updatePedidoProducto(producto:any,cantidad:number){
    this.valortotal += (producto.precio * cantidad)
    this.lista1.push({'producto': producto.id, 'cantidad': cantidad})
    this.pedido.patchValue({
      productos: this.lista1,
      // @ts-ignore
      combos: Object.keys(this.pedido.get('combos')?.value).length === 0 ? [] : this.pedido.get('combos')?.value
    })
// LLENAR TABLA PEDIDO
    this.listaprod.push({'nombre': producto.nombre, 'precio': producto.precio, 'cantidad': cantidad})
    console.log(this.listaprod.cantidad)

  }

  updatePedidoCombo(combo:any,cantidad:number){
    this.valortotal += (combo.precioTotal * cantidad)
    this.lista2.push({'combo': combo.id, 'cantidad': cantidad})
    this.pedido.patchValue({
      combos: this.lista2,
      // @ts-ignore
      productos: Object.keys(this.pedido.get('productos')?.value).length === 0 ? [] : this.pedido.get('productos')?.value
    })

// LLENAR TABLA PEDIDO
    this.listaprod.push({'nombre': combo.nombre, 'precio': combo.precioTotal, 'cantidad': cantidad})
    console.log()
    console.log(this.pedido.value)
  }

  onSubmit() {
    this.pedido.patchValue({
      total: this.valortotal,
    })
    console.log(this.pedido.value)

    this.api.addform('pedido', this.pedido.value).subscribe(
      (data: any) => {
        if (data != undefined) {
          this.messageService.add({severity:'success', summary:'Éxito', detail:'Combo Añadido con éxito'});
          setTimeout(() => {
            this.router.navigate(['/pedidos'])
          } , 3600);
        } else {
          this.messageService.add({severity:'error', summary:'Error', detail:'Error al añadir combo, por favor intenta de nuevo'});
        }
      }
    )
  }
}

//  console.log(this.pedido.value)
//  Object.keys(this.lista2).forEach(key => {
//    key.split(',').forEach(elem => arr.push(Number(elem)))
//  });
// @ts-ignore
//    const arr = this.lista2.map(({id}) => id);
//    this.combo.patchValue({'Productos': arr})
//    console.log(this.combo.get('nombre')?.value, this.combo.get('descuento')?.value, this.combo.get('Productos')?.value)
//    this.pedido.patchValue({'Productos': lista1})
//    this.arr.add(this.lista1.map(({id}) => id));
// FUNCIONANDO
//    updatePedidoProducto(id:string,cantidad:number){
//    this.pedido.patchValue({'Productos': lista1})
//    this.arr.add(this.lista1.map(({id}) => id));
//      this.lista1.push({'producto': id, 'cantidad': cantidad})
//      this.pedido.patchValue({
//        productos: this.lista1
//      })
//    console.log(this.pedido.value)
