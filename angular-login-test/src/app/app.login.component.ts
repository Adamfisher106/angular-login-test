import { Component } from '@angular/core';
import { TableService } from '../services/app.table.service';

@Component({
    selector: 'app-table',
    template: `<h1></h1>
    <div class="container">
        <div class="panel-body">
            <div class="row">
                <div class="input-field col s12"> 
                    <input [(ngModel)]="user.username" id="username"> 
                    <label for="username">Email</label> 
                </div> 
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input [(ngModel)]="user.password" id="password" type="password" class="validate"> 
                    <label for="password> Password: </label> 
                </div> 
            </div>
            <span>{{errorMsg}}</span>
            <button(click)="login()" class="btn" type="submit" name"action">Login</button> 
        </div>
    </div> `,
    providers: [TableService]
})

export class LoginComponent {

    public user = new User('','');
    public errorMsg = '';

    constructor(
        private _service:AuthenticationService 
    ) {}

    login() {
        if(!this._service.login(this.user)){
            this.errorMsg = 'Failed to login';
        }
    }
}
