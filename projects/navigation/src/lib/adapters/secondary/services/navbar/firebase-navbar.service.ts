import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from, of, throwError } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { GetsAllNavbarDtoPort } from '../../../../application/ports/primary/dto/gets-all-navbar.dto-port';
import { SetsNavbarDtoPort } from '../../../../application/ports/primary/dto/sets-navbar.dto-port';
import { GetsOneNavbarDtoPort } from '../../../../application/ports/primary/dto/gets-one-navbar.dto-port';
import { NavbarDTO } from '../../../../application/ports/primary/dto/navbar.dto';

@Injectable()
export class FirebaseNavbarService
  implements GetsAllNavbarDtoPort, SetsNavbarDtoPort, GetsOneNavbarDtoPort
{
  constructor(private _client: AngularFirestore) {}

  getAll(): Observable<NavbarDTO[]> {
    return this._client
      .collection<NavbarDTO>('navbars', (ref) => ref.orderBy('id', 'asc'))
      .valueChanges({ idField: 'id' });
  }

  set(navbarDTO: Partial<NavbarDTO>): Observable<void> {
    return from(
      this._client.doc('navbars/' + navbarDTO.id).update(navbarDTO)
    ).pipe(map(() => void 0));
  }

  getOne(id: string): Observable<NavbarDTO> {
    return this._client
      .doc<NavbarDTO>('navbar-logo/' + id)
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
