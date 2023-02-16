import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Hicker } from '../models';

@Injectable({ providedIn: 'root' })
export class HickerService {
  readonly url = 'https://63998da716b0fdad77409a5e.mockapi.io/api/v1/hikers';

  constructor(private http: HttpClient) {}

  getHickers(): Observable<Hicker[]> {
    return this.http.get<Hicker[]>(this.url);
  }

  updateHicker(id: number, hicker: Hicker) {
    return this.http.put<Hicker>(`${this.url}/${id}`, hicker);
  }

  deleteHicker(id: number) {
    if (confirm('Are you sure you want to delete this hicker?')) {
      return this.http.delete(`${this.url}/${id}`);
    }
    return EMPTY;
  }
}
