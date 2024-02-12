import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { UserManagementComponent } from './user-management/user-management.component';
import { AddEditUserComponent } from './user-management/add-edit-user/add-edit-user.component';
import { ListUserComponent } from './user-management/list-user/list-user.component';
import { DetailsUserComponent } from './user-management/details-user/details-user.component';
import { UserService } from '../user.service'; 

@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserManagementComponent,
    AddEditUserComponent,
    ListUserComponent,
    DetailsUserComponent
   
  ],
  providers: [
    UserService 
  ]
})
export class UserManagementModule { }