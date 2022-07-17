import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { GetsAllGalleryDtoPort } from '../../../../application/ports/primary/dto/gets-all-gallery.dto-port';
import { GalleryDTO } from '../../../../application/ports/primary/dto/gallery.dto';

@Injectable()
export class FirebaseGalleryService implements GetsAllGalleryDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(): Observable<GalleryDTO[]> {
    return this._client.collection<GalleryDTO>('galleries').valueChanges(({idField: 'id'}));
  }
}
