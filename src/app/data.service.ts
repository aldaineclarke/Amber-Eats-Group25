import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuInterface } from './interfaces/menu';
import { ProductInterface } from './interfaces/product';
import { SidesInterface } from './interfaces/sides';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private REST_API_SERVER = 'http://localhost:3000/products'; //JSON Server
  private REST_API_SERVER_MENU = 'http://localhost:3000/menu'; //JSON Server for menu
  private REST_API_SERVER_SIDES = 'http://localhost:3000/sides'; //JSON Server for sides
  constructor(private httpClient: HttpClient) {}
  
  public sendGetRequest() {
    return this.httpClient.get<any[]>(this.REST_API_SERVER); //invokes the GET method of the httpClient so it
                                                             //request to the REST_API_SERVER can send a GET
  }                                                   
  
  public sendGetDetails(id: number) { //declare id as a number
    const url = `${this.REST_API_SERVER}/${id}`
    return this.httpClient.get<any[]>(url); 
  }               


  //Update products post request--------------------------------
  public postProductUpdate(id: number, data: any):Observable<ProductInterface>{
    const url = `${this.REST_API_SERVER}/${id}`;
    return this.httpClient.patch<ProductInterface>(url,data)
  }
  

  //menu data get request-------------------------------------
  public getMenuRequest() { 
    return this.httpClient.get<any[]>(this.REST_API_SERVER_MENU); 
  }         
  
  public getMenuDetailsId(id:any):Observable<MenuInterface> { 
    const url = `${this.REST_API_SERVER_MENU}/${id}`;
    return this.httpClient.get<MenuInterface>(url); 
  }    

  //menu data post request-------------------------------------
  public postMenuDetails(data:any):Observable<MenuInterface>{
    return this.httpClient.post<MenuInterface>(this.REST_API_SERVER_MENU , data )
  }

  //menu data delete request-------------------------------------
  public deleteMenu(id:any):Observable<MenuInterface>{
    const url = `${this.REST_API_SERVER_MENU}/${id}`;
    return this.httpClient.delete<MenuInterface>(url)
  }

  //menu data put request-------------------------------------
  public updateMenuDetails(id:any ,data:any):Observable<MenuInterface>{
    const url = `${this.REST_API_SERVER_MENU}/${id}`;
    return this.httpClient.put<MenuInterface>(url , data )
  }
  

  //sides data get request---------------
  public getSidesRequest() {
    return this.httpClient.get<any[]>(this.REST_API_SERVER_SIDES);
  }


  //Get side by id------------------------
  public getSidesById(id:number):Observable<SidesInterface>{
    const url = `${this.REST_API_SERVER_SIDES}/${id}`;
    return this.httpClient.get<SidesInterface>(url)
  }

  public UpdateSides(id:number, data:any):Observable<SidesInterface>{
    const url = `${this.REST_API_SERVER_SIDES}/${id}`;
    return this.httpClient.patch<SidesInterface>(url, data)
  }

}
