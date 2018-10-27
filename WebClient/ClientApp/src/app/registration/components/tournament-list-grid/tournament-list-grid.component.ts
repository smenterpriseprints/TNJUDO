import { Component, OnInit } from '@angular/core';
import { SMECache } from 'src/app/CommonModules/ClientCache';
import { StringConstants } from 'src/app/CommonModules/Constants';
import {APP_CONFIG} from 'src/environments/environment';

@Component({
  //selector: 'app-tournament-list-grid',
  templateUrl: './tournament-list-grid.component.html',
  styles:['.red {color:red}'],
  styleUrls:['./tournament-list-grid.component.css']
})
export class TournamentListGridComponent {

  source: any =
    {
      datatype: 'json',
      datafields: [
        { name: 'UserId', type: 'string' },
        { name: 'UserName', type: 'string' },
        { name: 'MobileNo', type: 'string' },
        { name: 'IsAadharNameValid', type: 'string' },
        { name: 'IsAadharDOBValid', type: 'string' },
        { name: 'IsAadharNumberValid', type: 'string' },
        { name: 'IsAadharAddressValid', type: 'string' },
   
      ],
      id: 'id',
      url: APP_CONFIG.appServiceEndpoint + 'api/Tournament/GetTournamentListData?userId=' + SMECache.GetCache(StringConstants.CurrentUserId)
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
      { text: 'User Id', datafield: 'UserId', width: 250 },
      { text: 'User Name', datafield: 'UserName', width: 250 },
      { text: 'Mobile No', datafield: 'MobileNo', width: 250 },
      { text: 'Is Aadhar Name Valid', datafield: 'IsAadharNameValid', width: 250,cellclassname: this.cellClass },
      { text: 'Is Aadhar DOB Valid', datafield: 'IsAadharDOBValid', width: 250,cellclassname: this.cellClass },
      { text: 'Is Aadhar Number Valid', datafield: 'IsAadharNumberValid', width: 250,cellclassname: this.cellClass },
      { text: 'Is Aadhar Address Valid', datafield: 'IsAadharAddressValid', width: 250,cellclassname: this.cellClass },
    ];
}
