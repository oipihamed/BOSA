import { ReadVarExpr } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { ProductoService } from 'app/services/producto.service';
import { Categoria } from 'app/shared/components/models/categoria.interface';
import { Producto, ProductoResponse } from 'app/shared/components/models/producto.interface';
import { NgxSpinnerService } from 'ngx-spinner';
import { map, Observable, startWith } from 'rxjs';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget|null;
}
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  file: File | undefined;
  photoSelected:   string | ArrayBuffer  | undefined;
  myControl = new FormControl<string | Categoria>('');
  options: Categoria[] = [{ nombre: 'Equipo de futbol' }, { nombre: 'Zapatos' }, { nombre: 'Accesorios' }];
  filteredOptions!: Observable<Categoria[]>;

  productoForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(1)]],
    descripcion: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
    precio: ['', [Validators.required, Validators.min(0)]],
    cantidad: ['', [Validators.required, Validators.min(0)]],
    categoria: ['', [Validators.required]],
    rutaImagen:['',[Validators.required]]
  });
  constructor(private fb: FormBuilder, private productSvc: ProductoService, private spinner: NgxSpinnerService) {
   }


  agregarProducto(form: { resetForm: () => void; }) {
    //Se verifica que el formulario sea correcto
    if (this.productoForm.invalid) return;
    
    //Obtener los datos del formulario
    const formValue = this.productoForm.value;
    formValue.rutaImagen=this.file?.name;
    this.spinner.show();
    this.productSvc.agregarProducto(formValue)
      .subscribe((producto: ProductoResponse | void) => {
        this.spinner.hide();
        form.resetForm();
      });
     
  }

  onPhotoSelected(event: Event): void {
    
    const target=event.target  as HTMLInputElement;
    if(event!=null){
    if (target!.files && target!.files[0]) {
      this.file = <File>target!.files[0];
      //Preview de la imagen
      const reader =new FileReader();
      reader.onload= (e) => {
         if(reader.result!=null){
         this.photoSelected = reader.result;
        return this.photoSelected;}else{
          return this.photoSelected;
        }
      };
      reader.readAsDataURL(this.file);
 
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
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.nombre;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }
  displayFn(categoria: Categoria): string {
    return categoria && categoria.nombre ? categoria.nombre : '';
  }

  private _filter(name: string): Categoria[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.nombre.toLowerCase().includes(filterValue));
  }
}
