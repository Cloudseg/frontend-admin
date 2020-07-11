import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { MaterialAngularModule } from '../modules/material-angular.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const LAYOUTS = [
  DashboardLayoutComponent
];

@NgModule({
  declarations: LAYOUTS,
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MaterialAngularModule,
    MatSidenavModule,
    MatGridListModule,
    RouterModule
  ],
  exports: LAYOUTS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutsModule { }
