import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProductAdapterService } from './context/product/infrastucture/adapters/product.adapter.service';
import { CategoryAdapterService } from './context/category/infrastucture/adapters/category.adapter.service';
import { SupplierAdapterService } from './context/supplier/infrastucture/adapters/supplier.adapter.service';
import { SignupComponent } from './auth/signup/signup.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AuthService } from './auth/auth.service';




@NgModule({
  declarations: [
    AppComponent,
    NopageFoundComponent,
    SignupComponent,
    ResetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HomeModule,
    
  ],
  providers: 
    [ ProductAdapterService,  
      CategoryAdapterService,
      SupplierAdapterService,
      AuthService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptorService,
        multi: true,
      }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
