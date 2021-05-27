import { Component, OnInit } from '@angular/core';
import {JobAgencyService} from '../../service/job-agency.service';
import {QualificationTypeModel} from '../../model/qualification-type.model';
import {FormControl} from '@angular/forms';
import {ResumeSearchRequestModel} from '../../model/resume-search-request.model';
import {ResumeSearchResponseModel} from '../../model/resume-search-response.model';

@Component({
  selector: 'app-resume-list',
  templateUrl: './resume-list.component.html',
  styleUrls: ['./resume-list.component.css']
})
export class ResumeListComponent implements OnInit {
  searchValue = '';
  qualificationTypes: QualificationTypeModel[] = [];
  resumeSearchResponseModels: ResumeSearchResponseModel[] = [];
  constructor(public service: JobAgencyService) { }

  ngOnInit(): void {
    this.service.getQualificationTypes().subscribe(resp => {
      resp.forEach(item => {
        item.checked = false;
      });
      this.qualificationTypes = resp;
    }, error => {
      console.log(error.message);
    });
    this.searchResumes();
  }

  searchResumes() {
    this.resumeSearchResponseModels = [];
    const resumeSearchRequestModel: ResumeSearchRequestModel = {} as ResumeSearchRequestModel;
    resumeSearchRequestModel.qualificationTypes = [];
    this.qualificationTypes.forEach(item => {
      if (item.checked) {
        resumeSearchRequestModel.qualificationTypes.push(item.id);
      }
    });
    resumeSearchRequestModel.searchValue = this.searchValue;
    this.service.searchResumes(resumeSearchRequestModel).subscribe(resp => {
      this.resumeSearchResponseModels = resp;
    }, error => {
      console.log(error.message);
    });
  }

  changeCheckBox(event: any, item: QualificationTypeModel) {
    item.checked = event.target.checked;
  }

  generatePDF(id) {
    this.service.generatePdf(id)
      .subscribe(x => {
        // It is necessary to create a new blob object with mime-type explicitly set
        // otherwise only Chrome works like it should
        // tslint:disable-next-line:prefer-const
        let newBlob = new Blob([x], { type: 'application/pdf' });

        // IE doesn't allow using a blob object directly as link href
        // instead it is necessary to use msSaveOrOpenBlob
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(newBlob);
          return;
        }

        // For other browsers:
        // Create a link pointing to the ObjectURL containing the blob.
        const data = window.URL.createObjectURL(newBlob);

        const link = document.createElement('a');
        link.href = data;
        link.download = 'cv.pdf';
        // this is necessary as link.click() does not work on the latest firefox
        link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));

        setTimeout(() => {
          // For Firefox it is necessary to delay revoking the ObjectURL
          window.URL.revokeObjectURL(data);
          link.remove();
        }, 100);
      });
  }
}
