import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {QualificationTypeModel} from '../../job-agency/model/qualification-type.model';
import {baseUrl, headerJson} from '../../config/config';
import {QualificationModel} from '../model/qualification.model';
import {JobSeekerModel} from '../model/job-seeker.model';
import {UserModel} from '../../auth/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class JobSeekerService {

  constructor(public httpClient: HttpClient) {}

  getQualificationTypes(): Observable<QualificationTypeModel[]> {
    const  path = baseUrl +  `/qualification/get-qualification-types`;
    return this.httpClient.get<QualificationTypeModel[]>(path, headerJson);
  }
  addQualification(qualification: QualificationModel): Observable<any> {
    const path = baseUrl + '/qualification/add-qualification';
    return this.httpClient.post<any>(path, qualification, headerJson);
  }
  updateQualification(qualification: QualificationModel): Observable<any> {
    const path = baseUrl + '/qualification/update-qualification';
    return this.httpClient.put<any>(path, qualification, headerJson);
  }
  addCV(jobSeekerModel: JobSeekerModel): Observable<any> {
    const path = baseUrl + '/jobSeeker/add-cv';
    return this.httpClient.post<any>(path, jobSeekerModel, headerJson);
  }
  updateCV(jobSeekerModel: JobSeekerModel): Observable<any> {
    const path = baseUrl + '/jobSeeker/update-cv';
    return this.httpClient.put<any>(path, jobSeekerModel, headerJson);
  }
  getCV(userId: number): Observable<JobSeekerModel> {
    const path = baseUrl + `/jobSeeker/get-cv?userId=${userId}`;
    return this.httpClient.get<any>(path, headerJson);
  }
  getQualificationsByUserId(userId: number): Observable<QualificationModel[]> {
    const path = baseUrl + `/qualification/get-user-qualifications?userId=${userId}`;
    return this.httpClient.get<QualificationModel[]>(path, headerJson);
  }
  deleteQualification(qualificationId: number): Observable<any> {
    const path = baseUrl + `/qualification/delete-qualification?id=${qualificationId}`;
    return this.httpClient.delete<any>(path, headerJson);
  }
  updateJobSeeker(user: UserModel): Observable<any> {
    const  path = baseUrl +  `/user/update-user`;
    return this.httpClient.put(path, user, headerJson);
  }
  getJobSeekerDetails(userId: number): Observable<UserModel> {
    const path = baseUrl + `/user/get-user?userId=${userId}`;
    return this.httpClient.get<UserModel>(path, headerJson);
  }
}
