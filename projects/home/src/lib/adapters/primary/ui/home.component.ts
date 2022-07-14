import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { HeroTextDTO } from '../../../application/ports/secondary/hero-text.dto';
import {
  GETS_ALL_HERO_TEXT_DTO,
  GetsAllHeroTextDtoPort,
} from '../../../application/ports/secondary/gets-all-hero-text.dto-port';

@Component({
  selector: 'lib-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  texts$: Observable<HeroTextDTO[]> = this._getsAllHeroTextDto.getAll();

  constructor(
    @Inject(GETS_ALL_HERO_TEXT_DTO)
    private _getsAllHeroTextDto: GetsAllHeroTextDtoPort
  ) {}
}
