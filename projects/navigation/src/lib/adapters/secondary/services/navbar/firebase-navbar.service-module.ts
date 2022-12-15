import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseNavbarService } from './firebase-navbar.service';
import { GETS_ALL_NAVBAR_DTO } from '../../../../application/ports/primary/dto/gets-all-navbar.dto-port';
import { GETS_ONE_NAVBAR_DTO } from '../../../../application/ports/primary/dto/gets-one-navbar.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseNavbarService,
    { provide: GETS_ALL_NAVBAR_DTO, useExisting: FirebaseNavbarService },
    { provide: GETS_ONE_NAVBAR_DTO, useExisting: FirebaseNavbarService }
  ],
  exports: [],
})
export class FirebaseNavbarServiceModule {}
