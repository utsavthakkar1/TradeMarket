import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LoginComponent, HomeComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class LandingModule { }
