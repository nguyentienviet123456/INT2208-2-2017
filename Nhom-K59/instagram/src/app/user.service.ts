import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from "app/user";
@Injectable()
export class UserService {

  private _getUrl = "/api/users";
  private _postUrl = "/api/user";
  private _putUrl = "/api/user/";
  constructor(private _http: Http) { }

  getVideos(){
    return this._http.get(this._getUrl)
      .map((response: Response) => response.json());
  }

  addVideo(video: User) {
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers: headers});
    return this._http.post(this._postUrl, JSON.stringify(video), options)
    .map((response: Response) => response.json());
  }

  updateVideo(video: User){
    let headers = new Headers({"Content-Type": "application/json"});
    let option= new RequestOptions({headers: headers});
    return this._http.put(this._putUrl + video._id, JSON.stringify(video), option)
    .map((response: Response) => response.json());
  }
}