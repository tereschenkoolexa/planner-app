import { Injectable, EventEmitter } from '@angular/core';
import { Event } from './event.model';

@Injectable({
  providedIn: 'root'
})

export class EventService {
  events: Event[] = [
    new Event('A1', 'A1', 'https://www.pngkit.com/png/detail/150-1504936_letter-b-png-letter-a-transparent-background.png'),
    new Event('B2', 'B2', 'https://dotnetnuke.nl/Portals/16/EasyDNNnews/18/bootstrap-social-logo.png'),
    new Event('C3', 'C3', 'https://img.favpng.com/15/18/18/toccafondi-mario-c-snc-computer-icons-png-favpng-NFtxkgMvr1As3UcTLaTsRJB5M.jpg'),
  ];
  eventSelected = new EventEmitter<Event>();
  eventUpdate = new EventEmitter<Event[]>();
  getEvents(): Event[] {
    return this.events.slice();
  }
  addNewEvent(data: Event): void{
    this.events.push(data);
    this.eventUpdate.emit(this.events);
  }
  addSingleEvent(index: number): Event{
    return this.events[index];
  }

  deleteEvent(item: Event) {
    console.log(item);
    let id = this.events.indexOf(item);
    if (id != null){
      this.events.splice(id, 1);
      this.eventUpdate.emit(this.events);
    }
  }
  constructor() { }
}
