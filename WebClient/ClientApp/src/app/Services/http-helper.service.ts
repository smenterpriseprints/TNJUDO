// import { Observer } from 'rxjs';
// import { Injectable, Inject } from '@angular/core';
// //import { Http, Request, Response, Headers, RequestOptionsArgs, RequestMethod, RequestOptions, ResponseContentType } from "@angular/http";
// import { RequestMethod, RequestOptions, ResponseContentType } from "@angular/http";
// import { HttpClient, HttpHeaders, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
// import { RequestArgs } from "@angular/http/src/interfaces";
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/publishReplay';
// import 'rxjs/add/observable/throw';
// import { Router } from '@angular/router';


// @Injectable()
// export class HttpHelper {
//     protected headers: HttpHeaders;
//      appServiceEndpoint:any="";
//     constructor(protected router: Router, protected _http: HttpClient) {
       
//     }

//     //Get Method of API
//     protected get(url: string): Observable<any> {      
//         let options = { headers: this.headers };
//         return this._http.get(this.appServiceEndpoint + url, options)
//            .map(res => { return HttpHelper.json(res); })
//             .catch(error => this.handleError(error));
//     }

//     //Post method of API   
//     protected post(url: string, data: any, args?: any): Observable<any> {       
//         if (args == null) args = {};
//         if (args.headers === undefined) args.headers = this.headers;

//         return this._http.post(this.appServiceEndpoint + url, JSON.stringify(data), args)
//             .map(res => { return HttpHelper.json(res) })
//             .catch(error => this.handleError(error));
//     }

//     //Put Method of API
//     //protected put(url: string, data: any, args?: RequestOptionsArgs): Observable<any> {
//     protected put(url: string, data: any, args?: any): Observable<any> {      
//         if (args == null) args = {};
//         if (args.headers === undefined) args.headers = this.headers;

//         return this._http.put(this.appServiceEndpoint + url, JSON.stringify(data), args)
//             .map(res => { return HttpHelper.json(res); })
//             .publishReplay(1)
//             .refCount()
//             .catch(error => this.handleError(error));
//     }

//     private static json(res: any): any {
//         //return res.text() === "" ? res : res.json();
//         return res;
//     }

//     //Error handling
//     protected handleError(error: any) {       
//         var errorMessage = "";
//         if (error instanceof HttpErrorResponse) {
//             if (error.status === 401) {
//                 // redirect to the login route
//                 // or show a modal
//                 this.router.navigate(['login']);
//             }
//         }        
//         return Observable.throw(error);
//     }

//     // initializeheaders() {
//     //     this.headers = new HttpHeaders();
//     //     this.headers = this.headers.append('Authorization', "Bearer ".concat(this.authService.userInfo.token));
//     //     this.headers = this.headers.append('Content-Type', 'application/json');
//     //     if (this.authService.getSessionTenantId() != null && this.authService.getSessionTenantId() != "") {
//     //         let sessionId = this.authService.getSessionTenantId();
//     //         this.headers = this.headers.append('SessionTenantId', sessionId != null ? sessionId : "");
//     //     }
//     //     if (this.authService.getSessionTenantName() != null && this.authService.getSessionTenantName() != "") {
//     //         let sessionName = this.authService.getSessionTenantName();
//     //         this.headers = this.headers.append('SessionTenantName', sessionName != null ? sessionName : "");
//     //     }
//     // }
// }