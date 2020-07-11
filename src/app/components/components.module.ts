import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip/tooltip.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { AddressFormComponent } from './address-form/address-form.component';
import { MaterialAngularModule } from '../modules/material-angular.module';
import { CompanyInformationsComponent } from './company-informations/company-informations.component';
import { ImageInputComponent } from './image-input/image-input.component';

const COMPONENTS = [
  TooltipComponent,
  AddressFormComponent,
  CompanyInformationsComponent,
  ImageInputComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    MatTooltipModule,
    ReactiveFormsModule,
    NgxMaskModule,
    MaterialAngularModule
  ],
  exports: COMPONENTS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
