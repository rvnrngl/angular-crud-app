import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { UsersTableComponent } from './users-table/users-table.component';
import { MenuComponent } from './menu/menu.component';
import { BrowseComponent } from './browse/browse.component';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    UsersTableComponent,
    MenuComponent,
    BrowseComponent,
    UsersComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
