import { Injectable } from '@angular/core';
import { IUser } from '../user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  currentUser: IUser;

  constructor() { }

  loginUser(username: string, password: string) {
    this.currentUser = {
      id: 1,
      firstname: 'Cara',
      lastname: 'Bentley',
      username: username
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}
