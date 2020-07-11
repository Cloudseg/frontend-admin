import { Routes } from '@angular/router';
import { ParametersPageComponent } from '../pages/parameters-page/parameters-page.component';
import { CompaniesComponent } from '../pages/companies/companies.component';
import { COMPANIES_ROUTES } from '../routes/companies.routes';
import { InspectionsComponent } from '../pages/inspections/inspections.component';
import { INSPECTION_ROUTES } from './inspections.routes';

export const DASHBOARD_ROUTES: Routes = [
  { path: '', redirectTo: '/parameters', pathMatch: 'full' },
  { path: 'parameters', component: ParametersPageComponent },
  // { path: 'inspections', component: InspectionsComponent, children: INSPECTION_ROUTES },
  { path: 'companies', component: CompaniesComponent, children: COMPANIES_ROUTES }
];