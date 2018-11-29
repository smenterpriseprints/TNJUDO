import { Component, OnInit, Input, ChangeDetectorRef, ViewChild } from '@angular/core'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { RegistrationDistrictService } from '../../Service/registration-district.service'
import { Router } from '@angular/router'
import { SMECache } from 'src/app/CommonModules/ClientCache';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import { jqxDropDownButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownbutton';
import { APP_CONFIG } from 'src/environments/environment';
import { StringConstants } from 'src/app/CommonModules/Constants';


@Component({
  templateUrl: 'registration-student.component.html'
})

export class RegistrationStudentComponent implements OnInit {

  public registrationTempData: any = {};
  @ViewChild('myGrid') myGrid: jqxGridComponent;
  @ViewChild('myDropDownButton') myDropDownButton: jqxDropDownButtonComponent;
  source: any =
    {
      datatype: 'json',
      datafields: [
        { name: 'ID', type: 'string' },
        { name: 'ClubName', type: 'string' },
        { name: 'ClubAddress', type: 'string' },
      ],
      id: 'ID',
      url: APP_CONFIG.appServiceEndpoint + 'api/District/GetAllClubs'
    };
  dataAdapter: any = new jqx.dataAdapter(this.source);

  getWidth(): any {
    if (document.body.offsetWidth < 850) {
      return '90%';
    }

    return 850;
  }
  cellClass = (row: number, columnfield: any, value: boolean): string => {
    debugger;
    if (value) {
      return 'green';
    }
    else {
      return 'red';
    }
  }

  columns: any[] =
    [
      { text: 'User Id', datafield: 'ID', width: 250 },
      { text: 'Club Name', datafield: 'ClubName', width: 250 },
      { text: 'Club Address', datafield: 'ClubAddress', width: 250 }
    ];
  ready = (): void => {
    this.myGrid.selectrow(-1);
  }
  myGridOnRowSelect(event: any): void {
    debugger;
    let args = event.args;
    let row = this.myGrid.getrowdata(args.rowindex);
    let dropDownContent = '<div style="position: relative; margin-left: 3px; margin-top: 5px;">' + row['ClubName'] + ',' + row['ClubAddress'] + '</div>';
    this.registrationTempData.Area = row['ClubName'];
    this.myDropDownButton.setContent(dropDownContent);
  }

  isEditMode: boolean = true;
  isValid: boolean = true;

  mapLatLng: string = "Test Message";
  distRegistration: any = {};

  public registrationForm: FormGroup = new FormGroup({});
  constructor(public form: FormBuilder, private router: Router, private regDistService: RegistrationDistrictService, private changeDetectorRef: ChangeDetectorRef, ) {

  }



  ngOnInit() {
    this.changeDetectorRef.detectChanges();
  }



  validateNumber(min, max) {
    return ['', [
      //  Validators.required,
      Validators.minLength(min),
      Validators.maxLength(max),
      Validators.pattern('[0-9]+')  // validates input is digit
    ]]
  }


  onSelectPhoto(event, modelName) {
    debugger;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        console.log(modelName);
        if (modelName == "PresidentPhoto")
          this.registrationTempData.PresidentPhoto = reader.result;
        else if (modelName == "SecretaryPhoto")
          this.registrationTempData.SecretaryPhoto = reader.result;
        else if (modelName == "CoachPhoto")
          this.registrationTempData.CoachPhoto = reader.result;
      }
    }
  }

  onDistrictRegistration() {
    debugger;
    if (!this.registrationForm.invalid) {
      let distRegistrationForm = this.registrationForm.value;
      distRegistrationForm.Area = this.registrationTempData.Area;
      distRegistrationForm.PresidentPhoto = this.registrationTempData.PresidentPhoto;
      distRegistrationForm.SecretaryPhoto = this.registrationTempData.SecretaryPhoto;
      distRegistrationForm.CoachPhoto = this.registrationTempData.CoachPhoto;

      this.regDistService.postDistrictRegistration(distRegistrationForm).subscribe(response => {
        //this.toast.pop('success', 'Success', "District Regisration Successfully");
        this.router.navigate(['home']);
      },
        err => {
          debugger;

        });

    }
  }

  // receiveLatLng($event) {
  //   debugger;
  //   this.mapLatLng = $event
  // }

}