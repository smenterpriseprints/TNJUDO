import { HttpHelper } from "src/app/Shared/Services/http-helper.service";
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Injectable} from '@angular/core';

@Injectable()
export class TournamentRegistrationService extends HttpHelper {

    constructor(protected router: Router, protected _http: Http) {
        super(router, _http);

    }

    Post_Tournament_Registration(values) {        
        return this.post("api/Tournament/SaveTournament",values);
    }
}