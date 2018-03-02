import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { appRoutes } from './routes';
import { ReimbursementComponent } from './components/reimbursement/reimbursement.component';
import { HeroPowerPipe } from './pipes/hero-power.pipe';
import { ReimbsComponent } from './components/reimbs/reimbs.component';

import { ReimburseService } from './services/reimburse.service';
import { AllReimbsComponent } from './components/all-reimbs/all-reimbs.component';
import { PendingReimbsComponent } from './components/pending-reimbs/pending-reimbs.component';
import { ApprovedReimbsComponent } from './components/approved-reimbs/approved-reimbs.component';
import { DeniedReimbsComponent } from './components/denied-reimbs/denied-reimbs.component';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { LoginComponent } from './components/login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CreateReimbComponent } from './components/create-reimb/create-reimb.component';
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoggedInGuard } from './guard/logged-in.guard';
import { FooterComponent } from './components/footer/footer.component';
import { TypePipePipe } from './pipes/type-pipe.pipe';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  declarations: [
    AppComponent,
    NavComponent,
    ReimbursementComponent,
    HeroPowerPipe,
    ReimbsComponent,
    AllReimbsComponent,
    PendingReimbsComponent,
    ApprovedReimbsComponent,
    DeniedReimbsComponent,
    LoginComponent,
    CreateReimbComponent,
    HomeComponent,
    WelcomeComponent,
    FooterComponent,
    TypePipePipe
  ],
  providers: [
    ReimburseService,
    CookieService,
  LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
