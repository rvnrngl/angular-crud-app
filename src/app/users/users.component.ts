import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/api/users.service';
import { userProps } from '../services/api/models/userProps';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  users: userProps[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe({
      next: (data: userProps[]): void => {
        this.users = data;
        console.log(this.users);
      },
    });
  }
}
