import {RouterModule} from '@angular/router';
import {LoginComponent} from './layouts/login/login.component';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './layouts/home/home.component';
import {RegisterComponent} from './layouts/register/register.component';
import {ChartComponent} from './layouts/chart/chart.component';
import {AuthGuard} from './@services/authGuard';

const appRoutes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
  {path: 'chart', component: ChartComponent, canActivate: [AuthGuard]},

  // otherwise redirect to home
  {path: '**', redirectTo: 'login'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
