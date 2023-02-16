import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import User from '../models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'simple-ng';
  users: User[] = [];

  // private API_URL = 'https://63998da716b0fdad77409a5e.mockapi.io/api/v1/hikers';
  private API_URL = '/assets/users.json';

  constructor(private http: HttpClient) {}

  getUsers() {
    this.http
      .get<User[]>(this.API_URL, { responseType: 'json' })
      .subscribe((data: User[]) => {
        this.users = data;
      });
  }

  // create a constructor to get http client

  ngOnInit() {
    this.getUsers();
  }
  async confirmDelete() {
    confirm('Are you sure you want to delete this user?');
  }

  async deleteUser(id: string) {
    await this.confirmDelete();
    this.users = this.users.filter((user) => user.id !== id);
  }

  convertDate(date: string) {
    return new Date(date).toLocaleDateString(undefined, {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }

  getBreakpoint() {
    return window
      .getComputedStyle(document.body, ':before')
      .content.replace(/\"/g, '');
  }

  isMobile() {
    console.log(this.getBreakpoint());
    return this.getBreakpoint() === 'mobile';
  }
  isPc() {
    return this.getBreakpoint() === 'pc';
  }
}
