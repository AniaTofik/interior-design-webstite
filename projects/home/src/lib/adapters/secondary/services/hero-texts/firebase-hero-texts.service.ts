import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GetsOneHeroTextDtoPort } from '../../../../application/ports/primary/dto/gets-one-hero-text.dto-port';
import { HeroTextDTO } from '../../../../application/ports/secondary/hero-text.dto';

@Injectable()
export class FirebaseHeroTextsService implements GetsOneHeroTextDtoPort {
  constructor(private _client: AngularFirestore) {}

  getOne(id: string): Observable<HeroTextDTO> {
    return this._client
      .doc<HeroTextDTO>('hero-texts/' + id)
      .valueChanges({ idField: 'id' })
      .pipe(
        switchMap((item) =>
          item
            ? of(item)
            : throwError(new Error('Item does not exist in firebase'))
        )
      );
  }
}
