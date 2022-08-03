import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {  } from 'app/shared/components/models/categoria.interface';
import { environment } from 'environments/environment';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient, private router: Router ,private snackBar: MatSnackBar) { }

  listarCategorias(){
    return  this.http.get(`${ environment.API_URL }/categoria`)
  }

  listarUnaCategoria(id:string){
    return  this.http.get(`${ environment.API_URL }/categoria/${id} `)
  }
}

export interface Categoria{
  idCategoria?:string;
  nombre?:string;
  descripcion?:string;
  estatus?:string;
  precio?:string;
  rutaImagen?:string;
  idProducto?:string;
  nombreCategoria?:string;
}
