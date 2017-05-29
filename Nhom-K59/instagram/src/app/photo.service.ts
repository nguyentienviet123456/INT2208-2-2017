import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Photo } from "app/photo";
@Injectable()
export class PhotoService {

  private _getUrl = "/api/photos";
  private _postUrl = "/api/photo";
  private _putUrl = "/api/photo/";
  constructor(private _http: Http) { }

  getPhotos(){
    return this._http.get(this._getUrl)
      .map((response: Response) => response.json());
  }

  addPhoto(photo: Photo) {
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers: headers});
    return this._http.post(this._postUrl, JSON.stringify(photo), options)
    .map((response: Response) => response.json());
  }

  updatePhoto(photo: Photo){
    let headers = new Headers({"Content-Type": "application/json"});
    let option= new RequestOptions({headers: headers});
    return this._http.put(this._putUrl + photo._id, JSON.stringify(photo), option)
    .map((response: Response) => response.json());
  }
}