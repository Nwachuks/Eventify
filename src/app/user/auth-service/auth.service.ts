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

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstname = firstName;
    this.currentUser.lastname = lastName;
  }

  isAuthenticated() {
    // Convert to boolean
    return !!this.currentUser;
  }
}
