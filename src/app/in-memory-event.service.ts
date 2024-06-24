import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { EventTable } from './event-list/events';

@Injectable()
export class InMemoryEventService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const db = {
      events: EventTable.events
    }
    return db;
  }

}