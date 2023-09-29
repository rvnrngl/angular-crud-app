import { Component, Input } from '@angular/core';
import { userProps } from '../form/form.component';
import { RestApiService } from '../services/rest-api.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
})
export class UsersTableComponent {
  @Input()
  users: userProps[] = [];

  constructor(private api: RestApiService) {}

  onDelete(index: number): void {
    this.api.deleteUser(index);
  }
}
