import { Component, OnInit } from '@angular/core';
import { UserService } from "app/user.service";
import { User } from "app/user";
import { PhotoService } from "app/photo.service";
import { Photo } from "app/photo";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  inputs : ['photos']
})
export class HomeComponent implements OnInit {

  public photos: any[];

  constructor(private _photoService: PhotoService) { }

  ngOnInit() {
    this._photoService.getPhotos()
      .subscribe((response: any) => {
        this.photos = response;
        console.log(response);
      }, error => {
        console.log(error);
      });
  }

}
