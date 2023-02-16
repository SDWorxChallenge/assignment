import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //readonly BASE_URL = "https://63998da716b0fdad77409a5e.mockapi.io/api/v1"
  readonly BASE_URL = "/assets/hikers.json"

  constructor(private http: HttpClient) { }

  getHikers() : Observable<IUser[]>
  {
    return this.http.get<IUser[]>(`${this.BASE_URL}`)
  }
}
