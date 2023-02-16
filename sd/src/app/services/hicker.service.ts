import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, EMPTY, Observable, of } from 'rxjs';
import { Hicker } from '../models';

@Injectable({ providedIn: 'root' })
export class HickerService {
  readonly url = 'https://63998da716b0fdad77409a5e.mockapi.io/api/v1/hikers';

  hickers$ = new BehaviorSubject<Hicker[]>([]);

  constructor(private http: HttpClient) {
    this.getHickers().subscribe((hickers) => this.hickers$.next(hickers));
  }

  getHickers(): Observable<Hicker[]> {
    return this.http.get<Hicker[]>(this.url).pipe(
      catchError(() =>
        of([
          {
            dateOfBirth: '2021-01-01',
            name: 'Jack Sparrow',
            avatar:
              'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
            country: 'Belarus',
            city: 'Minsk',
            id: '4',
          },
        ])
      )
    );
  }

  updateHicker(id: number, hicker: Hicker) {
    return this.http.put<Hicker>(`${this.url}/${id}`, hicker);
  }

  deleteHicker(id: string) {
    console.log('huhu');

    if (confirm('Are you sure you want to delete this hicker?')) {
      this.hickers$.next(
        this.hickers$.getValue().filter((hicker) => hicker.id !== id)
      );
    }
    return EMPTY;
  }
}
