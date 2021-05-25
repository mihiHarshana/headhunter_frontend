import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {UserModel} from '../../model/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    u_id: new FormControl(''),
    u_name: new FormControl('', Validators.required),
    u_password: new FormControl('', Validators.required),
    u_type: new FormControl('JS', Validators.required)
  });
  successMessage = '';
  errorMessage = '';

  constructor(public service: AuthService,
              private modalService: NgbModal,
              private router: Router) {

  }
  ngOnInit(): void {
  }


  register() {
    const user: UserModel = this.registerForm.value;
    this.service.register(user).subscribe(
      resp => {
        if (resp.code === 200) {
          this.successMessage = resp.message;
          setTimeout(() => {
            this.successMessage = '';
            this.router.navigate(['login']);
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
