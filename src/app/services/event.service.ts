import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Event {
  eventId?: number;
  courseTitle: string;
  topicId: number;
  locationId: number;
  speakerId: number;
  classSize: number;
  numberOfDays: number;
  startDate: string;
  endDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'http://localhost:5070/api/Administrator';

  constructor(private http: HttpClient) {}

    getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.apiUrl}/Event/${id}`);
  }

    updateEvent(id: number, event: Event): Observable<any> {
    return this.http.put(`${this.apiUrl}/Events/Modify?id=${id}`, event);
    }

    deleteEvent(id: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/Events/Delete?id=${id}`);
}
  

  // ✅ Add Event
  addEvent(event: Event): Observable<any> {
    return this.http.post(`${this.apiUrl}/Event/Add`, event);
  }

  // ✅ View All Events
  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.apiUrl}/Events/View`);
  }

  // ✅ Dropdown Data
  getTopics(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Topic/view`);
  }

  getLocations(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Location/View`);
  }

  getSpeakers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Speakers/View`);
  }
}
