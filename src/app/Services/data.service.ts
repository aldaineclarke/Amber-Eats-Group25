import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductInterface } from '../interfaces/product';
import { SidesInterface } from '../interfaces/sides';
import { Observable, shareReplay} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private REST_API_SERVER = 'http://localhost:3000/products'; //JSON Server
  private REST_API_SERVER_SIDES = 'http://localhost:3000/sides'; //JSON Server for sides
  constructor(private httpClient: HttpClient) {}
  
  public getAllProducts():Observable<ProductInterface[]> {
    return this.httpClient.get<ProductInterface[]>(this.REST_API_SERVER).pipe(shareReplay()); //invokes the GET method of the httpClient so it
                                                             //request to the REST_API_SERVER can send a GET
  }                                                   
  
  public getProductById(id: number):Observable<ProductInterface> { //declare id as a number
    const url = `${this.REST_API_SERVER}/${id}`
    return this.httpClient.get<ProductInterface>(url); 
  }               


  //Update products post request--------------------------------
  public updateProduct(id: number, data: any):Observable<ProductInterface>{
    const url = `${this.REST_API_SERVER}/${id}`;
    return this.httpClient.patch<ProductInterface>(url,data)
  }
  

  //sides data get request---------------
  public getAllSides():Observable<SidesInterface[]> {
    return this.httpClient.get<SidesInterface[]>(this.REST_API_SERVER_SIDES).pipe(shareReplay());
  }


  //Get side by id------------------------
  public getSidesById(id:number):Observable<SidesInterface>{
    const url = `${this.REST_API_SERVER_SIDES}/${id}`;
    return this.httpClient.get<SidesInterface>(url)
  }

  public updateSides(id:number, data:any):Observable<SidesInterface>{
    const url = `${this.REST_API_SERVER_SIDES}/${id}`;
    return this.httpClient.patch<SidesInterface>(url, data)
  }
  // Gets limited products based on the limit and also the page. by default limit is 20.
  public getLimitedProducts(page= 1, limit = 20):Observable<ProductInterface[]>{
    return this.httpClient.get<ProductInterface[]>(this.REST_API_SERVER+"?_page="+page +"&_limit="+limit);
  }
  
  // public filterProucts(property:string, value:any):Observable<ProductInterface[]>{
  // }

}
