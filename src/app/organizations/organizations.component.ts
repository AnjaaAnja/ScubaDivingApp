import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Organization } from '../models/organization';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss'],
  providers: [DataService],
})
export class OrganizationsComponent implements OnInit {
  organizations: Array<Organization> = [];
  constructor(private router: Router, private dataService: DataService) {}
  imageUrl = '../../assets/';
  ngOnInit(): void {
    this.getAllOrganizations();
  }

  getAllOrganizations() {
    this.dataService.getAllOrganizations().subscribe((response: Array<any>) => {
      this.organizations = response;
    });
  }
  reservation(organ: any) {
    this.router.navigateByUrl('/reservation?orgId=' + organ._id);
  }
}
