import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(
    private authservice: AuthserviceService,
    private router: Router
  ) {}
  canActivate(): boolean {
    if (this.authservice.loggedIn) {
      return true;
    } else {
      this.router.navigate(['loginform']);
      return false;
    }
  }
}
