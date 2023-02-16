import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./components/app/app.component";
import { TableComponent } from './components/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { TableStore } from './components/table/table.store';
import { LetModule } from '@ngrx/component';

@NgModule({
  declarations: [AppComponent, TableComponent],
  imports: [BrowserModule, HttpClientModule, LetModule],
  providers: [TableStore],
  bootstrap: [AppComponent],
})
export class AppModule {}
