import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"crud-fe0f5","appId":"1:58670252470:web:cbc53e0e602ba5beb04117","storageBucket":"crud-fe0f5.appspot.com","apiKey":"AIzaSyD0FhFy8JtMz6iwuEBn8WCAsUiSbkuu4Qc","authDomain":"crud-fe0f5.firebaseapp.com","messagingSenderId":"58670252470"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
