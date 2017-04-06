import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkComponent } from './work/work.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  { path: 'home', component: LandingComponent },
  { path: 'portfolio', component: WorkComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: LandingComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    WorkComponent,
    AboutMeComponent,
    ContactComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    ClarityModule.forRoot(),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
