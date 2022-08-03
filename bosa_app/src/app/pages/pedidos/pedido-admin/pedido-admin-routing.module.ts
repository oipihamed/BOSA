import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoAdminComponent } from './pedido-admin.component';

const routes: Routes = [{ path: '', component: PedidoAdminComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoAdminRoutingModule { }
