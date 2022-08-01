import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProdOfertaService {

  constructor(private http: HttpClient) { }

  listarProductosOferta(){
    return  this.http.get(`${ environment.API_URL }/producto/ofer`)
  }
}

export interface ProductosOferta{
  idProducto?:string;
  nombre?:string;
  descripcion?:string;
  cantidadExistencia?:string;
  precio?:string;
  rutaImagen?:string;
}
