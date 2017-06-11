import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangeprofileComponent } from './changeprofile/changeprofile.component';
import { SearchingAndExploreComponent } from './searching-and-explore/searching-and-explore.component';
import { PostComponent } from './post/post.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from "app/user.service";
import { PhotoService } from "app/photo.service"; 
import { ValidateService} from "app/validate.service";
import { FlashMessagesModule} from "angular2-flash-messages";
import { AuthService} from "app/auth.service";
import {AuthGuard} from 'app/auth.guard';  
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    ChangeprofileComponent,
    SearchingAndExploreComponent,
    PostComponent,
    RegisterComponent
  ],
  imports: [
    FlashMessagesModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      //login
      {
        path: '',
        component: LoginComponent
      },
      //home
      {
        path: 'home',
        component: HomeComponent,
        canActivate:[AuthGuard]
      },
      //profile
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'changeprofile',
        component: ChangeprofileComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'searching-and-explore',
        component: SearchingAndExploreComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'post',
        component: PostComponent,
        canActivate:[AuthGuard]
      },
       {
        path: 'register',
        component: RegisterComponent
      }
    ])
  ],
  providers: [UserService,PhotoService,ValidateService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
