import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { RegistrationDistrictService } from '../Service/registration-district.service'

import { Router } from '@angular/router'


@Component({
  templateUrl: 'registration-district.component.html'
})

export class RegistrationDistrictComponent implements OnInit {

  distRegistration: any = {};


  public registrationForm: FormGroup;
  constructor(public form: FormBuilder, private router: Router, private regDistService: RegistrationDistrictService) {
  }

  myFiles: string[] = [];
  public registrationPhoto: any = {};

  ngOnInit() {
    this.buildForm();
  }

  public buildForm() {
    this.registrationForm = this.form.group({
      PresidentName: [''],
      PhoneNumber: this.validateNumber(1, 12),
      PresidentAddress: [''],
      SecretaryName: [''],
      SecretaryPhoneNumber: this.validateNumber(1, 12),
      SecretaryAddress: [''],
      CoachName: [''],
      CoachPhoneNumber: this.validateNumber(1, 12),
      CoachAddress: [''],
      DistrictPhoneNumber: this.validateNumber(1, 12),
      DistrictEmail: this.validateEmail(),
      DistrictPassword: [''],
      DistrictAddress1: [''],
      DistrictAddress2: [''],
      DistrictCity: [''],
      DistrictState: [''],
      DistrictZip: ['']
    });
  }

  validateNumber(min, max) {
    return ['', [
      //  Validators.required,
      Validators.minLength(min),
      Validators.maxLength(max),
      Validators.pattern('[0-9]+')  // validates input is digit
    ]]
  }
  validateEmail() {
    return ['', [
      // Validators.required,     
      Validators.email  // validates input is email
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
          this.registrationPhoto.PresidentPhoto = reader.result;
        else if (modelName == "SecretaryPhoto")
          this.registrationPhoto.SecretaryPhoto = reader.result;
        else if (modelName == "CoachPhoto")
          this.registrationPhoto.CoachPhoto = reader.result;
      }

      // for (var i = 0; i < event.target.files.length; i++) { 
      //   this.myFiles.push(event.target.files[i]);
      // }
    }
  }
  onDistrictRegistration1() {
    //this.toast.pop('success', 'Success', "District Regisration Successfully");
  }

  onDistrictRegistration() {
    debugger;
    if (!this.registrationForm.invalid) {
      let distRegistrationForm = this.registrationForm.value;
      // const frmData = new FormData();    
      // for (var i = 0; i < this.myFiles.length; i++) { 
      //   frmData.append("fileUpload", this.myFiles[i]);
      // }
      // frmData.append("data",JSON.stringify(this.distRegistration) );

      distRegistrationForm.PresidentPhoto = this.registrationPhoto.PresidentPhoto;
      distRegistrationForm.SecretaryPhoto = this.registrationPhoto.SecretaryPhoto;
      distRegistrationForm.CoachPhoto = this.registrationPhoto.CoachPhoto;

      this.regDistService.postDistrictRegistration(distRegistrationForm).subscribe(response => {
        //this.toast.pop('success', 'Success', "District Regisration Successfully");
        this.router.navigate(['home']);
      },
        err => {
          debugger;

        });

    }
  }

}