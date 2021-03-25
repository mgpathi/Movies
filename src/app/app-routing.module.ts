import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CinemasComponent } from './cinemas/cinemas.component';

const routes: Routes = [
  { path: 'cinemas', component: CinemasComponent },
  { path: '', component: AppComponent }
];

@NgModule({
  // imports: [
  //   CommonModule,
  //   RouterModule,
  //   RouterModule.forRoot(routes)
  // ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
