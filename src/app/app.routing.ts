import { BtnDesignComponent } from "./layouts/btn-design/btn-design.component";
import { ChartNg2Component } from "./layouts/chart-ng2/chart-ng2.component";
import { DashboardComponent } from "./layouts/dashboard/dashboard.component";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./layouts/login/login.component";
import { ModuleWithProviders } from "@angular/core";
import { HeaderComponent } from "./layouts/header/header.component";
import { RegisterComponent } from "./layouts/register/register.component";
import { ChartComponent } from "./layouts/chart/chart.component";
import { AuthGuard } from "./@services/authGuard";
import { Md5GenerateComponent } from "./layouts/register/md5-generate/md5-generate.component";
import { PushNotiComponent } from "./layouts/push-noti/push-noti.component";
import { NgCircleProgressComponent } from "./layouts/ng-circle-progress/ng-circle-progress.component";

const appRoutes = [
  { path: "login", component: LoginComponent },
  { path: "regiter_gen_password", component: Md5GenerateComponent },
  {
    path: "header",
    component: HeaderComponent,
    canActivate: [AuthGuard]
  },
  { path: "register", component: RegisterComponent, canActivate: [AuthGuard] },
  { path: "chart", component: ChartComponent, canActivate: [AuthGuard] },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "push_notification",
    component: PushNotiComponent,
    canActivate: [AuthGuard]
  },
  { path: "chartng2", component: ChartNg2Component, canActivate: [AuthGuard] },
  {
    path: "ng_progress",
    component: NgCircleProgressComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "btn_design",
    component: BtnDesignComponent,
    canActivate: [AuthGuard]
  },

  // otherwise redirect to home
  { path: "**", redirectTo: "home" }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
