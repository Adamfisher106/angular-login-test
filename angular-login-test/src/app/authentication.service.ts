import {Injectable} from 'angular2/core';
import {Router} from 'angular2/router'; 

export class User {
    constructor(
        public username: string,
        public email: string,
        public password: string) { }
}

var user = [
    new User('User1','admin@admin.com','User123'),
    new User('Jeff','Jeff@gmail.com','Jeff123' )
];

@Injectable ()

export class AuthenticationService {

    constructor(
        private _router: Router) {}

    logout() {
        localStorage.removeItem("user");
        this._router.navigate(['Login']);
    }

    login(user){
        var authenticatedUser = users.find(u => u.username === user.username);
        if( authenticatedUser && authenticatedUser.password === user.password) {
            localStorage.setItem("user", authenticatedUser);
            this._router.navigate(['Home']);
            return true;
        }
        return false;
    }

    checkCredentials(){
        if(localStorage.getItem("user") === null){
            this._router.navigate(['Login'])
        }
    }
}