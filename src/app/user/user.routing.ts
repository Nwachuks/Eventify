import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

export const userRoutes: Routes = [
  { path: 'profile', component: ProfileComponent },
];

// export const UserRoutes = RouterModule.forChild(userRoutes);
