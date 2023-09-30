import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { BrowseComponent } from './browse/browse.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
  },
  {
    path: 'browse',
    component: BrowseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
