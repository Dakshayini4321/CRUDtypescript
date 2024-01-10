import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { DataService } from './services/data.service';

import { firebaseConfig } from '../firebase.config';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    RouterModule.forRoot([
      { path: 'list', component: ListComponent },
      { path: 'form', component: FormComponent },
      { path: '', redirectTo: '/list', pathMatch: 'full' },
      { path: '**', redirectTo: '/list', pathMatch: 'full' },
    ]),
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}