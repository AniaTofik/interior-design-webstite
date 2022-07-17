import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseFooterTextService } from './firebase-footer-text.service';
import { GETS_ONE_FOOTER_TEXT_DTO } from '../../../../application/ports/primary/dto/gets-one-footer-text.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseFooterTextService, { provide: GETS_ONE_FOOTER_TEXT_DTO, useExisting: FirebaseFooterTextService }],
  	exports: [] })
export class FirebaseFooterTextServiceModule {
}
