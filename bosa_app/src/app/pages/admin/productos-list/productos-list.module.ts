import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosListRoutingModule } from './productos-list-routing.module';
import { ProductosListComponent } from './productos-list.component';
import { MaterialModule } from 'app/material.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductosListComponent
  ],
  imports: [
    CommonModule,
    ProductosListRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatSelectModule
  ]
})
export class ProductosListModule { }
