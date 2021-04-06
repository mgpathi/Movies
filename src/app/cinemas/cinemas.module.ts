import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinemasComponent } from './cinemas.component';
import { CinemasRoutingModule } from './cinemas-routing.module';
import { TeluguCinemasComponent } from './telugu-cinemas/telugu-cinemas.component';
import { EnglishCinemasComponent } from './english-cinemas/english-cinemas.component';
import { HindiCinemasComponent } from './hindi-cinemas/hindi-cinemas.component';
import { TamilCinemasComponent } from './tamil-cinemas/tamil-cinemas.component';
import { MalayalamCinemasComponent } from './malayalam-cinemas/malayalam-cinemas.component';
import { KannadaCinemasComponent } from './kannada-cinemas/kannada-cinemas.component';

@NgModule({
  imports: [
    CommonModule,
    CinemasRoutingModule
  ],
  declarations: [
    CinemasComponent, 
    TeluguCinemasComponent, 
    EnglishCinemasComponent, 
    HindiCinemasComponent, 
    TamilCinemasComponent, 
    MalayalamCinemasComponent, 
    KannadaCinemasComponent
  ],
})
export class CinemasModule { }
