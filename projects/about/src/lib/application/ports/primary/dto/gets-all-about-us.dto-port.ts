import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutUsDTO } from './about-us.dto';

export const GETS_ALL_ABOUT_US_DTO = new InjectionToken<GetsAllAboutUsDtoPort>('GETS_ALL_ABOUT_US_DTO');

export interface GetsAllAboutUsDtoPort {
  getAll(): Observable<AboutUsDTO[]>;
}
