import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserManagementComponent } from './user-management/user-management/user-management.component';
import { ListUserComponent } from './user-management/user-management/list-user/list-user.component';




export const routes: Routes = [
  
  { path: 'user-management', component: UserManagementComponent },
  { path: 'user-management/user-management/list-user', component: ListUserComponent  },
  
  { path: '**', redirectTo: '' } 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }