import { Component, OnInit } from '@angular/core';
import { HttpHelper } from "src/app/Shared/Services/http-helper.service";
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { FormGroup } from '@angular/forms';
import { BrowserToaster } from "src/app/CommonModules/common";

@Component({
  selector: 'app-import-winners',
  templateUrl: './import-winners.component.html',
  styleUrls: ['./import-winners.component.css']
})
export class ImportWinnersComponent extends HttpHelper {


  public WinnerListExcelData: any;
  public winnerListForm: FormGroup = new FormGroup({});

  constructor(protected router: Router, protected _http: Http, private displayMessage: BrowserToaster) {
    super(router, _http);
  }

  onSelectForm(event, modelName) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        if (modelName == "WinnerList")
          this.WinnerListExcelData = reader.result;
      }
    }

  }

  onWinnerListUpload() {
    debugger;
    let data = this.winnerListForm.value;
    data.WinnerListExcelData = this.WinnerListExcelData;
    this.post("api/Tournament/WinnerListUpload", data).subscribe(response => {

      let parsedData = JSON.parse(response._body);
      if (parsedData.Status === "Success") {
        this.displayMessage.NotifyDomToasterMessage("Winner List uploaded successfully", "Success");
      }
    },
      err => {
        this.displayMessage.NotifyDomToasterMessage("Error occurred on registraion.Please contact admin", "error");

      }
    )
  }

}
