import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Registration } from '../registration';
import { RegserviceService } from '../regservice.service';

@Component({
  selector: 'app-reglist',
  templateUrl: './reglist.component.html',
  styleUrls: ['./reglist.component.css'],
})
export class ReglistComponent implements OnInit, OnDestroy {
  regs: Registration[] = [];
  sub!: Subscription;

  constructor(private regservice: RegserviceService) {}

  ngOnInit(): void {
    this.getRegs();
  }

  getRegs() {
    this.sub = this.regservice
      .getRegs()
      .subscribe((regs) => (this.regs = regs));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
