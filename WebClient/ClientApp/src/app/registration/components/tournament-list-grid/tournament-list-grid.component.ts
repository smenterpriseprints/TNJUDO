import { Component, OnInit } from '@angular/core';
import { SMECache } from 'src/app/CommonModules/ClientCache';
import { StringConstants } from 'src/app/CommonModules/Constants';
import {APP_CONFIG} from 'src/environments/environment';

@Component({
  //selector: 'app-tournament-list-grid',
  templateUrl: './tournament-list-grid.component.html',
})
export class TournamentListGridComponent {

  source: any =
    {
      datatype: 'json',
      datafields: [
        { name: 'UserId', type: 'string' },
        { name: 'UserName', type: 'string' },
        { name: 'MobileNo', type: 'string' },
   
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
  columns: any[] =
    [
      { text: 'UserId', datafield: 'UserId', width: 250 },
      { text: 'UserName', datafield: 'UserName', width: 250 },
      { text: 'MobileNo', datafield: 'MobileNo', width: 250 },
  
    ];
}
