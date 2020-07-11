export interface Address {
  id: number;
  zip_code: string;
  address: string;
  number: number;
  complement: string;
  latitude: number;
  longitude: number;
  neighborhood: string;
  city_id: number;
  city?: City;
}

export interface City {
  id: number;
  name: string;
  state_id: number;
  state?: State;
}

export interface State {
  id: number;
  name: string;
  code: string;
}