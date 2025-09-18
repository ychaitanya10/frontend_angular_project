import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Location {
  locationId?: number;
  city: string;
  state: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private baseUrl = 'http://localhost:5070/api/Administrator/Location';

  constructor(private http: HttpClient) {}

  getLocationById(id: number): Observable<Location> {
    return this.http.get<Location>(`${this.baseUrl}/get?id=${id}`);
  }

  addLocation(location: Location): Observable<any> {
    return this.http.post(`${this.baseUrl}/Add`, location);
  }

  getLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(`${this.baseUrl}/View`);
  }

  updateLocation(location: Location,id?:Number): Observable<any> {
    return this.http.put(`${this.baseUrl}/Modify`, location);
  }

  deleteLocation(locationId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete?id=${locationId}`);
  }
}