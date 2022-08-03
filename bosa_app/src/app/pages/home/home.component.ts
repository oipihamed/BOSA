import { Component, OnInit } from '@angular/core';
import {Producto, ProductoService} from '../../services/producto.service';
import {ProductosOferta, ProdOfertaService} from '../../services/prod-oferta.service';
import {Categoria, CategoriaService} from '../../services/categoria.service';
//para poder direccionar a otra ruta
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //variables
  ListarProductoss!: Producto[];
  ListarProductosOferta!: ProductosOferta[];
  ListarCategoriass!: Categoria[];

  constructor(private ProductoService:ProductoService, private ProdOfertaService:ProdOfertaService, private CategoriaService:CategoriaService, private router:Router ) { }

  ngOnInit(): void {
    this.listarProductos();
    this.listarProductosOfert();
    this.listarCategorias();

  }

  listarProductos(){
    this.ProductoService.listarProductos().subscribe(
      res=>{
        console.log(res)
        this.ListarProductoss=<any>res;
      },
      err => console.log(err)
    );
  }

  listarProductosOfert(){
    this.ProdOfertaService.listarProductosOferta().subscribe(
      res=>{
        console.log(res)
        this.ListarProductosOferta=<any>res;
      },
      err => console.log(err)
    );
  }

  listarCategorias(){
    this.CategoriaService.listarCategorias().subscribe(
      res=>{
        console.log(res)
        this.ListarCategoriass=<any>res;
      },
      err => console.log(err)
    );
  }

  direccionarDetalle(id:string){
    this.router.navigate(['/detalle/'+id]);
  }

  direccionarCategoria(id:string){
    this.router.navigate(['/categoria/'+id]);
  }

  direccionarAllProducts(){
    this.router.navigate(['/productoGeneral']);
  }
  

}
