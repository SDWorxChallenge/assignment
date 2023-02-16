import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  getData() {
    return this._http.get('https://63998da716b0fdad77409a5e.mockapi.io/api/v1/hikers')
  }
  constructor(private _http: HttpClient) { }
}
