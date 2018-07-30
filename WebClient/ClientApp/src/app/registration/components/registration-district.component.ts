import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  templateUrl: 'registration-district.component.html'
})

export class RegistrationDistrictComponent implements OnInit {
  ngOnInit(): void {

  }

  distRegistration: any = {};

  onDistrictRegistration() {
    debugger;
    if (!this.distRegistration.invalid) {
      let distRegistration = this.distRegistration;
    }
  }

}