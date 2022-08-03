import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigCategoriasRoutingModule } from './config-categorias-routing.module';
import { ConfigCategoriasComponent } from './config-categorias.component';
import { MatTableModule} from '@angular/material/table';
import { MatIconModule }  from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    ConfigCategoriasComponent
  ],
  imports: [
    CommonModule,
    ConfigCategoriasRoutingModule,
    MatTableModule,
    MatIconModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatFormFieldModule
  ]
})
export class ConfigCategoriasModule { }
