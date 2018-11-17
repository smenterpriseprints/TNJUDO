import { Component, OnInit } from '@angular/core';
import { HttpHelper } from "src/app/Shared/Services/http-helper.service";
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { FormGroup } from '@angular/forms';
import { BrowserToaster } from "src/app/CommonModules/common";
//import {APP_CONFIG} from 'src/environments/environment';

@Component({
    //selector: 'app-tournament',
    templateUrl: './upload.component.html'
})
export class UploadComponent extends HttpHelper {

    public tournamentForm: any;
    public tournamentRegistrationForm: FormGroup = new FormGroup({});

    constructor(protected router: Router, protected _http: Http, private displayMessage: BrowserToaster) {
        super(router, _http);
    }

    onSelectForm(event, modelName) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url

            reader.onload = (event) => { // called once readAsDataURL is completed
                if (modelName == "TournamentForm")
                    this.tournamentForm = reader.result;
            }
        }

    }
    DownloadForm(event) {
        debugger;
        window.location.href = this.appServiceEndpoint +  "/api/Tournament/GetTournamentForm";
    }
    onTournamentFormUpload() {
        let data = this.tournamentRegistrationForm.value;
        data.tournamentForm = this.tournamentForm;
        this.post("api/Tournament/FormUpload", data).subscribe(response => {

            let parsedData = JSON.parse(response._body);
            if (parsedData.Status === "Success") {
                this.displayMessage.NotifyDomToasterMessage("Form uploaded successfully, please note down your reference id: " + parsedData.Message, "Success");
            }
        },
            err => {
                this.displayMessage.NotifyDomToasterMessage("Error occurred on registraion.Please contact admin", "error");

            }
        )
    }
}