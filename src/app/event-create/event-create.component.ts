import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-event-create',
  standalone: false,
  templateUrl: './event-create.component.html',
  styleUrl: './event-create.component.scss'
})
export class EventCreateComponent implements OnInit {

  eventForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.eventForm = this.formBuilder.group({
      'name': '',
      'start': '',
      'description': ''
    });
  }

  onSubmit(eventData) {
    alert('Form submitted:\n' + JSON.stringify(eventData));
    this.eventForm.reset();
  }

}
