import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from '../productos/productos.component';
import { ProductosListComponent } from './productos-list.component';

const routes: Routes = [
  { path: '', component: ProductosListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosListRoutingModule { }
