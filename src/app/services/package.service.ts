import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  private apiUrl = 'http://localhost:3010/api/package';

  constructor(private http: HttpClient) { }

  createPackage(packageData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, packageData);
  }

  getPackages(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
}
