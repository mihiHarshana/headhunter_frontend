import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobAgencyRoutingModule } from './job-agency-routing.module';
import { JobAgencyHomeComponent } from './feature/job-agency-home/job-agency-home.component';
import { ResumeListComponent } from './feature/resume-list/resume-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [JobAgencyHomeComponent, ResumeListComponent],
  imports: [
    CommonModule,
    JobAgencyRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class JobAgencyModule { }
