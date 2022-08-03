import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoriaResponse } from 'app/shared/components/models/categoria.interface';
import { Producto, ProductoResponse } from 'app/shared/components/models/producto.interface';
import { environment } from 'environments/environment';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient, private router: Router, private snackBar: MatSnackBar) { }
  
  agregarProducto(productData: any): Observable<ProductoResponse | void> {

    return  this.http.post<ProductoResponse>(`${ environment.API_URL }/producto`,productData)
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
  delete(idProducto: number): Observable<any> {
    return this.http.delete<any>(`${ environment.API_URL }/producto/${idProducto}`)
  } 
  update(producto: Producto): Observable<any> {
    return this.http.put<any>(`${ environment.API_URL }/producto`, producto)
    .pipe(catchError( (error) => this.handlerError(error)));
  }
  getAllImgProduct(idProducto: string): Observable<any> {
    return this.http.get<any>(`${ environment.API_URL }/producto/img/${idProducto}`)
    .pipe(catchError( (error) => this.handlerError(error)));
  }
getCategorias():Observable<CategoriaResponse[]> {
  return this.http.get<CategoriaResponse[]>(`${environment.API_URL}/categoria`)
  .pipe(catchError( (error) => this.handlerError(error) ));
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
