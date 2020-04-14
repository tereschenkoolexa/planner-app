import { Component, OnInit, Input } from '@angular/core';
import {Event} from '../../event.model';
import { EventService } from '../../event.service';


@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {

  @Input() myEvent: Event;

  constructor(private eventService: EventService) { }
  @Input() index: number;
  ngOnInit(): void {
  }

  onSelected(){
    this.eventService.eventSelected.emit(this.myEvent);
    console.log(this.myEvent);
  }

  deleteEvent() {
    console.log(this.myEvent);
    this.eventService.deleteEvent(this.myEvent);
  }
}
