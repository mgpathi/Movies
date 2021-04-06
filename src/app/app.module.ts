import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { CinemaService } from './commons/cinema.service';
import { MyHttpInterceptor } from './commons/my-http.interceptor';
import { BootstrapmodalComponent } from './commons/bootstrapmodal/bootstrapmodal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapmodalComponent,
  ],
  entryComponents:[
    BootstrapmodalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    NgbModule.forRoot()
  ],
  providers: [CinemaService,{
    provide: HTTP_INTERCEPTORS,
    useClass: MyHttpInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
