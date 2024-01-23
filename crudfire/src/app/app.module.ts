import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { environment } from './../environments/environment';
import { AppRoutingModule } from './app.routes';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule, BrowserModule, TableComponent,  FormsModule, AppRoutingModule, AppComponent, provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideDatabase(() => getDatabase())
  ],
  providers:[],
  bootstrap: []
})
export class AppModule { }
