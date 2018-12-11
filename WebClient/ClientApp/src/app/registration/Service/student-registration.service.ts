import { HttpHelper } from "src/app/Shared/Services/http-helper.service";
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StudentRegistrationService extends HttpHelper {

    constructor(protected router: Router, protected _http: Http) {
        super(router, _http);

    }

    PostStudentRegistration(values) {
        return this.post("api/Student/SaveStudent", values);
    }
}