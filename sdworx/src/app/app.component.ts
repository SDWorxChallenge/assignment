import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/IUser';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sdworx';

  users: IUser[] = []

  constructor(private api: ApiService)
  {

  }

  ngOnInit(): void {
    this.api.getHikers().subscribe(userList => {
      this.users = userList
    })
  }
}
