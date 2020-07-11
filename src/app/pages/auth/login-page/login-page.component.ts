import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    private _toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  login() {
    if (!this.form.valid) return;

    this._authService.login(this.form.value)
      .subscribe({
        next: () => this._router.navigate(['/']),
        error: () => this._toastr.error('Erro ao realizar login.')
      });
  }

  buildForm() {
    this.form = this._formBuilder.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }
}
