import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService, Location } from '../services/location.service';

@Component({
  selector: 'app-modify-location',
  templateUrl: './modify-location.component.html',
  styleUrls: ['./modify-location.component.css']
})
export class ModifyLocationComponent implements OnInit {

  location: Location = {
    locationId: 0,
    city: '',
    state: '',
    description: ''
  };

  constructor(
    private route: ActivatedRoute,
    private locationService: LocationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.locationService.getLocationById(+id).subscribe({
        next: (data) => this.location = data,
        error: (err) => {
          console.error('Error fetching location:', err);
          alert('Failed to load location details.');
        }
      });
    }
  }

  onSubmit() {
    // Pass the locationId to match API route
    this.locationService.updateLocation(this.location,).subscribe({
      next: (res) => {
        alert('Location updated successfully!');
        this.router.navigate(['/view-location']);
      },
      error: (err) => {
        console.error('Error updating location:', err);
        alert('Failed to update location.');
      }
    });
  }
}
