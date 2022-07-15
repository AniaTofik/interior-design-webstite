import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { GetsAllOfferDtoPort } from '../../../../application/ports/primary/dto/gets-all-offer.dto-port';
import { OfferDTO } from '../../../../application/ports/primary/dto/offer.dto';

@Injectable()
export class FirebaseOffersService implements GetsAllOfferDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(): Observable<OfferDTO[]> {
    return this._client.collection<OfferDTO>('offers').valueChanges(({idField: 'id'}));
  }
}
