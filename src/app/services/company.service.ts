import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private readonly ENDPOINT: string = 'companies/';

  constructor(private _http: HttpClient) { }

  get(id: number): Promise<Company>
  get(): Promise<Company[]>
  get(id?: number): Promise<Company | Company[]> {
    return this._http.get<Company | Company[]>(`${this.ENDPOINT}${id ? id : ''}`).toPromise();
  }

  store(company: Partial<Company>): Promise<Company> {
    return this._http.post<Company>(this.ENDPOINT, company).toPromise();
  }

  update(id: number, company: Partial<Company>): Promise<Company> {
    return this._http.put<Company>(`${this.ENDPOINT}${id}`, company).toPromise();
  }
}
