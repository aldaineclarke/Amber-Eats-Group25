import { Component, OnInit , AfterViewInit} from '@angular/core';
import {FormGroup,FormControl,Validators,} from '@angular/forms';
import * as L from 'leaflet';
import { MapService } from 'src/app/Services/map.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit , AfterViewInit {

  
  //variables related to map
  latitude: number = 17 ;
  longitude: number = 76;
  marker:any;
  private map:any;

  //icon for map marker
  iconStyle =  L.icon({
    iconUrl: ('marker-icon.png'),
    iconSize: [20, 30],
    iconAnchor: [2, 2],
    popupAnchor: [0, -2]
  });


  //refrence to map service
  constructor(private mapservice:MapService){
  }
  ngOnInit(): void {}

  //form to find location
  addressForm = new FormGroup({
    street_address: new FormControl('', [Validators.required]),
    street_address2: new FormControl(''),
    city: new FormControl('', [Validators.required]),
    parish: new FormControl('', [Validators.required]),
    saveAddressInfo: new FormControl(false),
});


//function for loading map
private initMap(): void {
  
  //gets access to map in html document
  this.map = L.map('map',{zoom: 10})

  const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

   
    tiles.addTo(this.map);
    L.marker([this.latitude, this.longitude],{icon:this.iconStyle}).addTo(this.map)
    this.setMapLocation();
}
//initialize map function ends here


//function to set map locatiion
setMapLocation(): any{    
  this.mapservice.getMap().subscribe((data: any) => {
      this.latitude = data[0].lat ?? 17.96795;
      this.longitude = data[0].lon ?? -76.87128;
      this.addMarker();
  });
 
}
//functiion to set map location ends here


//function for adding marker to map each time a new location is searched for
  addMarker() {
    if (this.marker) this.marker.remove();

    this.marker = L.marker([this.latitude, this.longitude],{icon:this.iconStyle});
    this.marker.addTo(this.map);

    this.map.panTo([this.latitude, this.longitude]);
  }
//function for adding marker to map ends here


//function for setting value from form to object 
updateMap(form: FormGroup){

  this.mapservice.address = {
    street_address: form.controls['street_address'].value,
    street_address2: form.controls['street_address2'].value,
    city: form.controls['city'].value,
    parish: form.controls['parish'].value,
};

}

ngAfterViewInit(): void {
  console.log("Hook")
  this.initMap();
}

}
