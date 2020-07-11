import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesComponent } from './companies.component';
import { MaterialAngularModule } from 'src/app/modules/material-angular.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CompaniesListPageComponent } from './companies-list-page/companies-list-page.component';
import { CompaniesFormPageComponent } from './companies-form-page/companies-form-page.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { NgxMaskModule } from 'ngx-mask';
import { NgxCurrencyModule } from 'ngx-currency';

const COMPONENTS = [
  CompaniesComponent,
  CompaniesListPageComponent,
  CompaniesFormPageComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    MaterialAngularModule,
    RouterModule,
    ReactiveFormsModule,
    ComponentsModule,
    DirectivesModule,
    NgxMaskModule,
    NgxCurrencyModule
  ],
  exports: COMPONENTS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CompaniesModule { }
