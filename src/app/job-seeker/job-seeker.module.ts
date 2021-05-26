import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobSeekerRoutingModule } from './job-seeker-routing.module';
import { JobSeekerHomeComponent } from './feature/job-seeker-home/job-seeker-home.component';
import { MyResumeComponent } from './feature/my-resume/my-resume.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { JobSeekerProfileComponent } from './feature/job-seeker-profile/job-seeker-profile.component';


@NgModule({
  declarations: [JobSeekerHomeComponent, MyResumeComponent, JobSeekerProfileComponent],
  imports: [
    CommonModule,
    JobSeekerRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class JobSeekerModule { }
