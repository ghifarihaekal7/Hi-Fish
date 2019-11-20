import { Injectable } from '@angular/core';
import { Location } from '../models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationDataService {
  locations: [];
  location: Location;

  constructor() { }

  setLocations(data) {
    this.locations = data;
  }

  getLocations() {
    return this.locations;
  }

  setLocation(data) {
    this.location = data;
  }

  getLocation() {
    return this.location;
  }
}
