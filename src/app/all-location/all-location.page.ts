import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationDataService } from '../service/location-data.service';
declare var google;

@Component({
  selector: 'app-all-location',
  templateUrl: './all-location.page.html',
  styleUrls: ['./all-location.page.scss'],
})
export class AllLocationPage implements OnInit {
  @ViewChild('map', {static: false}) mapContainer: ElementRef;
  map: any;
  locationData = [];

  constructor(
    private geolocation: Geolocation,
    private locationService: LocationDataService) { }

  ngOnInit() {
    this.locationData = this.locationService.getLocations();
    this.displayGoogleMap();
    this.getMarkers();
  }

  displayGoogleMap() {
    const latLng = new google.maps.LatLng(28.6117993, 77.2194934);

    const mapOptions = {
      center: latLng,
      disableDefaultUI: true,
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
  }

  getMarkers() {
    // tslint:disable-next-line:variable-name
    for (let _i = 0; _i < this.locationData.length; _i++) {
      if (_i > 0) {
        this.addMarkersToMap(this.locationData[_i]);
      }
    }
  }

  addMarkersToMap(location) {
    const position = new google.maps.LatLng(location.latitude, location.longitude);
    const locationMarker = new google.maps.Marker({ position, title: location.name });
    locationMarker.setMap(this.map);
  }
}