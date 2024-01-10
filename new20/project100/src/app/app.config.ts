import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"project50-b7848","appId":"1:1080122382595:web:4742f5fe812553b0ed7136","storageBucket":"project50-b7848.appspot.com","apiKey":"AIzaSyBBcMpynKabzL-lwjHU-ftSMyafclrBZ0o","authDomain":"project50-b7848.firebaseapp.com","messagingSenderId":"1080122382595","measurementId":"G-JK4CLCNQKE"}))), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideRemoteConfig(() => getRemoteConfig()))]
};
