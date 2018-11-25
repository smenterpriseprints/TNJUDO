import { Router } from '@angular/router'
import { HttpHelper } from '../../Shared/Services/http-helper.service'
import { Injectable, Inject, OnInit } from '@angular/core';
import { Http, Response, Headers, Request, RequestMethod, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ClubService extends HttpHelper {

    //protected _http: Http,
    constructor(protected router: Router, protected _http: Http) {
        super(router, _http);
    }

    postClubRegistration(values) {
        return this.post("api/Club/SaveClub", values);
    }


}