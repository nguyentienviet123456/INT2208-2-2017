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
        component: HomeComponent
      },
      //profile
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'changeprofile',
        component: ChangeprofileComponent
      },
      {
        path: 'searching-and-explore',
        component: SearchingAndExploreComponent
      },
      {
        path: 'post',
        component: PostComponent
      },
       {
        path: 'register',
        component: RegisterComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
