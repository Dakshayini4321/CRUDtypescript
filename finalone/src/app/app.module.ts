import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';


import { routes } from './app.routes';




@NgModule({
  declarations: [],
  imports: [
    CommonModule, FormsModule, RouterModule.forRoot(routes), HttpClientModule, BrowserModule, AppComponent, 
    AddComponent
  ],
  providers: [],
 
})

export class AppModule { }
