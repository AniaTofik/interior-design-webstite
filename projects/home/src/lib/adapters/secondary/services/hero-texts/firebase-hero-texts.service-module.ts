import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseHeroTextsService } from './firebase-hero-texts.service';
import { GETS_ALL_HERO_TEXT_DTO } from '../../../../application/ports/secondary/gets-all-hero-text.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseHeroTextsService, { provide: GETS_ALL_HERO_TEXT_DTO, useExisting: FirebaseHeroTextsService }],
  	exports: [] })
export class FirebaseHeroTextsServiceModule {
}
