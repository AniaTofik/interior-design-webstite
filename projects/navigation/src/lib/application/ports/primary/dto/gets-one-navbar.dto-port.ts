import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { NavbarDTO } from './navbar.dto';

export const GETS_ONE_NAVBAR_DTO = new InjectionToken<GetsOneNavbarDtoPort>('GETS_ONE_NAVBAR_DTO');

export interface GetsOneNavbarDtoPort {
  getOne(id: string): Observable<NavbarDTO>;
}
