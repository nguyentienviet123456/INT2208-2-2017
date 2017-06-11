import {Injectable} from "@angular/core";

@Injectable()

export class ValidateService {
    constructor(){}

    validateRegister(user){
        if(user.username == undefined || user.useremail == undefined || user.userpassword == undefined || user.fullname == undefined || user.nickname == undefined || user.phone == undefined || user.personal_information == undefined){
            return false;
        }else {
            return true;
        }
    }
    validateEmail(email){
        const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return re.test(email);
    }
}