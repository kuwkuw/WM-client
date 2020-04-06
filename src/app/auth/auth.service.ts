import { Injectable, } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(userData) {
    return this.http.post('/api/auth/login', userData).subscribe({
      next: (data: {access_token: string}) => {
        console.log(data);
        localStorage.setItem('access_token', data.access_token);
      },
      complete: () => {
        console.log('complete');
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  addNewAccount(userData: User) {
    return this.http.post('/api/auth', userData).subscribe({
      next: (data) => {
        console.log(data);
      },
      complete: () => {
        console.log('complete');
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
