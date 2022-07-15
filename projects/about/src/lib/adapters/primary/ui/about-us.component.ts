import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutUsDTO } from '../../../application/ports/primary/dto/about-us.dto';
import { GETS_ALL_ABOUT_US_DTO, GetsAllAboutUsDtoPort } from '../../../application/ports/primary/dto/gets-all-about-us.dto-port';

@Component({ selector: 'lib-about-us', templateUrl: './about-us.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class AboutUsComponent {
  aboutUs$: Observable<AboutUsDTO[]> = this._getsAllAboutUsDto.getAll();

  constructor(@Inject(GETS_ALL_ABOUT_US_DTO) private _getsAllAboutUsDto: GetsAllAboutUsDtoPort) {
  }
}
