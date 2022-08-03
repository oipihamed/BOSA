import { Component, OnInit } from '@angular/core';
import {Producto, ProductoService} from '../../services/producto.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  DetalleProductoss!: Producto[];

  /* Producto : Producto={
    idProducto:'',
    nombre:'',
    precio:'',
    descripcion:''
  };   */

  constructor(private ProductoService:ProductoService, private router:Router, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.detalleProducto();
  }

  detalleProducto(){
    const id_entrada = <string>this.activeRoute.snapshot.params['id'];
    console.log('id de entrada: '+id_entrada);
    if(id_entrada){
      this.ProductoService.detalleProducto(id_entrada).subscribe(
        res=>{
          console.log(res)
          this.DetalleProductoss=<any>res;
        },
        err => console.log(err)
      );
    }
  }

}
