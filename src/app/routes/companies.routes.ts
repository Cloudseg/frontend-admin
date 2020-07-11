import { Routes } from '@angular/router';
import { CompaniesListPageComponent } from '../pages/companies/companies-list-page/companies-list-page.component';
import { CompaniesFormPageComponent } from '../pages/companies/companies-form-page/companies-form-page.component';

export const COMPANIES_ROUTES: Routes = [
  { path: '', component: CompaniesListPageComponent, pathMatch: 'full' },
  { path: 'create', component: CompaniesFormPageComponent },
  { path: ':id/edit', component: CompaniesFormPageComponent }
];