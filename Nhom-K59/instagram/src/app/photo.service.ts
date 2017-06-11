import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Photo } from "app/photo";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PhotoService {

  private _getUrl = "/photo_api/photos";
  private _postUrl = "/photo_api/photo";
  private _putUrl = "/photo_api/photo/";
  constructor(private _http: Http) { }
  // get get photos
  getPhotos(): Observable<any[]> {
    return this._http
      .get(this._getUrl)
      .map((response: Response) => response.json())
      
  }
  // end get photos

  addPhoto(photo: Photo) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this._postUrl, JSON.stringify(photo), options)
      .map((response: Response) => response.json());
  }

  updatePhoto(photo: Photo) {
    let headers = new Headers({ "Content-Type": "application/json" });
    let option = new RequestOptions({ headers: headers });
    return this._http.put(this._putUrl + photo._id, JSON.stringify(photo), option)
      .map((response: Response) => response.json());
  }


}