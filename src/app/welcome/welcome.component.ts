import {Component} from '@angular/core';

import { UserService } from '../security/service/user.service';

import { UserModel } from '../security/model/user.model';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'welcome',
  templateUrl: './welcome.template.html'
})
export class WelcomeComponent {

  user: UserModel;
  userEventsSubscription: Subscription;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userEventsSubscription = this.userService.userEvents.subscribe(user => this.user = user);
  }

  ngOnDestroy() {
    if (this.userEventsSubscription) {
      this.userEventsSubscription.unsubscribe();
    }
  }
}
