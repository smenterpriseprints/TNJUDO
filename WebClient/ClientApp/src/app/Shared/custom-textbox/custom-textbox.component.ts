import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'custom-textbox',
    templateUrl: './custom-textbox.component.html'
})
export class CustomTextBoxComponent implements OnInit {
    @Input() group: FormGroup = new FormGroup({});
    @Input() name: any;
    @Input() required: boolean;
    @Input() value: any;
    @Input() isValid: boolean;
    @Input() editMode: boolean = true;
    @Input() max: number;
    @Input() pattern: string = "";
    @Input() placeHolder: string = "";
    @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        debugger;
        if (this.value == undefined) {
            this.value = '';
        }
        if (this.group != undefined && this.name != undefined) {
            this.addControl();
        }
        if (this.max == undefined) {
            this.max = Infinity;
        }
    }

    addControl(): void {
        debugger;
        this.group.addControl(this.name, new FormControl(''));
        let control = <FormControl>this.group.get(this.name);
        if (this.required) {
            control.setValidators([Validators.required])
        }
        if (this.pattern != "") {
            if (this.pattern == "email") {
                control.setValidators([Validators.email])
            }
            else {
                let patternRegEx = "";
                switch (this.pattern) {
                    case "aadharnumber":
                        patternRegEx = "[0-9]+"; //need to restrict
                        break;
                    case "number":
                        patternRegEx = "[0-9]+";
                        break;
                    case "fraction":
                        patternRegEx = "^[0-9]+(.[0-9]{0,2})?$";
                        break;
                }

                if (patternRegEx != "") {
                    control.setValidators([Validators.pattern(patternRegEx)])
                }
                else {
                    control.setValidators([Validators.pattern(this.pattern)])
                }
            }

        }
    }

    textValueChange(value): void {
        this.value = value;
        this.valueChange.emit(value);
    }
}
