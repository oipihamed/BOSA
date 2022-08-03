import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { MaterialModule } from 'app/material.module';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UsuariosComponent,
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    MaterialModule,
    MatTableModule, 
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class UsuariosModule { }
