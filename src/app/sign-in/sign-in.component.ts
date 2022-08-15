import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  form: FormGroup = new FormGroup({
    sname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    experience: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit(): void {}

  register() {
    this.dataService.register(this.form.value).subscribe(
      (response: any) => {
      if (response) {
      }
    });
  }
}
