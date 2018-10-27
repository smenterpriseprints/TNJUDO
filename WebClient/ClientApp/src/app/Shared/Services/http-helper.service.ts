import { Injectable,  OnInit, } from '@angular/core';
import { Http,RequestOptions,Headers } from '@angular/http';
import {  HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/observable/throw';
import { Router } from '@angular/router';
import {APP_CONFIG} from 'src/environments/environment';

@Injectable()
export class HttpHelper implements OnInit {
    //members declaration
    protected headers: HttpHeaders;
    protected appServiceEndpoint:any="";

    constructor(protected router: Router, protected _http: Http) {
        debugger;
        this.appServiceEndpoint=APP_CONFIG.appServiceEndpoint;
     
    }
    ngOnInit(){
    }

    //Get Method of API
   
    protected get(url: string): Observable<any> {   
        debugger;
        // const httpOptions = {
        //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        //   };

        return this._http.get(this.appServiceEndpoint + url)
           .map(res => { return HttpHelper.json(res); })
            .catch(error => this.handleError(error));
    }

    protected post(url: string, data: any, args?: any): Observable<any> {   
        debugger;    
        if (args == null) args = {};
        if (args.headers === undefined) args.headers = this.headers;

        //let body = JSON.stringify({data});            
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this.appServiceEndpoint + url, data,options)
            .map(res => { return HttpHelper.json(res) })
            .catch(error => this.handleError(error));
    }

    //Post method of API   
    protected postMultipartData(url: string, data: any, args?: any): Observable<any> {   
        debugger;    
        if (args == null) args = {};
        if (args.headers === undefined) args.headers = this.headers;

        let body = JSON.stringify({data});            
        let headers = new Headers({ 'Content-Type': 'multipart/form-data' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this.appServiceEndpoint + url, data,options)
            .map(res => { return HttpHelper.json(res) })
            .catch(error => this.handleError(error));
    }

     //Post method of API   
     protected postJsonData(url: string, data: any, args?: any): Observable<any> {   
        debugger;    
        return this._http.post(this.appServiceEndpoint + url, data)
            .map(res => { return HttpHelper.json(res) })
            .catch(error => this.handleError(error));
    }


    //Put Method of API
    //protected put(url: string, data: any, args?: RequestOptionsArgs): Observable<any> {
    protected put(url: string, data: any, args?: any): Observable<any> {      
        if (args == null) args = {};
        if (args.headers === undefined) args.headers = this.headers;

        return this._http.put(this.appServiceEndpoint + url, JSON.stringify(data), args)
            .map(res => { return HttpHelper.json(res); })
            .publishReplay(1)
            .refCount()
            .catch(error => this.handleError(error));
    }

    private static json(res: any): any {
        debugger;
        //return res.text() === "" ? res : res.json();
        return res;
    }

    //Error handling
    protected handleError(error: any) { 
        debugger;      
        var errorMessage = "";
        if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
                // redirect to the login route
                // or show a modal
                this.router.navigate(['login']);
            }
        }        
        return Observable.throw(error);
    }

}