import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
  isAuthenticated = false;
  constructor(private http: HttpClient) { }

  loginUser() {
    return this.http
      .get('https://testdev.org/loginuser');
     
  }
}
