import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { ClubService } from '../registration/Service/registration-club.service';
import { Router } from '@angular/router';
import { BrowserToaster } from "src/app/CommonModules/common"

@Component({
  selector: 'app-club-registration',
  templateUrl: './club-registration.component.html',
  styleUrls: ['./club-registration.component.css']
})
export class ClubRegistrationComponent implements OnInit {

  constructor(public form: FormBuilder, private router: Router, private regClubService: ClubService, private changeDetectorRef: ChangeDetectorRef, private displayMessage: BrowserToaster) {
  }

  isEditMode: boolean = true;
  isValid: boolean = false;
  distRegistration: any = {};
  public clubregistration: FormGroup = new FormGroup({});
  public registrationPhoto: any = {};

  ngOnInit() {
    this.changeDetectorRef.detectChanges();
    debugger;
  }

  onSelectPhoto(event, modelName) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        if (modelName == "PresidentPhoto")
          this.registrationPhoto.PresidentPhoto = reader.result;
        else if (modelName == "SecretaryPhoto")
          this.registrationPhoto.SecretaryPhoto = reader.result;
        else if (modelName == "CoachPhoto")
          this.registrationPhoto.CoachPhoto = reader.result;
      }
    }
  }

  onClubSubmiit() {
    debugger;
    if (this.clubregistration.valid) {
      let clubRegistrationForm = this.clubregistration.value;
      clubRegistrationForm.PresidentPhoto = this.registrationPhoto.PresidentPhoto;
      clubRegistrationForm.SecretaryPhoto = this.registrationPhoto.SecretaryPhoto;
      clubRegistrationForm.CoachPhoto = this.registrationPhoto.CoachPhoto;

      this.regClubService.postClubRegistration(clubRegistrationForm).subscribe(response => {
        let parsedData = JSON.parse(response._body);
        if (parsedData.Status == "Success") {
          this.displayMessage.NotifyDomToasterMessage("Registered Successfully, please note down your reference id: " + parsedData.Message, parsedData.Status);
          //this.router.navigate(['/Tournament']);
        }
        else if (parsedData.Status == "Warning") {
          this.displayMessage.NotifyDomToasterMessage(parsedData.Message, parsedData.Status);
        }
        else {
          this.displayMessage.NotifyDomToasterMessage(parsedData.Message, parsedData.Status);
        }
      },
        err => {
          debugger;

        });
    }
  }

}