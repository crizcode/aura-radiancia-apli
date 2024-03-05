import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './dashboard/dashboard.module';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductAdapterService } from './context/product/infrastucture/adapters/product.adapter.service';
import { CategoryAdapterService } from './context/category/infrastucture/adapters/category.adapter.service';
import { SupplierAdapterService } from './context/supplier/infrastucture/adapters/supplier.adapter.service';

@NgModule({
  declarations: [
    AppComponent,
    NopageFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DashboardModule,
    
  ],
  providers: [ProductAdapterService,  CategoryAdapterService, SupplierAdapterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
