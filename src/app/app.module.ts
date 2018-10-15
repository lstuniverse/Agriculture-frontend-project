import { PushNotificationsService } from "./layouts/push-noti/pushNotificationsService";
import { IframeResizerComponent } from "./layouts/iframe-resizer/iframe-resizer.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ProgressBarModule } from "angular-progress-bar";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./layouts/login/login.component";
import { HeaderComponent } from "./layouts/header/header.component";
import { RegisterComponent } from "./layouts/register/register.component";
import { FormsModule } from "@angular/forms";
import { ChartComponent } from "./layouts/chart/chart.component";
import { Http, HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { routing } from "./app.routing";
import { DashboardComponent } from "./layouts/dashboard/dashboard.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTooltipModule } from "@angular/material";
import { PushNotiComponent } from "./layouts/push-noti/push-noti.component";
import { ChartNg2Component } from "./layouts/chart-ng2/chart-ng2.component";
import { ChartModule } from "angular2-chartjs";
import { ChartsModule } from "ng2-charts/ng2-charts";
import "chart.piecelabel.js";
import { NgCircleProgressComponent } from "./layouts/ng-circle-progress/ng-circle-progress.component";
import { NgCircleProgressModule } from "ng-circle-progress";
import { BtnDesignComponent } from "./layouts/btn-design/btn-design.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    ChartComponent,
    DashboardComponent,
    PushNotiComponent,
    ChartNg2Component,
    NgCircleProgressComponent,
    BtnDesignComponent,
    IframeResizerComponent
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
  providers: [PushNotificationsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
