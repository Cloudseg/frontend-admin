import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICepResponse } from 'src/app/models/response/cep.response.model';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private _http: HttpClient) { }

  getCepData(cep: string): Promise<ICepResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const clearCep = cep.replace(/\D/g, '');
        const response = await this._http.get<ICepResponse>(`ceps?cep=${clearCep}`).toPromise();

        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  }
}
