import { Injectable } from '@angular/core';
import { EventModel } from './event-list/events';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const EVENT_URL = 'api/events';

@Injectable()
export class EventService {

  constructor(private http: HttpClient) { }

  getEvents(): Observable<EventModel[]> {
    return this.http.get<EventModel[]>(EVENT_URL);
  }

  getEvent(eventId): Observable<EventModel>{
    return this.http.get<EventModel>(`${EVENT_URL}/${eventId}`);
  }

}