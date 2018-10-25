import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TournamentRegistrationService } from '../../Service/tournament-registration.service'
import { Router } from '@angular/router'
import {BrowserToaster} from "src/app/CommonModules/common"

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html'
})
export class TournamentComponent implements OnInit {


  isEditMode: boolean = true;
  isValid: boolean = true;
  public tournamentRegistrationForm: FormGroup = new FormGroup({});
  constructor(private TournamentService: TournamentRegistrationService, private router: Router,private displayMessage : BrowserToaster) { }

  ngOnInit() {
  }

  onTournamentRegistration() {
    debugger;
    if (!this.tournamentRegistrationForm.invalid) {
      let distRegistrationForm = this.tournamentRegistrationForm.value;
      distRegistrationForm.UserGuid =  distRegistrationForm.UserGuid == null ?  "00000000-0000-0000-0000-000000000000" : distRegistrationForm.UserGuid ;

      // distRegistrationForm.PresidentPhoto = this.registrationPhoto.PresidentPhoto;
      // distRegistrationForm.SecretaryPhoto = this.registrationPhoto.SecretaryPhoto;
      // distRegistrationForm.CoachPhoto = this.registrationPhoto.CoachPhoto;

      this.TournamentService.Post_Tournament_Registration(distRegistrationForm).subscribe(response => {
        debugger;
        let parsedData = JSON.parse(response._body);
        if (parsedData.Status == "Success") {
          this.displayMessage.NotifyDomToasterMessage("Saved Successfully",parsedData.Status);
          this.router.navigate(['/TournamentList']);
        }
      },
        err => {
          debugger;

        });

    }
  }

}

