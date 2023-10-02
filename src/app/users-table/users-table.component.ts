import { Component, Input } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { userProps } from '../services/api/models/userProps';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
})
export class UsersTableComponent {
  @Input() users: userProps[] = [];

  constructor(private api: RestApiService) {}

  onDelete(index: number): void {
    this.api.deleteUser(index);
  }
}
