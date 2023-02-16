import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../api-service.service";
import {Observable, Subscription} from "rxjs";
import {UserData} from "../user-data";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  data: UserData[] = [];
  private apiSubscription: Subscription | undefined;
  constructor(private _apiservice: ApiServiceService) { }

  onDelete(id: string):void {
    console.log(this.data[0])
    const newData = this.data.filter(e => e.id !== id);
    this.data = newData;
  }
  ngOnInit(): void {
    this.apiSubscription = this._apiservice.getData().subscribe((res: any) => {
      this.data = res;
    })
  }

  ngOnDestroy(): void {
    this.apiSubscription?.unsubscribe();
  }

}
