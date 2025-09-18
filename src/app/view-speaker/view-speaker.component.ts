import { Component, OnInit } from '@angular/core';
import { SpeakerService, Speaker } from '../services/speaker.service';

@Component({
  selector: 'app-view-speakers',
  templateUrl: './view-speaker.component.html',
  styleUrls: ['./view-speaker.component.css']
})
export class ViewSpeakerComponent implements OnInit {

  speakerList: Speaker[] = [];

  constructor(private speakerService: SpeakerService) { }

  ngOnInit(): void {
    this.loadSpeakers();
  }

  loadSpeakers() {
    this.speakerService.getSpeakers().subscribe({
      next: (data) => this.speakerList = data,
      error: (err) => {
        console.error('Error fetching speakers:', err);
        alert('Failed to load speakers from database.');
      }
    });
  }
}
