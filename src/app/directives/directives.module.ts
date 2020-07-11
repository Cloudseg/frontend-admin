import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipedDirective } from './tooltiped.directive';
import { ComponentsModule } from '../components/components.module';
import { PhoneMaskInputDirective } from './phone-mask-input.directive';
import { MaskPipe } from 'ngx-mask';

const DIRECTIVES = [
  TooltipedDirective,
  PhoneMaskInputDirective
];

@NgModule({
  declarations: DIRECTIVES,
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: DIRECTIVES,
  providers: [
    MaskPipe
  ]
})
export class DirectivesModule { }
