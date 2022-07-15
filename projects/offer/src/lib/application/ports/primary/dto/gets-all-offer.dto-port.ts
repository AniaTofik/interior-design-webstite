import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { OfferDTO } from './offer.dto';

export const GETS_ALL_OFFER_DTO = new InjectionToken<GetsAllOfferDtoPort>('GETS_ALL_OFFER_DTO');

export interface GetsAllOfferDtoPort {
  getAll(): Observable<OfferDTO[]>;
}
