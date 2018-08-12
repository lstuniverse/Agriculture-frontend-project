import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './layouts/login/login.component';
import { HomeComponent } from './layouts/home/home.component';
import { RegisterComponent } from './layouts/register/register.component';
import {FormsModule} from '@angular/forms';
import { ChartComponent } from './layouts/chart/chart.component';
import {Http, HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
