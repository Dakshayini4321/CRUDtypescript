import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ListComponent } from './list-person/list-person.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { CreatePersonComponent } from './create-person/create-person.component';

 export const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'edit', component: EditPersonComponent },
  { path: 'create', component: CreatePersonComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}