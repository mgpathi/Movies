import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CinemasComponent } from './cinemas/cinemas.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'signin', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cinemas', loadChildren: './cinemas/cinemas.module#CinemasModule'},
  { path: 'games', loadChildren: './games/games.module#GamesModule'},
  { path: 'events', loadChildren: './events/events.module#EventsModule'}
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
