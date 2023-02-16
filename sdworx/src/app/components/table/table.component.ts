import { Component, OnInit , Input} from '@angular/core';
import { IUser } from 'src/app/interfaces/IUser';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

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
