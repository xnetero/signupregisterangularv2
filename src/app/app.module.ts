import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule } from '@angular/forms';
//
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from "@angular/common/http";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgToastModule } from 'ng-angular-popup' ;
import { TokenInterceptor } from './interceptor/token.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
     FormsModule,
     //
      ReactiveFormsModule,
      HttpClientModule,
      NgToastModule
  ],
  providers: [
    // to use interceptors 
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true

    }
    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
