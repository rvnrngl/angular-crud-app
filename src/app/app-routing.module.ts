import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { BrowseComponent } from './browse/browse.component';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'about',
    component: BrowseComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
