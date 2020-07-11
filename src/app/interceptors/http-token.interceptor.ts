import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, mergeMap, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import { IAppState } from '../models/state/app-state.model';
import { DialogService } from '../services/dialog.service';

import * as AuthActions from 'src/app/store/actions/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class HttpTokenInterceptor implements HttpInterceptor {

  readonly noContentUrls: string[] = ['files'];

  constructor(
    private _store: Store<IAppState>,
    private _dialogService: DialogService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const originalUrl = request.url;

    if (!request.url.includes('http'))
      request = request.clone({ url: `${environment.API_URL}${request.url}` });

    if (!request.headers.has('Content-Type') && this.noContentUrls.indexOf(originalUrl) === -1) {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
    }

    return this._store.select('auth').pipe(
      take(1),
      map((state) => state.token),
      mergeMap((token) => this.request(request, next, token))
    );
  }

  private request(request: HttpRequest<any>, next: HttpHandler, token: string): Observable<HttpEvent<any>> {

    if (token && request.url.includes(environment.API_URL))
      request = request.clone({ setHeaders: { 'Authorization': `Bearer ${token}` } });

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        const { status, url } = error;

        if (status === 401 && !url.includes('login'))
          this.logout();

        return throwError(error);
      })
    );

  }

  private async logout(): Promise<void> {
    await this._dialogService.alert('A sua sessão expirou. Realize login novamente.');
    this._store.dispatch(new AuthActions.Logout());
  }

}