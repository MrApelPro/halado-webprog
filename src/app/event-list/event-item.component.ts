import { Component, Input } from '@angular/core';
import { EventModel } from './events';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-event-item',
  template: `
        <p-toast></p-toast>
        <p-card>
          <ng-template pTemplate="header">
            <p-button icon="pi pi-calendar" [title]="event.name + ' details'" [routerLink]="['/events', event.id]" label="{{event.name}}" [link]="true"></p-button>
          </ng-template>
          <p *ngIf="event.description" class="m-0 pb-2">
              {{message}} - {{event.description}}
          </p>
          <p-tag severity="info" value="{{event.start  | date:'yyyy-MM-dd HH:mm'}}"></p-tag>
          <ng-template pTemplate="footer">
            <app-event-social [event]="event" (notify)="onNotify($event)" (evt)="onEvt($event)"></app-event-social>
          </ng-template>
        </p-card>
  `,
  styles: [':host {padding-bottom: 1rem;}'],
  providers: [MessageService]
})
export class EventItemComponent {
  @Input('event') event: EventModel;
  @Input('msg') message: string;

  constructor(private messageService: MessageService) {}

  onNotify(event): void {
    event.likes++;
    this.messageService.add({ severity: 'info', summary: 'Event liked!', detail: 'Likes: ' + event.likes }); 
  }
  onEvt(msg): void {
    console.log("MESSAGE:", msg);
  }
}