import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

export const userRoutes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent}
];

// export const UserRoutes = RouterModule.forChild(userRoutes);
