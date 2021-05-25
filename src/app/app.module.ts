import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SignUpComponent } from './auth/feature/sign-up/sign-up.component';
import { LoginComponent } from './auth/feature/login/login.component';
import {AuthModule} from './auth/auth.module';
import {JobAgencyModule} from './job-agency/job-agency.module';
import {JobSeekerModule} from './job-seeker/job-seeker.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    AuthModule,
    JobAgencyModule,
    JobSeekerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
