import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationDataService } from '../service/location-data.service';
import { Location } from '../models/location';
declare var google;

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.page.html',
  styleUrls: ['./location-detail.page.scss'],
})
export class LocationDetailPage implements OnInit {
  @ViewChild('map', {static: false}) mapContainer: ElementRef;
  map: any;
  location = {} as Location;

  constructor(
    private geolocation: Geolocation,
    private locationService: LocationDataService) { }

  ngOnInit() {
    this.location = this.locationService.getLocation();
    this.displayGoogleMap();
  }

  displayGoogleMap() {
    const latLng = new google.maps.LatLng(this.location.latitude, this.location.longitude);
    const mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
    const marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng
    });
    this.addInfoWindow(marker, this.location.name + this.location.province);
  }

  addInfoWindow(marker, content) {
    const infoWindow = new google.maps.InfoWindow({
      content
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }
}