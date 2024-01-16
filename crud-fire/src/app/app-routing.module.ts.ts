



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire'; 
import { AngularFirestoreModule } from '@angular/fire/firestore'; 
import { FormsModule } from '@angular/forms'; 
import { AddEditComponent } from './add-edit/add-edit.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { WildcardComponent } from './wildcard/wildcard.component';

const firebaseConfig = {
  apiKey: "AIzaSyBwEUt-5y2E7c7tn1bsPw8yQvYTWyQWTCc",
    authDomain: "crudfirebase-92855.firebaseapp.com",
    projectId: "crudfirebase-92855",
    storageBucket: "crudfirebase-92855.appspot.com",
    messagingSenderId: "808833384327",
    appId: "1:808833384327:web:d85517d46e886a16f65d22",
    measurementId: "G-TT4711PZKC"
};

@NgModule({
  declarations: [
    ListComponent, WildcardComponent, DetailsComponent, AddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFirestoreModule, 
   
  ],
  providers: [FirebaseService], 
  bootstrap: [AppComponent],
})
export class AppModule {}