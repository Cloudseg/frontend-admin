import { IViaCepResponse } from './viacep-response.model';
import { City } from '../address.model';

export interface ICepResponse {
    response: IViaCepResponse;
    city: City;
}