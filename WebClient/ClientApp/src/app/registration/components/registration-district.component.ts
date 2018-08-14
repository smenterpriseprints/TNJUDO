import { Component, OnInit,Input } from '@angular/core'
  import { FormGroup, FormControl } from '@angular/forms'

  declare let L;

@Component({
  templateUrl: 'registration-district.component.html'
})

export class RegistrationDistrictComponent implements OnInit {

  ngOnInit() {   

  }

  @Input()
  mapLatLng: string="Test Message";

  distRegistration: any = {};

  onDistrictRegistration() {
    debugger;
    if (!this.distRegistration.invalid) {
      let distRegistration = this.distRegistration;
    }
  }

  receiveLatLng($event){
    debugger;
    this.mapLatLng = $event
  }

}