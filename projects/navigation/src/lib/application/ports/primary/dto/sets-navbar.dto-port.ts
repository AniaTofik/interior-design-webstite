import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { NavbarDTO } from './navbar.dto';

export const SETS_NAVBAR_DTO = new InjectionToken<SetsNavbarDtoPort>(
  'SETS_NAVBAR_DTO'
);

export interface SetsNavbarDtoPort {
  set(navbarDTO: Partial<NavbarDTO>): Observable<void>;
}
