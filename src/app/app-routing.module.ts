import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { EventStartComponent } from './events/event-start/event-start.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { Page404Component } from './page404/page404.component';

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
  { path: 'requirements', component: RequirementsComponent},
  { path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
