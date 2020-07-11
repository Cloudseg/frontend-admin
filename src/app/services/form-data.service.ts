import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from '../models/address.model';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor(private _http: HttpClient) { }

  public cities(searchTerm: string = ''): Promise<City[]> {
    return this._http.get<City[]>(`cities${searchTerm ? `?search=${searchTerm}` : ''}`).toPromise();
  }
}
