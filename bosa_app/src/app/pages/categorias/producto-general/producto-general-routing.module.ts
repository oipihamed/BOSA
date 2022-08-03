import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoGeneralComponent } from './producto-general.component';

const routes: Routes = [{ path: '', component: ProductoGeneralComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoGeneralRoutingModule { }
