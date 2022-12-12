import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, ObservableInput } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EndecapodService {

  private withBase = (url: string):string => `/endecapod/my?${url}`;
  constructor(private http: HttpClient) {}

  queryUrl(url: string): Observable<any> {
    const hdrs = new HttpHeaders({ 'Accept': 'application/json; charset=utf-8' });
    return this.http.get(this.withBase(url), { headers: hdrs, withCredentials: true, observe: 'body', responseType: 'json' })
    .pipe(
        catchError(this._handle_error)
    );
  }


  // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-unused-vars
  private _handle_error(error: any, caught: Observable<any>): ObservableInput<{}> {
    let errMsg: string;
    if (error instanceof Response) {
        const err = error.json().then(json => JSON.stringify(json)) || '';
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
        errMsg = error.message ? error.message : error.toString();
    }
    throw (new Error(errMsg));
}
}
