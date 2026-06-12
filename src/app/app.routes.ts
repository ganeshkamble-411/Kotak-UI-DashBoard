import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';

export const routes: Routes = [
  // Base dashboard link hits first
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  
  // Profile system route link activation trigger
  { path: 'profile', component: ProfileComponent }
];