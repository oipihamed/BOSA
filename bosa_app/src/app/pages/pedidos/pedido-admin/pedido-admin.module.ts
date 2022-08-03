import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidoAdminRoutingModule } from './pedido-admin-routing.module';
import { PedidoAdminComponent } from './pedido-admin.component';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    PedidoAdminComponent
  ],
  imports: [
    CommonModule,
    PedidoAdminRoutingModule,
    MatSelectModule
  ]
})
export class PedidoAdminModule { }
