import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from 'src/models/User';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}

  private API_URL = 'https://63998da716b0fdad77409a5e.mockapi.io/api/v1/hikers';

  getUsers() {
    console.log('getUsers()');
    return this.http.get<User[]>(this.API_URL, { responseType: 'json' });
  }
}
