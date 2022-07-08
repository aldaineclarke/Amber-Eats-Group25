import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './interfaces/orders';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderEndpoint = `http://localhost:3000/orders`

  constructor(private http: HttpClient) {}

  getallorders(): Observable<Order[]>{
    return this.http.get<Order[]>(this.orderEndpoint)
  }

  addOrder(data:any):Observable<Order>{
    return this.http.post<Order>(this.orderEndpoint, data);
    
  }
  trackOrder(id:number): Observable<Order>{
    return this.http.get<Order>(this.orderEndpoint + '/' + id);
  }
}
