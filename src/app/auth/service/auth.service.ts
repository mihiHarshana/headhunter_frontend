import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from '../model/user.model';
import {baseUrl, headerJson} from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public httpClient: HttpClient) {}

  login(user: UserModel): Observable<any> {
    const  path = baseUrl +  `/auth/login-user`;
    return this.httpClient.post(path, user, headerJson);
  }
  register(user: UserModel): Observable<any> {
    const  path = baseUrl +  `/user/register`;
    return this.httpClient.post(path, user, headerJson);
  }
}
