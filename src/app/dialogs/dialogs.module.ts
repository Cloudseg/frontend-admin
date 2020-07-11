import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialAngularModule } from '../modules/material-angular.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';

const DIALOGS = [
  ConfirmDialogComponent,
  AlertDialogComponent
];

@NgModule({
  declarations: DIALOGS,
  imports: [
    CommonModule,
    MaterialAngularModule,
    ReactiveFormsModule
  ],
  exports: DIALOGS
})
export class DialogsModule { }
