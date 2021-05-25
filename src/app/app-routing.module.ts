import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignUpComponent} from './auth/feature/sign-up/sign-up.component';
import {LoginComponent} from './auth/feature/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'job-seeker-home',
    loadChildren: './job-seeker/job-seeker.module#JobSeekerModule'
  },
  {
    path: 'job-agency-home',
    loadChildren: './job-agency/job-agency.module#JobAgencyModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
