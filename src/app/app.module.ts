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
import { FirebaseNewsletterServiceModule } from '@footer';

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
