import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/interfaces/IUser';

@Component({
  selector: 'app-mobile-list',
  templateUrl: './mobile-list.component.html',
  styleUrls: ['./mobile-list.component.scss']
})
export class MobileListComponent implements OnInit {

  @Input("title")
  title: string = ""

  @Input("users")
  users: IUser[] = []

  constructor() { }

  ngOnInit(): void {
  }

  deleteUser(id: string)
  {
    if(confirm(`Are you sure to delete this row?`))
    {
      this.users = this.users.filter(u => u.id != id);
    }
  }

}
