import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILoginRequest } from '../models/requests/login-request.model';
import { ILoginResponse } from '../models/response/login-response.model';
import { STORAGE } from '../constants/storage.constant';
import { Store } from '@ngrx/store';
import { IAppState } from '../models/state/app-state.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as AuthActions from 'src/app/store/actions/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly ENDPOINT: string = 'admin/auth/';

  constructor(
    private _http: HttpClient,
    private _store: Store<IAppState>
  ) { }

  loadUser(): Promise<boolean> {
    return new Promise((resolve) => {
      const token: string = localStorage.getItem(STORAGE.AUTH_TOKEN);

      token && this._store.dispatch(new AuthActions.Login(token));
      resolve(!!token);
    });
  }

  login(data: ILoginRequest): Observable<ILoginResponse> {
    return this._http.post<ILoginResponse>(`${this.ENDPOINT}login`, data)
      .pipe(map((response) => {
        const { token } = response;

        localStorage.setItem(STORAGE.AUTH_TOKEN, token);
        this._store.dispatch(new AuthActions.Login(token));

        return response;
      }));
  }

  logout(): void {
    localStorage.removeItem(STORAGE.AUTH_TOKEN);
    this._store.dispatch(new AuthActions.Logout());
  }
}
