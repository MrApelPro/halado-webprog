import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventModel } from '../event-list/events';

@Component({
  selector: 'app-event-social',
  standalone: false,
  templateUrl: './event-social.component.html',
  styleUrl: './event-social.component.scss',
})
export class EventSocialComponent {
  @Input() event: EventModel;
  @Output() notify = new EventEmitter<EventModel>();
  @Output('evt') eventOutput = new EventEmitter<string>();

  like() {
    this.notify.emit(this.event);
    this.eventOutput.emit('output event!');
  }
}
