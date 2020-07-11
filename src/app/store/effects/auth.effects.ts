import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";

import * as AuthActions from 'src/app/store/actions/auth.actions';

export type Action = AuthActions.All;

@Injectable()
export class AuthEffects {

  constructor(private action$: Actions) { }

}