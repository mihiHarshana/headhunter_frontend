import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JobAgencyHomeComponent} from './feature/job-agency-home/job-agency-home.component';
import {ResumeListComponent} from './feature/resume-list/resume-list.component';


const routes: Routes = [
  {
    path: '',
    component: JobAgencyHomeComponent,
    children: [
      {
        path: 'resume-list',
        component: ResumeListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobAgencyRoutingModule { }
