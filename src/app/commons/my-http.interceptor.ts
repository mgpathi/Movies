import { finalize, tap } from 'rxjs/operators';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { NgxSpinnerService } from 'ngx-spinner';
import { Injectable } from '@angular/core';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor{
    
    count = 0;

    constructor(private spinner: NgxSpinnerService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.spinner.show()

        this.count++;

        return next.handle(req)

            .pipe ( tap (

                    event => console.info(event),

                    error => console.error( error )

                ), finalize(() => {

                    this.count--;

                    if ( this.count == 0 ) this.spinner.hide ()
                })
            );
    }
}