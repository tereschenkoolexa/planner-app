import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EventsComponent } from './events/events.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventItemComponent } from './events/event-list/event-item/event-item.component';
import { AddEventComponent } from './events/add-event/add-event.component';

import { FormsModule} from '@angular/forms';
import { EventStartComponent } from './events/event-start/event-start.component';
import { Page404Component } from './page404/page404.component';
import { RequiremetItemComponent } from './requirements/requiremet-item/requiremet-item.component';
import { RequiremetAddComponent } from './requirements/requiremet-add/requiremet-add.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventsComponent,
    RequirementsComponent,
    EventListComponent,
    EventDetailComponent,
    EventItemComponent,
    AddEventComponent,
    EventStartComponent,
    Page404Component,
    RequiremetItemComponent,
    RequiremetAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
