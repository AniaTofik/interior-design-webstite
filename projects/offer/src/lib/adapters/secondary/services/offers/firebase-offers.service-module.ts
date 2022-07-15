import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseOffersService } from './firebase-offers.service';
import { GETS_ALL_OFFER_DTO } from '../../../../application/ports/primary/dto/gets-all-offer.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseOffersService, { provide: GETS_ALL_OFFER_DTO, useExisting: FirebaseOffersService }],
  	exports: [] })
export class FirebaseOffersServiceModule {
}
