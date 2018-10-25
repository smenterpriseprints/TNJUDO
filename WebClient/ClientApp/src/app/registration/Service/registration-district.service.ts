
import {Router} from '@angular/router'
import { HttpHelper } from '../../Shared/Services/http-helper.service'
import { Injectable, Inject, OnInit } from '@angular/core';
import { Http, Response, Headers, Request, RequestMethod, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class RegistrationDistrictService extends HttpHelper{

     //protected _http: Http,
     constructor(protected router: Router, protected _http: Http) {
        super(router, _http);
    }

    postDistrictRegistration(values) {        
        return this.post("api/District/SaveDistrict",values);
    }

    postDistrictRegistration1(values) {        
        return this.postMultipartData("api/DistrictRegistration/SaveDistRegistrationWithPhoto",values);
    }
    getDistrictRegistration()    {
        return this.get('api/DistrictRegistration/GetDistRegistration');
    }
    private extractData(res: Response) {
        debugger;
        let body = res.json();
        return body;
    }
    private handleErrorNew(error: Response | any) {
        console.log(error.message || error);
        return Observable.throw(error.status);
    }
    
}