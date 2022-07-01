import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { CheckLoginGuard } from './shared/guards/check-login.guard';
import { CheckSessionGuard } from './shared/guards/check-session.guard';

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
  { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule), canActivate: [CheckSessionGuard] },
  { path: 'login', loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule),canActivate: [CheckLoginGuard] },
{ path: 'accountRecovery', loadChildren: () => import('./pages/auth/recovery/recovery.module').then(m => m.RecoveryModule) },
{ path: 'categoria', loadChildren: () => import('./pages/categorias/categoria/categoria.module').then(m => m.CategoriaModule) },
{ path: 'cart', loadChildren: () => import('./pages/cart/cart/cart.module').then(m => m.CartModule) },
{ path: 'aProductos', loadChildren: () => import('./pages/admin/productos/productos.module').then(m => m.ProductosModule) },
{ path: 'pedidoAdmin', loadChildren: () => import('./pages/pedidos/pedido-admin/pedido-admin.module').then(m => m.PedidoAdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
