import { Component, OnInit } from '@angular/core';
import { UserService } from "app/user.service";
import { User } from "app/user";
import { PhotoService } from "app/photo.service";
import { Photo } from "app/photo";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserService,PhotoService]
})
export class HomeComponent implements OnInit {

  users: Array<User>;
  photos: Array<Photo>;
 
  constructor(private _photoService : PhotoService) { }

  ngOnInit() {
    this._photoService.getPhotos()
    .subscribe(resPhotoData => this.photos = resPhotoData);
  }

}
