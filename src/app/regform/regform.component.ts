import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registration } from '../registration';
import { RegserviceService } from '../regservice.service';

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css'],
})
export class RegformComponent implements OnInit {
  constructor(private regservice: RegserviceService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(formData: any, formValid: boolean) {
    if (formValid) {
      if (formData.sauna) {
        formData.sauna = 'Osallistun';
      } else {
        formData.sauna = 'En osallistu';
      }
      this.addReg(formData);
      this.router.navigate(['reglist']);
    }
  }

  addReg(data: object) {
    this.regservice.addReg(data as Registration).subscribe();
  }
}
