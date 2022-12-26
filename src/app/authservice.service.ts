import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Credential } from './credential';

@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  private authUrl = 'api/creds';
  loggedIn: boolean = false;
  users: Credential[] = [];

  constructor(private http: HttpClient) {}

  getUsers() {
    this.http
      .get<Credential[]>(this.authUrl)
      .subscribe((users) => (this.users = users));
  }

  checkCreds(credentials: Credential) {
    const user = this.users.find((x) => x.username === credentials.username);
    console.log('user', user);
    const password = credentials.password === user?.password;
    console.log('password', password);
    if (user && password) {
      console.log('user', user, 'pwd', password);
      this.loggedIn = true;
    }
    return true;
  }

  logout() {
    console.log('logout service');
    this.loggedIn = false;
  }
}
