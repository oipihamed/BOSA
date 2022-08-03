import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProductoResponse } from 'app/shared/components/models/producto.interface';
import { environment } from 'environments/environment';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient, private router: Router, private snackBar: MatSnackBar) { }

  listarProductos(){
    return  this.http.get(`${ environment.API_URL }/producto`)
  }
  
  listarAllProductos(){
    return  this.http.get(`${ environment.API_URL }/producto/all`)
  }

  listarProductosOferta(){
    return  this.http.get(`${ environment.API_URL }/producto/ofer`)
  }

  detalleProducto(id:string){
    return  this.http.get(`${ environment.API_URL }/producto/${id} `)
  }
  
  agregarProducto(productData: any): Observable<ProductoResponse | void> {
    return  this.http.post<ProductoResponse>(`${ environment.API_URL }/producto`, productData)
      .pipe(map((product:ProductoResponse) => {
        this.snackBar.open(product.message, '',  {
          duration: 5 * 1000,
          panelClass: ['success-snackbar'],
          horizontalPosition: 'right',
          verticalPosition: 'top'
          })
        return product;
      }),
      catchError((error) => this.handlerError(error)));
  }

  handlerError(error: any): Observable<never> { 
    let errorMessage = "Ocurrio un error";
    if(error){
      errorMessage = `${ error.message }`;
    }

    this.snackBar.open(errorMessage, '',  {
      duration: 5 * 1000,
      panelClass: ['error-snackbar'],
      horizontalPosition: 'right',
      verticalPosition: 'top'
      })

    return throwError(errorMessage);
  }
}

export interface Producto{
  idProducto?:string;
  nombre?:string;
  descripcion?:string;
  cantidadExistencia?:string;
  precio?:string;
  rutaImagen?:string;
}