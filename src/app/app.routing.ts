import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
// import { StatisticsComponent } from './statistics/statistics.component';
import { CampaignsComponent } from './campaigns/campaigns.component';


const APP_Routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'profile', component: UserProfileComponent},
//   {path: '/statistics', component: StatisticsComponent},
  {path: 'campaigns', component: CampaignsComponent},
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_Routes);