import { Component, OnInit } from '@angular/core';
import { APP_CONFIG } from 'src/environments/environment';
import { HttpHelper } from "src/app/Shared/Services/http-helper.service";
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { BrowserToaster } from "src/app/CommonModules/common";


@Component({
  selector: 'app-print-winners',
  templateUrl: './print-winners.component.html',
  styleUrls: ['./print-winners.component.css']
})
export class PrintWinnersComponent extends HttpHelper {

  constructor(protected router: Router, protected _http: Http, private displayMessage: BrowserToaster) {
    super(router, _http);
  }

  SendNotification(rowData: any) {

    let resHtml = this.prepareQRForPDF(rowData)

    let input = {
      UserId: rowData.UserId,
      html: resHtml
    }

    this.post("api/Tournament/SendNotification", input).subscribe(response => {

      let parsedData = JSON.parse(response._body);
      debugger;
      if (parsedData.Status === "Success") {
        this.displayMessage.NotifyDomToasterMessage("Notification Send Successfully", "Success");
      }
      else {
        this.displayMessage.NotifyDomToasterMessage("Notification not Send", "Error");
      }
    },
      err => {
        this.displayMessage.NotifyDomToasterMessage("Error occurred while sending Notification.Please contact admin", "error");

      }
    )
  }



  prepareQRForPDF(rowData: any) {
    return `<html>
    <head>
    </head>
    <body>
       <page size='A4'>
          <div>
                <span style="font-size:50px; font-weight:bold">Winner Certificate</span>
                <br><br>
                <span style="font-size:30px"><b>Name:${rowData.UserName}</b></span><br/><br/>
                <span style="font-size:30px">Father Name:${rowData.FatherName}</span> <br/><br/>
                <span style="font-size:30px">Category:${rowData.WeightCategory}</span> <br/><br/>
                <span style="font-size:30px">District:${rowData.District}</span> <br/><br/>
          </div>
       </page>
    </body>
 </html>`

  }

  prepareQRForPrint(rowData: any) {
    return `<html>
    <head>
       <style type='text/css' media='print'>  
       body {background: rgb(204,204,204);}
       page {background: white;display: block;}
       page[size='A4'] {width: 21cm;height: 29.7cm;}
       @page { size: auto;  margin: 0mm; } 
       @media print {body, page {margin: 0;position: absolute;top: 0;left: 0;right: 0;bottom: 0;-webkit-print-color-adjust: exact;}}
       </style>
       <script>function step1(){setTimeout('step2()', 2);}function step2(){window.print();window.close()}</script>
    </head>
    <body onload='step1()'>
       <page size='A4'>
          <div style="width:21cm; height:29.7cm; text-align:center; border: 10px solid #787878">
                <span style="font-size:50px; font-weight:bold">Winner Certificate</span>
                <br><br>
                <span style="font-size:30px"><b>Name:${rowData.UserName}</b></span><br/><br/>
                <span style="font-size:30px">Father Name:${rowData.FatherName}</span> <br/><br/>
                <span style="font-size:30px">Category:${rowData.WeightCategory}</span> <br/><br/>
                <span style="font-size:30px">District:${rowData.District}</span> <br/><br/>
          </div>
       </page>
    </body>
 </html>`
  }

  imagerenderer = (row: number, datafield: string, value: string): string => {
    return '<span (click)="test()" class="icon fa fa-print"></span>&nbsp;&nbsp;&nbsp;<span class="icon fa fa-mail-forward"></span>';
  }

  test() {
    alert('test');
  }
  printPreviewQR(rowData: any) {
    let Pagelink = "about:blank";
    var pwa = window.open(Pagelink, "_new");
    pwa.document.open();

    pwa.document.write(this.prepareQRForPrint(rowData));
    pwa.document.close();
  }

  source: any =
    {
      datatype: 'json',
      datafields: [
        { name: 'UserId', type: 'string' },
        { name: 'UserName', type: 'string' },
        { name: 'FatherName', type: 'string' },
        { name: 'WeightCategory', type: 'string' },
        { name: 'District', type: 'string' },

      ],
      id: 'UserId',
      url: APP_CONFIG.appServiceEndpoint + 'api/Tournament/GetWinnerList'
    };
  counter: number = 1;
  dataAdapter: any = new jqx.dataAdapter(this.source);
  columns: any[] =
    [
      {
        text: 'Print', datafield: 'UserId', width: 100,

        createwidget: (row: any, column: any, value: string, htmlElement: HTMLElement): void => {
          let container = document.createElement('span');
          let printButtonId = `myPrintButton${this.counter}`;
          container.id = printButtonId;
          container.style.border = 'none';
          htmlElement.appendChild(container);

          let container2 = document.createElement('span');
          let emailButtonId = `myEmailButton${this.counter}`;
          container2.id = emailButtonId;
          container2.style.border = 'none';
          htmlElement.appendChild(container2);

          let imgurl = '../images/' + value.toLowerCase() + '.png';
          let options = {
            width: '100%', height: 90, template: 'success',
            imgSrc: imgurl, imgWidth: 40, imgHeight: 50, value: value,
            imgPosition: 'center', textPosition: 'center', textImageRelation: 'imageAboveText'
          };


          let myPrintButton = jqwidgets.createInstance(`#${printButtonId}`, 'jqxButton', options);
          myPrintButton.addEventHandler('click', (): void => {
            this.printPreviewQR(row.bounddata);
          });

          let myEmailButton = jqwidgets.createInstance(`#${emailButtonId}`, 'jqxButton', options);
          myEmailButton.addEventHandler('click', (): void => {
            debugger;
            this.SendNotification(row.bounddata);
          });

          this.counter++;
        },
        initwidget: (row: number, column: any, value: any, htmlElement: HTMLElement): void => { }
      },
      { text: 'User Name', datafield: 'UserName', width: 200 },
      { text: 'Father Name', datafield: 'FatherName', width: 200 },
      { text: 'Weight Category', datafield: 'WeightCategory', width: 100 },
      { text: 'District', datafield: 'District', width: 100 },
    ];

}
