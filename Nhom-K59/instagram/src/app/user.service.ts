import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from "app/user";
import { Observable } from "rxjs/Rx";
@Injectable()
export class UserService {

  private _getUrl = "/user_api/users";
  private _postUrl = "/user_api/newuser";
  private _putUrl = "/user_api/user/";
  constructor(private _http: Http) { }

  // get Users
  getUsers(): Observable<any[]> {
    return this._http
      .get(this._getUrl)
      .map((response: Response) => response.json());
  }


  // add a user
  addUser(user: User): Observable<User> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(this._postUrl, { user }, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }



  // update user
  updateUser(user: User) {
    let headers = new Headers({ "Content-Type": "application/json" });
    let option = new RequestOptions({ headers: headers });
    return this._http.put(this._putUrl + user._id, JSON.stringify(user), option)
      .map((response: Response) => response.json())

  }
}