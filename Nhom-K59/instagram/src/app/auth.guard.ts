import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from 'app/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router
    ){}
    canActivate(){
        if(localStorage.getItem('id_token')){
            return true;
        } else {
            this.router.navigate(['/register']);
            return false;
        }
    }
}