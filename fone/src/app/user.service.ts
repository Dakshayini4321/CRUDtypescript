import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://doe-dev-api.isorobot.io/api/v1/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getUserById(id: number): Observable<any> {
    const url = '${this.apiUrl}/${id}';
    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  addUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateUser(id: number, user: any): Observable<any> {
    const url = '${this.apiUrl}/${id}';
    return this.http.put<any>(url, user)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteUser(id: number): Observable<any> {
    const url = '${this.apiUrl}/${id}';
    return this.http.delete<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<never> {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = 'Error: ${error.error.message}';
    } else {
      // Server-side error
      errorMessage = 'Error Code: ${error.status}\nMessage: ${error.message}';
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}