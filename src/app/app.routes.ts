//import { Routes, RouterModule } from '@angular/router';

//import { PeopleListComponent } from './people/people-list.component';
//import { PersonDetailsComponent } from './person-details.component';

// Route config let's you map routes to components
//const routes: Routes = [
  // map '/persons' to the people list component
 /* {
    path: 'persons',
    component: PeopleListComponent,
  }*//*,
  // map '/persons/:id' to person details component
  {
    path: 'persons/:id',
    component: PersonDetailsComponent
  },
  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/persons',
    pathMatch: 'full'
  }*/
//];

//export const routing = RouterModule.forRoot(routes);


import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
//import {DiveLogComponent} from './logs/dive-log.component';
import {PeopleManagementComponent} from './people/people-management.component';




const routes: Routes = [
//  { path: 'divelogs', component: DiveLogComponent },
  { path: 'accounts', component: PeopleManagementComponent },
  { path: '', pathMatch: 'full', component: WelcomeComponent }
];

export const routingModule = RouterModule.forRoot(routes);
