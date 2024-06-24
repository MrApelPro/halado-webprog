export class EventModel {
  id: number;
  name: string;
  start: string;
  description?: string;
  likes: number;
}

export class EventTable {
  public static events: EventModel[] = [
    {
      id: 1,
      name: 'BBQ at Mike\'s',
      start: '2020-05-19T15:30:00',
      description: 'There will be food...',
      likes: 12
    },
    {
      id: 2,
      name: 'Movie night',
      start: '2020-04-19T20:30:00',
      likes: 45
    },
    {
      id: 3,
      name: 'Basketball training',
      start: '2020-06-21T06:30:00', 
      description: 'Training means drinking beers.',
      likes: 69
    },
    {
      id: 4,
      name: 'Teaching',
      start: '2020-06-21T06:30:00', 
      description: 'Teaching.',
      likes: 69
    }
  ];
}
