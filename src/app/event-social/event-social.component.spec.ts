import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSocialComponent } from './event-social.component';

describe('EventSocialComponent', () => {
  let component: EventSocialComponent;
  let fixture: ComponentFixture<EventSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventSocialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
