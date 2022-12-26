import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
import { Credential } from '../credential';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
})
export class LoginformComponent implements OnInit {
  errorMsg: String = '';
  constructor(
    private authservice: AuthserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authservice.getUsers();
  }

  onSubmit(formData: any, formValid: boolean) {
    if (formValid) {
      console.log('formdata', formData);
      this.checkCreds(formData);
    }
  }

  checkCreds(creds: Credential) {
    this.authservice.checkCreds(creds);
    if (this.authservice.loggedIn) {
      this.router.navigate(['regform']);
    } else {
      this.errorMsg =
        'Tunnus tai salasana ei kelpaa. Tarkista tunnukset ja yritä uudelleen.';
      setTimeout(() => {
        this.errorMsg = '';
      }, 3000);
    }
  }
}
