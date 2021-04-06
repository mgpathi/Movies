import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CinemasComponent } from './cinemas.component';
import { TeluguCinemasComponent } from './telugu-cinemas/telugu-cinemas.component';
import { EnglishCinemasComponent } from './english-cinemas/english-cinemas.component';
import { HindiCinemasComponent } from './hindi-cinemas/hindi-cinemas.component';
import { TamilCinemasComponent } from './tamil-cinemas/tamil-cinemas.component';
import { MalayalamCinemasComponent } from './malayalam-cinemas/malayalam-cinemas.component';
import { KannadaCinemasComponent } from './kannada-cinemas/kannada-cinemas.component';

const routes: Routes = [
  { path: 'telugu', component: TeluguCinemasComponent },
  { path: 'english', component: EnglishCinemasComponent },
  { path: 'hindi', component: HindiCinemasComponent },
  { path: 'tamil', component: TamilCinemasComponent },
  { path: 'malayalam', component: MalayalamCinemasComponent },
  { path: 'kannada', component: KannadaCinemasComponent },
  { path: '', component: CinemasComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class CinemasRoutingModule { }
