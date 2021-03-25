import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CinemaService {

  constructor(private http : HttpClient) { }

  getCinemaData() : any {
    return this.http.get("https://rtaappsc.epragathi.org:1201/reg/citizenServices/findAllServiceCombinations");
  }

  getCaptcha() : any {
    return this.http.get("https://aprtacitizen.epragathi.org:8443/dl/getCaptcha");
  }

}
