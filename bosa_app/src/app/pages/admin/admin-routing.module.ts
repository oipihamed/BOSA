import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [{ 
  path: '', component: AdminComponent }, 
  { path: 'productList', loadChildren: () => import('./productos-list/productos-list.module').then(m => m.ProductosListModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
