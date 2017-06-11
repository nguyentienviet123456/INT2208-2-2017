import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Object;
  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessages: FlashMessagesService
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
    err => {
      console.log(err);
      return false;
    });
  }
  onLogoutClick() {
    this.authService.logout();
    this.flashMessages.show('you are logout',{
      cssClass: 'alert-success',
      timeout : 3000 
    });
    this.router.navigate(['/']);
    return false;
  }
}
