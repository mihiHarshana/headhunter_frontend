import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {baseUrl, headerJson} from '../../config/config';
import {QualificationTypeModel} from '../model/qualification-type.model';
import {ResumeSearchRequestModel} from '../model/resume-search-request.model';
import {ResumeSearchResponseModel} from '../model/resume-search-response.model';

@Injectable({
  providedIn: 'root'
})
export class JobAgencyService {

  constructor(public httpClient: HttpClient) {}

  getQualificationTypes(): Observable<QualificationTypeModel[]> {
    const  path = baseUrl +  `/qualification/get-qualification-types`;
    return this.httpClient.get<QualificationTypeModel[]>(path, headerJson);
  }

  searchResumes(model: ResumeSearchRequestModel): Observable<ResumeSearchResponseModel[]> {
    const  path = baseUrl +  `/qualification/search-qualifications`;
    return this.httpClient.put<ResumeSearchResponseModel[]>(path, model, headerJson);
  }

  generatePdf(): Observable<Blob> {
    const path = baseUrl + '/qualification/pdfReport';
    return this.httpClient.get(path, { responseType: 'blob' });
  }
}
