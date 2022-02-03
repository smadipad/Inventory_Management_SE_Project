import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsComponent } from './tabs/tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { SupplierTableComponent } from './supplier-table/supplier-table.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { MatButtonModule } from '@angular/material/button';
import { ThemePalette } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    SupplierTableComponent,
    CustomerTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatTableModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
