import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddsNewsletterDtoPort } from '../../../../application/ports/primary/dto/adds-newsletter.dto-port';
import { NewsletterDTO } from '../../../../application/ports/primary/dto/newsletter.dto';

@Injectable()
export class FirebaseNewsletterService implements AddsNewsletterDtoPort {
  constructor(private _client: AngularFirestore) {}

  add(newsletterDTO: Partial<NewsletterDTO>): Observable<void> {
    return from(this._client.collection('newsletter').add(newsletterDTO)).pipe(
      map(() => void 0)
    );
  }
}
