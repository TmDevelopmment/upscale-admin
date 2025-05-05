import { Routes } from '@angular/router';
import {LoginPageComponent} from './component/login-page/login-page.component';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {CustomersComponent} from './component/customers/customers.component';
import {ProductComponent} from './component/product/product.component';
import {OrdersComponent} from './component/orders/orders.component';

export const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path:'login',component:LoginPageComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'customers',component:CustomersComponent},
  {path:'products',component:ProductComponent},
  {path:'orders',component:OrdersComponent}

];
