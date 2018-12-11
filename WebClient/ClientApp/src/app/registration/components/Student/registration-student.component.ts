import { Component, OnInit, Input, ChangeDetectorRef, ViewChild } from '@angular/core'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { StudentRegistrationService } from '../../Service/student-registration.service'
import { Router } from '@angular/router'
import { SMECache } from 'src/app/CommonModules/ClientCache';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import { jqxDropDownButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownbutton';
import { APP_CONFIG } from 'src/environments/environment';
import { StringConstants } from 'src/app/CommonModules/Constants';
import { BrowserToaster } from "src/app/CommonModules/common";


@Component({
  templateUrl: 'registration-student.component.html'
})

export class RegistrationStudentComponent implements OnInit {

  public registrationTempData: any = {};
  public registrationForm: FormGroup = new FormGroup({});
  constructor(public form: FormBuilder, private router: Router, private regStudentService: StudentRegistrationService, private changeDetectorRef: ChangeDetectorRef, private displayMessage: BrowserToaster) {
  }

  isEditMode: boolean = true;
  isValid: boolean = true;

  ngOnInit() {
    this.changeDetectorRef.detectChanges();
  }

  ///////////////////////Club Grid/////////////////////////////
  @ViewChild('clubgrid') clubgrid: jqxGridComponent;
  @ViewChild('clubdropdown') clubdropdown: jqxDropDownButtonComponent;
  clubdataAdapter: any = new jqx.dataAdapter({
    datatype: 'json',
    datafields: [
      { name: 'ID', type: 'string' },
      { name: 'ClubName', type: 'string' }
    ],
    id: 'ID',
    url: APP_CONFIG.appServiceEndpoint + 'api/District/GetAllClubs'
  });

  clubcolumns: any[] =
    [
      { text: 'User Id', datafield: 'ID', width: 250 },
      { text: 'Club Name', datafield: 'ClubName', width: 250 },
      // { text: 'Club Address', datafield: 'ClubAddress', width: 250 }
    ];
  clubgridonselect(event: any): void {
    let args = event.args;
    let row = this.clubgrid.getrowdata(args.rowindex);
    let dropDownContent = '<div style="position: relative; margin-left: 3px; margin-top: 5px;">' + row['ClubName'] + '</div>';
    this.registrationTempData.SelectedClubId = row['ID'];
    this.clubdropdown.setContent(dropDownContent);
  }

  ///////////////////////District Grid///////////////////////////
  @ViewChild('districtdropdowngrid') districtdropdowngrid: jqxGridComponent;
  @ViewChild('districtdropdown') districtdropdown: jqxDropDownButtonComponent;
  districtdataAdapter: any = new jqx.dataAdapter({
    datatype: 'json',
    datafields: [
      { name: 'ID', type: 'string' },
      { name: 'DistrictName', type: 'string' },
    ],
    id: 'ID',
    url: APP_CONFIG.appServiceEndpoint + 'api/District/GetAllDistricts'
  });

  districtcolumns: any[] =
    [
      { text: 'Id', datafield: 'ID', width: 250 },
      { text: 'District Name', datafield: 'DistrictName', width: 250 },
    ];

  districtdropdownselect(event: any): void {
    debugger;
    let args = event.args;
    let row = this.districtdropdowngrid.getrowdata(args.rowindex);
    let dropDownContent = '<div style="position: relative; margin-left: 3px; margin-top: 5px;">' + row['DistrictName'] + '</div>';
    this.registrationTempData.SelectedDistId = row['ID'];
    this.districtdropdown.setContent(dropDownContent);
  }

  //////////////////////////////////////////////////

  ready = (): void => {
    //this.clubgrid.selectrow(-1);
    //this.districtdropdowngrid.selectrow(-1);
  }
  //////////////////////////////////////////////////

  // onSelectPhoto(event, modelName) {
  //   debugger;
  //   if (event.target.files && event.target.files[0]) {
  //     var reader = new FileReader();
  //     reader.readAsDataURL(event.target.files[0]); // read file as data url

  //     reader.onload = (event) => { // called once readAsDataURL is completed
  //       console.log(modelName);
  //       if (modelName == "PresidentPhoto")
  //         this.registrationTempData.PresidentPhoto = reader.result;
  //       else if (modelName == "SecretaryPhoto")
  //         this.registrationTempData.SecretaryPhoto = reader.result;
  //       else if (modelName == "CoachPhoto")
  //         this.registrationTempData.CoachPhoto = reader.result;
  //     }
  //   }
  // }

  onStudentRegistration() {
    debugger;
    if (this.registrationForm.valid) {
      let studentRegistrationForm = this.registrationForm.value;

      studentRegistrationForm.DistrictId = this.registrationTempData.SelectedClubId;
      studentRegistrationForm.ClubId = this.registrationTempData.SelectedDistId;

      //studentRegistrationForm.PresidentPhoto = this.registrationTempData.PresidentPhoto;
      //studentRegistrationForm.SecretaryPhoto = this.registrationTempData.SecretaryPhoto;
      //studentRegistrationForm.CoachPhoto = this.registrationTempData.CoachPhoto;

      this.regStudentService.PostStudentRegistration(studentRegistrationForm).subscribe(response => {

        let parsedData = JSON.parse(response._body);
        if (parsedData.Status == "Success") {
          this.displayMessage.NotifyDomToasterMessage("Registered Successfully." + parsedData.Message, parsedData.Status);
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