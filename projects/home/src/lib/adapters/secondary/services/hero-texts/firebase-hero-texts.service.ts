import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { GetsAllHeroTextDtoPort } from '../../../../application/ports/secondary/gets-all-hero-text.dto-port';
import { HeroTextDTO } from '../../../../application/ports/secondary/hero-text.dto';

@Injectable()
export class FirebaseHeroTextsService implements GetsAllHeroTextDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(criterion: Partial<HeroTextDTO>): Observable<HeroTextDTO[]> {
    return this._client.collection<HeroTextDTO>('hero-texts').valueChanges(({idField: 'id'}));
  }
}
