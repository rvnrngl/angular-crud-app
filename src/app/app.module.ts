import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { UsersTableComponent } from './users-table/users-table.component';
import { MenuComponent } from './menu/menu.component';
import { BrowseComponent } from './browse/browse.component';

@NgModule({
  declarations: [AppComponent, FormComponent, UsersTableComponent, MenuComponent, BrowseComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
