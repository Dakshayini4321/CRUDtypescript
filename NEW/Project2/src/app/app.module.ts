import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { WildcardComponent } from './wildcard/wildcard.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'form', component: FormComponent },
  { path: 'list', component: ListComponent },
  { path: 'wildcard', component: WildcardComponent },
  { path: '**', component: WildcardComponent }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), AppComponent, HomeComponent, DetailsComponent, FormComponent, ListComponent, WildcardComponent],
  declarations: [],
 
})
export class AppModule {}