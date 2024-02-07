import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent, ListComponent, FormsModule
  ],
  imports: [
    CommonModule, BrowserModule,   HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
