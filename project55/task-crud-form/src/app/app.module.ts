import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { ListComponent } from './list-person/list-person.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { CreatePersonComponent } from './create-person/create-person.component';
import { firebaseConfig } from './firebase.config';
import { ToastrModule } from 'ngx-toastr';
import { environment } from '../environments/environment';




@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditPersonComponent,
    CreatePersonComponent, 
  ],

  imports: [
    BrowserModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, ToastrModule.forRoot(,)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
