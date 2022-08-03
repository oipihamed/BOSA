import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoGeneralRoutingModule } from './producto-general-routing.module';
import { ProductoGeneralComponent } from './producto-general.component';


@NgModule({
  declarations: [
    ProductoGeneralComponent
  ],
  imports: [
    CommonModule,
    ProductoGeneralRoutingModule
  ]
})
export class ProductoGeneralModule { }
