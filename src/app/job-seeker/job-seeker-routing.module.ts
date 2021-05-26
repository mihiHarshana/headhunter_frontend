import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JobSeekerHomeComponent} from './feature/job-seeker-home/job-seeker-home.component';
import {MyResumeComponent} from './feature/my-resume/my-resume.component';
import {JobSeekerProfileComponent} from './feature/job-seeker-profile/job-seeker-profile.component';


const routes: Routes = [
  {
    path: '',
    component: JobSeekerHomeComponent,
    children: [
      {
        path: 'my-resume',
        component: MyResumeComponent
      },
      {
        path: 'my-profile',
        component: JobSeekerProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobSeekerRoutingModule { }
