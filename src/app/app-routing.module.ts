import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyNavbarComponent } from './my-navbar/my-navbar.component';
import { SignupComponent } from './signup/signup.component';
import { SupplierTableComponent } from './supplier-table/supplier-table.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  { path: 'tabs', component: TabsComponent },
  { path:'login', component:LoginComponent},
  { path: 'my-navbar', component:MyNavbarComponent},
  { path: 'supplier-table',component:SupplierTableComponent},
  { path: 'customer-table',component:CustomerTableComponent},
  { path: 'home',component:HomeComponent},
  { path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
