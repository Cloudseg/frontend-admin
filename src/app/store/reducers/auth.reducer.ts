import * as AuthActions from 'src/app/store/actions/auth.actions';
import { AuthState } from 'src/app/models/state/auth-state.model';

export type Action = AuthActions.All;

const defaultState: AuthState = {
  isLogged: false,
  token: null
};

const newState = (state: AuthState, newData: Partial<AuthState>) => Object.assign({}, state, newData);

export function authReducer(state: AuthState = defaultState, action: Action) {

  switch (action.type) {

    case AuthActions.LOGIN:
      return newState(state, {
        isLogged: true,
        token: action.payload
      });

    case AuthActions.LOGOUT:
      return newState(state, {
        isLogged: false,
        token: null
      });

    case AuthActions.UPDATE_TOKEN:
      return newState(state, {
        token: action.payload
      });

    default:
      return state;

  }

}