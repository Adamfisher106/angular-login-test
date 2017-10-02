import { Injectable } from  '@angular/core';
import { Router } from '@angular/Router'; 

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
        var authenticatedUser = user.find(u => u.username === user.username);
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