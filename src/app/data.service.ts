import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';
import { map } from 'rxjs/internal/operators/map';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public apiPath = 'https://scuba1-diving.herokuapp.com';
  private _currentUser = new ReplaySubject<User>(1);

  public currentUser$ = this._currentUser.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  getAllOrganizations(): any {
    return this.http.get<any>(this.apiPath + 'organizationsAll');
  }

  login(request: any): any {
    return this.http.post<any>(this.apiPath + 'login', request).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          this.setCurrentUser(response);
          window.location.reload();
        }
      })
    );
  }
  register(request: any): any {
    return this.http.post<any>(this.apiPath + 'register', request).pipe(
      map((response: any) => {
        const user = response[0];
        if (user) {
          this.setCurrentUser(user);
        }
        return user;
      })
    );
  }
  getAllCommentsForOrganization(request: any) {
    return this.http
      .get<any>(this.apiPath + '/allCommentsForOrganization?_id=' + request)
      .pipe();
  }
  getAllProgramsForOrganization(request: any) {
    return this.http
      .get<any>(this.apiPath + '/allProgramsForOrganization?_id=' + request)
      .pipe();
  }
  addComment(request: any): any {
    let model: any = {};
    model.comment = request;
    return this.http.post<any>(this.apiPath + '/addComment', model).pipe(
      map((response: any) => {
        window.location.reload();
      })
    );
  }
  deleteComment(request: any): any {
    let model: any = {};
    model.commentID = request;
    return this.http.post<any>(this.apiPath + '/removeComment', model).pipe(
      map((response: any) => {
        window.location.reload();
      })
    );
  }

  public doNothing() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    this._currentUser.next(user);
  }
  public logout() {
    localStorage.removeItem('user');
    localStorage.clear();
    this._currentUser.next(null);
    window.location.reload();
  }

  public setCurrentUser(value: User) {
    localStorage.setItem('user', JSON.stringify(value));
    this._currentUser.next(value);
  }
  public getOrganization(id: any) {
    return this.http
      .get<any>(this.apiPath + '/getOrganization?_id=' + id)
      .pipe();
  }
  public reserve(request: any) {
    let model: any = {};
    model.reservation = request;
    return this.http.post<any>(this.apiPath + '/addReservation', model).pipe(
      map((response: any) => {
        window.alert('Your reservation is successfully stored!');
      })
    );
  }
}
