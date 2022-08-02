import { ReadVarExpr } from '@angular/compiler';
import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductoService } from 'app/pages/admin/services/producto.service';
import { Categoria } from 'app/shared/components/models/categoria.interface';
import { Producto, ProductoResponse } from 'app/shared/components/models/producto.interface';
import { NgxSpinnerService } from 'ngx-spinner';
import { map, Observable, startWith, Subject, takeUntil } from 'rxjs';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget|null;
}
enum Action {
  EDIT = 'edit',
  NEW = 'new'
}
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit,OnDestroy {
  actionTODO = Action.NEW;
  file: File | undefined;
  photoSelected!: string[] & ArrayBuffer[];
  private destroy$ = new Subject<any>();
  titleButton = "Guardar";

  productoForm = this.fb.group({
    idProducto:[''],
    nombre: ['', [Validators.required, Validators.minLength(1)]],
    descripcion: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
    precio: ['', [Validators.required, Validators.min(0)]],
    cantidad: ['', [Validators.required, Validators.min(0)]],
    categoria: ['', [Validators.required]],
    rutaImagen:['',[Validators.required]]
  });
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ProductosComponent>, 
    private fb: FormBuilder, 
    private productSvc: ProductoService,
    private spinner: NgxSpinnerService) {
    this.photoSelected=[];
   }

   ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.complete();
  }
  onClean() {
    this.productoForm.reset();
  }
  agregarProducto( ) {
    //Se verifica que el formulario sea correcto
    if (this.productoForm.invalid) return;

    //Obtener los datos del formulario
    const formValue = this.productoForm.getRawValue();
  
    this.spinner.show();
    if (this.actionTODO == Action.NEW) {
    this.productSvc.agregarProducto(formValue)
      .subscribe((res) => {
        this.onClean();
        this.spinner.hide();
        
        this.dialogRef.close(res);
        
      });
    }else{
      var updateProducto: Producto = {
        idProducto:formValue.idProducto ,
        nombre:formValue.nombre,
        descripcion:formValue.descripcion,
        precio:formValue.precio,
        cantidadExostencia:formValue.cantidad,
        categoria:formValue.categoria,
        rutaImagen:formValue.rutaImagen      
      }

      this.productSvc.update(updateProducto)
      .pipe(takeUntil(this.destroy$))
      .subscribe( (res: any) => {
        this.dialogRef.close(res);
      });
    }
  }
  patchData() {
    if (this.data.producto.idProducto) {
      this.actionTODO = Action.EDIT;
      this.titleButton = "ACTUALIZAR";
      this.productoForm.patchValue({
        idProducto: this.data?.producto.idProducto,
        nombre: this.data?.producto.nombre,
        descripcion: this.data?.producto.descripcion,
        cantidad: this.data?.producto.cantidadExistencia,
        precio: this.data?.producto.precio,
        categoria: this.data?.producto.idCategoria
      });
      
      this.productoForm.updateValueAndValidity();
    } else {
      this.titleButton = "GUARDAR";
      this.actionTODO = Action.NEW;
    }
  }
  onPhotoSelected(event: Event): void {
    this.photoSelected=[];
    const target=event.target  as HTMLInputElement;
    if(event!=null){
    if (target!.files && target!.files[0]) {
      for (let i = 0; i < target!.files.length; i++) {
        this.file = <File>target!.files[i];
      //Preview de la imagen
      const reader =new FileReader();
      reader.onload= (e) => {
         if(reader.result!=null){
         this.photoSelected.push(reader.result as string) ;
         console.log(reader.result);
      this.productoForm.patchValue({
        rutaImagen:this.photoSelected.join('$$')
      });
        return this.photoSelected;
      }else{
          return this.photoSelected;
        }
      };

      reader.readAsDataURL(this.file);        
      }
      
 
    }
  }
  }
  getErrorMessage(field: string) {
    let message = '';
    var form = this.productoForm.get(field);

    if (form != null) {
      if (form.hasError("required")) {
        message = "Campo requerido";
      } else if (form.hasError("minlength")) {
        message = "El minimo de caracteres son 5";
      } 
    }
    return message;
  }

  isValidField(field: string) {
    var form = this.productoForm.get(field);

    var flag = false;
    if (form != null) {
      flag = form.touched || form.dirty && !form.valid
    }

    return flag;
  }


  ngOnInit(): void {
    this.patchData();
  }
  
}
