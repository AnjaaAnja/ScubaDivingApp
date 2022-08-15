import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Comment } from '../models/comment';
import { Program } from '../models/program';
import { Reservation } from '../models/reservation';
import { User } from '../models/user';
import { take } from 'rxjs/operators';
import { Organization } from '../models/organization';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent implements OnInit {
  public address: any;
  public name: any;
  public currentUser: User = new User();
  programs: Array<Program> = [];
  public newReservation: Reservation = new Reservation();
  public organization: Organization = new Organization();
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dataService.currentUser$.pipe(take(1)).subscribe((response: any) => {
      this.currentUser = response;
      if (localStorage.length == 0) {
        window.alert('Please log in first');
        this.router.navigateByUrl('/organizations');
      }
      this.route.queryParams.subscribe((params) => {
        this.newReservation.organizationID = params['orgId'];
      });
      this.newReservation.userID = this.currentUser._id.toString();
      this.getOrganization(this.newReservation.organizationID);
      this.getAllProgramsForOrganization();
    });
  }

  getAllProgramsForOrganization() {
    this.dataService
      .getAllProgramsForOrganization(this.newReservation.organizationID)
      .subscribe((response: any) => {
        this.programs = response;
      });
  }

  getOrganization(id: any) {
    this.dataService.getOrganization(id).subscribe((response: any) => {
      this.organization = response[0];
    });
  }

  chooseProgram(e) {
    if (e != null) {
      this.newReservation.programID = e.target.value;
    }
  }

  reserve() {
    if (
      this.newReservation.programID == null ||
      this.newReservation.date == null ||
      this.newReservation.date == undefined
    ) {
      window.alert('Please fill the form');
      return;
    } else {
      this.dataService.reserve(this.newReservation).subscribe((response) => {});
    }
  }
}
