import { Component, OnInit } from '@angular/core';
import { User } from "app/user";
import { UserService } from "app/user.service";
import { Router } from "@angular/router";
import { ValidateService } from "app/validate.service";
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from "app/auth.service";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService],

})
export class RegisterComponent implements OnInit {
  username: String;
  useremail: String;
  userpassword: String;
  fullname: String;
  nickname: String;
  phone: String;
  gender: String;
  personal_information: String;

  constructor(private _userService: UserService,
    private router: Router,
    private validateService: ValidateService,
    private flashMessagesService: FlashMessagesService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      username: this.username,
      useremail: this.useremail,
      userpassword: this.userpassword,
      fullname: this.fullname,
      nickname: this.nickname,
      phone: this.phone,
      gender: this.gender,
      personal_information: this.personal_information
    }
    // require fields
    if (!this.validateService.validateRegister(user)) {
      this.flashMessagesService.show('please fill in all field', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }
    // require email
    if (!this.validateService.validateEmail(user.useremail)) {
      this.flashMessagesService.show('please user a valid email', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    // register user
    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        this.flashMessagesService.show('you are now registered and can login', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/']);
      } else {
        this.flashMessagesService.show('something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
      }
    });
  }

  goToHomePage() {
    this.router.navigate(['/']);
  }


}
