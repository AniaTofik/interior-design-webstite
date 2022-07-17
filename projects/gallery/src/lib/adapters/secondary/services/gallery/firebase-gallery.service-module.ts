import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseGalleryService } from './firebase-gallery.service';
import { GETS_ALL_GALLERY_DTO } from '../../../../application/ports/primary/dto/gets-all-gallery.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseGalleryService, { provide: GETS_ALL_GALLERY_DTO, useExisting: FirebaseGalleryService }],
  	exports: [] })
export class FirebaseGalleryServiceModule {
}
