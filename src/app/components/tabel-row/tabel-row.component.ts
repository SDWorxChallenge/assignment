import {Component, Input, OnInit, Output} from '@angular/core';
import {ItemInterface} from "../../interface/item.interface";

@Component({
  selector: 'app-tabel-row',
  templateUrl: './tabel-row.component.html',
  styleUrls: ['./tabel-row.component.scss']
})


export class TabelRowComponent implements OnInit {
  @Input() item: ItemInterface | undefined;
  isShow = true;
  constructor() { }

  ngOnInit(): void {

  }

}
