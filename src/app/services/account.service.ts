import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = 'https://localhost:7052/api/account'
  constructor(private http: HttpClient) { }
  getAccounts(): Observable<any> {
    return this.http.get<any>(this.apiUrl); //this is the get post bro
  }
}
