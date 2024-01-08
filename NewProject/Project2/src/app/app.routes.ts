import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { DetailsComponent } from './details/details.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { FormComponent } from './form/form.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [

  { path: 'list', component: ListComponent },

  { path: 'add', component: AddEditComponent },
  { path: 'edit/:id', component: AddEditComponent },

  { path: 'details/:id', component: DetailsComponent },

  { path: 'form', component: FormComponent },

 
  { path: '**', component: WildcardComponent },

  { path: '', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule, BrowserModule],
  exports: [RouterModule],
  
})
export class AppRoutingModule {}