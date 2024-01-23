import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, getApp, initializeApp  } from '@angular/fire/app';
import { provideHttpClient } from '@angular/common/http';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { EnvironmentProviders } from '@angular/core';


import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { setEnvironmentData } from 'worker_threads';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration() , importProvidersFrom(),  
  provideHttpClient(),


  
  ]

};


