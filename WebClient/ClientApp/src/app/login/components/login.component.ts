import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SMECache } from 'src/app/CommonModules/ClientCache';
import { StringConstants } from 'src/app/CommonModules/Constants';
import { HttpHelper } from "src/app/Shared/Services/http-helper.service";
import { Http } from '@angular/http';

@Component({

    templateUrl: 'login.component.html',
    //selector:'app-root'
})

export class LoginComponent extends HttpHelper {

    model: any = {};

    constructor(protected router: Router, protected _http: Http) {
        super(router, _http);
        var userName = prompt("User Name:");
        var pwd = prompt("Password:");
debugger;
        this.get("api/User/LogIn?username=" + userName + "&password=" + pwd).subscribe(response => {
            debugger;
            let parsedData = JSON.parse(response._body);
            if (parsedData.Status == "Success") {
                SMECache.SetCache(StringConstants.isUserAuthenticated, true);
                SMECache.SetCache(StringConstants.CurrentUserId, parsedData.Data.UserId);

            }
            else {
                alert("username/pwd is wrong");
                SMECache.SetCache(StringConstants.isUserAuthenticated, false);
                this.router.navigate(['/home']);
            }

        },
            err => {
                debugger;
                this.router.navigate(['/home']);
            });



    }

    login() {
        debugger;
        let loginmodel = this.model;
    }
}
