import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HomeNavigationPanelComponent } from './components/home-navigation-panel/home-navigation-panel.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [HomeNavigationPanelComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatChipsModule
  ],
  exports: [
    HomeNavigationPanelComponent
  ]
})
export class SharedModule { }
