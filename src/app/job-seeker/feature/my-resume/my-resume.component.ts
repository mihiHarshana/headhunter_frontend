import {Component, OnInit, ViewChild} from '@angular/core';
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
    f_name: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
    l_name: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
    tel_no: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]*$'),
    ]),
    address: new FormControl('', Validators.required),
    emailaddress: new FormControl('', [Validators.required, Validators.email])
  });
  qualifications: QualificationModel[] = [];
  qualificationsMenu1: QualificationModel[] = [];
  qualificationsMenu2: QualificationModel[] = [];
  qualificationsMenu3: QualificationModel[] = [];
  qualificationsMenu4: QualificationModel[] = [];
  qualificationsMenu5: QualificationModel[] = [];
  qualificationsMenu6: QualificationModel[] = [];
  qualificationsMenu7: QualificationModel[] = [];
  userId = 0;
  @ViewChild('menu1') menu1: HTMLMenuElement;
  constructor(public service: JobSeekerService) { }

  ngOnInit(): void {
    // tslint:disable-next-line:radix
    this.userId = parseInt(localStorage.getItem('user_id'));
    this.service.getCV(this.userId).subscribe(resp => {
     if (resp) {
       this.personalDetailsForm.setValue(resp);
       this.service.getQualificationsByUserId(this.userId).subscribe(res => {
         res.forEach(item => {
           if (item.qualificationType === 1) {
             this.qualificationsMenu1.push(item);
           } else if (item.qualificationType === 2) {
             this.qualificationsMenu2.push(item);
           } else if (item.qualificationType === 3) {
             this.qualificationsMenu3.push(item);
           } else if (item.qualificationType === 4) {
             this.qualificationsMenu4.push(item);
           } else if (item.qualificationType === 5) {
             this.qualificationsMenu5.push(item);
           } else if (item.qualificationType === 6) {
             this.qualificationsMenu6.push(item);
           } else if (item.qualificationType === 7) {
             this.qualificationsMenu7.push(item);
           }
         });
       });
     }
    }, error => {
      console.log(error.message);
    });
  }

  addRows(menuNo: string) {
    switch (menuNo) {
      case 'MENU1': {
        this.qualificationsMenu1.push(new QualificationModel('', 1, this.userId, 0));
        break;
      }
      case 'MENU2': {
        this.qualificationsMenu2.push(new QualificationModel('', 2, this.userId, 0));
        break;
      }
      case 'MENU3': {
        this.qualificationsMenu3.push(new QualificationModel('', 3, this.userId, 0));
        break;
      }
      case 'MENU4': {
        this.qualificationsMenu4.push(new QualificationModel('', 4, this.userId, 0));
        break;
      }case 'MENU5': {
        this.qualificationsMenu5.push(new QualificationModel('', 5, this.userId, 0));
        break;
      }case 'MENU6': {
        this.qualificationsMenu6.push(new QualificationModel('', 6, this.userId, 0));
        break;
      }
      case 'MENU7': {
        this.qualificationsMenu7.push(new QualificationModel('', 7, this.userId, 0));
        break;
      }
    }
  }

  submitDetails() {
    this.qualificationsMenu1.forEach(item => {
      this.qualifications.push(item);
    });
    this.qualificationsMenu2.forEach(item => {
      this.qualifications.push(item);
    });
    this.qualificationsMenu3.forEach(item => {
      this.qualifications.push(item);
    });
    this.qualificationsMenu4.forEach(item => {
      this.qualifications.push(item);
    });
    this.qualificationsMenu5.forEach(item => {
      this.qualifications.push(item);
    });
    this.qualificationsMenu6.forEach(item => {
      this.qualifications.push(item);
    });
    this.qualificationsMenu7.forEach(item => {
      this.qualifications.push(item);
    });
    this.qualifications.forEach(item => {
      if (item.id === 0 && item.value !== '' && item.value !== null) {
        this.service.addQualification(item).subscribe(resp => {
        }, error => {
          console.log(error.message);
        });
      } else {
        if (item.value !== '' && item.value !== null) {
          this.service.updateQualification(item).subscribe(resp => {
          }, error => {
            console.log(error.message);
          });
        } else {
          this.service.deleteQualification(item.id).subscribe(resp => {
          }, error => {
            console.log(error.message);
          });
        }
      }
    });
  }

  savePersonalDetails() {
    this.personalDetailsForm.value.u_id = this.userId;
    this.service.updateCV(this.personalDetailsForm.value).subscribe(resp => {
    }, error => {
      console.log(error.message);
    });
  }
}
