import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuInterface } from './interfaces/menu';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private REST_API_SERVER = 'http://localhost:3000/products'; //JSON Server
  private REST_API_SERVER_MENU = 'http://localhost:3000/menu'; //JSON Server for menu
  constructor(private httpClient: HttpClient) {}
  
  public sendGetRequest() {
    return this.httpClient.get<any[]>(this.REST_API_SERVER); //invokes the GET method of the httpClient so it
                                                             //request to the REST_API_SERVER can send a GET
  }                                                   
  
  public sendGetDetails(id: number) { //declare id as a number
    const url = `${this.REST_API_SERVER}/${id}`
    return this.httpClient.get<any[]>(url); 
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
  
}
