import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';

@Injectable()
export class CinemaService {

  constructor(private http : HttpClient) { }
//   private http: HttpClient;
//   constructor( handler: HttpBackend) { 
//     this.http = new HttpClient(handler);
//  }

  getCinemaData() : any {
    return this.http.get("https://rtaappsc.epragathi.org:1201/reg/citizenServices/findAllServiceCombinations");
  }

  getCaptcha() : any {
    return this.http.get("https://aprtacitizen.epragathi.org:8443/dl/getCaptcha");
  }

}
