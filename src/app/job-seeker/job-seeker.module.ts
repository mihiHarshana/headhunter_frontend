import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobSeekerRoutingModule } from './job-seeker-routing.module';
import { JobSeekerHomeComponent } from './feature/job-seeker-home/job-seeker-home.component';
import { MyResumeComponent } from './feature/my-resume/my-resume.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [JobSeekerHomeComponent, MyResumeComponent],
  imports: [
    CommonModule,
    JobSeekerRoutingModule,
    ReactiveFormsModule
  ]
})
export class JobSeekerModule { }
