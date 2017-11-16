import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { NavLeftComponent } from './nav-left/nav-left.component';
import { PageTitleBarComponent } from './page-title-bar/page-title-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './dashboard/chart/chart.component';
import { StatisticsComponent } from './dashboard/statistics/statistics.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { AddCampaignComponent } from './campaigns/add-campaign/add-campaign.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { StatisticsMainComponent } from './statistics-main/statistics-main.component';


@NgModule({
  declarations: [
    AppComponent,
    NavTopComponent,
    NavLeftComponent,
    PageTitleBarComponent,
    DashboardComponent,
    ChartComponent,
    StatisticsComponent,
    CampaignsComponent,
    AddCampaignComponent,
    UserProfileComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    StatisticsMainComponent
  ],
  imports: [
    BrowserModule,
    routing,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
