import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocationDataService } from '../service/location-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  locationData = [];
  filteredLocation = [];
  isfiltered: boolean;

  constructor(
    private router: Router,
    private locationService: LocationDataService,
  ) {
    fetch('../../assets/data/location.json').then(res => res.json())
      .then(data => {
        this.locationData = data.locations;
        this.locationService.setLocations(this.locationData);
      });
  }

  searchMaps(event) {
    if (event.target.value.length > 2) {
      const filteredJson = this.locationData.filter((row) => {
        if (row.state.indexOf(event.target.value) !== -1) {
          return true;
        } else {
          return false;
        }
      });
      this.isfiltered = true;
      this.filteredLocation = filteredJson;
    }
  }

  getLocationDetails(location) {
    this.locationService.setLocation(location);
    this.router.navigate(['/location-detail']);
  }

  allLocationMap() {
    this.router.navigate(['/all-location']);
  }
}