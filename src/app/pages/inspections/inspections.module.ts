import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InspectionsComponent } from './inspections.component';
import { RouterModule } from '@angular/router';
import { MaterialAngularModule } from 'src/app/modules/material-angular.module';
import { InspectionParametersPageComponent } from './inspection-parameters-page/inspection-parameters-page.component';

const PAGES = [
  InspectionsComponent,
  InspectionParametersPageComponent
];

@NgModule({
  declarations: PAGES,
  imports: [
    CommonModule,
    RouterModule,
    MaterialAngularModule
  ],
  exports: PAGES,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InspectionsModule { }
