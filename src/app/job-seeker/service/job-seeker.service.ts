import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {QualificationTypeModel} from '../../job-agency/model/qualification-type.model';
import {baseUrl, headerJson} from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class JobSeekerService {

  constructor(public httpClient: HttpClient) {}

  getQualificationTypes(): Observable<QualificationTypeModel[]> {
    const  path = baseUrl +  `/qualification/get-qualification-types`;
    return this.httpClient.get<QualificationTypeModel[]>(path, headerJson);
  }
}
