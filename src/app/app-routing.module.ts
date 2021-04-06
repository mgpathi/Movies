import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CinemasComponent } from './cinemas/cinemas.component';

const routes: Routes = [
  { path: 'cinemas', loadChildren: () => import('./cinemas/cinemas.module').then(m => m.CinemasModule) },
  { path: 'games', loadChildren: () => import('./games/games.module').then(m => m.GamesModule) },
  { path: 'events', loadChildren: () => import('./events/events.module').then(m => m.EventsModule) }
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
