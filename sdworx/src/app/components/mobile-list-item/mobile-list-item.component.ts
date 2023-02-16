import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/interfaces/IUser';

@Component({
  selector: 'app-mobile-list-item',
  templateUrl: './mobile-list-item.component.html',
  styleUrls: ['./mobile-list-item.component.scss']
})
export class MobileListItemComponent implements OnInit {

  @Input("user")
  user?: IUser

  @Output("delete")
  deleteEmitter: EventEmitter<string>

  constructor() {
    this.deleteEmitter = new EventEmitter<string>()
   }

  ngOnInit(): void {
  }

  emitDelete(id: string){
    this.deleteEmitter.emit(id)
  }

}
