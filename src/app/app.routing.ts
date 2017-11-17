import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { AddCampaignComponent } from './campaigns/add-campaign/add-campaign.component';
import { StatisticsMainComponent } from './statistics-main/statistics-main.component';
import { AuthComponent } from './auth/auth.component';



const APP_Routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'profile', component: UserProfileComponent},
  {path: 'campaigns', component: CampaignsComponent},
  {path: 'add-campaigns', component: AddCampaignComponent},
  {path: 'statistics-chart', component: StatisticsMainComponent},
  {path: 'auth', component: AuthComponent},  
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_Routes);