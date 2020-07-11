import { Injectable } from '@angular/core';
import { ToastrService as NgxToastr, ToastrConfig } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  readonly options: Partial<ToastrConfig> = {
    toastClass: 'ngx-toastr l8-toastr',
    positionClass: 'toast-bottom-left',
    timeOut: 2000
  };

  constructor(private _toastr: NgxToastr) { }

  success(message: string, title: string = null, options: Partial<ToastrConfig> = null) {
    return this._toastr.success(message, title, { ...this.options, ...options });
  }

  error(message: string, title: string = null, options: Partial<ToastrConfig> = null) {
    return this._toastr.error(message, title, { ...this.options, ...options });
  }

  info(message: string, title: string = null, options: Partial<ToastrConfig> = null) {
    return this._toastr.info(message, title, { ...this.options, ...options });
  }

  warning(message: string, title: string = null, options: Partial<ToastrConfig> = null) {
    return this._toastr.warning(message, title, { ...this.options, ...options });
  }
}