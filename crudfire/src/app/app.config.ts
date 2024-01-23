import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), importProvidersFrom(provideFirebaseApp(() => initializeApp({ "projectId": "crudfire-d4ead", "appId": "1:122775168383:web:9a511a216c0bfd2b2fe64a", "databaseURL": "https://crudfire-d4ead-default-rtdb.firebaseio.com", "storageBucket": "crudfire-d4ead.appspot.com", "apiKey": "AIzaSyB1QFsovBesNGInE1zELkWV5EOWhuyzQQg", "authDomain": "crudfire-d4ead.firebaseapp.com", "messagingSenderId": "122775168383" }))), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideDatabase(() => getDatabase())), provideAnimations()]
};
