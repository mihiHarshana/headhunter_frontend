import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {JobSeekerService} from '../../service/job-seeker.service';
import {QualificationTypeModel} from '../../../job-agency/model/qualification-type.model';
import {QualificationModel} from '../../model/qualification.model';

@Component({
  selector: 'app-my-resume',
  templateUrl: './my-resume.component.html',
  styleUrls: ['./my-resume.component.css']
})
export class MyResumeComponent implements OnInit {
  personalDetailsForm: FormGroup = new FormGroup({
    cv_id: new FormControl(''),
    u_id: new FormControl(''),
    f_name: new FormControl('', Validators.required),
    l_name: new FormControl('', Validators.required),
    tel_no: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    emailaddress: new FormControl('', Validators.required)
  });
  qualificationTypes: QualificationTypeModel[] = [];
  qualifications: QualificationModel[] = [];
  constructor(public service: JobSeekerService) { }

  ngOnInit(): void {
    this.service.getQualificationTypes().subscribe(resp => {
      resp.forEach(item => {
        item.checked = false;
      });
      this.qualificationTypes = resp;
    }, error => {
      console.log(error.message);
    });
  }

  savePersonalDetails() {

  }

}
