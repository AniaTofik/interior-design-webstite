import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseAboutTextsService } from './firebase-about-texts.service';
import { GETS_ALL_ABOUT_US_DTO } from '../../../../application/ports/primary/dto/gets-all-about-us.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseAboutTextsService, { provide: GETS_ALL_ABOUT_US_DTO, useExisting: FirebaseAboutTextsService }],
  	exports: [] })
export class FirebaseAboutTextsServiceModule {
}
