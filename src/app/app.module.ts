import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { CinemaService } from './commons/cinema.service';
import { MyHttpInterceptor } from './commons/my-http.interceptor';
import { BootstrapmodalComponent } from './commons/bootstrapmodal/bootstrapmodal.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginService } from './login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapmodalComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
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
  ],
  providers: [CinemaService,LoginService, {
    provide: HTTP_INTERCEPTORS,
    useClass: MyHttpInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
