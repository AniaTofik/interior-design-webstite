import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GetsOneNavbarDtoPort } from '../../../../application/ports/primary/dto/gets-one-navbar.dto-port';
import { NavbarDTO } from '../../../../application/ports/primary/dto/navbar.dto';

@Injectable()
export class FirebaseNavbarService implements GetsOneNavbarDtoPort {
  constructor(private _client: AngularFirestore) {}

  getOne(id: string): Observable<NavbarDTO> {
    return this._client
      .doc<NavbarDTO>('navbar/' + id)
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
