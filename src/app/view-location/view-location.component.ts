import { Component, OnInit } from '@angular/core';
import { Location, LocationService } from '../services/location.service';

@Component({
  selector: 'app-view-location',
  templateUrl: './view-location.component.html',
  styleUrls: ['./view-location.component.css']
})
export class ViewLocationComponent implements OnInit {
  locations: Location[] = [];

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.locationService.getLocations().subscribe({
      next: (data) => this.locations = data,
      error: () => alert('Failed to fetch locations.')
    });
  }
}