import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import localePtBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePtBr);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors/http-token.interceptor';

import { NgxMaskModule } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { LayoutsModule } from './layouts/layouts.module';
import { DialogsModule } from './dialogs/dialogs.module';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { authReducer } from './store/reducers/auth.reducer';
import { AuthEffects } from './store/effects/auth.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    StoreModule.forRoot({
      auth: authReducer
    }),
    EffectsModule.forRoot([
      AuthEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutsModule,
    DialogsModule,
    PagesModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
