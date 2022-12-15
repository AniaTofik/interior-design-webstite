import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FirebaseHeroTextsServiceModule } from '@home';
import { AngularFireModule } from '@angular/fire/compat';
import { FirebaseAboutTextsServiceModule } from '@about';
import { FirebaseOffersServiceModule } from '@offer';
import {
  FirebaseFooterTextServiceModule,
  FirebaseNewsletterServiceModule,
} from '@footer';
import { FirebaseEmployeesServiceModule } from '@team';
import { FirebaseNavbarServiceModule } from '@navigation';
import { FirebaseGalleryServiceModule } from '@gallery';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    FirebaseHeroTextsServiceModule,
    FirebaseAboutTextsServiceModule,
    FirebaseOffersServiceModule,
    FirebaseNewsletterServiceModule,
    FirebaseEmployeesServiceModule,
    FirebaseNavbarServiceModule,
    FirebaseGalleryServiceModule,
    FirebaseFooterTextServiceModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
