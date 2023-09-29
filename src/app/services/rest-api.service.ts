import { Injectable } from '@angular/core';
import { userProps } from '../form/form.component';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  users: userProps[] = [];

  constructor() {
    this.init();
  }

  init(): void {
    this.insertUser({
      name: 'Raven Ringel',
      email: 'raven@gmail.com',
      message: 'Hello World',
    });
    this.insertUser({
      name: 'rReevss',
      email: 'rreevss@gmail.com',
      message: 'Hello World',
    });
    this.insertUser({
      name: 'rKarasuu',
      email: 'rkarasuu@gmail.com',
      message: 'Hello World',
    });
  }

  getAllUsers(): userProps[] {
    return this.users;
  }

  insertUser(user: userProps): void {
    this.users.push(user);
  }

  deleteUser(index: number): void {
    this.users.splice(index, 1);
  }
}
