import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http: HttpClient ) { }

  findAdmin(adminId: string): Observable<Admin> {
    return this.http.get<Admin>('http://localhost:8080/find-admin/'+adminId);
  }

  
}