import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { FooterTextDTO } from './footer-text.dto';

export const GETS_ONE_FOOTER_TEXT_DTO = new InjectionToken<GetsOneFooterTextDtoPort>('GETS_ONE_FOOTER_TEXT_DTO');

export interface GetsOneFooterTextDtoPort {
  getOne(id: string): Observable<FooterTextDTO>;
}
