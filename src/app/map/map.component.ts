import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  ngOnInit(): void {
    // Load the Google Map on the browser

    let loader = new Loader({
      apiKey: 'AIzaSyBF1UrD_juB0zLJtCFB1vDef6KB67UXqo4',
    });

    loader.load().then(() => {
      console.log('map loaded');

      // location latitude and longitude

      const location = {
        lat: 18.1096,
        lng: 77.2975,
      };

      this.map = new google.maps.Map(
        document.getElementById('map') as Element,
        {
          center: location,
          zoom: 6,
        }
      );
    });
  }

  title = 'google-map';

  private map: google.maps.Map | undefined;
}
