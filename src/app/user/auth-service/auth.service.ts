import { Injectable } from '@angular/core';
import { IUser } from '../user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  currentUser: IUser;

  constructor(private http: HttpClient) { }

  loginUser(username: string, password: string) {
    const loginInfo = { username: username, password: password };
    const options = { headers: new HttpHeaders({'Content-Type': '/application/json'})};

    return this.http.post('/api/login', loginInfo, options).pipe(tap(data => {
      this.currentUser = <IUser>data['user'];
    })).pipe(catchError(err => {
      return of(false);
    }));

    // this.currentUser = {
    //   id: 1,
    //   firstname: 'Cara',
    //   lastname: 'Bentley',
    //   username: username
    // };
  }

  updateCurrentUser(firstName: string, lastName: string) {
    // Persist on client
    this.currentUser.firstname = firstName;
    this.currentUser.lastname = lastName;

    // Persist on client
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
    return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
  }

  isAuthenticated() {
    // Convert to boolean
    return !!this.currentUser;
  }

  checkAuthenticationStatus() {
    this.http.get('/api/currentIdentity').pipe(tap(data => {
      if (data instanceof Object) {
        this.currentUser = <IUser>data;
      }
    })).subscribe();
  }

}
