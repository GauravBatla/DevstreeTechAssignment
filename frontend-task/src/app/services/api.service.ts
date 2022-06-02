import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  login(data: any): Observable<any> {
    return this._http.post(environment.baseUrl + 'login', data)
  };


  signUp(data: any): Observable<any> {
    return this._http.post(environment.baseUrl + 'signup', data)
  };
 
  getList(num: any): Observable<any> {
    return this._http.get(environment.baseUrl+'list')
  }
}
