import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GetsOneFooterTextDtoPort } from '../../../../application/ports/primary/dto/gets-one-footer-text.dto-port';
import { FooterTextDTO } from '../../../../application/ports/primary/dto/footer-text.dto';

@Injectable()
export class FirebaseFooterTextService implements GetsOneFooterTextDtoPort {
  constructor(private _client: AngularFirestore) {}

  getOne(id: string): Observable<FooterTextDTO> {
    return this._client
      .doc<FooterTextDTO>('footer-text/' + id)
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
