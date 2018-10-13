import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ProgressBarModule } from "angular-progress-bar";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./layouts/login/login.component";
import { HomeComponent } from "./layouts/home/home.component";
import { RegisterComponent } from "./layouts/register/register.component";
import { FormsModule } from "@angular/forms";
import { ChartComponent } from "./layouts/chart/chart.component";
import { Http, HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { routing } from "./app.routing";
import { Md5GenerateComponent } from "./layouts/register/md5-generate/md5-generate.component";
import { DashboardComponent } from "./layouts/dashboard/dashboard.component";
import { ButtonComponent } from "./layouts/button/button.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTooltipModule, MatProgressBarModule } from "@angular/material";
import { PushNotiComponent } from "./layouts/push-noti/push-noti.component";
import { environment } from "../environments/environment.prod";
import { ChartNg2Component } from "./layouts/chart-ng2/chart-ng2.component";
import { ChartModule } from "angular2-chartjs";
import { ChartsModule } from "ng2-charts/ng2-charts";
import "chart.piecelabel.js";
import { NgCircleProgressComponent } from "./layouts/ng-circle-progress/ng-circle-progress.component";
import { NgCircleProgressModule } from "ng-circle-progress";
import { ExportProgressComponent } from "./layouts/export-progress/export-progress.component";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ChartComponent,
    Md5GenerateComponent,
    DashboardComponent,
    ButtonComponent,
    PushNotiComponent,
    ChartNg2Component,
    NgCircleProgressComponent,
    ExportProgressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
    MatTooltipModule,
    ChartModule,
    ChartsModule,
    ProgressBarModule,
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
