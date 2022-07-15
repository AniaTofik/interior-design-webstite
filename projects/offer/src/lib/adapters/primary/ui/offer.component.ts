import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { OfferDTO } from '../../../application/ports/primary/dto/offer.dto';
import { GETS_ALL_OFFER_DTO, GetsAllOfferDtoPort } from '../../../application/ports/primary/dto/gets-all-offer.dto-port';

@Component({ selector: 'lib-offer', templateUrl: './offer.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class OfferComponent {
  offers$: Observable<OfferDTO[]> = this._getsAllOfferDto.getAll();

  constructor(@Inject(GETS_ALL_OFFER_DTO) private _getsAllOfferDto: GetsAllOfferDtoPort) {
  }
}
