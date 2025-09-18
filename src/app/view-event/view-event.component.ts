import { Component, OnInit } from '@angular/core';
import { EventService, Event } from '../services/event.service';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {
  events: Event[] = [];
  loading = true;
  errorMessage = '';

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents() {
    this.eventService.getEvents().subscribe({
      next: (data) => {
        this.events = data;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'Failed to load events';
        this.loading = false;
        console.error('Error fetching events:', err);
      }
    });
  }
}
