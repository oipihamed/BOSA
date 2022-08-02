import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../../../services/producto.service';
import { ProductoService as pServAdm } from "../services/producto.service";
import { Producto, ProductoResponse } from 'app/shared/components/models/producto.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ProductosComponent } from '../productos/productos.component';
import {  Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css']
})
export class ProductosListComponent implements OnInit,AfterViewInit, OnDestroy  {
  displayedColumns: string[] = ['nombre', 'descripcion', 'cantidad', 'precio','categoria','actions'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  private destroy$ = new Subject<any>();
  
  constructor(private ProductoService:ProductoService,
    private router:Router, 
    private activeRoute:ActivatedRoute,
    private pServAdm:pServAdm,private snackBar: MatSnackBar,
    private dialog:MatDialog) { }
    ngOnDestroy(): void {
      this.destroy$.next({});
      this.destroy$.complete();
    }
  ngOnInit(): void {
    this.listarProductos();
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  listarProductos() {
    this.ProductoService.listarAllProductos()
    .subscribe(    res=>{
      console.log(res)
      this.dataSource.data =<any>res;
    },
    err => console.log(err));
  }
deleteProduct(idProducto:number,nombre:string){
 Swal.fire({
    title: '',
    text: `¿Deseas eliminar el registro ${nombre}?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: 'darkBlue',
    cancelButtonColor: 'darkRed',
    confirmButtonText: 'Si',
    cancelButtonText: 'No'
  }).then( (result) => {
    if (result.isConfirmed) {
      this.pServAdm.delete(idProducto)
        .subscribe( (result: any) => {
          if (result) {
            this.snackBar.open(result.message, '', {
              duration: 5 * 1000,
              panelClass: [ result.code == 0 ? 'success-snackbar' : 'error-snackbar'],
              horizontalPosition: 'right',
              verticalPosition: 'top'
            })

            this.listarProductos();
          }
        });
    }
  })
}
onOpenModal(producto = {}) {
  console.log(producto);
  const dialogRef = this.dialog.open(ProductosComponent, {
    minWidth: '60%',
    data: {
      title: 'Registro de Productos',
      producto
    }
  });

  dialogRef.afterClosed()
    .pipe(takeUntil(this.destroy$))
    .subscribe(result => {
      if (result) {
        this.snackBar.open(result.message, '', {
          duration: 5 * 1000,
          panelClass: [ result.code == 0 ? 'success-snackbar' : 'error-snackbar'],
          horizontalPosition: 'right',
          verticalPosition: 'top'
        })

        this.listarProductos();
      }
    });
}
}
