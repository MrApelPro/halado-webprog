import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Observable } from 'rxjs';
import { EventModel } from './events';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  constructor(private eventService: EventService) { }

  events$: Observable<EventModel[]>;
  events;

  ngOnInit() {
    this.events$ = this.eventService.getEvents();
    this.events$.subscribe(result => {
      this.events = result;
      console.log(this.events);
    });
  }

}