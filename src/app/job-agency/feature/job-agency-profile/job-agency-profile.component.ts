import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {UserModel} from '../../../auth/model/user.model';
import {JobAgencyService} from '../../service/job-agency.service';

@Component({
  selector: 'app-job-agency-profile',
  templateUrl: './job-agency-profile.component.html',
  styleUrls: ['./job-agency-profile.component.css']
})
export class JobAgencyProfileComponent implements OnInit {

  userForm: FormGroup = new FormGroup({
    u_id: new FormControl(''),
    u_name: new FormControl('', Validators.required),
    u_password: new FormControl('', Validators.required),
    u_type: new FormControl('JS', Validators.required)
  });
  successMessage = '';
  errorMessage = '';
  userId = 0;

  constructor(public service: JobAgencyService,
              private modalService: NgbModal,
              private router: Router) {

  }
  ngOnInit(): void {
    // tslint:disable-next-line:radix
    this.userId = parseInt(localStorage.getItem('user_id'));
    this.service.getJobAgencyDetails(this.userId).subscribe(resp => {
      this.userForm.setValue(resp);
    });
  }


  updateJobAgency() {
    const user: UserModel = this.userForm.value;
    this.service.updateJobAgency(user).subscribe(
      resp => {
        if (resp.code === 200) {
          this.successMessage = resp.message;
          setTimeout(() => {
            this.successMessage = '';
          }, 3000);
        } else {
          this.setErrorMessage(resp.message);
        }
      }, error => {
        this.setErrorMessage(error.message);
      }
    );
  }

  setErrorMessage(message: string) {
    this.errorMessage = message;
    setTimeout(() => {
      this.errorMessage = '';
    }, 5000);
  }

  setSuccessMessage(message: string) {
    this.successMessage = message;
    setTimeout(() => {
      this.successMessage = '';
    }, 5000);
  }


}
