import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroTextDTO } from '../../secondary/hero-text.dto';

export const GETS_ONE_HERO_TEXT_DTO = new InjectionToken<GetsOneHeroTextDtoPort>('GETS_ONE_HERO_TEXT_DTO');

export interface GetsOneHeroTextDtoPort {
  getOne(id: string): Observable<HeroTextDTO>;
}
