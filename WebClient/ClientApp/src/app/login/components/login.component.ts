import {Component,OnInit} from '@angular/core';

@Component({

    templateUrl: 'login.component.html',
     //selector:'app-root'
})

export class LoginComponent{

    model: any = {};

    login(){
        debugger;
        let loginmodel=this.model;
    }
}