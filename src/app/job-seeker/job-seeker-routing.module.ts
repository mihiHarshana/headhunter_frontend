import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JobSeekerHomeComponent} from './feature/job-seeker-home/job-seeker-home.component';
import {MyResumeComponent} from './feature/my-resume/my-resume.component';


const routes: Routes = [
  {
    path: '',
    component: JobSeekerHomeComponent,
    children: [
      {
        path: 'my-resume',
        component: MyResumeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobSeekerRoutingModule { }
