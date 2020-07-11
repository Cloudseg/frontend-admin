import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { getPtBrPaginatorIntl } from 'src/app/helpers/pt-paginator-intl';

@NgModule({
  exports: [
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatRippleModule,
    MatListModule,
    MatStepperModule,
    MatProgressBarModule,
    MatPaginatorModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: getPtBrPaginatorIntl() }
  ]
})
export class MaterialAngularModule { }
