import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registration } from './registration';

@Injectable({
  providedIn: 'root',
})
export class RegserviceService {
  private regsUrl = 'api/regs';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getRegs(): Observable<Registration[]> {
    return this.http.get<Registration[]>(this.regsUrl);
  }

  addReg(reg: Registration): Observable<Registration> {
    return this.http.post<Registration>(this.regsUrl, reg, this.httpOptions);
  }
}
