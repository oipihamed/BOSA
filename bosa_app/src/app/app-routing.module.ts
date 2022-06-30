import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';

const routes:Routes=[
{
  path:'signup',
  component:SignupComponent
},
{
  path:'detalle',
  component:DetalleProductoComponent
},
{path:'',
redirectTo:'/home',
pathMatch:'full',
},
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'notFound', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) },
  { path: 'login', loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule) },
{ path: 'accountRecovery', loadChildren: () => import('./pages/auth/recovery/recovery.module').then(m => m.RecoveryModule) },
{ path: 'categoria', loadChildren: () => import('./pages/categorias/categoria/categoria.module').then(m => m.CategoriaModule) },
{ path: 'cart', loadChildren: () => import('./pages/cart/cart/cart.module').then(m => m.CartModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
