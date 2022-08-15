import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../app/models/user';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ScubaDivingApp';
  subscription: Subscription;
  user: User = new User();
  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.dataService.doNothing();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  logout() {
    this.dataService.logout();
  }
}
