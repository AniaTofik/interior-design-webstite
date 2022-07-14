import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroTextDTO } from './hero-text.dto';

export const GETS_ALL_HERO_TEXT_DTO = new InjectionToken<GetsAllHeroTextDtoPort>('GETS_ALL_HERO_TEXT_DTO');

export interface GetsAllHeroTextDtoPort {
  getAll(criterion?: Partial<HeroTextDTO>): Observable<HeroTextDTO[]>;
}
