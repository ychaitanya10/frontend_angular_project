import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Administrator {
  adminId?: number;
  name: string;
  email: string;
  phone: string;
  userId?: number;
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = 'http://localhost:5070/api/Administrator';

  constructor(private http: HttpClient) { }

  // Add admin
  addAdmin(admin: Administrator, username: string, password: string): Observable<any> {
    // Build query parameters
    const params = new HttpParams()
      .set('username', username)
      .set('password', password);

    // POST request with admin in body, username/password as query params
    return this.http.post<any>(
      `${this.baseUrl}/Admin/Add`,
      admin,       // body
      { params }   // query string
    );
  }

  // Get all admins
  getAllAdmins(): Observable<Administrator[]> {
    return this.http.get<Administrator[]>(`${this.baseUrl}/Admin/View`);
  }
}
