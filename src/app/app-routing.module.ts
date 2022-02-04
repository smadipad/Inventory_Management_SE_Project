import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { MyNavbarComponent } from './my-navbar/my-navbar.component';
import { SupplierTableComponent } from './supplier-table/supplier-table.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  { path: 'tabs', component: TabsComponent },
  { path: 'my-navbar', component:MyNavbarComponent},
  { path: 'supplier-table',component:SupplierTableComponent},
  { path: 'customer-table',component:CustomerTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
