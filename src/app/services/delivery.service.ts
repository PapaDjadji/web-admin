import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  private apiUrl = 'http://localhost:3010/api/delivery';

  constructor(private http: HttpClient) { }

  createDelivery(deliveryData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, deliveryData);
  }

  getDeliveries(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
}
