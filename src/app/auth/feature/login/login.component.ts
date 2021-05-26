import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {UserModel} from '../../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    u_id: new FormControl(''),
    u_name: new FormControl('', Validators.required),
    u_password: new FormControl('', Validators.required),
    u_type: new FormControl('')
  });
  successMessage = '';
  errorMessage = '';

  constructor(public service: AuthService,
              private modalService: NgbModal,
              private router: Router) {

  }
  ngOnInit(): void {
  }


  login() {
    const user: UserModel = this.loginForm.value;
    this.service.login(user).subscribe(
      resp => {
        if (resp.code === 200) {
          localStorage.setItem('user_id', resp.id);
          this.successMessage = resp.message;
          setTimeout(() => {
            this.successMessage = '';
            if (resp.object.u_type === 'JS') {
              this.router.navigate(['job-seeker-home']);
            } else if (resp.object.u_type === 'JA') {
              this.router.navigate(['job-agency-home']);
            }
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
