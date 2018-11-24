import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-club-registration',
  templateUrl: './club-registration.component.html',
  styleUrls: ['./club-registration.component.css']
})
export class ClubRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  isEditMode: boolean = true;
  isValid: boolean = false;
  public clubregistration: FormGroup = new FormGroup({});

  onClubSubmit() {
    debugger;
    if (this.clubregistration.valid) {

    }

}
}
