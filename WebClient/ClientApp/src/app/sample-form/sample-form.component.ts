import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css']
})
export class SampleFormComponent implements OnInit {

  constructor() {
  }
  ngOnInit() {
  }

  isEditMode: boolean = true;
  isValid: boolean = false;
  public sampleregistrationform: FormGroup = new FormGroup({});

  onSampleSubmit() {
    debugger;
    if (this.sampleregistrationform.valid) {

    }
  }

}
