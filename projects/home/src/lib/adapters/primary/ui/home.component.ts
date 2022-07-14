import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { HeroTextDTO } from '../../../application/ports/secondary/hero-text.dto';
import {
  GETS_ONE_HERO_TEXT_DTO,
  GetsOneHeroTextDtoPort,
} from '../../../application/ports/primary/dto/gets-one-hero-text.dto-port';

@Component({
  selector: 'lib-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  text$: Observable<HeroTextDTO> = this._getsOneHeroTextDto.getOne(
    'AXbvKnj5csEnVZu9l5jV'
  );

  constructor(
    @Inject(GETS_ONE_HERO_TEXT_DTO)
    private _getsOneHeroTextDto: GetsOneHeroTextDtoPort
  ) {}
}
