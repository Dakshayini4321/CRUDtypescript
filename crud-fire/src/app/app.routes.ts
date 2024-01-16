
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { DetailsComponent } from './details/details.component';
import { WildcardComponent } from './wildcard/wildcard.component';

const Routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'add', component: AddEditComponent },
  { path: 'edit/:id', component: AddEditComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', component: WildcardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule],
})




export const routes: Routes = [];
