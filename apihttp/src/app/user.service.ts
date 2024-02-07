import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string = 'https://doe-dev-api.isorobot.io/api/v1/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    const url = '${this.apiUrl}';
    return this.http.get<any[]>(url);
  }

  getUserDetails(userId: number): Observable<any> {
    const url = '${this.apiUrl}/${userId}';
    return this.http.get<any>(url);
  }

  createUser(user: any): Observable<any> {
    const url = '${this.apiUrl}';
    return this.http.post<any>(url, user);
  }

  updateUser(userId: number, updatedUser: any): Observable<any> {
    const url = '${this.apiUrl}/${userId}';
    return this.http.put<any>(url, updatedUser);
  }

  deleteUser(userId: number): Observable<any> {
    const url = '${this.apiUrl}/${userId}';
    return this.http.delete<any>(url);
  }
}