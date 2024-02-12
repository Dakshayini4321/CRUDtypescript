import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';

import { UserManagementModule } from './user-management/user-management.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserManagementModule,
    HttpClientModule,
    AppComponent
  ],
  providers: [],
  
})
export class AppModule { }