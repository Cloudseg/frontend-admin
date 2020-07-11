import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) {
    this.init();
  }

  private init(): void {
    this._authService.loadUser()
      .then((isLogged: boolean) => {
        const route = isLogged ? '/' : '/login';

        this._router.navigate([route]);
      });
  }

}
