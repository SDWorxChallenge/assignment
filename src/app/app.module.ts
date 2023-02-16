import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { TabelRowComponent } from './components/tabel-row/tabel-row.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TabelRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
