import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserDataModel } from '../../models/user-data.model';

const ENDPOINT_BASE = '/api/user-data';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  fetchUserData(username: string): Observable<UserDataModel> {
    return this.http.get<UserDataModel>(ENDPOINT_BASE + '/' + username);
  }
}
