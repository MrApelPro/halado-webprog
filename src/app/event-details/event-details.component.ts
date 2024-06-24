import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../event.service';
import { EventModel } from '../event-list/events';

@Component({
  selector: 'app-event-details',
  standalone: false,
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.scss'
})
export class EventDetailsComponent implements OnInit {

  events = [];
  event: EventModel;

  constructor(private route: ActivatedRoute,
              private eventService: EventService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.eventService.getEvent(+params.get('eventId')).subscribe(event => {
        this.event = event;
      });
    });
  }

}
