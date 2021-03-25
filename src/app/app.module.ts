import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { CinemasComponent } from './cinemas/cinemas.component';
import { CinemaService } from './commons/cinema.service';
import { MyHttpInterceptor } from './commons/my-http.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    CinemasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [CinemaService,{
    provide: HTTP_INTERCEPTORS,
    useClass: MyHttpInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
