import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userProps } from './models/userProps';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl: string = 'https://fakestoreapi.com/';

  constructor(private http: HttpClient) {}

  getAllUsers(limit: number = 10): Observable<userProps[]> {
    const usersUrl = `${this.baseUrl}users?limit=${limit}`;
    return this.http.get<userProps[]>(usersUrl);
  }

  createUser(user: userProps) {
    const userUrl = `${this.baseUrl}users`;
    return this.http.post(userUrl, user);
  }
}
