import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { MobileListComponent } from './components/mobile-list/mobile-list.component';
import { MobileListItemComponent } from './components/mobile-list-item/mobile-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    MobileListComponent,
    MobileListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
