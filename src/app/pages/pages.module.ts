import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgxMaskModule } from 'ngx-mask';
import { NgxCurrencyModule } from 'ngx-currency';
import { MaterialAngularModule } from '../modules/material-angular.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ParametersPageComponent } from './parameters-page/parameters-page.component';
import { DirectivesModule } from '../directives/directives.module';
import { CompaniesModule } from './companies/companies.module';
import { InspectionsModule } from './inspections/inspections.module';

const PAGES = [
  WelcomePageComponent,
  LoginPageComponent,
  HomePageComponent,
  ParametersPageComponent
];

const MODULES = [
  CompaniesModule,
  InspectionsModule
];

@NgModule({
  declarations: PAGES,
  imports: [
    ...MODULES,
    CommonModule,
    NgxMaskModule,
    NgxCurrencyModule,
    MaterialAngularModule,
    ReactiveFormsModule,
    DirectivesModule
  ],
  exports: PAGES,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule { }
