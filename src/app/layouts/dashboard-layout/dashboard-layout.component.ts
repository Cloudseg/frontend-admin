import { Component, OnInit } from '@angular/core';
import { IAppPage } from 'src/app/models/app-page.model';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/models/state/app-state.model';
import { Observable } from 'rxjs';
import { AuthState } from 'src/app/models/state/auth-state.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {

  readonly pages: IAppPage[] = [
    { title: 'Parametrização', url: '/parameters', icon: 'options-sharp' },
    // { title: 'Vistorias', url: '/inspections', icon: 'clipboard-sharp' },
    { title: 'Empresas', url: '/companies', icon: 'business-sharp' }
  ];

  authState$: Observable<AuthState>;

  constructor(
    private _store: Store<IAppState>,
    private _authService: AuthService,
    private _router: Router,
    private _dialogService: DialogService
  ) {
    this.authState$ = this._store.select('auth');
  }

  ngOnInit(): void {
    this.subscribeToState();
  }

  async logout(): Promise<void> {
    const confirm = await this._dialogService.confirm('Deseja realmente sair?');
    confirm && this._authService.logout()
  }

  private subscribeToState(): void {
    this.authState$.subscribe((state) => {
      !state.isLogged && this._router.navigate(['/login']);
    });
  }

}
