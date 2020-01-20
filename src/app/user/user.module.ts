import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { userRoutes } from './user.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    UserComponent,
    ProfileComponent
  ],
  exports: [
    UserComponent
  ]
})

export class UserModule { }
