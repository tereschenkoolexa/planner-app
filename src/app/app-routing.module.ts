import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { EventStartComponent } from './events/event-start/event-start.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { Page404Component } from './page404/page404.component';
import { AddEventComponent } from './events/add-event/add-event.component';
import { RequiremetAddComponent } from './requirements/requiremet-add/requiremet-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full'},
  {
    path: 'events',
    component: EventsComponent,
    children: [
      { path: '', component: EventStartComponent},
      { path: ':id', component: EventDetailComponent}
    ]
  },
  { path: 'addEvent', component: AddEventComponent},
  { path: 'addRequirement', component: RequiremetAddComponent},
  { path: 'requirements', component: RequirementsComponent},
  { path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
