import { Component, OnInit } from '@angular/core';
import { APP_CONFIG } from 'src/environments/environment';
import { SMECache } from 'src/app/CommonModules/ClientCache';
import { StringConstants } from 'src/app/CommonModules/Constants';

@Component({
  selector: 'app-tournament-verification-list',
  templateUrl: './tournament-verification-list.component.html',
  styleUrls: []
})
export class TournamentVerificationListComponent {

  source: any =
    {
      datatype: 'json',
      datafields: [
        { name: 'UserId', type: 'string' },
        { name: 'UserName', type: 'string' },
        { name: 'MobileNo', type: 'string' },
        { name: 'EmailId', type: 'string' },
        { name: 'DOB', type: 'string' },
        { name: 'District', type: 'string' },
        { name: 'AadharNumber', type: 'string' },
        { name: 'Weight', type: 'string' },
        { name: 'Height', type: 'string' },
        { name: 'IsAadharNameValid', type: 'string' },
        { name: 'IsAadharDOBValid', type: 'string' },
        { name: 'IsAadharNumberValid', type: 'string' },
        { name: 'IsAadharAddressValid', type: 'string' },

      ],
      id: 'id',
      url: APP_CONFIG.appServiceEndpoint + 'api/Tournament/GetTournamentVerifiedListData?userId=' + SMECache.GetCache(StringConstants.CurrentUserId)
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
      { text: 'Application Number', datafield: 'UserId', width: 250 },
      { text: 'Name', datafield: 'UserName', width: 250 },
      { text: 'Mobile No', datafield: 'MobileNo', width: 250 },
      { text: 'Email', datafield: 'EmailId', width: 250 },
      { text: 'D.O.B', datafield: 'DOB', width: 250 },
      { text: 'District', datafield: 'District', width: 250 },
      { text: 'Aadhar No.', datafield: 'AadharNumber', width: 250 },
      { text: 'Weight', datafield: 'Weight', width: 250 },
      { text: 'Height', datafield: 'Height', width: 250 },
      { text: 'Is Aadhar Name Valid', datafield: 'IsAadharNameValid', width: 250, cellclassname: this.cellClass },
      { text: 'Is Aadhar DOB Valid', datafield: 'IsAadharDOBValid', width: 250, cellclassname: this.cellClass },
      { text: 'Is Aadhar Number Valid', datafield: 'IsAadharNumberValid', width: 250, cellclassname: this.cellClass },
      { text: 'Is Aadhar Address Valid', datafield: 'IsAadharAddressValid', width: 250, cellclassname: this.cellClass },
    ];

}
