import { Action } from '@ngrx/store';

export const LOGIN = '[Auth] Login';
export const LOGOUT = '[Auth] Logout';
export const UPDATE_TOKEN = '[Auth] Update Token';

export class Login implements Action {
  readonly type = LOGIN;

  constructor(public payload: string) { }
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class UpdateToken implements Action {
  readonly type = UPDATE_TOKEN;

  constructor(public payload: string) { }
}

export type All =
  Login |
  Logout |
  UpdateToken;