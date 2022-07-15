import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { GetsAllAboutUsDtoPort } from '../../../../application/ports/primary/dto/gets-all-about-us.dto-port';
import { AboutUsDTO } from '../../../../application/ports/primary/dto/about-us.dto';

@Injectable()
export class FirebaseAboutTextsService implements GetsAllAboutUsDtoPort {
  constructor(private _client: AngularFirestore) {}

  getAll(): Observable<AboutUsDTO[]> {
    return this._client
      .collection<AboutUsDTO>('about-us')
      .valueChanges({ idField: 'id' });
  }
}
