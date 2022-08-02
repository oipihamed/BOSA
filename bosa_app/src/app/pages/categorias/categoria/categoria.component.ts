import { Component, OnInit } from '@angular/core';
import {Categoria, CategoriaService} from '../../../services/categoria.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  //variables
  ListarCategoriass!: Categoria[];
  
  

  constructor(private CategoriaService:CategoriaService, private router:Router, private activeRoute:ActivatedRoute) { }


  ngOnInit(): void {
    this.listarUnaCategoria();
    this.listarCategorias();
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

  listarUnaCategoria(){
    const id_entrada = <string>this.activeRoute.snapshot.params['id'];
    console.log('id de entrada: '+id_entrada);
    if(id_entrada){
      this.CategoriaService.listarUnaCategoria(id_entrada).subscribe(
        res=>{
          console.log(res)
          this.ListarCategoriass=<any>res;
        },
        err => console.log(err)
      );
    }
  }

  direccionarDetalle(id:string){
    this.router.navigate(['/detalle/'+id]);
  }

}
