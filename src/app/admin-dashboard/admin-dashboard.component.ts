import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { EventService } from '../services/event.service';
import { TopicServiceService } from '../services/topic-service.service';
import { LocationService } from '../services/location.service';
import { SpeakerService } from '../services/speaker.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  counts = {
    admins: 0,
    events: 0,
    topics: 0,
    locations: 0,
    speakers: 0
  };

  constructor(
    private adminService: AdminService,
    private eventService: EventService,
    private topicService: TopicServiceService,
    private locationService: LocationService,
    private speakerService: SpeakerService
  ) { }

  ngOnInit(): void {
    this.loadCounts();
  }

  loadCounts() {
    this.adminService.getAllAdmins().subscribe(data => this.counts.admins = data.length);
    this.eventService.getEvents().subscribe(data => this.counts.events = data.length);
    this.topicService.getAllTopics().subscribe(data => this.counts.topics = data.length);
    this.locationService.getLocations().subscribe(data => this.counts.locations = data.length);
    this.speakerService.getSpeakers().subscribe(data => this.counts.speakers = data.length);
  }
}
