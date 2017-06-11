import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
@Injectable()
export class AuthService {

    authToken: any;
    user: any;
    constructor(private http: Http) { }

    registerUser(user) {
        let headers = new Headers();
        headers.append('Content-type', 'application/json');
        return this.http.post('user_api/register', user, { headers: headers })
            .map(res => res.json());
    }
    authenticateUser(user) {
        let headers = new Headers();
        headers.append('Content-type', 'application/json');
        return this.http.post('user_api/authen', user, { headers: headers })
            .map(res => res.json());
    }

    getProfile() {
        let headers = new Headers();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-type', 'application/json');
        return this.http.get('user_api/profile', { headers: headers })
            .map(res => res.json());
    }
    storeUserData(token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    }

    loadToken() {
        const token = localStorage.getItem('id_token');
        this.authToken = token;
    }

    loggedIn() {
        return tokenNotExpired();
    }
    logout() {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    }
}
