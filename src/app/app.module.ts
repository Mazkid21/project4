import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AuthService } from './shared/auth.service'
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  
  { path: '', component: LandingPageComponent},
  { path: 'login', component: LoginComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'BackBy'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
     RouterModule.forRoot(
    appRoutes
    )
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
