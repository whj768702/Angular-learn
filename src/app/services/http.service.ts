import { Injectable } from '@angular/core';
import {Http, Request, RequestMethod} from '@angular/http';

@Injectable()
class HttpService {
    constructor(public http: Http){}

    request(url:string){
        return this.http.request(new Request({
            method: RequestMethod.Get,
            url: url,
            search: 'password=123'
        }));
    }
}
