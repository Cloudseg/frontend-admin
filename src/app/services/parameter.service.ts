import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Parameter } from '../models/parameter.model';
import { ParameterTypeEnum } from '../enums/parameter-type.enum';

@Injectable({
  providedIn: 'root'
})
export class ParameterService {

  private readonly ENDPOINT: string = 'admin/parameters/';

  constructor(private _http: HttpClient) { }

  get(): Promise<Parameter[]> {
    return this._http.get<Parameter[]>(this.ENDPOINT).toPromise();
  }

  updateAll(parameterSet: { [key in ParameterTypeEnum]: string }): Promise<Parameter[]> {
    return this._http.put<Parameter[]>(`${this.ENDPOINT}update-all`, parameterSet).toPromise();
  }
}
