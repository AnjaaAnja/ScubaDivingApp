import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { GearComponent } from './gear/gear.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '#', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'organizations', component: OrganizationsComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'login', component: LogInComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'gear', component: GearComponent },
  { path: 'comments', component: CommentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
