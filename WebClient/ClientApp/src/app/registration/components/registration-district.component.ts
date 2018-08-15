import { Component, OnInit,Input,ChangeDetectorRef  } from '@angular/core'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { RegistrationDistrictService } from '../Service/registration-district.service'

import { Router } from '@angular/router'



@Component({
  templateUrl: 'registration-district.component.html'
})

export class RegistrationDistrictComponent implements OnInit {
  
  
  isEditMode: boolean = true;
    isValid: boolean = true;

  mapLatLng: string="Test Message";
  distRegistration: any = {};
  
  public registrationForm: FormGroup= new FormGroup({});
  constructor(public form: FormBuilder, private router: Router, private regDistService: RegistrationDistrictService,private changeDetectorRef: ChangeDetectorRef,) {
    
  }

  public registrationPhoto: any = {};

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
          this.registrationPhoto.PresidentPhoto = reader.result;
        else if (modelName == "SecretaryPhoto")
          this.registrationPhoto.SecretaryPhoto = reader.result;
        else if (modelName == "CoachPhoto")
          this.registrationPhoto.CoachPhoto = reader.result;
      }
    }
  }

  onDistrictRegistration() {
    debugger;
    if (!this.registrationForm.invalid) {
      let distRegistrationForm = this.registrationForm.value;
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

  receiveLatLng($event){
    debugger;
    this.mapLatLng = $event
  }

}