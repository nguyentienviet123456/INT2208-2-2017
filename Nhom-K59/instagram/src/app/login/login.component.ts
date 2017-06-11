import { Component,OnInit } from '@angular/core';
import { AuthService} from 'app/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import {FlashMessagesService} from 'angular2-flash-messages';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 username: String;
 userpassword: String;


  constructor(
      private authService: AuthService,
      private router: Router,
      private flashMessages: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const user = {
      username: this.username,
      userpassword: this.userpassword
    }

    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success){
        this.authService.storeUserData(data.token, data.user);
        this.flashMessages.show("login success", {
          cssClass: "alert-danger", timeout: 5000});
          this.router.navigate(['/home']);
      }else{
        this.flashMessages.show(data.msg, {
          cssClass: "alert-danger", timeout: 5000});
          this.router.navigate(['/']);
      }
    });
  }
}
