import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
  

@Injectable({
  providedIn: 'root'
})
export class MapService {
  
  private token = 'pk.83a01327d8c5506c531a6c81a921a4a6';

  address: any = {street_address: "", street_address2: "", city: "Kingston", parish: "Kingston"}; 
  private get apiUrl() : string {
   
    return `https://us1.locationiq.com/v1/search?key=${this.token}&street=${this.address.street_address + ", " + this.address.street_address2}&city=${this.address.city_town}&state=${this.address.parish}&country=Jamaica&format=json`;

  }
  
  constructor(private httpClient: HttpClient) {
    
   }

   public getMap(){
    return this.httpClient.get<any[]>(this.apiUrl)
  }
}
