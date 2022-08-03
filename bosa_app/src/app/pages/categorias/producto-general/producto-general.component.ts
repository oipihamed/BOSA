import { Component, OnInit } from '@angular/core';
import {Producto, ProductoService} from '../../../services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-general',
  templateUrl: './producto-general.component.html',
  styleUrls: ['./producto-general.component.css']
})
export class ProductoGeneralComponent implements OnInit {

  //variables
  ListarProductoss!: Producto[];

  constructor(private ProductoService:ProductoService, private router:Router) { }

  ngOnInit(): void {
    this.listarAllProducts();
  }

  listarAllProducts(){
    this.ProductoService.listarAllProductos().subscribe(
      res=>{
        console.log(res)
        this.ListarProductoss=<any>res;
      },
      err => console.log(err)
    );
  }

  direccionarDetalle(id:string){
    this.router.navigate(['/detalle/'+id]);
  }

}
