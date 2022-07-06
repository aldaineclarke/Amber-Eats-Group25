import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RatingsService {
  private REST_API_SERVER = 'http://localhost:3000/products';
  // private REST_API_SERVER_MENU = 'http://localhost:3000/menu'; 

  constructor(private RatingsClient: HttpClient) {}


  public sendGetRequest_ratings():Observable<ProductInterface[]>{
    return this.RatingsClient.get<ProductInterface[]>(this.REST_API_SERVER);
  }

  public updateratings(data:any, id:number ):Observable<ProductInterface> {
    return this.RatingsClient.patch<ProductInterface>(this.REST_API_SERVER+"/"+id, data);
  }

  public fetchItem_ratings(id: number):Observable<ProductInterface> { //declare id as a number
    // const url = `${this.REST_API_SERVER}/${id}`
    return this.RatingsClient.get<ProductInterface>(`${this.REST_API_SERVER}/${id}`)
  }   

}
export interface ProductInterface{
  id:number;
  name: string;
  description:string;
  price: number;
  imageUrl:string;
  quantity:number;
  ratingsAvg: number;
  ratingCount: number;

}
