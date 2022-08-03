import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigCategoriasComponent } from './config-categorias.component';

const routes: Routes = [{ path: '', component: ConfigCategoriasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigCategoriasRoutingModule { }
