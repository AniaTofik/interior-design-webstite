import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseNavbarService } from './firebase-navbar.service';
import { GETS_ONE_NAVBAR_DTO } from '../../../../application/ports/primary/dto/gets-one-navbar.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseNavbarService,
    { provide: GETS_ONE_NAVBAR_DTO, useExisting: FirebaseNavbarService },
  ],
  exports: [],
})
export class FirebaseNavbarServiceModule {}
