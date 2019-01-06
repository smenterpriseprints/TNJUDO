import { Component, OnInit, Input, ChangeDetectorRef, ViewChild } from '@angular/core'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { ClubService } from '../registration/Service/registration-club.service';
import { Router } from '@angular/router';
import { BrowserToaster } from "src/app/CommonModules/common";
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import { jqxDropDownButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownbutton';
import { APP_CONFIG } from 'src/environments/environment';

@Component({
  selector: 'app-club-registration',
  templateUrl: './club-registration.component.html',
  styleUrls: ['./club-registration.component.css']
})
export class ClubRegistrationComponent implements OnInit {

  constructor(public form: FormBuilder, private router: Router, private regClubService: ClubService, private changeDetectorRef: ChangeDetectorRef, private displayMessage: BrowserToaster) {
  }

  @ViewChild('districtdropdowngrid') districtdropdowngrid: jqxGridComponent;
  @ViewChild('districtdropdown') districtdropdown: jqxDropDownButtonComponent;
  source: any =
    {
      datatype: 'json',
      datafields: [
        { name: 'ID', type: 'string' },
        { name: 'DistrictName', type: 'string' },
      ],
      id: 'ID',
      url: APP_CONFIG.appServiceEndpoint + 'api/District/GetAllDistricts'
    };
  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] =
    [

      { text: 'Area Name', datafield: 'DistrictName', width: 500 },
    ];
  ready = (): void => {
    //this.districtdropdowngrid.selectrow(-1);
  }
  districtdropdownselect(event: any): void {
    debugger;
    let args = event.args;
    let row = this.districtdropdowngrid.getrowdata(args.rowindex);
    let dropDownContent = '<div style="position: relative; margin-left: 3px; margin-top: 5px;">' + row['DistrictName'] + '</div>';
    this.registrationTempData.district = row['ID'];
    this.districtdropdown.setContent(dropDownContent);
    this.districtdropdown.close();
  }
  /////////////////////////////////



  isEditMode: boolean = true;
  isValid: boolean = false;
  distRegistration: any = {};
  public clubregistration: FormGroup = new FormGroup({});
  public registrationTempData: any = {};

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
          this.registrationTempData.PresidentPhoto = reader.result;
        else if (modelName == "SecretaryPhoto")
          this.registrationTempData.SecretaryPhoto = reader.result;
        else if (modelName == "CoachPhoto")
          this.registrationTempData.CoachPhoto = reader.result;
      }
    }
  }

  onClubSubmiit() {
    debugger;
    if (this.clubregistration.valid) {
      let clubRegistrationForm = this.clubregistration.value;
      clubRegistrationForm.District = this.registrationTempData.district;
      clubRegistrationForm.PresidentPhoto = this.registrationTempData.PresidentPhoto;
      clubRegistrationForm.SecretaryPhoto = this.registrationTempData.SecretaryPhoto;
      clubRegistrationForm.CoachPhoto = this.registrationTempData.CoachPhoto;

      this.regClubService.postClubRegistration(clubRegistrationForm).subscribe(response => {
        let parsedData = JSON.parse(response._body);
        if (parsedData.Status == "Success") {
          this.displayMessage.NotifyDomToasterMessage("Club Registered Successfully." + parsedData.Message, parsedData.Status);
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