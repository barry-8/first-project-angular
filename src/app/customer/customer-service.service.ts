import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerServiceService {
  constructor(private http: HttpClient) {}

  getAllCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:8080/customer-list');
  }

  findCustomer(emailId: string): Observable<Customer> {
    return this.http.get<Customer>(
      'http://localhost:8080/find-customer/' + emailId
    );
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(
      'http://localhost:8080/add-customer',

      customer
    );
  }
}
