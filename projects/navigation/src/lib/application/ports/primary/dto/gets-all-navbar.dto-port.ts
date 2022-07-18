import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { NavbarDTO } from './navbar.dto';

export const GETS_ALL_NAVBAR_DTO = new InjectionToken<GetsAllNavbarDtoPort>('GETS_ALL_NAVBAR_DTO');

export interface GetsAllNavbarDtoPort {
  getAll(): Observable<NavbarDTO[]>;
}
