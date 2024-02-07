import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes';
import { ToastrModule } from 'ngx-toastr'; 
import { AppComponent } from './app.component';

import { DetailsComponent } from './details/details.component';

import { AddComponent } from "./add/add.component";


@NgModule({
    declarations: [
        AppComponent,
       
        DetailsComponent,
       
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        ToastrModule.forRoot(),
        AddComponent
    ]
})
export class AppModule { }