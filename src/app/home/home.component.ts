import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  subscription: Subscription;
  user: any;
  constructor(private dataService: DataService) {}

  ngOnInit() {}
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
