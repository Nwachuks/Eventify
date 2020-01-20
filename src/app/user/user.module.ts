import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { ProfileComponent } from './profile/profile.component';
import { userRoutes } from './user.routing';
import { LoginComponent } from './login/login.component';
import { from } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    UserComponent,
    ProfileComponent,
    LoginComponent
  ],
  exports: [
    UserComponent
  ]
})

export class UserModule { }
