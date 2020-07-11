import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { LoginPageComponent } from './pages/auth/login-page/login-page.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { AuthGuard } from './guards/auth.guard';
import { DASHBOARD_ROUTES } from './routes/dashboard.routes';

const routes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '', component: DashboardLayoutComponent, children: DASHBOARD_ROUTES, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
