import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { User } from '../models/user';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
  providers: [DataService],
})
export class LogInComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private dataService: DataService, private fb: FormBuilder) {}

  ngOnInit(): void {}

  login() {
    this.dataService.login(this.form.value).subscribe(
      (response: any) => {
        if (response) {
          localStorage.setItem('user', JSON.stringify(response));
        }
      },
      (error) => {
        window.alert('Invalid username or password');
      }
    );
  }
}
