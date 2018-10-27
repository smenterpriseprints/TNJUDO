import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TournamentRegistrationService } from '../../Service/tournament-registration.service'
import { Router } from '@angular/router'
import { BrowserToaster } from "src/app/CommonModules/common"

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html'
})
export class TournamentComponent implements OnInit {


  isEditMode: boolean = true;
  isValid: boolean = true;
  public registrationPhoto: any = {};
  public tournamentRegistrationForm: FormGroup = new FormGroup({});
  constructor(private TournamentService: TournamentRegistrationService, private router: Router, private displayMessage: BrowserToaster) { }

  ngOnInit() {
  }

  onSelectPhoto(event, modelName) {
    debugger;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        console.log(modelName);
        if (modelName == "PassportSize")
          this.registrationPhoto.PassportSize = reader.result;
        else if (modelName == "AadhaarCard")
          this.registrationPhoto.AadhaarCard = reader.result;
        else if (modelName == "MiscDocument")
          this.registrationPhoto.MiscDocument = reader.result;
        else if (modelName == "IncomeCertificate")
          this.registrationPhoto.IncomeCertificate = reader.result;

      }

    }
  }

  onTournamentRegistration() {
    debugger;
    if (!this.tournamentRegistrationForm.invalid) {
      let distRegistrationForm = this.tournamentRegistrationForm.value;
      distRegistrationForm.UserGuid = distRegistrationForm.UserGuid == null ? "00000000-0000-0000-0000-000000000000" : distRegistrationForm.UserGuid;

      distRegistrationForm.PassportSize = this.registrationPhoto.PassportSize;
      distRegistrationForm.AadhaarCard = this.registrationPhoto.AadhaarCard;
      distRegistrationForm.MiscDocument = this.registrationPhoto.MiscDocument;
      distRegistrationForm.IncomeCertificate = this.registrationPhoto.IncomeCertificate;

      this.TournamentService.Post_Tournament_Registration(distRegistrationForm).subscribe(response => {
        debugger;
        let parsedData = JSON.parse(response._body);
        if (parsedData.Status == "Success") {
          this.displayMessage.NotifyDomToasterMessage("Registered Successfully", parsedData.Status);
          //this.router.navigate(['/TournamentList']);
        }
        else if(parsedData.Status == "Warning")
        {
          this.displayMessage.NotifyDomToasterMessage(parsedData.Message, parsedData.Status);
        }
      },
        err => {
          this.displayMessage.NotifyDomToasterMessage("Error occurred on registraion.Please contact admin","error");

        });

    }
    else{
      this.displayMessage.NotifyDomToasterMessage("Please fill all the mandatory fields","warning");
    }
  }

}

