import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseNewsletterService } from './firebase-newsletter.service';
import { ADDS_NEWSLETTER_DTO } from '../../../../application/ports/primary/dto/adds-newsletter.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseNewsletterService,
    { provide: ADDS_NEWSLETTER_DTO, useExisting: FirebaseNewsletterService },
  ],
  exports: [],
})
export class FirebaseNewsletterServiceModule {}
